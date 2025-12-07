
import React, { useState, useEffect, useRef } from 'react';
import { ViewState } from '../types';
import * as Data from '../data';
import { supabase } from '../services/supabaseClient';

interface SearchResult {
  category: string;
  label: string;
  description: string;
  view: ViewState;
}

interface Props {
  setView: (view: ViewState) => void;
}

const GlobalSearch: React.FC<Props> = ({ setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Cache for Supabase data
  const [doctorsCache, setDoctorsCache] = useState<any[]>([]);

  // Preload doctors on mount
  useEffect(() => {
    const fetchDoctors = async () => {
        const { data } = await supabase.from('doctors').select('*');
        if (data) setDoctorsCache(data);
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    if (isOpen) {
        setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    // Nettoyage et découpage des mots clés (ex: "gard orth" -> ["gard", "orth"])
    const keywords = searchTerm.toLowerCase().split(/\s+/).filter(k => k.length > 0);

    if (keywords.length === 0) {
      setResults([]);
      return;
    }

    const newResults: SearchResult[] = [];

    // Fonction utilitaire pour vérifier si TOUS les mots clés sont dans le texte
    const match = (textToSearch: string) => {
        const lowerText = textToSearch.toLowerCase();
        return keywords.every(kw => lowerText.includes(kw));
    };

    // Fonction pour ajouter un résultat
    const add = (category: string, label: string, description: string, view: ViewState) => {
        newResults.push({ category, label, description, view });
    };

    // 0. ANNUAIRE MÉDICAL (Supabase)
    doctorsCache.forEach(doc => {
        const searchable = `${doc.nom} ${doc.prenom} ${doc.specialite} ${doc.lieu} ${doc.dect} medecin`;
        if (match(searchable)) {
            add('Ann. Médical', `${doc.nom} ${doc.prenom}`, `${doc.specialite} - Poste: ${doc.dect || 'N/A'}`, ViewState.ANNUAIRE);
        }
    });

    // 1. GARDES (Recherche dans spécialité + numéros + le mot "garde")
    Data.guardsData.forEach(g => {
        const searchable = `${g.specialite} ${g.garde} ${g.avis} garde astreinte`;
        if (match(searchable)) {
            add('Gardes', g.specialite, `Garde: ${g.garde || 'Aucun'} / Avis: ${g.avis || 'Aucun'}`, ViewState.GARDES);
        }
    });

    // 2. CONSULTATIONS (Recherche dans nom, spécialité, fonction, numéro)
    Data.consultationTeams.forEach(t => {
        const searchable = `${t.equipe} ${t.specialites} ${t.fonctions} ${t.numeros} consultation`;
        if (match(searchable)) {
            add('Équipe Consult.', t.equipe, `${t.fonctions} - ${t.specialites} - Tél: ${t.numeros}`, ViewState.CONSULTATIONS);
        }
    });

    // 3a. CONTACTS DRH PRINCIPAUX (Recherche spécifique)
    Data.keyDrhContacts.forEach(c => {
        const searchable = `${c.name} ${c.role} ${c.phone} drh responsable`;
        if (match(searchable)) {
            add('DRH (Contacts Clés)', c.name, `${c.role} - Tél: ${c.phone}`, ViewState.DRH);
        }
    });

    // 3b. ANNUAIRE DRH DÉTAILLÉ
    Data.drhData.forEach(sec => {
        sec.contacts.forEach(c => {
            const searchable = `${c.name} ${c.role} ${c.phone || ''} ${sec.title} drh rh`;
            if (match(searchable)) {
                add('DRH', c.name, `${c.role} - Tél: ${c.phone || 'N/A'}`, ViewState.DRH);
            }
        });
    });

    // 4. ENCADREMENT (Recherche dans nom, pôle, périmètre, téléphone)
    Data.encadrementData.forEach(e => {
        const searchable = `${e.nom} ${e.pole} ${e.perimetre} ${e.tel} direction encadrement`;
        if (match(searchable)) {
            add('Encadrement', e.nom, `${e.perimetre} - Tél: ${e.tel}`, ViewState.ENCADREMENT);
        }
    });

    // 5. CHEFS SERVICE (Recherche dans nom, service, pôle)
    Data.chefsDeService.forEach(c => {
        const searchable = `${c.nom} ${c.service} ${c.pole} chef service`;
        if (match(searchable)) {
             add('Chefs de Svc', c.nom, `${c.service} (${c.pole})`, ViewState.CHEFS);
        }
    });

    // 6. CADRES SANTE (Recherche dans nom, service, téléphone)
    Data.cadresDeSante.forEach(c => {
        const searchable = `${c.nom} ${c.service} ${c.tel || ''} cadre sante`;
        if (match(searchable)) {
             add('Cadres Santé', c.nom, `${c.service} - Tél: ${c.tel || 'N/A'}`, ViewState.CADRES);
        }
    });

    // 7. SERVICES / LOCALISATION (Recherche dans service, batiment, tel, code)
    Data.servicesData.forEach(s => {
        const searchable = `${s.service} ${s.batiment} ${s.tel} ${s.code} localisation`;
        if (match(searchable)) {
             add('Services', s.service, `Tél: ${s.tel} (Bât: ${s.batiment} / Porte: ${s.porte})`, ViewState.SERVICES);
        }
    });

    // 8. NUMEROS UTILES
    Data.usefulNumbers.forEach(cat => {
        cat.items.forEach(i => {
            const searchable = `${i.label} ${i.contact || ''} ${i.num} ${cat.title} utile`;
            if (match(searchable)) {
                add('N° Utiles', i.label, `Tél: ${i.num} (${i.contact || cat.title})`, ViewState.UTILES);
            }
        });
    });
    
    // 9. LISTE DES EXAMENS (NOUVEAU)
    Data.examsData.forEach(e => {
        const searchable = `${e.nom} ${e.categorie} ${e.lieu} ${e.details} examen`;
        if (match(searchable)) {
             add('Examens', e.nom, `${e.lieu} (Tél: ${e.contact})`, ViewState.EXAMENS);
        }
    });

    // 10. PLAN INTERACTIF
    Data.mapPoints.forEach(p => {
        const content = p.infoHtml.replace(/<[^>]*>?/gm, ' ').toLowerCase(); // Enlève le HTML pour la recherche
        const searchable = `${p.label} ${content} plan carte`;
        if (match(searchable)) {
             add('Plan Interactif', p.label, 'Point sur la carte (Cliquez pour voir)', ViewState.PLAN);
        }
    });

    setResults(newResults);

  }, [searchTerm, doctorsCache]);

  const handleSelect = (view: ViewState) => {
      setView(view);
      setIsOpen(false);
      setSearchTerm('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-hpsj-blue to-hpsj-cyan rounded-full shadow-[0_0_20px_rgba(0,229,255,0.6)] flex items-center justify-center text-slate-900 z-[100] hover:scale-110 transition-transform group border-2 border-white/20"
        title="Recherche Globale"
      >
        <i className="fa-solid fa-magnifying-glass text-3xl text-white group-hover:rotate-12 transition-transform drop-shadow-md"></i>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[101] flex items-start justify-center pt-20 p-4 animate-fade-in" onClick={() => setIsOpen(false)}>
            <div className="bg-slate-900 border border-hpsj-cyan/50 w-full max-w-2xl rounded-xl shadow-2xl flex flex-col max-h-[80vh] animate-slide-up" onClick={e => e.stopPropagation()}>
                
                {/* Header */}
                <div className="p-4 border-b border-slate-700 flex gap-4 items-center bg-slate-800 rounded-t-xl">
                    <i className="fa-solid fa-search text-hpsj-cyan text-xl"></i>
                    <input 
                        ref={inputRef}
                        type="text" 
                        placeholder="Rechercher partout (ex: 'Alves', 'IRM', '7811')..." 
                        className="flex-grow bg-transparent border-none outline-none text-white text-lg placeholder-slate-500 font-medium"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                        <i className="fa-solid fa-xmark text-2xl"></i>
                    </button>
                </div>
                
                {/* Results List */}
                <div className="overflow-y-auto p-2 custom-scrollbar flex-grow bg-[#10121a]">
                    {results.length === 0 ? (
                        <div className="text-center p-12 text-slate-500 flex flex-col items-center">
                            <i className="fa-solid fa-magnifying-glass text-4xl mb-4 opacity-20"></i>
                            <p>{searchTerm.length > 0 ? "Aucun résultat trouvé." : "Tapez des mots clés..."}</p>
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {results.map((r, idx) => (
                                <div 
                                    key={idx}
                                    onClick={() => handleSelect(r.view)}
                                    className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer group transition-all border border-transparent hover:border-slate-700"
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs font-bold uppercase tracking-wider bg-slate-800 text-hpsj-cyan px-2 py-0.5 rounded border border-slate-700 group-hover:bg-slate-700 group-hover:border-hpsj-cyan/50 transition-colors">
                                            {r.category}
                                        </span>
                                        <i className="fa-solid fa-chevron-right text-gray-700 group-hover:text-hpsj-blue transition-colors text-xs"></i>
                                    </div>
                                    <div className="font-bold text-white text-lg">{r.label}</div>
                                    <div className="text-sm text-gray-300 font-mono mt-1">{r.description}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Footer */}
                <div className="p-2 bg-slate-800 border-t border-slate-700 rounded-b-xl text-center text-xs text-gray-500">
                    {results.length} résultat(s) trouvé(s)
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default GlobalSearch;
