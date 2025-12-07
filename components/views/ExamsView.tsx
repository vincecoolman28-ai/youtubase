
import React, { useState } from 'react';
import { examsData } from '../../data';
import { ExamEntry } from '../../types';

const ExamsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extraire les catégories uniques
  const categories = Array.from(new Set(examsData.map(e => e.categorie))).sort();

  const filteredExams = examsData.filter(exam => {
    const matchesSearch = exam.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exam.lieu.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? exam.categorie === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Grouper par catégorie pour l'affichage
  const groupedExams = filteredExams.reduce((acc, exam) => {
    if (!acc[exam.categorie]) {
      acc[exam.categorie] = [];
    }
    acc[exam.categorie].push(exam);
    return acc;
  }, {} as Record<string, ExamEntry[]>);

  return (
    <div className="animate-fade-in max-w-6xl mx-auto pb-10">
      <h2 className="text-3xl font-bold text-center text-white mb-2 flex items-center justify-center gap-3 drop-shadow-md">
        <i className="fa-solid fa-vial-circle-check text-hpsj-cyan"></i> 
        Liste des Examens
      </h2>
      <p className="text-center text-gray-400 mb-8 italic">Où envoyer le patient ? Trouvez rapidement le lieu de chaque examen.</p>

      {/* Search & Filters */}
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-600 shadow-xl mb-8">
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
                <i className="fa-solid fa-search absolute left-4 top-3.5 text-gray-400"></i>
                <input 
                    type="text" 
                    placeholder="Rechercher un examen (IRM, ECG, Fibro...)" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-hpsj-cyan transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 scrollbar-hide">
                <button 
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all border ${!selectedCategory ? 'bg-hpsj-blue text-white border-blue-500' : 'bg-slate-700 text-gray-300 border-slate-600 hover:bg-slate-600'}`}
                >
                    Tous
                </button>
                {categories.map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setSelectedCategory(cat === selectedCategory ? null : cat)}
                        className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all border ${selectedCategory === cat ? 'bg-hpsj-cyan text-slate-900 border-cyan-500' : 'bg-slate-700 text-gray-300 border-slate-600 hover:bg-slate-600'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="space-y-8">
        {Object.keys(groupedExams).length === 0 ? (
            <div className="text-center py-10 text-gray-500">
                <i className="fa-solid fa-folder-open text-5xl mb-4 opacity-50"></i>
                <p className="text-xl">Aucun examen trouvé pour votre recherche.</p>
            </div>
        ) : (
            Object.keys(groupedExams).sort().map(category => (
                <div key={category} className="animate-slide-up">
                    <h3 className="text-xl font-bold text-hpsj-cyan mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
                        <i className="fa-solid fa-layer-group text-sm"></i> {category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {groupedExams[category].map((exam, idx) => (
                            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-hpsj-blue hover:shadow-lg hover:-translate-y-1 transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-white text-lg group-hover:text-hpsj-blue transition-colors">{exam.nom}</h4>
                                    <span className="bg-slate-900 text-xs font-mono px-2 py-1 rounded text-gray-400 border border-slate-700">{exam.contact}</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <i className="fa-solid fa-location-dot text-red-500 mt-1"></i>
                                        <span className="text-gray-200 font-semibold">{exam.lieu}</span>
                                    </div>
                                    <div className="flex items-start gap-2 pl-6">
                                        <span className="text-gray-400 text-xs">{exam.batiment}</span>
                                    </div>
                                    {exam.details && (
                                        <div className="mt-3 pt-3 border-t border-slate-700/50 flex items-start gap-2">
                                            <i className="fa-solid fa-circle-info text-hpsj-cyan mt-0.5"></i>
                                            <span className="text-gray-400 text-xs italic">{exam.details}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
};

export default ExamsView;
