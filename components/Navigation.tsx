
import React from 'react';
import { ViewState } from '../types';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: ViewState.ACCUEIL, icon: 'fa-house', label: 'Accueil', style: 'default' },
    { id: ViewState.GPS, icon: 'fa-location-arrow', label: 'GPS Intérieur', style: 'blue' }, // Nouveau bouton
    { id: ViewState.QUI_FAIT_QUOI, icon: 'fa-circle-question', label: 'Qui fait quoi ?', style: 'red' },
    { id: ViewState.EXAMENS, icon: 'fa-vial-circle-check', label: 'Liste Examens', style: 'blue' },
    { id: ViewState.PLANNING, icon: 'fa-calendar-days', label: 'Planning', style: 'green' },
    { id: ViewState.ANNUAIRE, icon: 'fa-address-book', label: 'Annuaire Méd.' },
    { id: ViewState.LOSSERAND, icon: 'fa-building', label: 'Centre Losserand' },
    { id: ViewState.GARDES, icon: 'fa-phone-volume', label: 'Gardes & Avis' },
    { id: ViewState.CONSULTATIONS, icon: 'fa-user-group', label: 'Équipe Consult.' },
    { id: ViewState.DRH, icon: 'fa-sitemap', label: 'Annuaire DRH' },
    { id: ViewState.SECRETARIATS, icon: 'fa-person-booth', label: 'Secrétariats' },
    { id: ViewState.ENCADREMENT, icon: 'fa-user-tie', label: 'Encadrement' },
    { id: ViewState.CHEFS, icon: 'fa-crown', label: 'Chefs Svc' },
    { id: ViewState.CADRES, icon: 'fa-id-badge', label: 'Cadres' },
    { id: ViewState.SERVICES, icon: 'fa-hospital-user', label: 'Services' },
    { id: ViewState.UTILES, icon: 'fa-star-of-life', label: 'N° Utiles' },
    { id: ViewState.PLAN, icon: 'fa-map-location-dot', label: 'Plan 2D' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-slate-200/95 dark:bg-[#111827]/95 backdrop-blur border-b-2 border-slate-400 dark:border-slate-700 shadow-xl overflow-x-auto scrollbar-red">
      <div className="flex p-3 gap-2 min-w-max justify-center">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          
          let baseClasses = "flex items-center gap-2 px-4 py-2 rounded font-bold text-xs md:text-sm transition-all duration-150 transform active:scale-95 border-t border-b-2 border-x shadow-md";
          let colorClasses = "";

          if (item.style === 'red') {
             colorClasses = isActive 
                ? "bg-gradient-to-b from-red-600 to-red-800 border-t-red-500 border-x-red-700 border-b-red-900 text-white shadow-[0_0_10px_rgba(220,38,38,0.5)] translate-y-[1px] border-b"
                : "bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-red-600 dark:text-red-400 border-t-white/20 border-x-black/10 border-b-black/30 hover:bg-red-50 dark:hover:bg-slate-700";
          } else if (item.style === 'green') {
             colorClasses = isActive
                ? "bg-gradient-to-b from-green-600 to-green-800 border-t-green-500 border-x-green-700 border-b-green-900 text-white shadow-[0_0_10px_rgba(22,163,74,0.5)] translate-y-[1px] border-b"
                : "bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-green-600 dark:text-green-400 border-t-white/20 border-x-black/10 border-b-black/30 hover:bg-green-50 dark:hover:bg-slate-700";
          } else if (item.style === 'blue') {
             colorClasses = isActive
                ? "bg-gradient-to-b from-cyan-600 to-cyan-800 border-t-cyan-500 border-x-cyan-700 border-b-cyan-900 text-white shadow-[0_0_10px_rgba(6,182,212,0.5)] translate-y-[1px] border-b"
                : "bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-cyan-600 dark:text-cyan-400 border-t-white/20 border-x-black/10 border-b-black/30 hover:bg-cyan-50 dark:hover:bg-slate-700";
          } else {
             colorClasses = isActive
                ? "bg-gradient-to-b from-blue-600 to-blue-800 border-t-blue-500 border-x-blue-700 border-b-blue-900 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)] translate-y-[1px] border-b"
                : "bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 border-t-white/20 border-x-black/10 border-b-black/30 hover:brightness-110";
          }

          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`${baseClasses} ${colorClasses}`}
            >
              <i className={`fa-solid ${item.icon} ${isActive ? 'text-white' : ''}`}></i>
              {item.label}
            </button>
          );
        })}
        
        <div className="w-px bg-slate-400 dark:bg-slate-600 mx-2"></div>

        <a 
            href="https://www.doctolib.fr/hopital-prive/paris/hopital-paris-saint-joseph" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded font-bold text-xs md:text-sm bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-700 dark:to-slate-800 text-cyan-600 dark:text-cyan-400 border-t border-t-white/20 border-b-2 border-b-black/30 hover:brightness-110 shadow-md active:scale-95 active:border-b"
        >
            <i className="fa-solid fa-notes-medical"></i> Doctolib
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
