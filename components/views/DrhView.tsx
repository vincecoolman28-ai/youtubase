
import React, { useState } from 'react';
import { drhData, keyDrhContacts } from '../../data';

const DrhView: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Fonction pour gérer le clic sur la légende
  const handleLegendClick = (code: string) => {
    // Si on clique sur le code déjà actif, on annule la recherche, sinon on filtre par ce code
    if (search === code) {
      setSearch('');
    } else {
      setSearch(code);
    }
  };

  const filteredSections = drhData.map(section => ({
    ...section,
    contacts: section.contacts.filter(c => 
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase()) ||
      section.title.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(section => section.contacts.length > 0);

  // Définition de la légende avec couleurs
  const legendItems = [
    { code: 'SPE MED', label: 'Spécialités Médicales', color: 'bg-blue-600' },
    { code: 'SPE CHIR', label: 'Spécialités Chirurgicales', color: 'bg-green-600' },
    { code: 'MAGUP', label: 'Maternité - Gynéco - Uro - Plastique', color: 'bg-pink-600' },
    { code: 'CNVM', label: 'Cardio - Neuro - Vasc. - Métabolique', color: 'bg-red-600' },
    { code: 'D2P', label: 'Direction des Parcours Patients', color: 'bg-purple-600' },
    { code: 'MT', label: 'Médico-Technique', color: 'bg-indigo-600' },
    { code: 'QP', label: 'Qualité - Pharmacie', color: 'bg-yellow-600' },
    { code: 'FCT SUPP', label: 'Fonctions supports', color: 'bg-gray-500' },
    { code: 'CMT', label: 'Centre de santé Marie Thérèse', color: 'bg-cyan-600' },
    { code: 'IFSI', label: 'Institut de Formation en Soins Infirmiers', color: 'bg-teal-600' },
  ];

  return (
    <div className="max-w-5xl mx-auto animate-fade-in pb-10">
      <h2 className="text-2xl font-bold text-red-500 mb-6 text-center drop-shadow-md">
        <i className="fa-solid fa-folder-user mr-2"></i> Annuaire DRH
      </h2>

      {/* Orientation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800 border-l-4 border-hpsj-cyan p-4 rounded shadow-lg">
          <h4 className="text-hpsj-cyan font-bold mb-2"><i className="fa-solid fa-envelope mr-2"></i>Stage / Alternance</h4>
          <p className="text-sm text-gray-300 mb-2">Envoyer candidature par email.</p>
          <a href="mailto:stages@ghpsj.fr" className="text-hpsj-blue hover:text-white text-sm font-mono block bg-slate-900 p-2 rounded text-center">stages@ghpsj.fr</a>
        </div>
        <div className="bg-slate-800 border-l-4 border-hpsj-cyan p-4 rounded shadow-lg">
          <h4 className="text-hpsj-cyan font-bold mb-2"><i className="fa-solid fa-briefcase mr-2"></i>Recrutement</h4>
          <p className="text-sm text-gray-300 mb-2">Candidature spontanée sur le site web.</p>
          <div className="text-xs text-gray-500 mt-2 border-t border-slate-700 pt-2">Délai réponse: 2 semaines</div>
        </div>
        <div className="bg-slate-800 border-l-4 border-hpsj-cyan p-4 rounded shadow-lg">
           <h4 className="text-hpsj-cyan font-bold mb-2"><i className="fa-solid fa-question-circle mr-2"></i>Infos RH (Interne)</h4>
           <p className="text-sm text-gray-300 mb-2">Paie, transports, congés...</p>
           <a href="mailto:info-rh@ghpsj.fr" className="text-hpsj-blue hover:text-white text-sm font-mono block bg-slate-900 p-2 rounded text-center">info-rh@ghpsj.fr</a>
        </div>
      </div>

      {/* Key Contacts Box (From Data) */}
      <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-lg mb-8 shadow-md">
        <h3 className="text-red-400 font-bold mb-4 uppercase text-sm border-b border-red-500/30 pb-2 flex items-center">
            <i className="fa-solid fa-address-card mr-2"></i> Contacts Principaux DRH
        </h3>
        <ul className="space-y-3 text-sm text-gray-300">
            {keyDrhContacts.map((contact, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-red-500/10 pb-2 last:border-0">
                    <span><strong className="text-white text-base">{contact.name}</strong>, {contact.role}</span>
                    <span className="font-mono text-hpsj-cyan font-bold mt-1 sm:mt-0">{contact.phone}</span>
                </li>
            ))}
        </ul>
      </div>

      {/* Legend Section (Clickable) */}
      <div className="bg-slate-800 border border-slate-700 p-5 rounded-lg mb-8 shadow-inner">
        <h3 className="text-gray-400 font-bold mb-4 uppercase text-xs tracking-wider flex items-center justify-between">
            <span><i className="fa-solid fa-tags mr-2"></i> Légende : Filtres Rapides</span>
            {search && <span className="text-red-400 cursor-pointer hover:underline" onClick={() => setSearch('')}>(Effacer le filtre)</span>}
        </h3>
        <p className="text-xs text-gray-500 mb-3 italic">Cliquez sur un code pour filtrer la liste des gestionnaires ci-dessous.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {legendItems.map((item, idx) => {
                const isActive = search === item.code;
                return (
                    <button 
                        key={idx} 
                        onClick={() => handleLegendClick(item.code)}
                        className={`
                            flex items-center gap-3 p-2 rounded border text-left transition-all duration-200 group
                            ${isActive 
                                ? 'bg-slate-700 border-white ring-1 ring-white shadow-lg transform scale-[1.02]' 
                                : 'bg-slate-900 border-slate-700/50 hover:bg-slate-700 hover:border-slate-500'}
                        `}
                    >
                        <span className={`${item.color} text-white text-xs font-bold px-2 py-1 rounded min-w-[70px] text-center whitespace-nowrap shadow-sm group-hover:opacity-90`}>
                            {item.code}
                        </span>
                        <span className={`text-xs leading-tight ${isActive ? 'text-white font-bold' : 'text-gray-300 group-hover:text-white'}`}>
                            {item.label}
                        </span>
                        {isActive && <i className="fa-solid fa-check text-green-400 ml-auto"></i>}
                    </button>
                );
            })}
        </div>
      </div>

      {/* Search & Accordion */}
      <input 
        type="text" 
        placeholder="Rechercher un contact, un service ou cliquez sur la légende..."
        className="w-full bg-slate-800 border border-slate-600 rounded-md px-4 py-3 text-white focus:outline-none focus:border-red-500 mb-6 shadow-inner"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="space-y-3">
        {filteredSections.map((section, idx) => (
          <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-red-500/50">
            <button 
              className={`w-full px-6 py-4 flex justify-between items-center text-left font-bold transition-colors ${activeIndex === idx ? 'bg-red-600 text-white' : 'text-gray-200 hover:bg-slate-700'}`}
              onClick={() => toggleAccordion(idx)}
            >
              <span className="uppercase tracking-wide text-sm">{section.title}</span>
              <i className={`fa-solid fa-chevron-down transition-transform ${activeIndex === idx ? 'rotate-180' : ''}`}></i>
            </button>
            
            {(activeIndex === idx || search.length > 0) && (
              <div className="bg-slate-900/50 p-4 space-y-2 border-t border-slate-700">
                {section.contacts.map((contact, cIdx) => (
                  <div key={cIdx} className={`flex flex-col sm:flex-row justify-between p-3 border-b border-slate-700/50 last:border-0 hover:bg-slate-800/50 rounded transition-colors ${contact.highlight ? 'bg-yellow-900/10 border-l-2 border-l-yellow-500' : ''}`}>
                    <div className="text-sm">
                      <strong className={`${contact.highlight ? 'text-yellow-400' : 'text-white'} block sm:inline`}>{contact.name}</strong>
                      <span className="hidden sm:inline text-gray-500 mx-2">-</span>
                      <span className="text-gray-400 italic block sm:inline">{contact.role}</span>
                    </div>
                    <div className="text-sm font-mono text-hpsj-blue mt-1 sm:mt-0 font-semibold">{contact.phone}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {filteredSections.length === 0 && <p className="text-center text-gray-500 py-4">Aucun résultat trouvé pour "{search}".</p>}
      </div>
    </div>
  );
};

export default DrhView;
