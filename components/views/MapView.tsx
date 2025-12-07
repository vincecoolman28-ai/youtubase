
import React, { useState, useRef } from 'react';
import { mapPoints } from '../../data';
import { MapPoint } from '../../types';

const MapView: React.FC = () => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  // State pour la modale: 'consultations', 'hospitalisations', ou 'general'
  const [showPlanModal, setShowPlanModal] = useState<'consultations' | 'hospitalisations' | 'general' | null>(null);
  
  // State pour le Zoom
  const [zoomLevel, setZoomLevel] = useState(1);
  const imgRef = useRef<HTMLImageElement>(null);

  const filteredPoints = mapPoints.filter(p => 
    p.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.infoHtml.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // URLs des images en ligne (Google Drive High-Res Thumbnails)
  const MAP_IMAGES = {
    GENERAL: "https://drive.google.com/thumbnail?id=1iKi-JsRwrgmzbZ9dFGWuTTu303HIZECQ&sz=w3000", 
    CONSULTATIONS: "https://drive.google.com/thumbnail?id=1Gq-2yk6fV_c-D28_5QOobQH0tf0qyaGk&sz=w3000",
    HOSPITALISATIONS: "https://drive.google.com/thumbnail?id=1FPiccY0yOwmG-6rohwjL5A1fqBRk_enE&sz=w3000"
  };

  // Fonction pour gérer l'erreur de chargement d'image (fallback)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, type: string) => {
    const target = e.target as HTMLImageElement;
    if (target.src.includes('placehold.co')) return;
    target.src = `https://placehold.co/1200x800/1e293b/00aaff?text=${encodeURIComponent("Plan indisponible\n(Erreur chargement)")}`;
  };

  // Gestion du Zoom
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoomLevel(1);

  const openModal = (type: 'consultations' | 'hospitalisations' | 'general') => {
      setZoomLevel(1); // Reset zoom on open
      setShowPlanModal(type);
  };

  return (
    <div className="flex flex-col h-full animate-fade-in gap-4 pb-4 font-mono">
      
      {/* 1. SECTION: PLAN THUMBNAILS (Blueprint Style) */}
      <div className="flex flex-wrap justify-center gap-6 bg-slate-200 dark:bg-slate-800 p-4 rounded-lg border border-slate-400 dark:border-slate-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
        <div 
          onClick={() => openModal('consultations')}
          className="group cursor-pointer flex flex-col items-center gap-2"
        >
          <div className="w-40 h-28 bg-[#0f172a] blueprint-grid rounded border-2 border-slate-500 group-hover:border-hpsj-blue group-hover:shadow-[0_0_15px_rgba(0,170,255,0.5)] transition-all overflow-hidden relative p-1">
             <img 
               src={MAP_IMAGES.CONSULTATIONS}
               onError={(e) => handleImageError(e, "Plan Consultations")}
               alt="Plan Consultations" 
               className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" 
               referrerPolicy="no-referrer"
             />
             {/* Crosshairs decorative */}
             <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-hpsj-blue"></div>
             <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-hpsj-blue"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-hpsj-blue"></div>
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hpsj-blue"></div>
          </div>
          <span className="text-slate-700 dark:text-hpsj-silver font-bold text-sm group-hover:text-hpsj-blue uppercase tracking-widest">Plan Consult.</span>
        </div>

        <div 
          onClick={() => openModal('hospitalisations')}
          className="group cursor-pointer flex flex-col items-center gap-2"
        >
          <div className="w-40 h-28 bg-[#0f172a] blueprint-grid rounded border-2 border-slate-500 group-hover:border-hpsj-blue group-hover:shadow-[0_0_15px_rgba(0,170,255,0.5)] transition-all overflow-hidden relative p-1">
             <img 
               src={MAP_IMAGES.HOSPITALISATIONS}
               onError={(e) => handleImageError(e, "Plan Hospitalisations")}
               alt="Plan Hospitalisations" 
               className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" 
               referrerPolicy="no-referrer"
             />
             <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-hpsj-blue"></div>
             <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-hpsj-blue"></div>
             <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-hpsj-blue"></div>
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-hpsj-blue"></div>
          </div>
          <span className="text-slate-700 dark:text-hpsj-silver font-bold text-sm group-hover:text-hpsj-blue uppercase tracking-widest">Plan Hospi.</span>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 flex-grow min-h-0">
        
        {/* 2. LEFT PANEL: MAP INTERACTIVE (CAD STYLE) */}
        <div className="xl:w-1/2 bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-slate-400 dark:border-slate-600 p-1 relative flex flex-col shadow-2xl h-[700px] xl:h-auto">
          <div className="flex justify-between items-center bg-slate-300 dark:bg-slate-700 p-2 border-b border-slate-400 dark:border-slate-600 mb-1">
             <h2 className="text-lg font-bold text-slate-800 dark:text-hpsj-blue uppercase tracking-wider flex items-center">
                <i className="fa-solid fa-compass-drafting mr-2"></i>Vue Schématique Générale
             </h2>
             <button 
                onClick={() => openModal('general')}
                className="text-xs bg-slate-200 dark:bg-slate-800 hover:bg-hpsj-blue hover:text-white border border-slate-400 dark:border-slate-500 text-slate-700 dark:text-hpsj-cyan px-3 py-1 rounded-sm transition-colors font-bold uppercase"
                title="Mode Plein Écran"
             >
                <i className="fa-solid fa-expand mr-1"></i> Agrandir
             </button>
          </div>
          
          {/* Blueprint Container */}
          <div className="relative flex-grow flex items-start justify-center blueprint-grid overflow-hidden border border-slate-500 h-full group">
             {/* Rulers / Markers effect */}
             <div className="absolute top-0 left-0 w-full h-4 bg-slate-800/80 border-b border-slate-600 flex justify-between px-2">
                {[...Array(20)].map((_, i) => <div key={i} className="w-px h-2 bg-slate-500 mt-2"></div>)}
             </div>
             <div className="absolute top-0 left-0 h-full w-4 bg-slate-800/80 border-r border-slate-600 flex flex-col justify-between py-2">
                {[...Array(20)].map((_, i) => <div key={i} className="h-px w-2 bg-slate-500 ml-1"></div>)}
             </div>

             <img 
              src={MAP_IMAGES.GENERAL}
              onError={(e) => handleImageError(e, "Plan General HPSJ")}
              alt="Plan Général Hôpital" 
              className="w-full h-full object-contain p-6"
              referrerPolicy="no-referrer"
             />
             
             {/* Overlay d'aide */}
             <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pointer-events-none pb-4">
               <p className="bg-slate-900/90 text-hpsj-cyan px-4 py-1 border border-hpsj-blue shadow-xl text-center text-xs uppercase tracking-widest opacity-80 pointer-events-auto">
                  <i className="fa-solid fa-crosshairs mr-2"></i>
                  Sélection objet pour détails
               </p>
             </div>
          </div>
        </div>

        {/* 3. RIGHT PANEL: CONTROLS & INFO */}
        <div className="xl:w-1/2 flex flex-col gap-4 h-full min-h-0">
          
          {/* Controls - Industrial Panel */}
          <div className="bg-slate-200 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 shadow-lg rounded-sm p-4 flex-shrink-0 relative">
            {/* Decorative screws */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-slate-400 rounded-full"></div>

            <div className="relative mb-4">
              <i className="fa-solid fa-search absolute left-3 top-3 text-slate-500 dark:text-hpsj-cyan"></i>
              <input 
                type="text" 
                placeholder="RECHERCHER ZONE / SERVICE..."
                className="w-full bg-white dark:bg-slate-900 border border-slate-400 dark:border-slate-500 rounded-sm pl-10 pr-4 py-2 text-slate-900 dark:text-white font-mono text-sm focus:outline-none focus:border-hpsj-blue focus:ring-1 focus:ring-hpsj-blue uppercase"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4 mb-2 text-[10px] font-bold uppercase tracking-wider justify-center font-mono">
                <span className="flex items-center text-blue-600 dark:text-blue-400"><span className="w-2 h-2 bg-blue-600 rounded-sm mr-1"></span> P. Impaires</span>
                <span className="flex items-center text-green-600 dark:text-green-400"><span className="w-2 h-2 bg-green-600 rounded-sm mr-1"></span> P. Paires</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {filteredPoints.map(point => (
                <button
                  key={point.id}
                  onClick={() => setActivePoint(point)}
                  className={`
                    p-2 rounded-sm text-[11px] font-bold transition-all truncate border font-mono uppercase
                    ${point.type === 'porte-impaire' ? 'bg-blue-100 dark:bg-blue-900/50 border-blue-400 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800' : ''}
                    ${point.type === 'porte-paire' ? 'bg-green-100 dark:bg-green-900/50 border-green-400 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800' : ''}
                    ${point.type === 'autre-point' ? 'bg-slate-100 dark:bg-slate-700 border-slate-400 text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600' : ''}
                    ${activePoint?.id === point.id ? 'ring-2 ring-hpsj-cyan shadow-md !bg-slate-800 !text-white !border-white' : ''}
                  `}
                >
                  {point.label}
                </button>
              ))}
            </div>
          </div>

          {/* Info Display Area - Technical Screen Look */}
          <div className={`
            flex-grow bg-[#111827] border-2 border-slate-600 rounded-sm relative overflow-hidden transition-all duration-300 shadow-2xl flex flex-col min-h-[400px]
            ${activePoint ? 'opacity-100 ring-1 ring-hpsj-cyan shadow-[0_0_20px_rgba(6,182,212,0.15)]' : 'opacity-95'}
          `}>
            {/* Screen Glare Effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none z-10"></div>

            <div className="bg-slate-800 p-2 border-b border-slate-600 flex justify-between items-center sticky top-0 z-20 shadow-md">
              <h3 className="font-bold text-sm text-hpsj-cyan flex items-center uppercase tracking-widest font-mono">
                {activePoint ? <><i className="fa-solid fa-terminal mr-2"></i>DONNÉES : {activePoint.label}</> : 'STANDBY'}
              </h3>
              {activePoint && (
                <button 
                  onClick={() => setActivePoint(null)}
                  className="bg-red-900/50 hover:bg-red-600 border border-red-500 text-red-100 rounded-sm px-2 py-0.5 text-xs font-bold transition-colors uppercase"
                >
                  <i className="fa-solid fa-power-off"></i>
                </button>
              )}
            </div>

            <div className="flex-grow overflow-y-auto p-6 custom-scrollbar bg-[#0b101b] relative">
              {/* Grid Overlay inside screen */}
              <div className="absolute inset-0 pointer-events-none opacity-10 blueprint-grid z-0"></div>

              {activePoint ? (
                <div 
                  className="dynamic-content text-base text-gray-300 relative z-10 font-sans"
                  dangerouslySetInnerHTML={{ __html: activePoint.infoHtml }}
                />
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 relative z-10">
                  <i className="fa-solid fa-arrows-to-dot text-6xl mb-6 opacity-30 animate-pulse"></i>
                  <p className="text-center text-sm max-w-sm font-mono uppercase tracking-wider">
                    En attente de sélection...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL FOR STATIC PLANS WITH ZOOM - 2D VIEWER */}
      {showPlanModal && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPlanModal(null)}>
          <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col border-2 border-slate-600 bg-[#0f172a] shadow-[0_0_50px_rgba(0,0,0,0.8)]" onClick={e => e.stopPropagation()}>
            
            {/* Header / Toolbar */}
            <div className="flex justify-between items-center bg-slate-900 border-b border-slate-700 p-3 z-20">
                <h3 className="text-lg font-bold text-hpsj-cyan font-mono uppercase tracking-wider">
                    <i className="fa-solid fa-map mr-2"></i>
                    {showPlanModal === 'consultations' && 'VUE 2D : Consultations'}
                    {showPlanModal === 'hospitalisations' && 'VUE 2D : Hospitalisations'}
                    {showPlanModal === 'general' && 'VUE 2D : Générale'}
                </h3>
                
                <div className="flex items-center gap-4">
                    {/* Zoom Controls */}
                    <div className="flex items-center bg-slate-800 rounded border border-slate-600 overflow-hidden">
                        <button onClick={handleZoomOut} className="px-3 py-1 text-white hover:bg-slate-700 border-r border-slate-600" title="Zoom Arrière"><i className="fa-solid fa-minus"></i></button>
                        <span className="px-3 py-1 text-xs font-mono text-hpsj-blue min-w-[50px] text-center bg-black">{Math.round(zoomLevel * 100)}%</span>
                        <button onClick={handleZoomIn} className="px-3 py-1 text-white hover:bg-slate-700 border-l border-slate-600" title="Zoom Avant"><i className="fa-solid fa-plus"></i></button>
                        <button onClick={handleResetZoom} className="px-3 py-1 text-gray-400 hover:text-white hover:bg-slate-700 border-l border-slate-600" title="Réinitialiser"><i className="fa-solid fa-compress"></i></button>
                    </div>

                    <button 
                        onClick={() => setShowPlanModal(null)}
                        className="bg-red-700 hover:bg-red-600 text-white px-4 py-1 rounded font-bold uppercase text-xs tracking-widest border border-red-500"
                    >
                        Fermer
                    </button>
                </div>
            </div>

            {/* Image Container */}
            <div className="flex-grow blueprint-grid overflow-auto relative cursor-grab active:cursor-grabbing p-4">
               <div className="min-w-full min-h-full flex items-center justify-center">
                   <img 
                     ref={imgRef}
                     src={
                        showPlanModal === 'consultations' ? MAP_IMAGES.CONSULTATIONS : 
                        showPlanModal === 'hospitalisations' ? MAP_IMAGES.HOSPITALISATIONS : 
                        MAP_IMAGES.GENERAL
                     } 
                     onError={(e) => handleImageError(e, showPlanModal || "Plan")}
                     alt="Plan Détail" 
                     className="max-w-none transition-transform duration-200 ease-out origin-center shadow-[0_0_20px_rgba(0,0,0,0.5)] border-4 border-white"
                     style={{ 
                         transform: `scale(${zoomLevel})`,
                         maxHeight: '85vh',
                         maxWidth: '100%',
                         objectFit: 'contain'
                     }}
                     referrerPolicy="no-referrer"
                   />
               </div>
            </div>
            
            {/* Legend Overlay for General Map */}
            {showPlanModal === 'general' && (
                <div className="absolute bottom-4 left-4 bg-slate-900/90 border border-hpsj-cyan p-3 shadow-xl backdrop-blur text-xs z-10 pointer-events-none font-mono">
                    <div className="flex items-center gap-2 mb-1 text-green-400 font-bold uppercase"><span className="w-2 h-2 bg-green-500"></span> Portes Paires</div>
                    <div className="flex items-center gap-2 text-blue-400 font-bold uppercase"><span className="w-2 h-2 bg-blue-500"></span> Portes Impaires</div>
                </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default MapView;
