
import { GoogleGenAI } from "@google/genai";
import * as Data from '../data';

// Construction du contexte (Base de connaissance de l'IA)
const SITE_CONTEXT = `
Tu es Vincent, l'assistant virtuel intelligent du Portail Hôpital Paris Saint-Joseph (HPSJ).
Ta mission est d'aider les utilisateurs (personnel hospitalier) à trouver des informations rapidement.
Réponds de manière concise, précise et professionnelle en français.

VOICI LES DONNÉES DU SITE QUE TU DOIS UTILISER POUR RÉPONDRE :

1. GARDES ET AVIS :
${JSON.stringify(Data.guardsData)}

2. ÉQUIPES DE CONSULTATION (Secrétaires, IDE, Lieux) :
${JSON.stringify(Data.consultationTeams)}

3. ANNUAIRE DRH (Ressources Humaines, Paie, Recrutement) :
${JSON.stringify(Data.drhData)}
${JSON.stringify(Data.keyDrhContacts)}

4. ENCADREMENT ET RESPONSABLES :
${JSON.stringify(Data.encadrementData)}

5. CHEFS DE SERVICE :
${JSON.stringify(Data.chefsDeService)}

6. CADRES DE SANTÉ :
${JSON.stringify(Data.cadresDeSante)}

7. LOCALISATION DES SERVICES (Bâtiments, Étages, Portes) :
${JSON.stringify(Data.servicesData)}

8. NUMÉROS UTILES (Urgences, Informatique, Technique) :
${JSON.stringify(Data.usefulNumbers)}

9. INFORMATIONS SUR LES PLANS (Détails des portes) :
${JSON.stringify(Data.mapPoints.map(p => ({ id: p.id, label: p.label, details: p.infoHtml.replace(/<[^>]*>/g, ' ') })))}

10. INFORMATIONS GÉNÉRALES ET LIMITES :
- Limites d'utilisation de l'avatar : Environ 1 500 questions par jour gratuitement (Quota API Gemini Flash).
- 15 questions par minute maximum.

CONSIGNES DE RÉPONSE :
- Ton nom est Vincent.
- Si on te demande "Que peux-tu faire ?" ou "Qui es-tu ?", présente-toi comme Vincent.
- Si on te demande un numéro de téléphone :
  CRITIQUE POUR LA VOCALISATION : Tu dois IMPÉRATIVEMENT écrire les numéros en séparant les chiffres par groupe de 2 avec un espace.
  Exemple : Pour le numéro 7679, tu dois écrire "76 79". Pour le 0144123805, tu dois écrire "01 44 12 38 05".
  Cela permet à la voix de dire "soixante-seize, soixante-dix-neuf" au lieu de "sept mille six cent soixante-dix-neuf".
  Ne prononce JAMAIS le mot "astérisque", "dièse" ou "étoile". Si un numéro contient un symbole (ex: #6570), dis "poste 65 70".
- Si on te demande "Qui est le chef de...", cherche dans la liste des chefs.
- Si on te demande "Où se trouve...", cherche dans la localisation ou les plans.
- Si on te demande combien de questions on peut poser, réponds avec les limites indiquées (1500/jour).
- Si l'information n'est pas dans les données ci-dessus, dis poliment que tu ne sais pas.
- Sois bref (max 2-3 phrases sauf si liste nécessaire).
`;

// Helper ultra-robuste pour récupérer la clé API
const getApiKey = (): string | undefined => {
  // 1. Essayer via VITE (import.meta.env) - Standard moderne
  try {
    // @ts-ignore
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      // @ts-ignore
      if (import.meta.env.VITE_API_KEY) return import.meta.env.VITE_API_KEY;
      // @ts-ignore
      if (import.meta.env.API_KEY) return import.meta.env.API_KEY;
    }
  } catch (e) {}

  // 2. Essayer via Process (Node/Legacy)
  try {
    // @ts-ignore
    if (typeof process !== "undefined" && process.env) {
      // @ts-ignore
      if (process.env.API_KEY) return process.env.API_KEY;
      // @ts-ignore
      if (process.env.VITE_API_KEY) return process.env.VITE_API_KEY;
    }
  } catch (e) {}

  // 3. Clé de secours (Hardcoded) pour garantir le fonctionnement immédiat
  return "AIzaSyDPKKzWM-PDpBLn8647JsFlWEIApn-L-cE";
};

export const askGemini = async (userQuestion: string): Promise<string> => {
  try {
    const apiKey = getApiKey();
    
    if (!apiKey) {
      // Ce cas ne devrait jamais arriver avec le fallback hardcoded, mais on garde la sécurité
      console.error("ERREUR CRITIQUE : Aucune clé API trouvée.");
      return "ERREUR CONFIGURATION : Clé API introuvable. Veuillez vérifier la configuration Netlify.";
    }

    // Initialisation
    const ai = new GoogleGenAI({ apiKey });
    
    // Timeout de sécurité
    const timeoutPromise = new Promise<string>((_, reject) => 
      setTimeout(() => reject(new Error("Timeout de 30s atteint")), 30000)
    );

    const apiCallPromise = ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: SITE_CONTEXT,
        temperature: 0.3,
      },
    }).then(response => {
        if (!response.text) {
            throw new Error("Réponse vide de l'IA");
        }
        return response.text;
    });

    // Course entre l'appel API et le timeout
    return await Promise.race([apiCallPromise, timeoutPromise]);
  } catch (error: any) {
    console.error("Erreur Gemini détaillée:", error);
    
    // Gestion des erreurs spécifiques
    if (error.message?.includes("Timeout")) {
        return "Le réseau est trop lent, je n'ai pas pu répondre à temps.";
    } 
    
    // Erreurs liées à l'API Key ou Auth
    if (error.message?.includes("API Key") || error.toString().includes("401") || error.toString().includes("403")) {
        return "Problème d'authentification : La clé API est invalide.";
    }

    // Erreurs de quota
    if (error.toString().includes("429")) {
        return "J'ai reçu trop de questions aujourd'hui (Quota dépassé).";
    }

    // Autres erreurs
    return "Je rencontre une erreur technique momentanée.";
  }
};
