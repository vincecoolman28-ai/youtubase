
import React, { useState, useEffect, useRef } from 'react';
import { askGemini } from '../services/gemini';

// Extension des types globaux pour la reconnaissance vocale
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const VoiceAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Bonjour ! Je suis Vincent, votre assistant HPSJ. Que puis-je pour vous ?" }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Scroll automatique vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Initialisation Speech Recognition & Chargement des voix
  useEffect(() => {
    // Force loading voices for Chrome
    const loadVoices = () => {
        window.speechSynthesis.getVoices();
    };
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'fr-FR';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSend(transcript); // Envoi automatique après la parole
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        // Récupération sécurisée du code d'erreur
        const error = event.error; 
        
        // Ignorer les erreurs "normales" de silence ou d'arrêt volontaire
        if (error === 'no-speech' || error === 'aborted') {
            setIsListening(false);
            return;
        }

        console.error(`Erreur reconnaissance vocale:`, error);
        
        let errorMsg = "Je n'ai pas compris, pouvez-vous répéter ?";

        if (error === 'not-allowed' || error === 'service-not-allowed') {
            errorMsg = "Je n'ai pas accès au micro. Veuillez autoriser l'accès dans votre navigateur.";
        } else if (error === 'network') {
            errorMsg = "Problème de connexion internet pour la reconnaissance vocale.";
        } else if (error === 'audio-capture') {
            errorMsg = "Aucun microphone détecté.";
        } else if (error === 'language-not-supported') {
            errorMsg = "Langue non supportée.";
        }
        
        // Afficher le message d'erreur dans le chat
        setMessages(prev => [...prev, { role: 'assistant', text: errorMsg }]);
        
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
        console.warn("Speech Recognition API not supported in this browser.");
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
        setMessages(prev => [...prev, { role: 'assistant', text: "Désolé, votre navigateur ne supporte pas la reconnaissance vocale." }]);
        return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      // Arrêter la synthèse vocale si elle parle
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error("Impossible de démarrer la reconnaissance vocale:", e);
        setIsListening(false);
      }
    }
  };

  const speak = (text: string) => {
    window.speechSynthesis.cancel(); // Stop previous
    
    // Nettoyage du texte : on enlève les astérisques (Markdown) pour qu'ils ne soient pas lus
    const cleanText = text.replace(/\*/g, '').trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'fr-FR';
    utterance.rate = 1.5; // Encore plus rapide (1.5)
    utterance.pitch = 0.8; // Voix plus grave/masculine (0.8)
    
    // Sélection d'une voix masculine si disponible
    const voices = window.speechSynthesis.getVoices();
    const frenchVoices = voices.filter(v => v.lang.startsWith('fr'));
    
    // Liste de prénoms ou mots-clés typiques des voix masculines sur les OS courants
    const maleKeywords = ['thomas', 'paul', 'nicolas', 'cyril', 'mathieu', 'male', 'homme', 'google français'];
    
    const maleVoice = frenchVoices.find(v => 
        maleKeywords.some(keyword => v.name.toLowerCase().includes(keyword))
    );

    if (maleVoice) {
        utterance.voice = maleVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend || !textToSend.trim()) return;

    // Ajouter message utilisateur
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setIsLoading(true);

    // Appel API Gemini
    const responseText = await askGemini(textToSend);

    // Ajouter réponse IA
    setMessages(prev => [...prev, { role: 'assistant', text: responseText }]);
    setIsLoading(false);

    // Lire la réponse
    speak(responseText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  // Gestion de l'ouverture du chat avec salutation vocale
  const handleToggleChat = () => {
    if (!isOpen) {
      // Si on ouvre, on dit la phrase de bienvenue
      speak("Bonjour, je suis Vincent. Que puis-je pour vous ?");
    } else {
      // Si on ferme, on arrête de parler
      stopSpeaking();
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Bouton Flottant Avatar */}
      <button
        onClick={handleToggleChat}
        className={`fixed bottom-6 right-44 z-[100] w-16 h-16 rounded-full shadow-[0_0_20px_rgba(0,170,255,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-white/20
          ${isOpen ? 'bg-slate-900 rotate-90' : 'bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse-slow'}
        `}
        title="Discuter avec Vincent"
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark text-2xl text-white"></i>
        ) : (
          <i className="fa-solid fa-robot text-3xl text-white"></i>
        )}
      </button>

      {/* Fenêtre de Chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 md:right-24 w-[90vw] md:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-xl border border-hpsj-blue/50 rounded-2xl shadow-2xl z-[100] flex flex-col overflow-hidden animate-slide-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
            <h3 className="text-white font-bold flex items-center gap-2">
              <i className="fa-solid fa-robot text-hpsj-cyan"></i> 
              Vincent (IA HPSJ)
            </h3>
            {isSpeaking && (
              <button onClick={stopSpeaking} className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/50 hover:bg-red-500/40">
                <i className="fa-solid fa-volume-xmark mr-1"></i> Stop
              </button>
            )}
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar bg-slate-950/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-xl text-sm shadow-md ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-slate-800 text-gray-200 border border-slate-700 rounded-bl-none'
                  }`}
                >
                  {msg.role === 'assistant' && <i className="fa-solid fa-robot mr-2 text-hpsj-cyan"></i>}
                  {/* Rendu basique du markdown pour le gras */}
                  <span dangerouslySetInnerHTML={{ 
                    __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-xl rounded-bl-none flex gap-2 items-center text-gray-400 text-xs">
                  <i className="fa-solid fa-circle-notch fa-spin text-hpsj-cyan"></i> Vincent réfléchit...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-900 border-t border-slate-700 flex gap-2 items-center">
             <button 
               onClick={toggleListening}
               className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                 isListening 
                   ? 'bg-red-600 animate-pulse text-white shadow-[0_0_10px_red]' 
                   : 'bg-slate-800 text-hpsj-cyan hover:bg-slate-700'
               }`}
             >
               <i className={`fa-solid ${isListening ? 'fa-microphone-lines' : 'fa-microphone'}`}></i>
             </button>
             
             <input 
               type="text" 
               className="flex-grow bg-slate-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-hpsj-blue border border-slate-700"
               placeholder="Posez votre question..."
               value={input}
               onChange={(e) => setInput(e.target.value)}
               onKeyDown={handleKeyPress}
             />
             
             <button 
               onClick={() => handleSend()}
               disabled={!input.trim() || isLoading}
               className="w-10 h-10 rounded-full bg-hpsj-blue text-white flex items-center justify-center hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
             >
               <i className="fa-solid fa-paper-plane"></i>
             </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;
