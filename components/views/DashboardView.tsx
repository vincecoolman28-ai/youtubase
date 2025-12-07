
import React, { useState, useEffect } from 'react';
import { ViewState } from '../../types';
import { guardsData, usefulNumbers } from '../../data';

interface DashboardViewProps {
  setView: (view: ViewState) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ setView }) => {
  const [time, setTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState<'briefing' | 'apps' | 'urgences'>('briefing');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const vitalNumbers = usefulNumbers.find(cat => cat.title === "Urgences")?.items || [];
  
  // Fonction pour déclencher la recherche globale
  const triggerSearch = () => {
    const searchBtn = document.querySelector<HTMLButtonElement>('button[title="Recherche Globale"]');
    if (searchBtn) searchBtn.click();
  };

  return (
    <div className="animate-fade-in pb-12 max-w-7xl mx-auto">
      
      {/* 1. TOP HEADER: Welcome & Time */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 px-2">
        <div>
            <h2 className="text-3xl font-bold text-white mb-1">
                Bonjour, <span className="text-hpsj-cyan">Vincent</span>.
            </h2>
            <p className="text-gray-400 text-sm">
                {time.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
        </div>
        <div className="text-right hidden md:block">
            <p className="text-4xl font-black text-slate-700 dark:text-slate-600/50 tracking-tighter">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
        </div>
      </div>

      {/* 2. TABS NAVIGATION (The "Pages") */}
      <div className="flex gap-4 border-b border-slate-700 mb-8 overflow-x-auto">
        <button 
            onClick={() => setActiveTab('briefing')}
            className={`pb-3 px-4 font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap
                ${activeTab === 'briefing' ? 'text-hpsj-cyan border-b-4 border-hpsj-cyan' : 'text-gray-500 hover:text-gray-300 border-b-4 border-transparent'}
            `}
        >
            <i className="fa-solid fa-mug-hot"></i> Briefing Jour
        </button>
        <button 
            onClick={() => setActiveTab('apps')}
            className={`pb-3 px-4 font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap
                ${activeTab === 'apps' ? 'text-hpsj-blue border-b-4 border-hpsj-blue' : 'text-gray-500 hover:text-gray-300 border-b-4 border-transparent'}
            `}
        >
            <i className="fa-solid fa-grid-2"></i> Applications
        </button>
        <button 
            onClick={() => setActiveTab('urgences')}
            className={`pb-3 px-4 font-bold text-sm uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap
                ${activeTab === 'urgences' ? 'text-red-500 border-b-4 border-red-500' : 'text-gray-500 hover:text-gray-300 border-b-4 border-transparent'}
            `}
        >
            <i className="fa-solid fa-truck-medical"></i> Urgences & Gardes
        </button>
      </div>

      {/* 3. PAGES CONTENT */}
      
      {/* --- PAGE 1: BRIEFING --- */}
      {activeTab === 'briefing' && (
        <div className="animate-slide-up space-y-6">
            
            {/* Search Hero */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl text-center">
                <h3 className="text-2xl text-white font-bold mb-6">Que cherchez-vous aujourd'hui ?</h3>
                <button 
                    onClick={triggerSearch}
                    className="w-full max-w-xl mx-auto bg-slate-700 hover:bg-slate-600 text-left px-6 py-4 rounded-full flex items-center gap-4 text-gray-300 transition-all border border-slate-500 group"
                >
                    <i className="fa-solid fa-magnifying-glass text-hpsj-cyan group-hover:scale-110 transition-transform"></i>
                    <span>Médecin, Service, Bip, Protocole...</span>
                    <span className="ml-auto bg-slate-800 px-2 py-1 rounded text-xs border border-slate-600">CTRL+K</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Info Flash */}
                <div className="bg-slate-800 border-l-4 border-green-500 rounded-r-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                        <h4 className="text-green-400 font-bold uppercase tracking-wider flex items-center gap-2">
                            <i className="fa-solid fa-bullhorn"></i> Info Établissement
                        </h4>
                        <span className="text-xs text-gray-500 bg-slate-900 px-2 py-1 rounded">26 Nov.</span>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">Ouverture Centre Losserand</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        Les consultations d'ORL, de Chirurgie Maxillo-Faciale, de Gynécologie et le Centre du Sein sont désormais installés à l'Entrée 5 (193 rue Raymond Losserand).
                    </p>
                    <button onClick={() => setView(ViewState.LOSSERAND)} className="text-green-400 text-sm font-bold hover:underline">
                        Voir le plan d'accès <i className="fa-solid fa-arrow-right ml-1"></i>
                    </button>
                </div>

                {/* Quick Shortcuts List */}
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="text-slate-500 dark:text-gray-400 font-bold uppercase tracking-wider mb-4 text-sm">
                        Accès Fréquents
                    </h4>
                    <div className="space-y-3">
                        <button onClick={() => setView(ViewState.PLANNING)} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-600 group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-green-100 text-green-600 flex items-center justify-center"><i className="fa-solid fa-calendar-days"></i></div>
                                <span className="font-bold text-slate-700 dark:text-gray-200">Planning Médecins</span>
                            </div>
                            <i className="fa-solid fa-chevron-right text-gray-400 group-hover:text-hpsj-blue"></i>
                        </button>
                        <button onClick={() => setView(ViewState.ANNUAIRE)} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-600 group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><i className="fa-solid fa-address-book"></i></div>
                                <span className="font-bold text-slate-700 dark:text-gray-200">Annuaire Médical</span>
                            </div>
                            <i className="fa-solid fa-chevron-right text-gray-400 group-hover:text-hpsj-blue"></i>
                        </button>
                        <button onClick={() => setView(ViewState.EXAMENS)} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-600 group">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center"><i className="fa-solid fa-vial-circle-check"></i></div>
                                <span className="font-bold text-slate-700 dark:text-gray-200">Lieux d'Examens</span>
                            </div>
                            <i className="fa-solid fa-chevron-right text-gray-400 group-hover:text-hpsj-blue"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* --- PAGE 2: APPLICATIONS --- */}
      {activeTab === 'apps' && (
        <div className="animate-slide-up">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                    { label: 'Annuaire', icon: 'fa-address-book', view: ViewState.ANNUAIRE, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                    { label: 'Planning', icon: 'fa-calendar-days', view: ViewState.PLANNING, color: 'text-green-500', bg: 'bg-green-500/10' },
                    { label: 'Examens', icon: 'fa-vial-circle-check', view: ViewState.EXAMENS, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                    { label: 'Plans 2D', icon: 'fa-map-location-dot', view: ViewState.PLAN, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                    { label: 'Losserand', icon: 'fa-building', view: ViewState.LOSSERAND, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
                    { label: 'DRH', icon: 'fa-users', view: ViewState.DRH, color: 'text-pink-500', bg: 'bg-pink-500/10' },
                    { label: 'Secrétariats', icon: 'fa-headset', view: ViewState.SECRETARIATS, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
                    { label: 'Qui fait quoi', icon: 'fa-circle-question', view: ViewState.QUI_FAIT_QUOI, color: 'text-teal-500', bg: 'bg-teal-500/10' },
                    { label: 'N° Utiles', icon: 'fa-star-of-life', view: ViewState.UTILES, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                    { label: 'Consultations', icon: 'fa-clipboard-user', view: ViewState.CONSULTATIONS, color: 'text-lime-500', bg: 'bg-lime-500/10' },
                ].map((app, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setView(app.view)}
                        className="flex flex-col items-center justify-center p-6 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-slate-500 hover:-translate-y-1 transition-all shadow-md group aspect-square"
                    >
                        <div className={`w-14 h-14 rounded-2xl ${app.bg} ${app.color} flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform`}>
                            <i className={`fa-solid ${app.icon}`}></i>
                        </div>
                        <span className="font-bold text-gray-200 text-sm group-hover:text-white">{app.label}</span>
                    </button>
                ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700">
                <h4 className="text-gray-500 font-bold uppercase text-sm mb-4">Liens Externes</h4>
                <div className="flex gap-4">
                    <a href="https://www.doctolib.fr" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-colors">
                        <i className="fa-solid fa-globe"></i> Doctolib
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded border border-slate-700 hover:border-red-500 hover:text-red-400 transition-colors">
                        <i className="fa-solid fa-laptop-medical"></i> Portail RH (Cegid)
                    </a>
                </div>
            </div>
        </div>
      )}

      {/* --- PAGE 3: URGENCES & GARDES --- */}
      {activeTab === 'urgences' && (
        <div className="animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Vital Numbers */}
                <div className="md:col-span-1 bg-red-900/20 border border-red-500/50 rounded-xl p-5">
                    <h3 className="text-red-500 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                        <i className="fa-solid fa-phone-volume animate-pulse"></i> Urgences Vitales
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {vitalNumbers.map((item, idx) => (
                            <div key={idx} className="bg-red-600 text-white p-3 rounded text-center shadow hover:bg-red-700 transition-colors">
                                <div className="text-[10px] uppercase font-bold opacity-80">{item.label}</div>
                                <div className="text-xl font-black">{item.num}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Guards Highlights */}
                <div className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-5">
                    <h3 className="text-hpsj-blue font-bold uppercase tracking-wider mb-4">
                        <i className="fa-solid fa-user-shield"></i> Gardes Clés
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {guardsData.filter(g => ['Anesthésie', 'Cardiologie', 'Réanimation', 'Chirurgie Digestive'].includes(g.specialite)).map((g, idx) => (
                            <div key={idx} className="flex justify-between items-center bg-slate-900 p-3 rounded border border-slate-700">
                                <span className="font-bold text-gray-300">{g.specialite}</span>
                                <span className="font-mono text-yellow-400 font-bold text-lg">{g.garde}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 text-center">
                        <button onClick={() => setView(ViewState.GARDES)} className="text-hpsj-cyan text-sm hover:underline">
                            Voir toute la liste des gardes <i className="fa-solid fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Procedures / Protocols (Mockup) */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <i className="fa-solid fa-file-medical text-gray-400"></i> Procédures d'Urgence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-900 rounded border border-slate-700 hover:border-white transition-colors cursor-pointer">
                        <h4 className="font-bold text-red-400 mb-1">Code Rouge (Feu)</h4>
                        <p className="text-xs text-gray-500">Procédure d'évacuation et alerte.</p>
                    </div>
                    <div className="p-4 bg-slate-900 rounded border border-slate-700 hover:border-white transition-colors cursor-pointer">
                        <h4 className="font-bold text-blue-400 mb-1">Arrêt Cardiaque</h4>
                        <p className="text-xs text-gray-500">Chariot d'urgence et bip réa.</p>
                    </div>
                    <div className="p-4 bg-slate-900 rounded border border-slate-700 hover:border-white transition-colors cursor-pointer">
                        <h4 className="font-bold text-orange-400 mb-1">Plan Blanc</h4>
                        <p className="text-xs text-gray-500">Afflux massif de victimes.</p>
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default DashboardView;
