
import React, { useState } from 'react';

// --- CONSTANTES IMAGES (PLANS) ---
const MAP_IMAGES = {
  GENERAL: "https://drive.google.com/thumbnail?id=1iKi-JsRwrgmzbZ9dFGWuTTu303HIZECQ&sz=w3000", 
  CONSULTATIONS: "https://drive.google.com/thumbnail?id=1Gq-2yk6fV_c-D28_5QOobQH0tf0qyaGk&sz=w3000",
  HOSPITALISATIONS: "https://drive.google.com/thumbnail?id=1FPiccY0yOwmG-6rohwjL5A1fqBRk_enE&sz=w3000"
};

// --- TYPES POUR LE GRAPHE ---
type NodeId = string;

interface Node {
  id: NodeId;
  label: string;
  floor?: string;
  building?: string;
  mapType?: 'GENERAL' | 'CONSULTATIONS' | 'HOSPITALISATIONS'; // Quel plan afficher pour ce point ?
}

interface Edge {
  to: NodeId;
  instruction: string;
  distance: number; // en "unités" (ex: mètres approximatifs ou temps)
  icon?: string;
}

interface Graph {
  nodes: Record<NodeId, Node>;
  edges: Record<NodeId, Edge[]>;
}

// --- DONNÉES DU GRAPHE (MODELISATION DE L'HOPITAL) ---
const hospitalGraph: Graph = {
  nodes: {
    'hall': { id: 'hall', label: 'Hall Principal (Accueil)', floor: '0', building: 'Principal', mapType: 'GENERAL' },
    'ext_185': { id: 'ext_185', label: 'Extérieur (185 rue Losserand)', floor: '0', building: 'Extérieur', mapType: 'GENERAL' },
    'couloir_principal': { id: 'couloir_principal', label: 'Couloir Central (RDC)', floor: '0', building: 'Principal', mapType: 'CONSULTATIONS' },
    'kiosque': { id: 'kiosque', label: 'Kiosque / Cafétéria', floor: '0', building: 'Principal', mapType: 'CONSULTATIONS' },
    
    // Portes Impaires
    'p1': { id: 'p1', label: 'Porte 1 (Anesthésie/Ortho)', floor: '1-3', building: 'Ste Geneviève', mapType: 'CONSULTATIONS' },
    'asc_p1': { id: 'asc_p1', label: 'Ascenseur Porte 1', floor: '0', building: 'Ste Geneviève', mapType: 'CONSULTATIONS' },
    'p3': { id: 'p3', label: 'Porte 3 (Procto)', floor: '0', building: 'Ste Geneviève', mapType: 'CONSULTATIONS' },
    'p5': { id: 'p5', label: 'Porte 5 (Digestif)', floor: '1-3', building: 'Ste Geneviève', mapType: 'CONSULTATIONS' },
    'asc_p5': { id: 'asc_p5', label: 'Ascenseur Porte 5', floor: '0', building: 'Ste Geneviève', mapType: 'CONSULTATIONS' },
    'p7': { id: 'p7', label: 'Porte 7 (Endoscopie)', floor: '0', building: 'Ste Geneviève', mapType: 'CONSULTATIONS' },
    
    // Portes Paires (St Jean)
    'p2': { id: 'p2', label: 'Porte 2 (Chirurgie)', floor: '0-3', building: 'St Jean', mapType: 'CONSULTATIONS' },
    'asc_p2': { id: 'asc_p2', label: 'Ascenseur Porte 2', floor: '0', building: 'St Jean', mapType: 'CONSULTATIONS' },
    'p4': { id: 'p4', label: 'Porte 4 (Urgences Mat.)', floor: '0', building: 'St Jean', mapType: 'CONSULTATIONS' },
    'p6': { id: 'p6', label: 'Porte 6 (Cardio)', floor: '0-3', building: 'St Jean', mapType: 'CONSULTATIONS' },
    'asc_p6': { id: 'asc_p6', label: 'Ascenseur Porte 6', floor: '0', building: 'St Jean', mapType: 'CONSULTATIONS' },
    'p8': { id: 'p8', label: 'Porte 8 (Neuro/Diabéto)', floor: '0', building: 'St Jean', mapType: 'CONSULTATIONS' },
    'p10': { id: 'p10', label: 'Porte 10 (Maternité)', floor: '0-6', building: 'Notre Dame', mapType: 'HOSPITALISATIONS' },
    'asc_p10': { id: 'asc_p10', label: 'Ascenseur Porte 10', floor: '0', building: 'Notre Dame', mapType: 'CONSULTATIONS' },
    
    // St Michel / Ste Marie
    'p12': { id: 'p12', label: 'Porte 12 (HDJ)', floor: '0', building: 'St Michel', mapType: 'CONSULTATIONS' },
    'p14': { id: 'p14', label: 'Porte 14 (Médecine)', floor: '0-4', building: 'St Michel', mapType: 'HOSPITALISATIONS' },
    'asc_p14': { id: 'asc_p14', label: 'Ascenseur Porte 14', floor: '0', building: 'St Michel', mapType: 'CONSULTATIONS' },
    
    // Urgences & Extérieur
    'urgences': { id: 'urgences', label: 'Urgences Adultes (189)', floor: '0', building: 'St Vincent', mapType: 'GENERAL' },
    'sortie_urg': { id: 'sortie_urg', label: 'Sortie Urgences', floor: '0', building: 'Extérieur', mapType: 'GENERAL' },
    
    // Losserand (Distant)
    'rue': { id: 'rue', label: 'Rue Raymond Losserand (Trottoir)', floor: '0', building: 'Ville', mapType: 'GENERAL' },
    'entree_1': { id: 'entree_1', label: 'Entrée 1 (Hôpital Ste Marie)', floor: '0', building: 'Losserand', mapType: 'GENERAL' },
    'entree_2': { id: 'entree_2', label: 'Entrée 2 (Cité Hospitalière)', floor: '0', building: 'Losserand', mapType: 'GENERAL' },
    'entree_3': { id: 'entree_3', label: 'Entrée 3 (Prélèvements)', floor: '0', building: 'Losserand', mapType: 'GENERAL' },
    'entree_4': { id: 'entree_4', label: 'Entrée 4 (Dentaire)', floor: '0', building: 'Losserand', mapType: 'GENERAL' },
    'entree_5': { id: 'entree_5', label: 'Entrée 5 (Centre Losserand)', floor: '0', building: 'Losserand', mapType: 'GENERAL' },
    'accueil_5': { id: 'accueil_5', label: 'Accueil Entrée 5', floor: '0', building: 'Losserand', mapType: 'GENERAL' },
  },
  edges: {
    // Connexions Hall
    'ext_185': [{ to: 'hall', instruction: 'Entrez dans le hall principal.', distance: 10, icon: 'fa-door-open' }, { to: 'rue', instruction: 'Sortez sur la rue.', distance: 10, icon: 'fa-person-walking' }],
    'hall': [
        { to: 'ext_185', instruction: 'Sortez du bâtiment principal.', distance: 10, icon: 'fa-door-open' },
        { to: 'couloir_principal', instruction: 'Avancez tout droit. Empruntez l\'escalier central ou continuez dans le couloir.', distance: 20, icon: 'fa-arrow-up' },
        { to: 'kiosque', instruction: 'Le kiosque est sur votre gauche dans le hall.', distance: 10, icon: 'fa-coffee' }
    ],
    'kiosque': [{ to: 'hall', instruction: 'Revenez vers le centre du hall.', distance: 10 }],
    
    // Couloir Principal (L'épine dorsale)
    'couloir_principal': [
        { to: 'hall', instruction: 'Retournez vers l\'accueil/sortie.', distance: 20, icon: 'fa-arrow-down' },
        { to: 'asc_p1', instruction: 'Tournez à GAUCHE. Prenez les ascenseurs ou l\'escalier pour la Porte 1.', distance: 15, icon: 'fa-arrow-left' },
        { to: 'asc_p2', instruction: 'Tournez à DROITE. Prenez les ascenseurs ou l\'escalier pour la Porte 2.', distance: 15, icon: 'fa-arrow-right' },
        { to: 'p3', instruction: 'Tournez à GAUCHE vers la Porte 3.', distance: 25, icon: 'fa-arrow-left' },
        { to: 'p4', instruction: 'Tournez à DROITE vers la Porte 4.', distance: 25, icon: 'fa-arrow-right' },
        { to: 'asc_p5', instruction: 'Avancez et tournez à GAUCHE. Prenez les ascenseurs ou l\'escalier pour la Porte 5.', distance: 35, icon: 'fa-arrow-left' },
        { to: 'asc_p6', instruction: 'Avancez et tournez à DROITE. Prenez les ascenseurs ou l\'escalier pour la Porte 6.', distance: 35, icon: 'fa-arrow-right' },
        { to: 'p7', instruction: 'Continuez au fond à GAUCHE vers la Porte 7.', distance: 45, icon: 'fa-arrow-left' },
        { to: 'p8', instruction: 'Continuez au fond à DROITE vers la Porte 8.', distance: 45, icon: 'fa-arrow-right' },
        { to: 'asc_p10', instruction: 'Continuez tout droit vers le bâtiment Notre-Dame (Porte 10).', distance: 60, icon: 'fa-arrow-up' },
        { to: 'p12', instruction: 'Au fond du couloir à droite, vers St Michel.', distance: 70, icon: 'fa-arrow-right' },
        { to: 'asc_p14', instruction: 'Au fond du couloir à droite, après la porte 12.', distance: 80, icon: 'fa-arrow-right' }
    ],

    // Connexions Ascenseurs <-> Portes (Étages)
    'asc_p1': [{ to: 'p1', instruction: 'Utilisez l\'ascenseur ou l\'escalier pour atteindre les services Porte 1.', distance: 5, icon: 'fa-elevator' }, { to: 'couloir_principal', instruction: 'Rejoignez le couloir central.', distance: 10 }],
    'p1': [{ to: 'asc_p1', instruction: 'Redescendez au RDC.', distance: 5 }],

    'asc_p2': [{ to: 'p2', instruction: 'Utilisez l\'ascenseur ou l\'escalier pour atteindre les services Porte 2.', distance: 5, icon: 'fa-elevator' }, { to: 'couloir_principal', instruction: 'Rejoignez le couloir central.', distance: 10 }],
    'p2': [{ to: 'asc_p2', instruction: 'Redescendez au RDC.', distance: 5 }],

    'p3': [{ to: 'couloir_principal', instruction: 'Sortez dans le couloir central.', distance: 10 }],
    'p4': [{ to: 'couloir_principal', instruction: 'Sortez dans le couloir central.', distance: 10 }],

    'asc_p5': [{ to: 'p5', instruction: 'Utilisez l\'ascenseur ou l\'escalier pour atteindre les services Porte 5.', distance: 5, icon: 'fa-elevator' }, { to: 'couloir_principal', instruction: 'Rejoignez le couloir central.', distance: 10 }],
    'p5': [{ to: 'asc_p5', instruction: 'Redescendez au RDC.', distance: 5 }],

    'asc_p6': [{ to: 'p6', instruction: 'Utilisez l\'ascenseur ou l\'escalier pour atteindre les services Porte 6.', distance: 5, icon: 'fa-elevator' }, { to: 'couloir_principal', instruction: 'Rejoignez le couloir central.', distance: 10 }],
    'p6': [{ to: 'asc_p6', instruction: 'Redescendez au RDC.', distance: 5 }],

    'p7': [{ to: 'couloir_principal', instruction: 'Sortez dans le couloir central.', distance: 10 }],
    'p8': [{ to: 'couloir_principal', instruction: 'Sortez dans le couloir central.', distance: 10 }],

    'asc_p10': [{ to: 'p10', instruction: 'Prenez l\'ascenseur vers les étages Maternité/Gynéco.', distance: 5, icon: 'fa-elevator' }, { to: 'couloir_principal', instruction: 'Revenez vers le couloir central.', distance: 20 }],
    'p10': [{ to: 'asc_p10', instruction: 'Redescendez au RDC.', distance: 5 }],

    'p12': [{ to: 'couloir_principal', instruction: 'Sortez du couloir St Michel.', distance: 10 }],

    'asc_p14': [{ to: 'p14', instruction: 'Prenez l\'ascenseur vers les étages Médecine.', distance: 5, icon: 'fa-elevator' }, { to: 'couloir_principal', instruction: 'Revenez vers le couloir central.', distance: 20 }],
    'p14': [{ to: 'asc_p14', instruction: 'Redescendez au RDC.', distance: 5 }],

    // Urgences (Liaison via rue ou interne complexe, on simplifie via rue pour l'instant)
    'urgences': [{ to: 'sortie_urg', instruction: 'Sortez des urgences.', distance: 10 }],
    'sortie_urg': [{ to: 'rue', instruction: 'Rejoignez la rue Losserand.', distance: 10 }, { to: 'urgences', instruction: 'Entrez au 189 (Urgences).', distance: 10 }],

    // Rue (Le lien entre les bâtiments distants)
    'rue': [
        { to: 'ext_185', instruction: 'Allez au 185 rue Losserand (Entrée Principale).', distance: 50, icon: 'fa-person-walking' },
        { to: 'sortie_urg', instruction: 'Allez au 189 rue Losserand (Urgences).', distance: 60, icon: 'fa-truck-medical' },
        { to: 'entree_1', instruction: 'Rejoignez l\'Entrée 1 (Hôpital Sainte-Marie).', distance: 80, icon: 'fa-person-walking' },
        { to: 'entree_2', instruction: 'Rejoignez l\'Entrée 2 (Cité Hospitalière).', distance: 70, icon: 'fa-person-walking' },
        { to: 'entree_3', instruction: 'Sur le trottoir, tournez à GAUCHE. Rejoignez l\'Entrée 3 (Prélèvements).', distance: 130, icon: 'fa-arrow-left' },
        { to: 'entree_4', instruction: 'Sur le trottoir, tournez à GAUCHE. Rejoignez l\'Entrée 4 (Dentaire/Implantologie).', distance: 140, icon: 'fa-arrow-left' },
        { to: 'entree_5', instruction: 'Sur le trottoir, tournez à GAUCHE vers les entrées 3, 4 et 5. Rejoignez le 193 rue Raymond Losserand (Entrée 5).', distance: 150, icon: 'fa-arrow-left' }
    ],

    // Entrées Losserand
    'entree_1': [{ to: 'rue', instruction: 'Sortez sur la rue Losserand.', distance: 10 }],
    'entree_2': [{ to: 'rue', instruction: 'Sortez sur la rue Losserand.', distance: 10 }],
    'entree_3': [{ to: 'rue', instruction: 'Sortez sur la rue Losserand.', distance: 10 }],
    'entree_4': [{ to: 'rue', instruction: 'Sortez sur la rue Losserand.', distance: 10 }],
    'entree_5': [{ to: 'accueil_5', instruction: 'Entrez dans le bâtiment.', distance: 10 }, { to: 'rue', instruction: 'Sortez sur la rue Losserand.', distance: 10 }],
    'accueil_5': [{ to: 'entree_5', instruction: 'Sortez du bâtiment.', distance: 10 }]
  }
};

interface RouteStep {
  instruction: string;
  distance: number;
  icon?: string;
  nodeId: NodeId;
  mapType?: string; // Type de plan à afficher
}

const IndoorGPSView: React.FC = () => {
  const [startNode, setStartNode] = useState<NodeId>('hall');
  const [endNode, setEndNode] = useState<NodeId>('p10');
  const [route, setRoute] = useState<RouteStep[] | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // NOUVEAUX ÉTATS
  const [isPMR, setIsPMR] = useState(false); // Mode Mobilité Réduite
  const [copyFeedback, setCopyFeedback] = useState(false);

  // State pour le mini-plan modal
  const [activeMapImage, setActiveMapImage] = useState<string | null>(null);

  // FONCTION D'INVERSION
  const handleSwap = () => {
    setStartNode(endNode);
    setEndNode(startNode);
    setRoute(null); // Reset route on swap
  };

  // FONCTION DE COPIE
  const handleCopyRoute = () => {
    if (!route) return;
    
    const textRoute = route.map((step, idx) => 
        `${idx + 1}. ${step.instruction} (vers ${hospitalGraph.nodes[step.nodeId].label})`
    ).join('\n');
    
    const fullText = `Itinéraire HPSJ :\nDe : ${hospitalGraph.nodes[startNode].label}\nÀ : ${hospitalGraph.nodes[endNode].label}\n\n${textRoute}\n\nTemps estimé : ${Math.ceil((route.reduce((acc, s) => acc + s.distance, 0) * 3) / 60)} min.`;

    navigator.clipboard.writeText(fullText);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  // --- ALGORITHME BFS POUR TROUVER LE CHEMIN LE PLUS COURT ---
  const findPath = (start: NodeId, end: NodeId) => {
    setIsCalculating(true);
    setRoute(null);

    // Simulation d'un petit délai de calcul pour l'effet "GPS"
    setTimeout(() => {
        const queue: { id: NodeId; path: RouteStep[] }[] = [{ id: start, path: [] }];
        const visited = new Set<NodeId>();
        visited.add(start);

        while (queue.length > 0) {
            const { id, path } = queue.shift()!;

            if (id === end) {
                // Arrivé !
                setRoute(path);
                setIsCalculating(false);
                return;
            }

            const neighbors = hospitalGraph.edges[id] || [];
            
            for (const edge of neighbors) {
                if (!visited.has(edge.to)) {
                    visited.add(edge.to);
                    
                    const nextNode = hospitalGraph.nodes[edge.to];
                    
                    // Adaptation PMR des instructions
                    let finalInstruction = edge.instruction;
                    let finalIcon = edge.icon;

                    if (isPMR) {
                        // Supprime la mention "ou l'escalier"
                        finalInstruction = finalInstruction.replace(/ ou l'escalier/gi, '');
                        finalInstruction = finalInstruction.replace(/ ou escalier/gi, '');
                        
                        // Force l'icone ascenseur si c'était escalier
                        if (finalInstruction.toLowerCase().includes('ascenseur')) {
                            finalIcon = 'fa-elevator';
                            finalInstruction += ' (Priorité Ascenseur)';
                        }
                    }

                    queue.push({
                        id: edge.to,
                        path: [...path, { 
                            instruction: finalInstruction, 
                            distance: edge.distance, 
                            icon: finalIcon,
                            nodeId: edge.to,
                            mapType: nextNode.mapType
                        }]
                    });
                }
            }
        }
        
        // Aucun chemin trouvé
        setIsCalculating(false);
        setRoute([]); // Vide = erreur
    }, 600);
  };

  const showMap = (type: string | undefined) => {
    if (!type) return;
    if (type === 'GENERAL') setActiveMapImage(MAP_IMAGES.GENERAL);
    if (type === 'CONSULTATIONS') setActiveMapImage(MAP_IMAGES.CONSULTATIONS);
    if (type === 'HOSPITALISATIONS') setActiveMapImage(MAP_IMAGES.HOSPITALISATIONS);
  };

  // Liste triée pour les sélecteurs
  const sortedNodes = Object.values(hospitalGraph.nodes).sort((a, b) => a.label.localeCompare(b.label));

  const totalDistance = route ? route.reduce((acc, step) => acc + step.distance, 0) : 0;
  // Estimation temps : 10 unités = 30 secondes (environ)
  const totalTimeMinutes = Math.ceil((totalDistance * 3) / 60);

  return (
    <div className="animate-fade-in max-w-2xl mx-auto pb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-hpsj-blue mb-2 drop-shadow-md">
            <i className="fa-solid fa-location-arrow mr-3"></i>GPS Intérieur
        </h2>
        <p className="text-gray-400 italic">Trouvez votre chemin dans l'hôpital pas à pas.</p>
      </div>

      {/* --- FORMULAIRE --- */}
      <div className="bg-slate-800 border-2 border-slate-600 rounded-xl p-6 shadow-2xl relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-hpsj-blue opacity-5 rounded-bl-full pointer-events-none"></div>

        <div className="space-y-4 relative z-10">
            {/* Départ */}
            <div className="relative">
                <label className="block text-xs font-bold text-hpsj-cyan uppercase tracking-wider mb-2">
                    <i className="fa-regular fa-circle-dot mr-2"></i>Point de Départ
                </label>
                <div className="relative">
                    <select 
                        value={startNode}
                        onChange={(e) => setStartNode(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg p-3 pl-10 appearance-none focus:border-hpsj-cyan outline-none transition-colors shadow-inner"
                    >
                        {sortedNodes.map(node => (
                            <option key={node.id} value={node.id}>{node.label}</option>
                        ))}
                    </select>
                    <i className="fa-solid fa-location-crosshairs absolute left-3 top-3.5 text-gray-400"></i>
                </div>
            </div>

            {/* Connecteur Visuel + Bouton Swap */}
            <div className="flex justify-center items-center py-2">
                 <button 
                    onClick={handleSwap}
                    className="w-10 h-10 rounded-full bg-slate-700 hover:bg-hpsj-blue text-white border border-slate-500 hover:border-white transition-all shadow-md flex items-center justify-center group"
                    title="Inverser départ et arrivée"
                 >
                     <i className="fa-solid fa-arrow-right-arrow-left group-hover:rotate-180 transition-transform duration-300"></i>
                 </button>
            </div>

            {/* Arrivée */}
            <div className="relative">
                <label className="block text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                    <i className="fa-solid fa-location-dot mr-2"></i>Destination
                </label>
                <div className="relative">
                    <select 
                        value={endNode}
                        onChange={(e) => setEndNode(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-600 text-white rounded-lg p-3 pl-10 appearance-none focus:border-red-500 outline-none transition-colors shadow-inner"
                    >
                        {sortedNodes.map(node => (
                            <option key={node.id} value={node.id}>{node.label}</option>
                        ))}
                    </select>
                    <i className="fa-solid fa-flag-checkered absolute left-3 top-3.5 text-gray-400"></i>
                </div>
            </div>

            {/* Options PMR */}
            <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                <input 
                    type="checkbox" 
                    id="pmrMode" 
                    checked={isPMR} 
                    onChange={(e) => setIsPMR(e.target.checked)}
                    className="w-5 h-5 accent-hpsj-cyan rounded cursor-pointer"
                />
                <label htmlFor="pmrMode" className="text-sm text-gray-300 cursor-pointer select-none flex items-center gap-2">
                    <i className="fa-solid fa-wheelchair text-hpsj-cyan"></i>
                    <span>Mode Mobilité Réduite (Priorité Ascenseurs)</span>
                </label>
            </div>

            <button 
                onClick={() => findPath(startNode, endNode)}
                disabled={isCalculating || startNode === endNode}
                className={`
                    w-full py-4 rounded-lg font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all mt-2
                    ${startNode === endNode 
                        ? 'bg-slate-700 text-gray-500 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-hpsj-blue to-cyan-600 text-white hover:scale-[1.02] hover:shadow-cyan-500/25'}
                `}
            >
                {isCalculating ? (
                    <><i className="fa-solid fa-circle-notch fa-spin"></i> Calcul en cours...</>
                ) : (
                    <><i className="fa-solid fa-route"></i> Calculer l'itinéraire</>
                )}
            </button>
        </div>
      </div>

      {/* --- RÉSULTATS --- */}
      {route && (
        <div className="mt-8 animate-slide-up">
            {route.length === 0 ? (
                <div className="bg-red-900/20 border border-red-500 text-red-200 p-4 rounded-lg text-center">
                    <i className="fa-solid fa-triangle-exclamation mb-2 text-2xl"></i>
                    <p>Impossible de trouver un itinéraire entre ces deux points. Essayez de passer par le Hall Principal.</p>
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden">
                    {/* Header Résultat */}
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center flex-wrap gap-4">
                        <div>
                            <span className="text-xs text-gray-500 uppercase font-bold">Temps estimé</span>
                            <div className="text-2xl font-black text-slate-800 dark:text-white">
                                {totalTimeMinutes} <span className="text-sm font-normal text-gray-500">min</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                             <div className="text-right hidden sm:block">
                                 <span className="text-xs text-gray-500 uppercase font-bold">Distance</span>
                                 <div className="text-lg font-bold text-slate-700 dark:text-gray-300">~{totalDistance * 2} m</div>
                             </div>
                             <button 
                                onClick={handleCopyRoute}
                                className={`px-3 py-2 rounded text-sm font-bold flex items-center gap-2 transition-all ${copyFeedback ? 'bg-green-600 text-white' : 'bg-slate-700 text-hpsj-cyan hover:bg-slate-600'}`}
                             >
                                 <i className={`fa-solid ${copyFeedback ? 'fa-check' : 'fa-copy'}`}></i>
                                 {copyFeedback ? 'Copié !' : 'Copier'}
                             </button>
                        </div>
                    </div>

                    {/* Timeline des étapes */}
                    <div className="p-6 relative">
                        {/* Ligne verticale */}
                        <div className="absolute left-9 top-8 bottom-8 w-0.5 bg-gray-300 dark:bg-slate-700"></div>

                        <div className="space-y-6">
                            {/* Point de départ */}
                            <div className="flex gap-4 relative">
                                <div className="w-6 h-6 rounded-full bg-hpsj-blue border-4 border-white dark:border-slate-900 z-10 flex-shrink-0 shadow-sm"></div>
                                <div>
                                    <p className="font-bold text-slate-800 dark:text-white text-sm">Départ : {hospitalGraph.nodes[startNode].label}</p>
                                </div>
                            </div>

                            {/* Étapes */}
                            {route.map((step, idx) => (
                                <div key={idx} className="flex gap-4 relative group">
                                    <div className={`
                                        w-6 h-6 rounded-full z-10 flex-shrink-0 flex items-center justify-center text-[10px] text-white shadow-sm border-2 border-white dark:border-slate-900
                                        ${idx === route.length - 1 ? 'bg-red-500' : 'bg-slate-500 group-hover:bg-hpsj-cyan transition-colors'}
                                    `}>
                                        <i className={`fa-solid ${step.icon || 'fa-arrow-down'}`}></i>
                                    </div>
                                    <div className="pb-2 flex-grow">
                                        <p className="text-slate-700 dark:text-gray-200 font-medium leading-tight">{step.instruction}</p>
                                        
                                        {/* Indication du lieu atteint */}
                                        <div className="flex justify-between items-start mt-1 pl-1 border-l-2 border-slate-700">
                                            <p className="text-xs text-gray-400">
                                                Arrivée à : <span className="text-hpsj-cyan">{hospitalGraph.nodes[step.nodeId].label}</span>
                                            </p>
                                            
                                            {/* Bouton Mini Plan si disponible */}
                                            {step.mapType && (
                                                <button 
                                                    onClick={() => showMap(step.mapType)}
                                                    className="ml-2 text-[10px] bg-slate-700 hover:bg-hpsj-blue text-white px-2 py-1 rounded shadow-sm flex items-center gap-1 transition-colors whitespace-nowrap"
                                                >
                                                    <i className="fa-solid fa-map"></i> Voir plan
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {/* Point d'arrivée */}
                            <div className="flex gap-4 relative">
                                <div className="w-6 h-6 rounded-full bg-red-600 border-4 border-white dark:border-slate-900 z-10 flex-shrink-0 shadow-lg animate-pulse"></div>
                                <div>
                                    <p className="font-bold text-red-600 dark:text-red-400 text-lg leading-none">Vous êtes arrivé !</p>
                                    <p className="text-xs text-gray-500 mt-1">{hospitalGraph.nodes[endNode].label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      )}

      {/* MODALE POUR AFFICHER LE PLAN */}
      {activeMapImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setActiveMapImage(null)}>
            <div className="relative max-w-4xl max-h-[90vh] w-full bg-slate-900 border-2 border-slate-600 rounded-lg shadow-2xl p-1" onClick={e => e.stopPropagation()}>
                <div className="absolute top-2 right-2 z-10">
                    <button 
                        onClick={() => setActiveMapImage(null)}
                        className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-500 shadow-lg"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="w-full h-full overflow-auto rounded bg-[#0f172a] blueprint-grid flex items-center justify-center p-2">
                    <img 
                        src={activeMapImage} 
                        alt="Plan Localisation" 
                        className="max-h-[85vh] max-w-full object-contain"
                    />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                    <span className="bg-slate-900/80 text-white text-xs px-3 py-1 rounded-full border border-slate-600">Plan de Référence</span>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default IndoorGPSView;
