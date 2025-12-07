
import { GuardEntry, ServiceEntry, DrhSection, MapPoint, UsefulNumberItem, UsefulNumberCategory, EncadrementEntry, ServiceLocationEntry, OrganigrammeEntry, SecretariatEntry, DrhContact, ExamEntry } from './types';

// ============================================================================
// 1. GARDES ET AVIS
// ============================================================================
export const guardsData: GuardEntry[] = [
  { specialite: "Anesthésie", garde: "7101", avis: "7101 / 3166" },
  { specialite: "Cadre de Jour < 18h30", garde: "7629", avis: "" },
  { specialite: "Cadre de Nuit > 18h30", garde: "7631", avis: "" },
  { specialite: "Cardiologie", garde: "7886", avis: "7791" },
  { specialite: "Chimio", garde: "7632", avis: "3675" },
  { specialite: "Chirurgie Digestive", garde: "7612 / 7681 / 7683 / 8710", avis: "7612 / 7706" },
  { specialite: "Chirurgie Reconstructrice", garde: "7467", avis: "7467" },
  { specialite: "Chirurgie Vasculaire", garde: "7939", avis: "7939" },
  { specialite: "Chirurgie Plastique", garde: "7467", avis: "7467" },
  { specialite: "Dermatologie", garde: "7622", avis: "7622" },
  { specialite: "Diabétologie", garde: "7665", avis: "06 86 31 92 98" },
  { specialite: "EMG", garde: "3412", avis: "" },
  { specialite: "Gastrologie", garde: "7999 / 7299", avis: "3449" },
  { specialite: "Gériatrie", garde: "8051", avis: "8051" },
  { specialite: "Gynécologie", garde: "3291 / 6718", avis: "3291" },
  { specialite: "Gynécologie Urgence", garde: "8170", avis: "" },
  { specialite: "Infectiologue", garde: "7820 / 7824 / 7470", avis: "7470" },
  { specialite: "Médecine Vasculaire Hématologue", garde: "7978", avis: "7978" },
  { specialite: "Médecine Interne", garde: "7865 / 7179 / 8107 / 7421 / 8007 / 8038 / 6877", avis: "7037 / 7848" },
  { specialite: "Microbiologie", garde: "7470", avis: "7470" },
  { specialite: "Néonatalogie", garde: "6708", avis: "6708" },
  { specialite: "Neurologie", garde: "7992 / 6828 / 6829 / 7003 / 7967 / 3016 / 6827 / 7635", avis: "7992" },
  { specialite: "Obstétrique", garde: "", avis: "6718" },
  { specialite: "Oncologie", garde: "6120 / 3711 / 6174", avis: "7449" },
  { specialite: "Ophtalmologie", garde: "6160 / 7099", avis: "6160" },
  { specialite: "ORL", garde: "6908", avis: "6908" },
  { specialite: "ORL Urgence", garde: "3378", avis: "6908" },
  { specialite: "Orthopédie", garde: "7679", avis: "7679" },
  { specialite: "Pharmacie", garde: "7705", avis: "" },
  { specialite: "Pneumologie", garde: "8701", avis: "7760" },
  { specialite: "Proctologie", garde: "6704", avis: "6704" },
  { specialite: "Proctologie Urgence", garde: "7537", avis: "" },
  { specialite: "Radiologue", garde: "7851", avis: "7851" },
  { specialite: "Réanimation", garde: "6991", avis: "6991" },
  { specialite: "Rhumatologie", garde: "3997 / 7190", avis: "3997" },
  { specialite: "Rhumatologie Urgence", garde: "7340", avis: "" },
  { specialite: "Stomatologie / CMF", garde: "7009", avis: "7009" },
  { specialite: "Urologie", garde: "7675", avis: "7675" },
];

// ============================================================================
// 2. EQUIPE CONSULTATIONS
// ============================================================================
export const consultationTeams: ServiceEntry[] = [
  // Service ORL (Updated to Entrée 5)
  { equipe: "DE NEEF Christelle", fonctions: "IDE", numeros: "3953", specialites: "ORL / CMF", localisation: "Entrée 5 (Ex-Porte K)", type: "service-orl" },
  { equipe: "DIARRA Niakale", fonctions: "Assistante Dentaire", numeros: "7307", specialites: "CMF", localisation: "Entrée 5 (Ex-Porte K)", type: "service-orl" },
  { equipe: "MARTIN Maylis", fonctions: "AS", numeros: "7069", specialites: "ORL", localisation: "Entrée 5 (Ex-Porte K)", type: "service-orl" },
  
  // Service Chir Ext
  { equipe: "NAJMAN Lucie", fonctions: "IDE REFERENTE", numeros: "7877 / 3338 / 3864", specialites: "CHIR EXT / SALLE DE PAC", localisation: "Porte 1 / Porte 14", type: "service-chir-ext" },
  { equipe: "BALCON Cathy", fonctions: "IDE", numeros: "7877 / 3338 / 3864", specialites: "CHIR EXT / SALLE DE PAC", localisation: "Porte 1 / Porte 14", type: "service-chir-ext" },
  { equipe: "FERREOLES Morgane", fonctions: "IDE", numeros: "7877 / 3338 / 3864", specialites: "CHIR EXT / SALLE DE PAC", localisation: "Porte 1 / Porte 14", type: "service-chir-ext" },
  { equipe: "SCHNEIDER MAUNOURY Clothilde", fonctions: "IDE", numeros: "7877 / 3338 / 3864", specialites: "CHIR EXT / SALLE DE PAC", localisation: "Porte 1 / Porte 14", type: "service-chir-ext" },
  { equipe: "PAVADE Marie", fonctions: "AS", numeros: "6253", specialites: "CHIR EXT / ECG", localisation: "Porte 1 / Porte 14", type: "service-chir-ext" },
  
  // Porte 2
  { equipe: "BROSSARD Samantha", fonctions: "IDE", numeros: "7076 / 3430", specialites: "ORTHO", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "VIALLA Océane", fonctions: "IDE", numeros: "7076 / 3430", specialites: "ORTHO", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "MARTIN METAYER Sylvie", fonctions: "IDE Stomathérapeuthe", numeros: "7663", specialites: "CHIR DIG", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "FERRAND Guilalbe", fonctions: "IDE RAAC / PST", numeros: "7426 / 3824", specialites: "CHIR DIG", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "ROYO Mélanie", fonctions: "IDE RAAC / PST", numeros: "7426 / 3824", specialites: "CHIR DIG", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "COFFINET Marie Astrid", fonctions: "IDE", numeros: "7637 / 7483", specialites: "CHIR URO", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "DOMINIQUE Justine", fonctions: "IDE", numeros: "7637 / 7483", specialites: "CHIR URO", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "HOCQUINGHEM Laure", fonctions: "IDE", numeros: "7637 / 7483", specialites: "CHIR URO", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "MAINGARD Danièle", fonctions: "IDE", numeros: "7637 / 7483", specialites: "CHIR URO", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "ROBERT Nella", fonctions: "AS Fibro", numeros: "8377", specialites: "CHIR URO", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "JACQUET Muriel", fonctions: "IDE", numeros: "3093", specialites: "MED VASC", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "HARDY Frédérique", fonctions: "IDE", numeros: "3093", specialites: "MED VASC", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "HEDDE Audrey", fonctions: "IDE", numeros: "3093", specialites: "MED VASC", localisation: "Porte 2", type: "service-porte2" },
  { equipe: "RANNOU Catherine", fonctions: "IDE", numeros: "3093", specialites: "MED VASC", localisation: "Porte 2", type: "service-porte2" },
  
  // Allergo
  { equipe: "BLANZACQ Marie Isabelle", fonctions: "IDE REFERENTE", numeros: "6342", specialites: "EFR / ALLERGO", localisation: "Porte 6 / 12 / 14", type: "service-allergo" },
  { equipe: "BERTRAND Jeanne", fonctions: "IDE", numeros: "8072 / 7177 / 3812", specialites: "EFR / ALLERGO", localisation: "Porte 6 / 12 / 14", type: "service-allergo" },
  { equipe: "CHAMONARD Hélène", fonctions: "IDE", numeros: "8072 / 7177 / 3812", specialites: "EFR / ALLERGO", localisation: "Porte 6 / 12 / 14", type: "service-allergo" },
  { equipe: "GOMES Béatrice", fonctions: "IDE", numeros: "8072 / 7177 / 3812", specialites: "EFR / ALLERGO", localisation: "Porte 6 / 12 / 14", type: "service-allergo" },
  { equipe: "GRASSIN D'ALPHONSE Alice", fonctions: "IDE", numeros: "8072 / 7177 / 3812", specialites: "EFR / ALLERGO", localisation: "Porte 6 / 12 / 14", type: "service-allergo" },
  { equipe: "MAYAUD Apolline", fonctions: "IDE", numeros: "8072 / 7177 / 3812", specialites: "EFR / ALLERGO", localisation: "Porte 6 / 12 / 14", type: "service-allergo" },
  { equipe: "TEYSSIER Pauline", fonctions: "IDE", numeros: "8072 / 7177 / 3812", specialites: "EFR / ALLERGO", localisation: "Porte 6 / 12 / 14", type: "service-allergo" },
  
  // Douleur / Medecine
  { equipe: "PASCAL Jeanne Claire", fonctions: "IDE REFERENTE", numeros: "7862", specialites: "DOULEUR", localisation: "Porte 14", type: "service-douleur" },
  { equipe: "PLE Alice", fonctions: "IDE", numeros: "7489", specialites: "DOULEUR", localisation: "Porte 14", type: "service-douleur" },
  { equipe: "GUILBOT Alice", fonctions: "IDE", numeros: "3408", specialites: "HDJ MEDECINE", localisation: "Porte 14", type: "service-douleur" },
  { equipe: "TIRANO Valérie", fonctions: "IDE", numeros: "3408", specialites: "HDJ MEDECINE", localisation: "Porte 14", type: "service-douleur" },
  { equipe: "RAYNAUD Annie", fonctions: "AS", numeros: "3935", specialites: "HDJ MEDECINE", localisation: "Porte 14", type: "service-douleur" },
];

// ============================================================================
// 3. ANNUAIRE DRH (DÉTAIL)
// ============================================================================
export const drhData: DrhSection[] = [
  {
    title: "Service Recrutement & Mobilité",
    contacts: [
      { name: "Cécile FOEX", role: "Responsable Recrutement", phone: "01 44 12 68 33" },
      { name: "Cyrielle GARBARINO", role: "Chargée SPE MED, CHIR, CNVM", phone: "01 44 12 62 04" },
      { name: "Véronique DE LA COSTE-MESSELIERE", role: "Chargée MAGUP, MT, QP", phone: "01 44 12 62 20" },
      { name: "Sylvane CARPENTIER", role: "Chargée Tout HML", phone: "01 40 94 87 95", highlight: true },
      { name: "Margaux ZWOLINSKI", role: "Chargée BLOCS, Fct Support, Parcours", phone: "01 44 12 39 80" },
      { name: "Vanessa SARRAZIN", role: "Référente Hôpital Paris St-Joseph", phone: "01 40 94 87 94", highlight: true },
      { name: "Léa TAVARES", role: "Référente HML", phone: "01 44 12 35 06" },
    ]
  },
  {
    title: "Service Formation & Développement",
    contacts: [
      { name: "Caroline SAVERY", role: "Responsable Développement RH", phone: "01 44 12 63 84" },
      { name: "Agathe MALLET", role: "Responsable Carrière et évaluation", phone: "01 44 12 35 16" },
      { name: "Sophie RUTTEN", role: "Coordinatrice paramédicale formation", phone: "01 40 94 86 44", highlight: true },
      { name: "Cecile FOEX", role: "Responsable Recrutement", phone: "01 44 12 68 33" },
      { name: "Martine BURFIN", role: "Responsable Formation & Développement", phone: "01 44 12 35 06" },
    ]
  },
  {
    title: "Service Paie - Adjoints",
    contacts: [
      { name: "Marlène GUEDES DE MORAIS", role: "DRIF, DIM", phone: "01 44 12 62 48" },
      { name: "Amélie SOARES DE FONTES", role: "CNVM, SPE CHIR, SPE MED, BLOCS", phone: "01 40 94 87 86", highlight: true },
      { name: "Sylvie BONNEFOY", role: "MAGUP, MT, QP (MTQ), DAR, ADULTE", phone: "01 44 12 63 75" },
    ]
  },
  {
    title: "Service Paie - Gestionnaires PNM",
    contacts: [
      { name: "Anne-Séverine SOREL", role: "Communication, IFSI", phone: "01 44 12 35 17" },
      { name: "Sarra CHAOUACHI", role: "FCT SUPP - Formation, Direction, Finances, RH, SI, Imagerie HML", phone: "01 40 94 25 86" },
      { name: "Nathalia SAS", role: "Parcours HML, MTQ HML, SPE CHIR, BLOCS STJO", phone: "01 44 12 85 50" },
      { name: "Alexandra ALVES", role: "D2P - Parcours Patients, Affaires sociales", phone: "01 44 12 31 01" },
      { name: "Aurélie NYESI", role: "CNVM", phone: "01 44 12 63 97" },
      { name: "Marie HOPPE", role: "SPE MED", phone: "01 44 12 62 83" },
      { name: "Komi KITA", role: "ADULTE HML", phone: "01 40 94 22 96", highlight: true },
      { name: "Jihene BEN M HENNI", role: "DAR, Congénital, BLOCS HML", phone: "01 40 94 87 87", highlight: true },
      { name: "Mélanie MORIN", role: "DOP/DIM STJO & HML, MAGUP", phone: "01 44 12 63 76" },
      { name: "Seta SAMBA", role: "VACATAIRES STJO & HML", phone: "01 44 12 35 15" },
      { name: "Nathalie ANDRE", role: "DRIF STJO & HML, MTQ STJO", phone: "01 44 12 39 24" },
    ]
  },
  {
    title: "Service Paie - Personnel Médical",
    contacts: [
      { name: "Vincent THERY", role: "SPE MED, SPE CHIR", phone: "01 44 12 63 25" },
      { name: "Komi KITA", role: "Site HML", phone: "01 40 94 22 96", highlight: true },
      { name: "Vanessa DUMAS", role: "CNVM, MAGUP, MTQ", phone: "01 44 12 35 04" },
    ]
  },
  {
    title: "Affaires Médicales",
    contacts: [
      { name: "Antoine JAMET", role: "Chargé des Affaires Médicales", phone: "01 44 12 83 31" },
      { name: "Vanessa CABAZ", role: "Adjointe Affaires Médicales", phone: "01 44 12 67 74" },
    ]
  },
  {
    title: "Juridique & Relations Sociales",
    contacts: [
      { name: "Alexandra COLLANGE", role: "Responsable", phone: "01 44 12 63 84" },
      { name: "Mathilde BIGNON", role: "Assistante (Médailles, Parking, Crèche, Logement)", phone: "01 44 12 63 72" },
      { name: "Sylvie GUERIN", role: "Assistante sociale", phone: "01 44 12 36 29" },
    ]
  },
  {
    title: "Prévention",
    contacts: [
      { name: "Yamina KHODJA", role: "Référente Handicap salarié", phone: "01 44 12 33 29" },
      { name: "David DUCREUX", role: "Chargé de prévention", phone: "01 40 94 88 62", highlight: true },
      { name: "Martine VANDENBROUCKE", role: "Ergonome", phone: "01 44 12 69 02" },
      { name: "Cyrille BERTIN", role: "Coord. prévention", phone: "01 44 12 35 47" },
      { name: "Florence BLANC", role: "Ass. RH & CSSCT", phone: "01 44 12 83 91" },
      { name: "Stéphanie MARTIN", role: "Ass. RH & Prévention", phone: "01 44 12 38 39" },
      { name: "Jean-Philippe SABATHE", role: "Resp. Prévention des risques", phone: "01 44 12 67 66" },
    ]
  },
  {
    title: "Médecine du Travail",
    contacts: [
      { name: "Céline VANNOORENBERGHE", role: "Psychologue du travail STJO & HML", phone: "01 40 94 87 93", highlight: true },
      { name: "Françoise LEFEBVRE", role: "IDE SST STJO & HML", phone: "01 44 12 35 08" },
      { name: "Sarah Moumeni", role: "IDE SST STJO & HML", phone: "" },
      { name: "Dr Anne Florin", role: "Médecin collab. santé travail STJO", phone: "" },
      { name: "Dr Nathalie CASTREAU", role: "Médecin du travail STJO", phone: "" },
    ]
  },
  {
    title: "Contrôle & Budgets",
    contacts: [
      { name: "Maxime COMTE", role: "Coordination SIRH", phone: "01 44 12 82 08" },
      { name: "Louis NGUYEN TRONG", role: "Contrôle de gestion sociale", phone: "01 40 94 23 52", highlight: true },
      { name: "Clément ROBELIN", role: "Resp. Rémunération, Avantages, SIRH", phone: "01 44 12 63" },
    ]
  },
];

// ============================================================================
// 3b. CONTACTS PRINCIPAUX DRH (Pour recherche globale)
// ============================================================================
export const keyDrhContacts: DrhContact[] = [
    { name: "Stéphane HENIN", role: "Responsable Affaires Médicales", phone: "01 44 12 67 80" },
    { name: "Catherine LAVIGNAC", role: "RRH Pôles Fonctions Support, Parcours, Formation", phone: "01 44 12 69 23" },
    { name: "Marie-José DOLLIN", role: "RRH Pôles Médicaux, Chirurgicaux, Réanimations", phone: "01 44 12 73 15" },
    { name: "Sophie DOMINGUES", role: "RRH Pôles Maternité, Médico-Technique, Qualité", phone: "01 44 12 31 86" },
    { name: "Claire BEAUMEISTER", role: "RRH Pôles Blocs Op., Anesthésies", phone: "01 44 12 73 81" },
];

// ============================================================================
// 4. MAP POINTS (Plan Interactif)
// ============================================================================
// This data populates the map popups with the exact HTML tables from the legacy system
export const mapPoints: MapPoint[] = [
  {
    id: 'p1',
    label: 'Portes 1-3',
    type: 'porte-impaire',
    infoHtml: `
      <h3>Portes 1 à 3</h3><h4>Porte 1: Consultations Anesthésie et Chirurgie Plastie</h4><table><thead><tr><th>Équipe</th><th>Fonctions</th><th>Numéros (Interne/Externe)</th><th>Spécialités</th><th>Chef de Service</th></tr></thead><tbody><tr><td>CAMARA Fenda<br>DOS SANTOS Naijah<br>MONTEIRO Katarina</td><td rowspan=2 style='vertical-align:middle;'>SECRETAIRE</td><td>165502, 165504, 165503<br>Externe: 7580</td><td>ANESTHESIE</td><td>Dr Alfonsi</td></tr><tr><td>CVETKOVIC Dragana<br>DA CRUZ Laureline</td><td>163771, 163756<br>Externe: 3771</td><td>CHIR PLASTIE</td><td>Dr Levan</td></tr><tr><td>BROUTA Jenaël<br>ZOURDANI Lyes</td><td>AGENT ACCUEIL</td><td>165505</td><td colspan='2'></td></tr></tbody></table><h4>Horaires d'ouverture (Porte 1)</h4><ul><li>Accueil physique et téléphonique : <strong class='horaires-highlight'>9h/17h</strong></li></ul><h4>Mails (Porte 1)</h4><ul><li>Anesthésie : cs-anesthesie@ghpsj.fr</li><li>Chir Plastie : cpre@ghpsj.fr</li></ul><hr><h4>HOSPITALISATIONS (Accès général Portes 1-3)</h4><ul><li>CHIR ORTHOPÉDIQUE (3e) - 3204</li><li>GASTRO-ENTÉROLOGIE (2e) - 3188</li><li>UCA (unité de chirurgie ambulatoire) (1er) - 8122</li><li>IDE - 3861</li></ul><h4>CONSULTATIONS (Porte 3)</h4><ul><li>INSTITUT DE PROCTOLOGIE CS=7245 PROG=7196 et CS de GASTRO - 3039</li></ul>
    `
  },
  {
    id: 'p2',
    label: 'Porte 2',
    type: 'porte-paire',
    infoHtml: `
      <h3>Porte 2 : Consultations Chirurgicales et Services</h3><h4>Secrétariats (Vasculaire, Urologie, Digestive)</h4><p><strong>Horaires Accueil Physique:</strong> <strong class='horaires-highlight'>7h45-18h15</strong> | <strong>Secrétariats:</strong> <strong class='horaires-highlight'>8h-18h</strong></p><table><thead><tr><th>Équipe</th><th>Fonction</th><th>Interne</th><th>Externe</th><th>Spécialité</th><th>Chef de Service</th></tr></thead><tbody><tr><td>TRAORE Ramata</td><td>AM REFERENTE</td><td>163457</td><td>3457</td><td>Toutes</td><td></td></tr><tr><td>CONTRÔLE Marion<br>DOUCOURE Manda<br>RADIGUET Pascale</td><td rowspan=4>AM</td><td>163555<br>163379<br>163556</td><td>3556</td><td>CHIR DIG</td><td>Dr Loriau</td></tr><tr><td>RENAUDIN Emeline<br>GARDONIO Kimberley<br>MONTEIRO Oriana<br>REALI Véronique<br>SALOMON Cherline</td><td>163555<br>163823<br>161284<br>163821<br>163087</td><td>3821</td><td>CHIR URO</td><td>Pr Durand</td></tr><tr><td>MONT FLEURY Kaya<br>REGENT Naomi</td><td>164902<br>163060</td><td>3060</td><td>CHIR VASC</td><td>Dr Raux</td></tr><tr><td>MISSAMOU Doryanne<br>NDAW Ndioba</td><td>165501<br>163184</td><td>3184</td><td>MED VASC</td><td>Dr Michon Pasturel</td></tr><tr><td>BALLER Nenette<br>BERNARD Anais<br>BRAHMI Samira<br>CHANDOUL Hanane<br>PAGE Tullie</td><td>AGENT ACCUEIL</td><td>7035<br>7028</td><td></td><td>Toutes</td><td></td></tr></tbody></table><hr><h4>Détails Secrétariat Orthopédie (Bureau n° 72)</h4><p><strong>Horaires:</strong> <strong class='horaires-highlight'>8h30-17h</strong></p><table><thead><tr><th>Médecin(s)</th><th>Secrétaire</th><th>Poste</th></tr></thead><tbody><tr style='background-color: rgba(3, 201, 169, 0.25);'><td>Dr BOILLOT / MELHEM / KALKA DEBIDINE</td><td>Céline MELKI</td><td>7729</td></tr><tr style='background-color: rgba(22, 160, 133, 0.25);'><td>Dr MOREAU / SABATE FERRIS / CHARLOT / ZARAA</td><td>Stéphanie BIGOT</td><td>3580</td></tr><tr style='background-color: rgba(26, 188, 156, 0.25);'><td>Dr RIOUALLON / UPEX / JOUFFROY / MARANT</td><td>Justine MARCOT</td><td>3433</td></tr><tr style='background-color: rgba(52, 152, 219, 0.25);'><td>Dr LAMPILAS / DESAUGE / WOLFF / GILLI</td><td>Sabrina RABETSIALONINA</td><td>7845</td></tr></tbody></table><p style='color: #ef4444; font-weight: bold;'>Traumatologie : Tous les appels qui concernent la traumatologie ou le passage aux urgences ==> 3430</p><p style='color: #ef4444; font-weight: bold;'>Note : Si une des lignes ne répond pas, il faut transmettre aux patients l'adresse mail du secrétariat : orthopedie@ghpsj.fr et qu'ils notent en objet le nom du chirurgien.</p><hr><h4>Mails des Secrétariats</h4><ul><li><strong>Uro:</strong> cs-chirurologique@ghpsj.fr</li><li><strong>Dig:</strong> cs-chirdigestive@ghpsj.fr</li><li><strong>Chir Vasc:</strong> cs-chirvasculaire@ghpsj.fr</li><li><strong>Med Vasc:</strong> cs-medvasc@ghpsj.fr</li><li><strong>Orthopédie:</strong> orthopedie@ghpsj.fr</li></ul><h4>HOSPITALISATIONS</h4><ul><li>NEUROLOGIE-HDS (3e) - 3560</li><li>NEURO-VASCULAIRE (3e) - 3716</li><li>HDJ GREFFE (3e) - 3481</li><li>CARDIOLOGIE (2e) - 3404</li><li>DIABÉTOLOGIE-HDS (1er) - 7911 / 3013</li><li>EXPLORATIONS FONCTIONNELLES NEUROLOGIQUES (EMG, EEG, PE) (3e) - 3412</li><li>MÉDECINE VASCULAIRE (1er) - 3762 / (2e) - 7273 / (3e) - 3270</li></ul>
    `
  },
  {
    id: 'p57',
    label: 'Portes 5-7',
    type: 'porte-impaire',
    infoHtml: `
      <h3>Portes 5 à 7</h3><h4>HOSPITALISATIONS</h4><ul><li>CHIR ORTHOPÉDIQUE (3e) - 3863</li><li>OPHTALMOLOGIE</li><li>CHIR DIGESTIVE (2e) - 3813</li><li>CHIR ORL (1er) - 6312</li><li>ENDOSCOPIES - 7904</li><li>PROCTOLOGIE (1er) - 3434</li><li>CHIR MAXILLO-FACIALE (1er) - 7312</li></ul><h4>CONSULTATIONS</h4><ul><li><strong>Porte 5:</strong> EXAMEN / FIBROSCOPIE / COLOSCOPIE / VIDÉO-CAPSULE (gastro)</li></ul>
    `
  },
  {
    id: 'p4',
    label: 'Porte 4',
    type: 'porte-paire',
    infoHtml: `
      <h3>Porte 4 : Urgences Gynéco Obstétriques et Porte 10 : Consultations Maternité</h3><p style='color: #ff4d4d; font-weight: bold; font-size: 1.1em;'>Urgence Maternité Tél: 8170</p><table><thead><tr><th>Équipe</th><th>Fonctions</th><th>Numéro</th><th>Spécialités</th><th>Chef de Service</th></tr></thead><tbody><tr><td>BALENDRAN Bavithra<br>DAUXOIS Taos<br>JEAN LOUIS Monique</td><td>AGENT ACCUEIL</td><td>8607</td><td>MATERNITE</td><td rowspan=3 style='vertical-align: middle; text-align: center;'>Pr Azria</td></tr><tr><td>BEAUPRES DE MONSALES Estella<br>BEL Corinne</td><td>AM</td><td rowspan=2 style='vertical-align: middle; text-align: center;'>8282</td><td rowspan=2 style='vertical-align: middle; text-align: center;'>UrGO</td></tr><tr><td>EGA Lou-Ann<br>NGOunda Laurène<br>NOMBO Aurel</td><td>AGENT NUIT</td></tr></tbody></table><h4>Horaires d'ouverture</h4><ul><li>Accueil physique et téléphonique UrGo : <strong class='horaires-highlight'>24h/24</strong></li><li>Consultation maternité : <strong class='horaires-highlight'>8h15/17h30</strong></li><li>Secrétariat : <strong class='horaires-highlight'>8h30/17h</strong> (8103)</li></ul><h4>Mails</h4><ul><li>UrGO + consultation : urgmater@ghpsj.fr</li><li>Secrétariat : rdvmater@ghpsj.fr</li></ul>
    `
  },
  {
    id: 'p6',
    label: 'Porte 6',
    type: 'porte-paire',
    infoHtml: `
      <h3>Porte 6</h3><h4>HOSPITALISATIONS</h4><ul><li>NEUROLOGIE / NEURO-VASCULAIRE (3e) - 3766</li><li>SOINS INTENSIFS CARDIOLOGIE (2e) - 3472</li><li>CHIR VASCULAIRE (1er) - 3754</li><li>UMAB SERVICE IDE : 3275/8303 // UMAB BILAN PREVENTION 6826</li></ul><h4>CONSULTATIONS</h4><ul><li>EXAMEN CARDIOLOGIE -IDE : 6722 que en interne ,RDV:7023 (ECG. ECHO COEUR etc..</li></ul>
    `
  },
  {
    id: 'p8',
    label: 'Porte 8',
    type: 'porte-paire',
    infoHtml: `
      <h3>Porte 8 : Consultations Cardio, Diabèto, Neuro et Rythmologie</h3><table><thead><tr><th>Équipe</th><th>Fonctions</th><th>Numéros (Interne/Externe)</th><th>Spécialités</th><th>Chef de Service</th></tr></thead><tbody><tr><td>FALL Léonard</td><td rowspan=4 style='vertical-align:middle;'>SECRETAIRE</td><td>163746 / 3746</td><td>CARDIO</td><td>Dr Cador</td></tr><tr><td>SCHWARTZENBERG Léticia</td><td>166145 / 6145</td><td>DIABETO</td><td>Dr Dupuy</td></tr><tr><td>SIMBA Abiba</td><td>163769 / 3769</td><td>NEURO</td><td>Dr Zuber</td></tr><tr><td>BOUDEFOUA Hassiba</td><td>163725 / 3725</td><td>RYTHMO</td><td>Dr Cador</td></tr><tr><td>MILZINK Timmy<br>MINH Olivia</td><td>AGENT ACCUEIL</td><td>3112</td><td colspan='2'></td></tr></tbody></table><h4>Horaires d'ouverture</h4><ul><li>Accueil téléphonique : <strong class='horaires-highlight'>10h/16h</strong></li><li>Accueil Physique : <strong class='horaires-highlight'>8h / 17h</strong></li></ul><h4>Mails</h4><ul><li>Cardio : cs-cardiologie@ghpsj.fr</li><li>Neuro : cs-neurologie@ghpsj.fr</li><li>Diabèto : cs-diabétologie@ghpsj.fr</li><li>Rythmo : cs-rythmologie@ghpsj.fr</li></ul>
    `
  },
  {
    id: 'p10',
    label: 'Porte 10',
    type: 'porte-paire',
    infoHtml: `
      <h3>Porte 10</h3><h4>HOSPITALISATIONS</h4><ul><li>SUITE DE NAISSANCES (5e/6e) - 8150 / 8160 / 6998 / 6717</li><li>GROSSESSES À RISQUES</li><li>CHIR GYNÉCOLOGIQUE / PLASTIQUE / ESTHÉTIQUE (4e)</li><li>HDS GASTRO - 8140</li><li>NÉONATALOGIE (3e) - 8911</li><li>CHIR UROLOGIQUE (2e) - 3834</li><li>RÉANIMATION-USC - 3080</li><li>UMAB - Inscription</li></ul><h4>CONSULTATIONS</h4><ul><li>SERVICE / UMAB HDJ - Inscription</li><li>MATERNITÉ</li><li>ENDOMÉTRIOSE - 7740</li><li>FIBRO VÉSICALE (2e) - 3834</li></ul>
    `
  },
  {
    id: 'p12',
    label: 'Porte 12',
    type: 'porte-paire',
    infoHtml: `
      <h3>Porte 12 : HDJ Médecine et HDJ Allergo</h3><table><thead><tr><th>Équipe</th><th>Fonctions</th><th>Numéros (Interne/Externe)</th><th>Spécialités</th></tr></thead><tbody><tr><td>GARCIA COELHO Inês</td><td>AM REF</td><td>163407 / 3407</td><td rowspan=2>HDJ MED</td></tr><tr><td>CISSE Sira</td><td rowspan=4 style='vertical-align:middle;'>PROGRAMMATRICE</td><td>163408 / 3408</td></tr><tr><td>DIABIRA Bambi</td><td rowspan=3>167599 / 7599</td><td rowspan=3>HDJ ALLERGO</td></tr><tr><td>KEBKOUB Hanane</td></tr><tr><td>N DIAYE Hawa</td></tr></tbody></table><h4>Horaires d'ouverture</h4><ul><li>Accueil physique et téléphonique : <strong class='horaires-highlight'>9h/17h</strong></li></ul><h4>Mails</h4><ul><li>Programmation HDJ Allergo : prog-allergo@ghpsj.fr</li><li>Programmation HDJ Médecine : prog-hdj@ghpsj.fr</li></ul>
    `
  },
  {
    id: 'p14',
    label: 'Porte 14',
    type: 'porte-paire',
    infoHtml: `
      <h3>Porte 14 - Consultations</h3><h4>Secrétariats de Consultation (Dermato, Pneumo, Douleur, Rhumato, Méd. Interne)</h4><p><strong>Horaires:</strong> Accueil physique et téléphonique de <strong class='horaires-highlight'>8h à 18h</strong></p><table><thead><tr><th>Équipe</th><th>Fonction</th><th>N° Interne</th><th>N° Externe</th><th>Spécialité</th><th>Chef de Service</th></tr></thead><tbody><tr><td>MASSIAS Marie Christine</td><td>Aide Secrétaire</td><td>3277</td><td></td><td>Toutes</td><td></td></tr><tr><td>BAZIN Séverine</td><td>AM REF</td><td>166747</td><td>6747</td><td>Pneumologie</td><td>Dr Naccache</td></tr><tr><td>CELIK Angèle</td><td>Secrétaire</td><td>163153</td><td>3153</td><td>Pneumologie</td><td>Dr Naccache</td></tr><tr><td>GAMMA Sophie</td><td>Secrétaire</td><td>163558</td><td>3558</td><td>Dermatologie</td><td>Dr Fite</td></tr><tr><td>JABALLAH Samah</td><td>Secrétaire</td><td>163559</td><td>3559</td><td>Dermatologie</td><td>Dr Fite</td></tr><tr><td>LHAMRI Laila</td><td>Secrétaire</td><td>167317</td><td>7317</td><td>Rhumato / Méd Int</td><td>Dr Hayem / Dr Azria</td></tr><tr><td>ESNAULT Marine</td><td>Secrétaire</td><td>167317</td><td>7317</td><td>Rhumato / Méd Int</td><td>Dr Hayem / Dr Azria</td></tr><tr><td>EL SAYED DAOUD Mona</td><td>Secrétaire</td><td>166180</td><td>6180</td><td>Douleur</td><td>Dr d'Ussel</td></tr><tr><td>GASSAMA Macoura</td><td>Agent Accueil</td><td>6154</td><td></td><td>Toutes</td><td></td></tr></tbody></table><h4>Mails des Secrétariats</h4><ul><li><strong>Dermatologie:</strong> cs-dermato@ghpsj.fr</li><li><strong>Rhumatologie:</strong> cs-rhumato@ghpsj.fr</li><li><strong>Méd. Interne:</strong> cs-medint@ghpsj.fr</li><li><strong>Pneumologie:</strong> cs-pneumologie@ghpsj.fr</li><li><strong>Douleur:</strong> sec-douleur@ghpsj.fr</li></ul><h4>Informations Générales (Hospitalisations & Consultations)</h4><ul><li>HDS Rhumato (2e) - 6412</li><li>UMAT GASTRO 2eme étages perfusion de Fer - 7480</li><li>ONCOLOGIE-THORACIQUE (3e) - 3712</li><li>HDS ONCO/RHUMATO TEL:6412 (hôpital de semaine)</li><li>MED INTERNE (1er 6875 et 4e 6374)</li><li>PNEUMOLOGIE ALLERGOLOGIE (3e) - 3392</li><li>RHUMATologie (1er) - 3860</li><li>HDJ MÉDECINE - 3408</li><li>NEURO-VASCULAIRE (Unité de Soins Intensifs) - 3721</li></ul>
    `
  },
  {
    id: 'p16',
    label: 'Porte 16',
    type: 'porte-impaire',
    infoHtml: `
      <h3>Porte 16 : Consultations Oncologie</h3><h4>Contacts des Secrétariats</h4><p><strong>Horaires d'ouverture:</strong> Accueil physique et téléphonique <strong class='horaires-highlight'>9h-18h</strong></p><table><thead><tr><th>Service</th><th>Contact(s)</th></tr></thead><tbody><tr><td>Consultation</td><td><strong>01 44 12 31 89</strong> / <strong>3078</strong></td></tr><tr><td>Programmation Consultation</td><td>3415 / 6209</td></tr><tr><td>Accueil HDJ Chimio</td><td><strong>01 44 12 30 88</strong> / 8087</td></tr><tr><td>Programmation Chimio</td><td><strong>01 44 12 37 63</strong> / 7573</td></tr><tr><td>UMAT et HDS Oncologie</td><td><strong>01 44 12 75 30</strong></td></tr><tr><td>Hospitalisation Oncologie</td><td><strong>01 44 12 61 20</strong></td></tr></tbody></table><h4>Mails</h4><ul><li><strong>Oncologie :</strong> cs-oncologie@ghpsj.fr</li></ul><h4>Chef de Service</h4><ul><li>Pr Eric RAYMOND</li></ul>
    `
  },
  {
    id: 'p18',
    label: 'Porte 18',
    type: 'porte-impaire',
    infoHtml: `
      <h3>Porte 18</h3><h4>SERVICE</h4><ul><li>Laboratoire d'ana-pathologie sec: 3645</li></ul>
    `
  },
  {
    id: 'p20',
    label: 'Porte 20',
    type: 'autre-point',
    infoHtml: `
      <h3>Porte 20</h3><ul><li>Chambre mortuaire TEL: 6802 </li></ul>
    `
  },
  {
    id: 'p22',
    label: 'Porte 22',
    type: 'autre-point',
    infoHtml: `
      <h3>Porte 22</h3><h4>CONSULTATIONS</h4><ul><li>CE (comité d'entreprise) - 3065</li><li>PLATEFORME DE PRISE DE RDV - 8200</li><li>Ext - 8000</li></ul>
    `
  },
  {
    id: 'pK',
    label: 'Entrée 5 (Ex-Porte K)',
    type: 'autre-point',
    infoHtml: `
      <h3>Entrée 5 (Anciennement Porte K) : Consultations ORL et Chirurgie Maxillo-Faciale</h3>
      <p style='color: #2ecc71; font-weight: bold;'>SERVICE OUVERT ET TRANSFÉRÉ</p>
      <p><strong>Horaires d'ouverture :</strong> Accueil physique et téléphonique de <strong class='horaires-highlight'>8h à 18h</strong></p>
      <table><thead><tr><th>Équipe</th><th>Fonctions</th><th>N° Interne</th><th>N° Externe</th><th>Spécialités</th><th>Chef de Service</th></tr></thead><tbody><tr><td>BELLARA Sarah<br>OUHAGUI Samia<br>SILVETTI Marina</td><td>SECRETAIRE</td><td>167698<br>165840<br>167699</td><td rowspan='3' style='text-align: center; vertical-align: middle;'><strong>3378</strong></td><td rowspan='3' style='vertical-align: middle;'>ORL / CMF</td><td rowspan='3' style='vertical-align: middle;'>Dr Sauvaget (ORL)<br>Dr Benichou (CMF)</td></tr><tr><td>ALLOUI Anissa</td><td>PROGRAMMATRICE</td><td>6390</td></tr><tr><td>HALAWANJI Nour<br>PHILIPPE Jennifer</td><td>AGENT ACCUEIL</td><td>167699</td></tr></tbody></table>
      <h4>Mails</h4><ul><li><strong>ORL:</strong> cs-orl@ghpsj.fr</li><li><strong>Stomato (CMF):</strong> cs-sto-cmf@ghpsj.fr</li><li><strong>Programmation:</strong> orl-cmf-stomato@ghpsj.fr</li></ul>
      <p style='margin-top:10px; color:#ff4d4d;'><b>Attention :</b> L'accès se fait désormais par l'<strong>ENTRÉE 5</strong> (193 rue Raymond Losserand).</p>
    `
  },
  {
    id: 'urgences',
    label: 'Urgences',
    type: 'autre-point',
    infoHtml: `
      <h3>Accès 189 : Urgences Générales Adultes</h3>
      <p><strong>Adresse:</strong> 189 rue Raymond Losserand</p>
      <h4>Équipe Administrative Urgences (SAU)</h4>
      <p><strong>Horaires d'ouverture:</strong> Accueil physique et téléphonique <strong class='horaires-highlight'>24h/24</strong></p>
      <table style="width: 100%; border-collapse: collapse; color: black !important;">
        <thead>
          <tr style="background-color: #f0f0f0;">
            <th style="padding: 8px; border: 1px solid #ccc; color: black !important;">ÉQUIPE</th>
            <th style="padding: 8px; border: 1px solid #ccc; color: black !important;">FONCTIONS</th>
            <th style="padding: 8px; border: 1px solid #ccc; color: black !important;">NUMERO</th>
            <th style="padding: 8px; border: 1px solid #ccc; color: black !important;">SPECIALITÉS</th>
            <th style="padding: 8px; border: 1px solid #ccc; color: black !important;">CHEF DE SERVICE</th>
          </tr>
        </thead>
        <tbody>
          <!-- AM JOUR (Vert) -->
          <tr>
            <td style="background-color: #ddead1 !important; color: black !important; padding: 8px; border: 1px solid #ccc;">
              ANNETTE Karen<br>DAGO Lixon<br>FABRIANO Sophia<br>HAROUNA Magalie<br>SOARES SEMEDO Olivia
            </td>
            <td style="background-color: #ddead1 !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">AM JOUR</td>
            <td style="background-color: #ddead1 !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">3458</td>
            <td rowspan="4" style="background-color: white !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">URGENCES</td>
            <td rowspan="4" style="background-color: white !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">Dr Ganansia</td>
          </tr>
          <!-- AM HOSPI (Jaune) -->
          <tr>
            <td style="background-color: #fff2cc !important; color: black !important; padding: 8px; border: 1px solid #ccc;">
              DELABY Soryann<br>SAMAKE Kady
            </td>
            <td style="background-color: #fff2cc !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">AM HOSPI</td>
            <td style="background-color: #fff2cc !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">5310</td>
          </tr>
          <!-- AML (Orange) -->
          <tr>
            <td style="background-color: #fce5cd !important; color: black !important; padding: 8px; border: 1px solid #ccc;">
              ANDOQUE Angélique<br>MASSOU Mariam<br>SAHRANE Imane
            </td>
            <td style="background-color: #fce5cd !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">AML</td>
            <td style="background-color: #fce5cd !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">3949</td>
          </tr>
          <!-- AM NUIT (Bleu) -->
          <tr>
            <td style="background-color: #cfe2f3 !important; color: black !important; padding: 8px; border: 1px solid #ccc;">
              MERT Cinthya<br>RINTO Johann<br>YARIMKESIS Nathan<br>CLAUDE Hugo<br>KAMTALI Oumaima<br>SAHRANE Leila<br>SULBERT Clara
            </td>
            <td style="background-color: #cfe2f3 !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">AM NUIT</td>
            <td style="background-color: #cfe2f3 !important; color: black !important; padding: 8px; border: 1px solid #ccc; text-align: center; vertical-align: middle;">3458</td>
          </tr>
        </tbody>
      </table>
      <h4>Mails</h4><ul><li><strong>Accueil urgences:</strong> admsau@ghpsj.fr</li><li><strong>Hospi:</strong> amsau@ghpsj.fr</li><li><strong>Secrétariat:</strong> urgences@ghpsj.fr</li></ul>
    `
  },
  {
    id: 'cmt',
    label: 'CMT',
    type: 'autre-point',
    infoHtml: `
      <h3>CMT - Centre Marie-Thérèse</h3>
      <div style="margin-bottom: 20px;">
        <h4 style="color: #00e5ff; margin-bottom: 5px; font-size: 1.1em;"><i class="fa-solid fa-location-dot"></i> RESTE À LA PORTE H (Bâtiment Historique)</h4>
        <ul style="list-style-type: disc; padding-left: 20px;">
            <li><strong>Médecine Générale, Cardio, Doppler, Pneumo, Dermato, Rhumato...</strong></li>
            <li>Secrétariat Généraliste : <strong>6170</strong> (Géré par Kévin)</li>
            <li style="color: #ef4444; font-weight: bold; margin-top: 5px;">⛔ NE PAS transférer les appels du Centre de la Femme / Sein à ce secrétariat.</li>
        </ul>
      </div>

      <div style="background-color: rgba(30, 41, 59, 0.5); padding: 15px; border-radius: 8px; border-left: 4px solid #2ecc71;">
        <h4 style="color: #2ecc71; margin-top: 0; margin-bottom: 5px; font-size: 1.1em;"><i class="fa-solid fa-person-walking-arrow-right"></i> DÉMÉNAGÉ À L'ENTRÉE 5</h4>
        <p style="margin-bottom:5px; font-size: 0.9em; color: #cbd5e1;">(193 rue Raymond Losserand)</p>
        <ul style="list-style-type: disc; padding-left: 20px;">
            <li><strong>Centre de la Femme / Gynécologie</strong></li>
            <li><strong>Centre du Sein</strong></li>
            <li>RDV Mammo / Gynéco : <strong>8484</strong></li>
            <li>Secrétariat Gynéco : <strong>7173</strong></li>
        </ul>
      </div>
    `
  },
  {
    id: 'oph',
    label: 'OPH',
    type: 'autre-point',
    infoHtml: `
      <h3>Institut de la Vue (OPH)</h3><h4>Adresse</h4><ul><li>168 Rue Raymond losserand 75014 Tel :Sec Cs = 3039 // Progra = 3420 </li></ul>
    `
  },
  {
    id: 'progra',
    label: 'Progra.',
    type: 'autre-point',
    infoHtml: `
      <h3>Secrétariats de Programmation & Contacts Utiles</h3><h4>Secrétariats de Programmation</h4><table><thead><tr><th>Service</th><th>Numéro(s)</th></tr></thead><tbody><tr><td>Prog Chir Plastie</td><td>163771 / 163756</td></tr><tr><td>Prog HDJ</td><td>163407 / 163408 / 167599</td></tr><tr><td>Prog Onco</td><td>3776</td></tr><tr><td>Prog Chir Vasc artères / FAV</td><td>163060 - 164902 / 3740</td></tr><tr><td>Prog ORL / CMF</td><td>6390</td></tr><tr><td>Prog OPH</td><td>3420</td></tr><tr><td>Prog Procto</td><td>7537 / 7196</td></tr><tr><td>Prog Gynéco</td><td>7173</td></tr><tr><td>Prog Pluri (Uro, Vasc, Dig)</td><td>163457</td></tr></tbody></table><h4>Cadres de santé</h4><table><thead><tr><th>Nom</th><th>Spécialités</th><th>Numéro</th></tr></thead><tbody><tr><td>RICHET Ingrid</td><td>Ortho / Vasc</td><td>6151</td></tr><tr><td>CHABROL Emmanuelle</td><td>Uro / Dig / Gynéco</td><td>8214</td></tr><tr><td>BLANCHE Corinne</td><td>IADES</td><td>7241</td></tr><tr><td>GOUEZ Fabien</td><td>ORL / OPH / CMF / Plastie</td><td>6743</td></tr><tr><td>KENESI Marie</td><td>Plateau des endos</td><td>7673</td></tr><tr><td>RABAUD Mathilde</td><td>UCA</td><td>7692</td></tr></tbody></table><h4>Autres contacts</h4><table><thead><tr><th>Service/Contact</th><th>Numéro</th></tr></thead><tbody><tr><td>DUJARDIN Nathalie</td><td>7468</td></tr><tr><td>Le secrétariat d'Anesthésie</td><td>165502 / 165503</td></tr><tr><td>L'UCA</td><td>8122</td></tr></tbody></table>
    `
  }
];

// ============================================================================
// 5. NUMEROS UTILES
// ============================================================================
export const usefulNumbers: UsefulNumberCategory[] = [
  {
    title: "Urgences",
    icon: "fa-triangle-exclamation",
    colorTheme: 'red',
    items: [
      { label: 'Agression', contact: 'Sécurité', num: '14', itemIcon: 'fa-user-shield' },
      { label: 'Incendie', contact: 'Sécurité', num: '10', itemIcon: 'fa-fire' },
      { label: 'Situation Vitale', contact: 'Réa de garde', num: '6991', itemIcon: 'fa-heart-pulse' },
      { label: 'Arrêt Cardio Respiratoire', contact: 'ACR', num: '7333', itemIcon: 'fa-skull-crossbones' },
    ]
  },
  {
    title: "Problèmes du quotidien",
    icon: "fa-screwdriver-wrench",
    colorTheme: 'orange',
    items: [
      { label: 'Stage administratif', contact: 'DRH', num: '3980', itemIcon: 'fa-graduation-cap' },
      { label: 'Stage Paramedical', contact: 'DRH', num: '01 40 94 86 44', itemIcon: 'fa-user-graduate' },
      { label: 'Ma fiche de paie', contact: 'Gestionnaire paie', num: '3101', itemIcon: 'fa-file-invoice-dollar' },
      { label: 'Ma session en télétravail', contact: 'Informatique', num: '0144123805', itemIcon: 'fa-network-wired' },
      { label: 'Ma session / mon PC ...', contact: 'Informatique', num: '11', itemIcon: 'fa-computer' },
      { label: 'Mon téléphone / DECT', contact: 'Téléphonie', num: '6161', itemIcon: 'fa-phone' },
      { label: 'Mon imprimante', contact: 'MCA-APOGEE', num: '#6539', itemIcon: 'fa-print' },
      { label: 'Coffre bloqué, clé perdue...', contact: 'Maintenance', num: '19', itemIcon: 'fa-key' },
      { label: 'Plainte de patient', contact: 'Relations patients', num: '3585', itemIcon: 'fa-face-frown' },
      { label: 'Mon Qmatic', contact: 'T. Lachkar', num: '3944', itemIcon: 'fa-users-line' },
      { label: 'Mon TPE (Code banque 17515)', contact: 'Assistance TPE', num: '0969391617', itemIcon: 'fa-credit-card' },
      { label: 'Une facture', contact: 'Recouvrement', num: '3167', itemIcon: 'fa-file-invoice' },
      { label: "Un problème d'hygiène", contact: 'Ménage', num: '7900', itemIcon: 'fa-broom' },
      { label: 'Une Ambulance', contact: 'Paramédic', num: '0184209116', itemIcon: 'fa-truck-medical' },
      { label: 'Un brancard', contact: 'Régul transport', num: '7738', itemIcon: 'fa-bed-stretcher' },
      { label: 'Service social', contact: 'Equipe Sociale', num: '3010', itemIcon: 'fa-hand-holding-heart' },
      { label: 'La caisse centrale', contact: 'T. Guedj', num: '3881', itemIcon: 'fa-cash-register' },
    ]
  },
  {
    title: "Les Petits Plus",
    icon: "fa-gift",
    colorTheme: 'purple',
    items: [
      { label: 'Chèques vacances, Tickets ciné...', contact: 'Le CE', num: '3065', itemIcon: 'fa-ticket' },
      { label: 'Moments détentes', contact: 'La Bulle', num: '7676', itemIcon: 'fa-spa' },
      { label: 'Nouvelles de Bébé', contact: 'La crèche', num: '3885', itemIcon: 'fa-baby' },
      { label: 'Ma voiture', contact: 'Parking', num: '6372', itemIcon: 'fa-car' },
      { label: 'Rester en forme', contact: 'Salle de sport', num: '6379', itemIcon: 'fa-dumbbell' },
    ]
  },
  {
    title: "Hors Plateau de Consultation",
    icon: "fa-hospital",
    colorTheme: 'teal',
    items: [
      { label: 'Imagerie', contact: 'Hall Principal - N 0', num: '8060', itemIcon: 'fa-x-ray' },
      { label: 'Labos', contact: 'Porte 2 - N G', num: '3653', itemIcon: 'fa-flask' },
      { label: 'Proctologie', contact: 'Porte 3 - N G', num: '7245', itemIcon: 'fa-stethoscope' },
      { label: 'OPH Glaucome', contact: 'Bâtiment Watt', num: '3039', itemIcon: 'fa-eye' },
      { label: 'Centre du Sein', contact: 'Entrée 5', num: '7173', itemIcon: 'fa-ribbon' },
      { label: 'CMT St Joseph', contact: 'Entrée 5', num: '6170', itemIcon: 'fa-house-medical' },
      { label: 'CMT Malakoff', contact: 'Malakoff', num: '8805', itemIcon: 'fa-location-dot' },
      { label: 'CMT Paris 15 / Castagnary', contact: 'Paris 15', num: '8433', itemIcon: 'fa-location-dot' },
      { label: 'Plateforme Kiné', contact: 'Porte 1 - N G', num: '6348', itemIcon: 'fa-person-walking' },
      { label: 'Chambre mortuaire', contact: 'Porte 20', num: '6802', itemIcon: 'fa-cross' },
      { label: 'Médecine du travail', contact: 'Bat ND -2éme', num: '3508', itemIcon: 'fa-user-doctor' },
      { label: 'Aura', contact: 'Entrée 189', num: '#6570', itemIcon: 'fa-kidneys' },
      { label: 'Arago', contact: 'Entrée 189', num: '#6049', itemIcon: 'fa-building' },
      { label: 'Bellan', contact: 'Entrée 189', num: '#6331', itemIcon: 'fa-building-user' },
      { label: 'UMAB', contact: 'Porte 6 - N G', num: '3090', itemIcon: 'fa-bed' },
    ]
  }
];

// ============================================================================
// 6. ENCADREMENT ET RESPONSABLES
// ============================================================================
export const encadrementData: EncadrementEntry[] = [
  // Cardio-neuro
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "CADOR Romain", perimetre: "Coordonnateur médical", tel: "7811", localisation: "St Jean porte 2 niveau 2", isLeader: true },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "PINOT KAREN", perimetre: "Coordonnatrice paramédicale", tel: "8088", localisation: "St Jean porte 6 niveau 3" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "ADON-EBRAN Marie-Nelly", perimetre: "Assistante de coordination", tel: "7809", localisation: "St Jean porte 6 niveau 3" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "LAZURE Francine", perimetre: "Cardiologie / USI cardiologie", tel: "6941", localisation: "St Jean porte 6 niveau 2" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "ADJALLA Samira (IDE référente)", perimetre: "USI Cardiologie / Cardiologie", tel: "6813", localisation: "St Jean porte 4 niveau 2" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "DE ABREU Flora (IDE référente)", perimetre: "Hospitalisation cardiologie", tel: "7970", localisation: "St Jean porte 2 niveau 2" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "DE BEAUDRAP Anne-Lise (IDE référente)", perimetre: "Neurologie, neuro vasc", tel: "6349", localisation: "St Jean porte 2 niveau 3" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "DE BEAUGRENIER DIANE", perimetre: "Neurologie, neuro vasc et USI neuro vasc", tel: "7641", localisation: "St Jean porte 6 niveau 3" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "LAKHANI Anissa (IDE référente)", perimetre: "USI neurovasculaire", tel: "7756", localisation: "St Jean porte 14 niveau 0" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "ROLLAND PATRICIA", perimetre: "Explorations cardio vasculaire et UMA Bilans", tel: "3837", localisation: "St Jean porte 6 niveau 2" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "PLETAN Marion", perimetre: "Diabétologie-endocrinologie, diététique", tel: "7839", localisation: "St Jean porte 2 niveau 1" },
  { pole: "Cardio-neuro vasculaire et métabolique", nom: "PERRIN Anne-Sophie", perimetre: "Chirurgie vasculaire", tel: "7918", localisation: "St Jean porte 6 niveau 1" },
  
  // Maternité, gynéco, uro
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "AZRIA Elie", perimetre: "Coordonnateur médical", tel: "7770", localisation: "St Jean porte 6 niveau 1", isLeader: true },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "BROCHON Sandie", perimetre: "Coordonnatrice paramédicale", tel: "7292", localisation: "St Jean porte 10 niveau 4" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "LESCOUTÈRES Véronique", perimetre: "Assistante de coordination", tel: "8148", localisation: "St Jean porte 10 niveau 4" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "LE GREY Alexandra (cadre de santé)", perimetre: "Chirurgie urologique", tel: "7935", localisation: "St Jean porte 10 niveau 2" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "MITRECE Margot (cadre de santé)", perimetre: "Chirurgie gynéco et plastique et GHR", tel: "8073", localisation: "St Jean porte 10 niveau 4" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "MARTINEL Nadine (IDE référente)", perimetre: "Chirurgie urologique", tel: "8074", localisation: "St Jean porte 10 niveau 2" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "PREVAULT Emilie (cadre de santé)", perimetre: "Consultation", tel: "3751", localisation: "St Jean porte 10 niveau 1" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "MORIVAL Gaëlle (cadre sage-femme)", perimetre: "Suites de naissances, grossesses à haut risque (GHR)", tel: "6717", localisation: "St Jean porte 10 niveaux 5 et 6" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "THIOLLIER Marie-Cécile (cadre IDE puéricultrice référente)", perimetre: "Suites de naissances", tel: "7769", localisation: "St Jean porte 10 niveaux 5 et 6" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "SEREY Clémentine (cadre infirmière puéricultrice)", perimetre: "Néonatalogie", tel: "6811", localisation: "St Jean porte 10 niveau 3" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "LE FOL Olivia (IDE formatrice)", perimetre: "Néonatalogie", tel: "7716", localisation: "St Jean porte 10 niveau 3" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "TAHIRI Safia (cadre sage-femme)", perimetre: "Urgences gynéco-obstétriques, salle de naissance", tel: "6701", localisation: "St Jean porte 4 niveau 0" },
  { pole: "Maternité, gynécologie, urologie, plastique", nom: "AUVRAY Alice (cadre de santé)", perimetre: "Urgences gynéco-obstétriques, salle de naissance", tel: "6715", localisation: "St Jean porte 4 niveau 0" },

  // Chirurgie
  { pole: "Spécialités chirurgicales", nom: "DE PARADES Vincent", perimetre: "Coordonnateur médical", tel: "7631", localisation: "St Gen. Porte 5 niveau 1", isLeader: true },
  { pole: "Spécialités chirurgicales", nom: "SIMONET Carole", perimetre: "Assistante Manager", tel: "7114", localisation: "St Gen. porte 5 niveau 3" },
  { pole: "Spécialités chirurgicales", nom: "SINA Marie", perimetre: "Nuit", tel: "6712", localisation: "St Jean porte 2 niveau G" },
  { pole: "Spécialités chirurgicales", nom: "CHAPRON Bastien (cadre référent)", perimetre: "Nuit", tel: "6712", localisation: "St Jean porte 2 niveau G" },
  { pole: "Spécialités chirurgicales", nom: "BOCQUIN Chloe(Cadre)", perimetre: "Chirurgie Orthopedie", tel: "7796/3855", localisation: "St Gen. Porte 1 niveau 3" },
  { pole: "Spécialités chirurgicales", nom: "BENARBIA Elodie", perimetre: "Chirurgie digestive, gastro entérologie", tel: "7297", localisation: "St Gen. Porte 5 niveau 2" },
  { pole: "Spécialités chirurgicales", nom: "NEVES Marta (IDE référente)", perimetre: "Chirurgie digestive", tel: "7627", localisation: "St Gen. Porte 5 niveau 2" },
  { pole: "Spécialités chirurgicales", nom: "MERCIER Elise (IDE référente)", perimetre: "Gastro entérologie", tel: "7659", localisation: "St Gen. Porte 5 niveau 2" },
  { pole: "Spécialités chirurgicales", nom: "MORVAN Stéphanie (IDE référente)", perimetre: "Proctologie, ORL, CMF", tel: "6972", localisation: "St Gen. porte 5 niveau 1" },
  { pole: "Spécialités chirurgicales", nom: "ROY Christelle (IDE référente)", perimetre: "Chirurgie orthopédique, OPH", tel: "3082", localisation: "St Gen. porte 5 niveau 3" },
  { pole: "Spécialités chirurgicales", nom: "ROLLAND Patricia", perimetre: "UCA", tel: "7892", localisation: "St Gen. Porte 5 niveau 1" },

  // Médicales
  { pole: "Spécialités médicales, oncologie, SAU", nom: "RAYMOND Eric", perimetre: "Coordonnateur médical", tel: "3495", localisation: "Bâtiment Larousse N3", isLeader: true },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "LECOCQ Laurence", perimetre: "Coordonnatrice paramédicale", tel: "7739", localisation: "St Michel porte 14 niveau 1" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "GRIM-GAUGAIN Fabrice", perimetre: "Assistant de coordination", tel: "3171", localisation: "St Michel porte 14 niveau 1" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "GAUCHET Bénédicte", perimetre: "Service d'Accueil des Urgences (SAU)", tel: "7557", localisation: "Bât St Vincent NG" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "SILVESTRE Geneviève", perimetre: "Service d'Accueil des Urgences (SAU)", tel: "6021", localisation: "Bât St Vincent NG" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "DE OLIVEIRA Marie", perimetre: "Médecine interne", tel: "6676", localisation: "St Michel porte 14 niveau 1/4" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "NOGUES Laura (IDE Réf)", perimetre: "Médecine interne", tel: "6839", localisation: "St Michel porte 14 niveau 1/4" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "BETTLER-GORY Véronique", perimetre: "Oncologie et HDJ oncologie", tel: "3248", localisation: "St Michel porte 14 niveau 2/5" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "VARIERAS Adeline (IDE référente)", perimetre: "Oncologie et HDJ oncologie", tel: "7788", localisation: "St Michel porte 14 niveau 2/5" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "GROS Véronique", perimetre: "Soins palliatifs", tel: "7052", localisation: "Bât Notre Dame porte 10 niveau 1" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "BARRAU Anne-Sophie", perimetre: "HDS-Onco-Gastro-UMAT", tel: "7526", localisation: "St Michel N2" },
  { pole: "Spécialités médicales, oncologie, SAU", nom: "LEBIGRE Aurélie", perimetre: "Rhumatologie", tel: "3526", localisation: "Ste Marie N3/ St Michel N3" },

  // Médico-tech
  { pole: "Médico-technique", nom: "LAPLANCHE Sophie", perimetre: "Coordonnatrice Opérationnel", tel: "7485", localisation: "Bâtiment Notre-Dame, niveau G", isLeader: true },
  { pole: "Médico-technique", nom: "ROLLAND Jérôme", perimetre: "Directeur Opérationnel", tel: "7933", localisation: "Porte 2, niveau 0, accueil B" },
  { pole: "Médico-technique", nom: "PETREMENT-LEMORT Marie", perimetre: "Assistante de coordination", tel: "7122", localisation: "Porte 11, niveau 2" },
  { pole: "Médico-technique", nom: "GIRAUD Julie", perimetre: "Cadre Médico-Technique Département Biologie médicale Laboratoire", tel: "7499", localisation: "Bâtiment Notre Dame, Niveau 1" },
  { pole: "Médico-technique", nom: "LEROUX Caroline", perimetre: "Cadre Médico-Technique Biologie HPSJ", tel: "3803", localisation: "Bâtiment Notre Dame, Niveau 0" },
  { pole: "Médico-technique", nom: "LEROUX Caroline", perimetre: "Cadre Médico-Technique Microbiologie HPSJ", tel: "3817", localisation: "Bâtiment Notre Dame, Niveau 1" },
  { pole: "Médico-technique", nom: "CLAQUIN Romain", perimetre: "Cadre Médico-Technique Biologie HML", tel: "2588", localisation: "Bâtiment Notre Dame, Niveau 0" },
  { pole: "Médico-technique", nom: "LEROUX Caroline", perimetre: "Cadre Médico-Technique Anatomopathologie GHPSJ", tel: "7817", localisation: "Porte 18, niveau 1" },
  { pole: "Médico-technique", nom: "ROSZY Béatrice", perimetre: "Cadre Médico-Technique Imagerie HPSJ", tel: "6969", localisation: "Saint-Luc porte 0" },
  { pole: "Médico-technique", nom: "PRUVO Sylvie", perimetre: "Responsable Accueil Programmation Imagerie HPSJ", tel: "7652", localisation: "Porte 2, niveau 0, accueil B" },

  // Qualité
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "PAINCHAUD Marie-Hélène", perimetre: "Coordonnatrice paramédicale", tel: "3819", localisation: "Bât Notre Dame, 2ème étage", isLeader: true },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "SCIRE Laurence", perimetre: "Assistante Qualité - Gestion des risques", tel: "7484", localisation: "Bât Notre Dame, 2ème étage" },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "SUMBAL Davina", perimetre: "Gestionnaire des risques - Affaires juridiques", tel: "3788", localisation: "Bât Notre Dame, 2ème étage" },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "GERAUD Marguerite", perimetre: "Chargée qualité", tel: "8323", localisation: "Bât Notre Dame, 2ème étage" },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "PERNICENI Laurence", perimetre: "Cadre hygiéniste C-PIN", tel: "7767", localisation: "Bât Notre Dame, 2ème étage" },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "FAUNIÈRES Céline", perimetre: "Assistante Qualité - C-PIN", tel: "8268", localisation: "Bât Notre Dame, 2ème étage" },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "DE BERNY Laure", perimetre: "Chargée des relations patients", tel: "6179", localisation: "Bât Notre Dame, 2ème étage" },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "ATTA Rachida", perimetre: "Assistante relations patients", tel: "3585", localisation: "Bât Notre Dame, 2ème étage" },
  { pole: "Médico-technique : Qualité, Hygiène, Relations", nom: "EBENGOU Danielle", perimetre: "Assistante relations patients", tel: "3585", localisation: "Bât Notre Dame, 2ème étage" },

  // GIPP
  { pole: "GIPP", nom: "CARME Ingrid", perimetre: "Directrice opérationnelle des blocs", tel: "6147", localisation: "St Gen. Porte 5 niveau 1", isLeader: true },
  { pole: "GIPP", nom: "COUMAILLEAU Frédéric", perimetre: "Responsable opérationnel des blocs", tel: "3547", localisation: "St Gen. porte 5 niveau -1" },
];

// ============================================================================
// 7. SERVICES PAR LOCALISATION
// ============================================================================
export const servicesData: ServiceLocationEntry[] = [
  { code: "0000", service: "BRANCARDAGE", porte: "16", niveau: "", batiment: "St Michel", tel: "7738 / 7817 / (Service Vitele 5/5)" },
  { code: "0000", service: "CARDIO INTERVENTIONNELLE (PTI/HDJ)", porte: "6BIS", niveau: "0", batiment: "St Jean", tel: "8001" },
  { code: "6008", service: "CHIRURGIE VASCULAIRE", porte: "1", niveau: "1", batiment: "Ste Geneviève", tel: "3754" },
  { code: "6016", service: "LITS PORTE / LITS D'URGENCES", porte: "G", niveau: "0", batiment: "St Vincent", tel: "3969 / 7690 / 7036 / 8043 / 8045" },
  { code: "6016", service: "AURA DIALYSE", porte: "189", niveau: "", batiment: "AURA", tel: "#6570" },
  { code: "6017", service: "LITS D'URGENCES", porte: "G", niveau: "2", batiment: "St Vincent", tel: "8043" },
  { code: "6018", service: "HDJ GREFFES (med vasc)", porte: "Accès 2", niveau: "3", batiment: "St Vincent", tel: "3481" },
  { code: "6019", service: "MEDECINE VASCULAIRE", porte: "Accès 2", niveau: "1", batiment: "St Vincent", tel: "3762 / 3767 / 7996" },
  { code: "6021", service: "MEDECINE VASCULAIRE", porte: "Accès 2", niveau: "2", batiment: "St Vincent", tel: "7273 / 7601 / 7620" },
  { code: "6021", service: "MEDECINE VASCULAIRE", porte: "Accès 2", niveau: "3", batiment: "St Vincent", tel: "3270 / 3301 / 3446" },
  { code: "6033", service: "CARDIOLOGIE MEDECINE 2", porte: "2", niveau: "2", batiment: "St Jean", tel: "3404" },
  { code: "6034", service: "HDS NEURO", porte: "2", niveau: "3", batiment: "St Jean", tel: "3560" },
  { code: "6035", service: "HDJ DIABETO/ENDOCRINO", porte: "6", niveau: "G", batiment: "St Jean", tel: "3090" },
  { code: "6036", service: "HDS DIABETO/ENDOCRINO", porte: "2", niveau: "1", batiment: "St Jean", tel: "7911 / 3013" },
  { code: "6037", service: "CARDIOLOGIE", porte: "6", niveau: "2", batiment: "St Jean", tel: "3416" },
  { code: "6038", service: "NEUROLOGIE / NEURO VASCULAIRE", porte: "6", niveau: "3", batiment: "St Jean", tel: "3766 / 3530" },
  { code: "6039", service: "HDJ GREFFES (med vasc)", porte: "2", niveau: "3", batiment: "St Vincent", tel: "3847" },
  { code: "6047", service: "Hospi / ORL / STOMATOLOGIE", porte: "5 à 7", niveau: "1", batiment: "Ste Geneviève", tel: "7844" },
  { code: "6047", service: "Hospi / PROCTOLOGIE / GASTRO", porte: "5 à 7", niveau: "1", batiment: "Ste Geneviève", tel: "7904" },
  { code: "6048", service: "CHIR DIGESTIVE", porte: "5 à 7", niveau: "2", batiment: "Ste Geneviève", tel: "3188" },
  { code: "6048", service: "CHIR DIG / GASTRO", porte: "1", niveau: "2", batiment: "Ste Geneviève", tel: "7529 (ou 3204)" },
  { code: "6049", service: "CHIR ORTHOPEDIQUE", porte: "1", niveau: "3", batiment: "Ste Geneviève", tel: "Lits 00-22 => 7529 (ou 3204)" },
  { code: "6049", service: "CHIR ORTHOPEDIQUE", porte: "1", niveau: "3", batiment: "Ste Geneviève", tel: "Lits 24-40 => 3584 (ou 3204)" },
  { code: "6049", service: "CHIR ORTHOPEDIQUE", porte: "1", niveau: "3", batiment: "Ste Geneviève", tel: "Lits 42-64 => 7962 (ou 3204)" },
  { code: "6055", service: "HDJ DIABETO/ENDOCRINO", porte: "6", niveau: "G", batiment: "St Jean", tel: "3090 (Secrétariat)" },
  { code: "6057", service: "HDJ BILAN CARDIO / CHIR VASC MED VASC", porte: "6", niveau: "G", batiment: "St Jean", tel: "3275" },
  { code: "6059", service: "USI (soins intensifs) CARDIO", porte: "Accès 2", niveau: "2", batiment: "St Vincent", tel: "3472" },
  { code: "6066", service: "HDJ CHIR MAXILLO FACIALE", porte: "19B", niveau: "RDC", batiment: "St Vincent", tel: "3458 / 7049" },
  { code: "6088", service: "HDJ ENDOSCOPIES", porte: "7", niveau: "G", batiment: "Ste Geneviève", tel: "7904" },
  { code: "6089", service: "UCA: Unité de chirurgie ambulatoire", porte: "1", niveau: "1", batiment: "Ste Geneviève", tel: "8122 / 3861" },
  { code: "6329", service: "CHIR DIGESTIVE", porte: "5", niveau: "2", batiment: "Ste Geneviève", tel: "3813 / 7685 / 7688" },
  { code: "6339", service: "CHIR ORTHO / OPH", porte: "5", niveau: "3", batiment: "Ste Geneviève", tel: "3863" },
  { code: "6343", service: "SALLE DE NAISSANCE", porte: "4", niveau: "0", batiment: "St Jean", tel: "8170" },
  { code: "6345", service: "HDJ CARDIO INTERVENTIONNEL", porte: "6 Bis", niveau: "0", batiment: "St Jean", tel: "8001" },
  { code: "6401", service: "REANIMATION / USC NDBS", porte: "10", niveau: "0", batiment: "NDBS", tel: "3080" },
  { code: "6402", service: "REA COVID (visite 24h/24h 2 pers max)", porte: "10", niveau: "0", batiment: "NDBS", tel: "6008" },
  { code: "6402", service: "REANIMATION B", porte: "10", niveau: "0", batiment: "NDBS", tel: "3080" },
  { code: "6405", service: "UROLOGIE", porte: "10", niveau: "2", batiment: "NDBS", tel: "3834/7989" },
  { code: "6406", service: "NEONATALOGIE", porte: "10", niveau: "3", batiment: "NDBS", tel: "8911" },
  { code: "6407", service: "CHIR RECONSTR. / UROLOGIE / MED OBSTETRIQUE", porte: "10", niveau: "4", batiment: "NDBS", tel: "8140" },
  { code: "6408", service: "GROSSESSES A RISQUES / SUITES DE COUCHES", porte: "10", niveau: "5", batiment: "NDBS", tel: "8150" },
  { code: "6409", service: "MATERNITE SUITES DE COUCHES", porte: "10", niveau: "6", batiment: "NDBS", tel: "8160" },
  { code: "6410", service: "HDS GASTRO / HDS GYNECO", porte: "10", niveau: "4", batiment: "NDBS", tel: "8240 / 8140 / 8122" },
  { code: "6720", service: "USI NEURO VASC", porte: "14", niveau: "0", batiment: "St Michel", tel: "3721" },
  { code: "6721", service: "USC (salle de réveil) PAS DE VISITES", porte: "1-5", niveau: "0", batiment: "Ste Geneviève", tel: "3816" },
  { code: "6722", service: "NEURO VASC", porte: "14", niveau: "0", batiment: "St Michel", tel: "3722" },
  { code: "6730", service: "HDJ MEDECINE (Rhumato/Pneumo/Allergo)", porte: "14", niveau: "G", batiment: "St Michel", tel: "3408" },
  { code: "6740", service: "RHUMATOLOGIE", porte: "14", niveau: "1", batiment: "St Michel", tel: "3860 / 7012" },
  { code: "6745", service: "MEDECINE INTERNE", porte: "14", niveau: "1", batiment: "St Michel", tel: "6875 / 7861" },
  { code: "6750", service: "HDS ONCOLOGIE", porte: "14", niveau: "2", batiment: "St Michel", tel: "POSTE DE SOINS 6412" },
  { code: "6760", service: "HDJ ONCOLOGIE", porte: "14", niveau: "2", batiment: "St Michel", tel: "POSTE DE SOINS 7573 / 3735 SECRETARIAT 3088" },
  { code: "6770", service: "PNEUMOLOGIE / PNEUMO ONCO", porte: "14", niveau: "3", batiment: "St Michel", tel: "3392 / 3712" },
  { code: "6790", service: "ONCOLOGIE", porte: "14", niveau: "5", batiment: "St Michel", tel: "8341" },
  { code: "6791", service: "MEDECINE INTERNE", porte: "14", niveau: "4", batiment: "St Michel", tel: "6374" },
  { code: "6792", service: "HDS PNEUMO SOMMEIL (Apnée / INFIRMIERES)", porte: "11", niveau: "3", batiment: "Ste-Marie", tel: "POSTE DE SOINS 7970 SECRETARIAT 3783" },
  { code: "6793", service: "HDS CARDIOLOGIE", porte: "8", niveau: "2", batiment: "St Jean", tel: "POSTE DE SOINS 7979 SECRETARIAT 8207" },
  { code: "6794", service: "HC (hospitalisation continue) DIABETO", porte: "2", niveau: "2", batiment: "St Jean", tel: "3958" },
  { code: "", service: "HDJ Gastro", porte: "14", niveau: "2", batiment: "St Michel", tel: "7480" },
  { code: "", service: "HDJ Neuro", porte: "8", niveau: "", batiment: "St Jean", tel: "7478" },
  { code: "", service: "HDS Rhumatologie", porte: "14", niveau: "2", batiment: "St Michel", tel: "6951" },
];

// ============================================================================
// 8. CHEFS DE SERVICE
// ============================================================================
export const chefsDeService: OrganigrammeEntry[] = [
    { pole: "Cœur - Vaisseaux - Poumons", service: "Cardiologie Médicale et Interventionnelle", titre: "Chef de service", nom: "Dr Romain CADOR" },
    { pole: "Cœur - Vaisseaux - Poumons", service: "Chirurgie Cardiaque et Vasculaire", titre: "Chef de service", nom: "Dr Michel RAUX" },
    { pole: "Cœur - Vaisseaux - Poumons", service: "Pneumologie", titre: "Chef de service", nom: "Pr Jean-Marc NACCACHE" },
    { pole: "Cœur - Vaisseaux - Poumons", service: "Médecine Vasculaire", titre: "Chef de service", nom: "Dr Anne-Laure MICHON-PASTUREL" },
    { pole: "Appareil Digestif", service: "Gastro-entérologie et Endoscopie", titre: "Chef de service", nom: "Dr Olivier MARTY" },
    { pole: "Appareil Digestif", service: "Chirurgie Digestive et Proctologique", titre: "Chef de service", nom: "Dr Jérémy LORIAU" },
    { pole: "Appareil Digestif", service: "Institut de Proctologie", titre: "Coordonnateur", nom: "Dr Vincent de PARADES" },
    { pole: "Cancérologie", service: "Oncologie Médicale", titre: "Chef de service", nom: "Pr Eric RAYMOND" },
    { pole: "Cancérologie", service: "Hématologie", titre: "Chef de service", nom: "Dr Sylvain CHOQUET" },
    { pole: "Cancérologie", service: "Radiothérapie", titre: "Chef de service", nom: "Dr Alain TOLEDANO" },
    { pole: "Femme et Enfant", service: "Maternité et Gynécologie-Obstétrique", titre: "Chef de service", nom: "Pr Elie AZRIA" },
    { pole: "Femme et Enfant", service: "Chirurgie Gynécologique", titre: "Responsable d'unité", nom: "Dr Sofiane BENDIFALLAH" },
    { pole: "Femme et Enfant", service: "Centre de l'Endométriose", titre: "Coordonnateur", nom: "Dr Sofiane BENDIFALLAH" },
    { pole: "Spécialités Chirurgicales", service: "Ophtalmologie", titre: "Chef de service", nom: "Dr Yves LACHKAR" },
    { pole: "Spécialités Chirurgicales", service: "ORL et Chirurgie Cervico-faciale", titre: "Chef de service", nom: "Dr Éric SAUVAGET" },
    { pole: "Spécialités Chirurgicales", service: "Chirurgie Maxillo-faciale et Stomatologie", titre: "Responsable", nom: "Dr Laurent BÉNICHOU" },
    { pole: "Spécialités Chirurgicales", service: "Chirurgie Orthopédique et Traumatologique", titre: "Chef de service", nom: "Dr Guillaume RIOUALLON" },
    { pole: "Spécialités Chirurgicales", service: "Urologie", titre: "Chef de service", nom: "Pr Xavier DURAND" },
    { pole: "Spécialités Chirurgicales", service: "Chirurgie Plastique, Reconstructrice et Esthétique", titre: "Chef de service", nom: "Dr Patrick LEVAN" },
    { pole: "Spécialités Médicales", service: "Dermatologie", titre: "Chef de service", nom: "Dr Catherine FITE" },
    { pole: "Spécialités Médicales", service: "Médecine Interne", titre: "Chef de service", nom: "Dr Benjamin AZRIA" },
    { pole: "Spécialités Médicales", service: "Rhumatologie", titre: "Chef de service", nom: "Dr Gérard HAYEM" },
    { pole: "Spécialités Médicales", service: "Endocrinologie, Diabétologie et Nutrition", titre: "Chef de service", nom: "Dr Anne-Sophie DUPUY" },
    { pole: "Spécialités Médicales", service: "Neurologie", titre: "Chef de service", nom: "Pr Mathieu ZUBER" },
    { pole: "Urgences - Réa - Anesthésie", service: "Anesthésie-Réanimation", titre: "Chef de service", nom: "Dr Patrick ALFONSI" },
    { pole: "Urgences - Réa - Anesthésie", service: "Urgences Adultes", titre: "Chef de service", nom: "Dr Olivier GANANSIA" }
];

// ============================================================================
// 9. CADRES DE SANTE
// ============================================================================
export const cadresDeSante: OrganigrammeEntry[] = [
    { pole: "Cardio-neuro vasculaire et métabolique", service: "Coordination Pôle", titre: "Coordonnatrice paramédicale", nom: "Karen PINOT", tel: "8088" },
    { pole: "Cardio-neuro vasculaire et métabolique", service: "Cardiologie / USI Cardiologie", titre: "Cadre de santé", nom: "Francine LAZURE", tel: "6941" },
    { pole: "Cardio-neuro vasculaire et métabolique", service: "Neurologie / Neuro-vasculaire / USI", titre: "Cadre de santé", nom: "Dianne De Beaugrenier", tel: "7641" },
    { pole: "Cardio-neuro vasculaire et métabolique", service: "Explorations & UMA Bilans", titre: "Cadre de santé", nom: "Patricia ROLLAND", tel: "3837" },
    { pole: "Cardio-neuro vasculaire et métabolique", service: "Diabétologie-Endocrinologie", titre: "Cadre de santé", nom: "Marion PLETAN", tel: "7839" },
    { pole: "Cardio-neuro vasculaire et métabolique", service: "Chirurgie vasculaire", titre: "Cadre de santé", nom: "Anne-Sophie PERRIN", tel: "7918" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Coordination Pôle", titre: "Coordonnatrice paramédicale", nom: "Sandie BROCHON", tel: "7292" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Chirurgie urologique", titre: "Cadre de santé", nom: "Alexandra LE GREY", tel: "7935" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Chirurgie gynéco et plastique", titre: "Cadre de santé", nom: "Margot MITRECE", tel: "8073" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Consultation", titre: "Cadre de santé", nom: "Emilie PREVAULT", tel: "3751" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Suites de naissances / GHR", titre: "Cadre Sage-femme", nom: "Gaëlle MORIVAL", tel: "6717" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Néonatalogie", titre: "Cadre Infirmière Puéricultrice", nom: "Clémentine SEREY", tel: "6811" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Urgences Gynéco / Salle de naissance", titre: "Cadre Sage-femme", nom: "Safia TAHIRI", tel: "6701" },
    { pole: "Maternité, gynécologie, urologie, plastique", service: "Urgences Gynéco / Salle de naissance", titre: "Cadre de santé", nom: "Alice AUVRAY", tel: "6715" },
    { pole: "Spécialités chirurgicales", service: "Chirurgie Orthopédique", titre: "Cadre de santé", nom: "Chloé BOCQUIN", tel: "7796 / 3855" },
    { pole: "Spécialités chirurgicales", service: "Chirurgie digestive / Gastro", titre: "Cadre de santé", nom: "Elodie BENARBIA", tel: "7297" },
    { pole: "Spécialités chirurgicales", service: "Unité de Chirurgie Ambulatoire (UCA)", titre: "Cadre de santé", nom: "Patricia ROLLAND", tel: "7892" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "Coordination Pôle", titre: "Coordonnatrice paramédicale", nom: "Laurence LECOCQ", tel: "7739" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "Service d'Accueil des Urgences (SAU)", titre: "Cadre de santé", nom: "Bénédicte GAUCHET", tel: "7557" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "Service d'Accueil des Urgences (SAU)", titre: "Cadre de santé", nom: "Geneviève SILVESTRE", tel: "6021" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "Médecine Interne", titre: "Cadre de santé", nom: "Marie DE OLIVEIRA", tel: "6676" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "Oncologie et HDJ Oncologie", titre: "Cadre de santé", nom: "Véronique BETTLER-GORY", tel: "3248" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "Soins Palliatifs", titre: "Cadre de santé", nom: "Véronique GROS", tel: "7052" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "HDS-Onco-Gastro-UMAT", titre: "Cadre de santé", nom: "Anne-Sophie BARRAU", tel: "7526" },
    { pole: "Spécialités médicales, oncologie, SAU", service: "Rhumatologie", titre: "Cadre de santé", nom: "Aurélie LEBIGRE", tel: "3526" },
    { pole: "Médico-technique & Blocs", service: "Qualité, Hygiène, Relations Patients", titre: "Coordonnatrice paramédicale", nom: "Marie-Hélène PAINCHAUD", tel: "3819" },
    { pole: "Médico-technique & Blocs", service: "Laboratoires (Biologie)", titre: "Cadre Médico-Technique", nom: "Julie GIRAUD", tel: "7499" },
    { pole: "Médico-technique & Blocs", service: "Imagerie", titre: "Cadre Médico-Technique", nom: "Béatrice ROSZY", tel: "6969" },
    { pole: "Médico-technique & Blocs", service: "Blocs Opératoires (GIPP)", titre: "Directrice opérationnelle", nom: "Ingrid CARME", tel: "6147" },
    { pole: "Médico-technique & Blocs", service: "Blocs Opératoires (GIPP)", titre: "Responsable opérationnel", nom: "Frédéric COUMAILLEAU", tel: "3547" },
    { pole: "Équipe Transversale", service: "Nuit", titre: "Cadre de santé", nom: "Marie SINA", tel: "6712" },
    { pole: "Équipe Transversale", service: "Nuit", titre: "Cadre référent", nom: "Bastien CHAPRON", tel: "6712" }
];

// ============================================================================
// 10. SECRETARIATS (Derived from map points for convenience)
// ============================================================================
export const secretariatsData: SecretariatEntry[] = [
  { id: 'p1', name: 'Anesthésie (P1)', contentHtml: mapPoints.find(p => p.id === 'p1')?.infoHtml || '' },
  { id: 'p2', name: 'Chirurgie & Vasc. (P2)', contentHtml: mapPoints.find(p => p.id === 'p2')?.infoHtml || '' },
  { id: 'p4', name: 'Maternité (P4/P10)', contentHtml: mapPoints.find(p => p.id === 'p4')?.infoHtml || '' },
  { id: 'p8', name: 'Cardio/Neuro (P8)', contentHtml: mapPoints.find(p => p.id === 'p8')?.infoHtml || '' },
  { id: 'pK', name: 'ORL/CMF (Entrée 5)', contentHtml: mapPoints.find(p => p.id === 'pK')?.infoHtml || '' },
  { id: 'p12', name: 'HDJ (P12)', contentHtml: mapPoints.find(p => p.id === 'p12')?.infoHtml || '' },
  { id: 'p14', name: 'Médecine & Spé. (P14)', contentHtml: mapPoints.find(p => p.id === 'p14')?.infoHtml || '' },
  { id: 'p16', name: 'Oncologie (P16)', contentHtml: mapPoints.find(p => p.id === 'p16')?.infoHtml || '' },
  { id: 'urg', name: 'SAU (Urgences)', contentHtml: mapPoints.find(p => p.id === 'urgences')?.infoHtml || '' },
  { id: 'progra', name: 'Programmation', contentHtml: mapPoints.find(p => p.id === 'progra')?.infoHtml || '' },
];

// ============================================================================
// 11. LISTE DES EXAMENS (NOUVEAU)
// ============================================================================
export const examsData: ExamEntry[] = [
    // IMAGERIE
    { nom: "IRM (Imagerie par Résonance Magnétique)", categorie: "Imagerie", lieu: "Centre Losserand (Entrée 5)", batiment: "193 rue Raymond Losserand", contact: "8060", details: "Ou Hall Principal (185 rue R. Losserand)." },
    { nom: "Scanner (TDM)", categorie: "Imagerie", lieu: "Centre Losserand (Entrée 5)", batiment: "193 rue Raymond Losserand", contact: "8060", details: "Ou Hall Principal (185 rue R. Losserand)." },
    { nom: "Radiographie Standard", categorie: "Imagerie", lieu: "Hall Principal", batiment: "St Vincent (185 rue R. Losserand)", contact: "8060", details: "Niveau 0." },
    { nom: "Échographie Générale", categorie: "Imagerie", lieu: "Hall Principal", batiment: "St Vincent (185 rue R. Losserand)", contact: "8060", details: "Niveau 0." },
    { nom: "Mammographie", categorie: "Imagerie", lieu: "Entrée 5", batiment: "Centre du Sein", contact: "8484", details: "Centre de la femme." },
    
    // CARDIO
    { nom: "ECG (Électrocardiogramme)", categorie: "Cardiologie", lieu: "Porte 8", batiment: "St Jean (Niveau 0)", contact: "6722 / 3112", details: "Consultation de rythmologie." },
    { nom: "Échographie Cardiaque (ETT)", categorie: "Cardiologie", lieu: "Porte 8", batiment: "St Jean", contact: "RDV 7023 / IDE 6722", details: "Explorations Fonctionnelles Cardio." },
    { nom: "Épreuve d'Effort", categorie: "Cardiologie", lieu: "Porte 8", batiment: "St Jean", contact: "RDV 7023 / IDE 6722", details: "Prévoir tenue de sport." },
    { nom: "Holter ECG / Tensionnel", categorie: "Cardiologie", lieu: "Porte 8", batiment: "St Jean", contact: "RDV 7023 / IDE 6722", details: "Pose et dépose." },
    { nom: "Coronarographie", categorie: "Cardiologie", lieu: "Porte 6 Bis", batiment: "St Jean (Niveau 0)", contact: "Secré 8001 / Salle 8111", details: "Cardio Interventionnelle." },

    // NEURO
    { nom: "EEG (Électroencéphalogramme)", categorie: "Neurologie", lieu: "Porte 2", batiment: "St Jean (Niveau 3)", contact: "3412", details: "RDV prioritaire : laboneuro@ghpsj.fr. Explorations Fonctionnelles Neuro." },
    { nom: "EMG (Électromyogramme)", categorie: "Neurologie", lieu: "Porte 2", batiment: "St Jean (Niveau 3)", contact: "3412", details: "RDV prioritaire : laboneuro@ghpsj.fr" },
    { nom: "Potentiels Évoqués", categorie: "Neurologie", lieu: "Porte 2", batiment: "St Jean (Niveau 3)", contact: "3412", details: "RDV prioritaire : laboneuro@ghpsj.fr" },

    // GASTRO / ENDO
    { nom: "Fibroscopie Gastrique", categorie: "Gastro", lieu: "Porte 5", batiment: "Ste Geneviève (Niveau G)", contact: "7904", details: "HDJ Endoscopie." },
    { nom: "Coloscopie", categorie: "Gastro", lieu: "Porte 5", batiment: "Ste Geneviève (Niveau G)", contact: "7904", details: "HDJ Endoscopie." },
    { nom: "Vidéo-Capsule", categorie: "Gastro", lieu: "Porte 5", batiment: "Ste Geneviève (Niveau G)", contact: "7904", details: "" },
    
    // PNEUMO
    { nom: "EFR (Exploration Fonctionnelle Respiratoire)", categorie: "Pneumo", lieu: "Porte 14", batiment: "St Michel (Niveau G)", contact: "6342", details: "Service Pneumo/Allergo." },
    { nom: "Polysomnographie (Sommeil)", categorie: "Pneumo", lieu: "Porte 11", batiment: "Ste Marie (Niveau 3)", contact: "3783", details: "Hôpital de Semaine." },
    
    // GYNÉCO / OBSTÉTRIQUE
    { nom: "Échographie Pelvienne", categorie: "Gynéco", lieu: "Entrée 5", batiment: "Centre de la Femme", contact: "8484", details: "" },
    { nom: "Hystéroscopie", categorie: "Gynéco", lieu: "Entrée 5", batiment: "Centre de la Femme", contact: "7173", details: "" },
    { nom: "Échographie Grossesse", categorie: "Maternité", lieu: "Porte 10", batiment: "Notre Dame (Niveau 1)", contact: "8103", details: "Maternité." },
    { nom: "Monitoring", categorie: "Maternité", lieu: "Porte 4", batiment: "St Jean (Urgences)", contact: "8282", details: "Urgences Maternité." },

    // OPHTALMO
    { nom: "OCT (Tomographie)", categorie: "Ophtalmo", lieu: "Institut OPH", batiment: "168 Rue Losserand", contact: "Cs 3039 / Prog 3420", details: "" },
    { nom: "Champ Visuel", categorie: "Ophtalmo", lieu: "Institut OPH", batiment: "168 Rue Losserand", contact: "Cs 3039 / Prog 3420", details: "" },
    { nom: "Fond d'œil", categorie: "Ophtalmo", lieu: "Institut OPH", batiment: "168 Rue Losserand", contact: "Cs 3039 / Prog 3420", details: "" },

    // ORL
    { nom: "Audiogramme", categorie: "ORL", lieu: "Entrée 5", batiment: "Centre Losserand", contact: "Ext 3378 / Int 165840", details: "Consultations ORL." },
    { nom: "Nasofibroscopie", categorie: "ORL", lieu: "Entrée 5", batiment: "Centre Losserand", contact: "Ext 3378 / Int 165840", details: "" },

    // BIO
    { nom: "Prise de sang", categorie: "Laboratoire", lieu: "Centre Losserand (Entrée 3)", batiment: "Bâtiment Labo", contact: "3653", details: "Sans RDV le matin." },
];
