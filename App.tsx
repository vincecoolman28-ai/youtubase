
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import DirectoryView from './components/views/DirectoryView';
import MapView from './components/views/MapView';
import DrhView from './components/views/DrhView';
import { SecretariatsView } from './components/views/SecretariatsView';
import GlobalSearch from './components/GlobalSearch';
import PlanningView from './components/views/PlanningView';
import ExamsView from './components/views/ExamsView';
import DashboardView from './components/views/DashboardView';
import IndoorGPSView from './components/views/IndoorGPSView'; // Import GPS
import BackToTop from './components/BackToTop';
import VoiceAssistant from './components/VoiceAssistant';
import { 
  GuardsView, 
  ConsultationView, 
  UsefulNumbersView, 
  EncadrementView, 
  ServicesView, 
  ChefsView, 
  CadresView,
  LosserandView,
  QuiFaitQuoiView
} from './components/views/StaticDataViews';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.ACCUEIL);
  const [targetSecretariatId, setTargetSecretariatId] = useState<string | null>(null);

  // Sécurité console
  useEffect(() => {
    const warningTitleCSS = 'color: red; font-size: 40px; font-weight: bold; text-shadow: 2px 2px black;';
    const warningBodyCSS = 'font-size: 16px; color: white; background-color: red; padding: 5px; border-radius: 5px;';
    
    console.clear();
    console.log('%cARRÊT !', warningTitleCSS);
    console.log("%cIl est interdit d'accéder au code source ou aux données de cette application.", warningBodyCSS);
    console.log('%cToute tentative d\'extraction de données est monitorée.', 'font-size: 14px; font-style: italic;');
  }, []);

  const handleNavigateToSecretariat = (id: string) => {
    setTargetSecretariatId(id);
    setCurrentView(ViewState.SECRETARIATS);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.ACCUEIL: return <DashboardView setView={setCurrentView} />;
      case ViewState.GPS: return <IndoorGPSView />; // Ajout de la vue GPS
      case ViewState.QUI_FAIT_QUOI: return <QuiFaitQuoiView onNavigateToProgrammation={() => handleNavigateToSecretariat('progra')} />;
      case ViewState.PLANNING: return <PlanningView />;
      case ViewState.EXAMENS: return <ExamsView />;
      case ViewState.ANNUAIRE: return <DirectoryView />;
      case ViewState.PLAN: return <MapView />;
      case ViewState.DRH: return <DrhView />;
      case ViewState.GARDES: return <GuardsView />;
      case ViewState.CONSULTATIONS: return <ConsultationView />;
      case ViewState.UTILES: return <UsefulNumbersView />;
      case ViewState.SECRETARIATS: return <SecretariatsView initialActiveId={targetSecretariatId} />;
      case ViewState.ENCADREMENT: return <EncadrementView />;
      case ViewState.SERVICES: return <ServicesView />;
      case ViewState.CHEFS: return <ChefsView />;
      case ViewState.CADRES: return <CadresView />;
      case ViewState.LOSSERAND: return <LosserandView />;
      default: return <DashboardView setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen text-gray-100 flex flex-col font-sans relative">
      <Header />
      <Navigation currentView={currentView} setView={(view) => {
        if (view !== ViewState.SECRETARIATS) setTargetSecretariatId(null);
        setCurrentView(view);
      }} />
      
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        {renderView()}
      </main>

      <BackToTop />
      <VoiceAssistant />
      <GlobalSearch setView={setCurrentView} />

      <footer className="bg-slate-900/90 border-t border-slate-700 p-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} HPSJ Portail vincent
      </footer>
    </div>
  );
};

export default App;
