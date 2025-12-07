
import React from 'react';

const PlanningView: React.FC = () => {
  const staff = [
    "Djazira (Tamsaouit)", "Herwan (Raymond)", "Stéphanie (Molter)", "Imane (Abab)", 
    "Patricia (Quisoir)", "Clermite (Dorissaint)", "Linda (TAAM)", "Youssouf (DOUKHI)", 
    "Samy (KASMI)", "Soukeïna (ARAAB)", "Shaheena (Sayed-Hassen)", "Vincent (Guiho)", 
    "Niouma (Doucoure)", "Valérie (Decotte)", "Samir (Kélaoui)", "Nadim (Souami)"
  ];

  // Données brutes du planning
  const rows = [
    ["LUNDI 1", "7H-18H", "9H-20H", "8H-19H", "MAL", "9H-12H30", "", "9H-20H", "", "9H-20H", "07H30-17H00", "MAL", "9H-17H", "9H-17H", "9H-17H", "MAL", "11H-18H", "9"],
    ["MARDI 2", "7H-18H", "", "8H-19H", "MAL", "9H-12H30", "", "9H-20H", "9H-20H", "", "07H30-17H01", "MAL", "9H-17H", "9H-17H", "9H-17H", "MAL", "11H-18H", "9"],
    ["MERCREDI 3", "", "", "", "MAL", "9H-12H30", "7H-18H", "8H-19H", "9H-20H", "9H-17H", "07H30-17H00", "MAL", "9H-17H", "", "9H-17H", "MAL", "11H-18H", "8"],
    ["JEUDI 4", "", "", "", "MAL", "9H-12H30", "7H-18H", "8H-19H", "9H-20H", "9H-17H", "07H30-17H00", "MAL", "9H-17H", "9H-17H", "", "MAL", "11H-18H", "8"],
    ["VENDREDI 5", "7H-18H", "9H-20H", "8H-19H", "MAL", "9H-12H30", "", "", "9H-18H", "9H-18H", "9H-17H", "MAL", "9H-17H", "9H-17H", "", "MAL", "11H-18H", "9"],
    ["SAMEDI 6", "7H-18H", "9H-20H", "8H-19H", "MAL", "", "", "", "", "", "", "MAL", "", "", "", "MAL", "", "3"],
    ["DIMANCHE 7", "7H-18H", "9H-20H", "8H-19H", "MAL", "", "", "", "", "", "", "MAL", "", "", "", "MAL", "", "3"],
    ["LUNDI 8", "", "", "", "MAL", "9H-12H30", "7H-18H", "8H-19H", "9H-20H", "9H-17H", "9H-17H", "MAL", "9H-17H", "9H-17H", "9H-17H", "MAL", "11H-18H", "9"],
    ["MARDI 9", "", "", "", "MAL", "9H-12H30", "8H-19H", "8H30-19H30", "9H-20H", "7H30-17H30", "9H-17H", "MAL", "9H-17H", "9H-17H", "9H-17H", "MAL", "11H-18H", "9"],
    ["MERCREDI 10", "7H-18H", "8H-19H", "9H-20H", "MAL", "9H-12H30", "", "", "9H-18H", "9H-17H", "7h30-17h30", "MAL", "9H-17H", "", "", "MAL", "11H-18H", "8"],
    ["JEUDI 11", "7H-18H", "8H-19H", "9H-20H", "MAL", "9H-12H30", "", "", "9H-18H", "7h30-17h30", "7h30-17h30", "MAL", "9H-17H", "9H-17H", "", "MAL", "11H-18H", "8"],
    ["VENDREDI 12", "", "", "", "MAL", "9H-12H30", "7H-19H", "8H-19H", "9H-20H", "9H-17H", "7h30-17h30", "MAL", "9H-17H", "9H-17H", "", "MAL", "11H-18H", "8"],
    ["SAMEDI 13", "", "", "", "MAL", "", "8H-19H", "8H30-19H30", "9H-20H", "", "", "MAL", "", "", "", "MAL", "", "3"],
    ["DIMANCHE 14", "", "", "", "MAL", "", "8H-19H", "8H30-19H30", "9H-20H", "", "", "MAL", "", "", "", "MAL", "", "3"],
    ["LUNDI 15", "7H-18H", "9H-20H", "Congés", "MAL", "9H-12H30", "", "8H-19H", "9H-20H", "9H-18H", "9H-18H", "MAL", "9H-17H", "9H-17H", "9H-17H", "MAL", "11H-18H", "9"],
    ["MARDI 16", "7H-18H", "9H-20H", "Congés", "MAL", "9H-12H30", "", "", "8H-19H", "9H-19H", "9H-18H", "MAL", "9H-17H", "9H-17H", "9H-17H", "MAL", "11H-18H", "9"],
    ["MERCREDI 17", "", "", "", "MAL", "9H-12H30", "7H-18H", "8H-19H", "9H-20H", "9H-17H", "9H-17H", "MAL", "9H-17H", "", "9H-17H", "MAL", "11H-18H", "8"],
    ["JEUDI 18", "", "", "", "MAL", "9H-12H30", "7H-18H", "8H-19H", "9H-20H", "9H-17H", "9H-17H", "MAL", "9H-17H", "9H-17H", "", "MAL", "11H-18H", "8"],
    ["VENDREDI 19", "7H-18H", "8H-19H", "9H-20H", "MAL", "9H-12H30", "", "", "9H-17H", "9H-17H", "9H-17H", "MAL", "9H-17H", "9H-17H", "", "MAL", "11H-18H", "9"],
    ["SAMEDI 20", "8H-19H", "9H-20H", "8H30-19H30", "MAL", "", "", "", "", "", "", "MAL", "", "", "", "MAL", "", "3"],
    ["DIMANCHE 21", "8H-19H", "9H-20H", "8H30-19H30", "MAL", "", "", "", "", "", "", "MAL", "", "", "", "MAL", "", "3"],
    ["LUNDI 22", "", "", "", "MAL", "9H-12H30", "7H-19H", "8H-19H", "9H-20H", "9H-17H", "9H-17H", "MAL", "Congés", "9H-17H", "9H-17H", "MAL", "11H-18H", "8"],
    ["MARDI 23", "", "", "", "MAL", "9H-12H30", "7H-19H", "8H-19H", "9H-20H", "9H-17H", "9H-17H", "MAL", "Congés", "9H-17H", "9H-17H", "MAL", "11H-18H", "8"],
    ["MERCREDI 24", "7H-18H", "9H-20H", "Congés", "MAL", "9H-12H30", "", "9H-18H", "8H-19H", "9H-17H", "8H-19H", "MAL", "Congés", "", "", "MAL", "11H-18H", "7"],
    ["JEUDI 25", "7H-18H", "9H-20H", "Congés", "MAL", "9H-12H30", "", "", "", "8H30-19H30", "8H30-19H30", "MAL", "Congés", "FERIE", "FERIE", "FERIE", "FERIE", "3"],
    ["VENDREDI 26", "", "", "", "MAL", "9H-12H30", "Congés", "8H-19H", "9H-20H", "7H-18H", "9H-17H", "MAL", "Congés", "9H-17H", "", "MAL", "11H-18H", "6"],
    ["SAMEDI 27", "", "", "", "MAL", "", "Congés", "8H-19H", "7H-18H", "9H-20H", "", "MAL", "Congés", "", "", "MAL", "", "3"],
    ["DIMANCHE 28", "", "", "", "MAL", "", "Congés", "8H-19H", "9H-20H", "7H-18H", "", "MAL", "Congés", "", "", "MAL", "", "3"],
    ["LUNDI 29", "7H-18H", "9H-20H", "8H-19H", "MAL", "9H-12H30", "", "", "", "", "9H-18H", "MAL", "9H-17H", "9H-17H", "Congés", "MAL", "11H-18H", "7"],
    ["MARDI 30", "7H-18H", "9H-20H", "8H-19H", "MAL", "9H-12H30", "", "", "", "", "9H-18H", "MAL", "9H-17H", "9H-17H", "Congés", "MAL", "11H-18H", "7"],
    ["MERCREDI 31", "", "", "", "MAL", "9H-12H30", "7H-19H", "8H-19H", "9H-20H", "9H-18H", "9H-17H", "MAL", "9H-17H", "", "Congés", "MAL", "11H-18H", "7"],
  ];

  // Helper pour la couleur des cellules
  const getCellClass = (content: string) => {
    if (!content) return "bg-[#d35400] text-transparent"; // Case vide / Repos (Brownish/Orange in image)
    if (content === "MAL") return "bg-red-600 text-white font-bold";
    if (content.includes("Congés") || content.includes("Conges")) return "bg-green-500 text-black font-bold";
    if (content.includes("FERIE")) return "bg-gray-300 text-black font-bold";
    
    // Horaires spécifiques
    if (content.startsWith("7H")) return "bg-cyan-400 text-black font-semibold";
    if (content.startsWith("9H-20H") || content.includes("9H-20H")) return "bg-pink-500 text-white font-semibold";
    if (content.startsWith("8H-19H")) return "bg-purple-200 text-black font-semibold";
    
    // Autres horaires standards
    if (content.includes("H")) return "bg-white text-black font-medium";
    
    return "bg-white text-black";
  };

  return (
    <div className="animate-fade-in w-full overflow-x-auto pb-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-red-600 uppercase tracking-widest bg-white inline-block px-6 py-2 rounded shadow">
          décembre 2025
        </h2>
        <p className="text-blue-400 font-bold mt-2 text-lg italic">
          A ADAPTER EN FONCTION DE L ABSENTEISME
        </p>
      </div>

      <div className="min-w-max border-2 border-black bg-white">
        {/* Header */}
        <div className="grid grid-cols-[150px_repeat(16,_1fr)_50px] border-b-2 border-black text-center text-xs font-bold uppercase bg-red-600 text-white">
          <div className="p-2 border-r border-black flex items-center justify-center bg-gray-200 text-black"></div>
          {staff.map((name, i) => (
            <div key={i} className="p-1 border-r border-black flex flex-col justify-center items-center h-20 bg-red-600">
                <span className="block">{name.split('(')[0]}</span>
                <span className="block text-[10px] mt-1 opacity-90">{name.split('(')[1]?.replace(')', '')}</span>
            </div>
          ))}
          <div className="p-2 flex items-center justify-center bg-white text-black">TT</div>
        </div>

        {/* Rows */}
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-[150px_repeat(16,_1fr)_50px] border-b border-gray-400 text-center text-xs h-10">
            {/* Date Column */}
            <div className={`
                p-2 border-r border-black font-bold flex items-center justify-center
                ${row[0].includes("SAMEDI") || row[0].includes("DIMANCHE") ? "bg-green-700 text-white" : 
                  row[0].includes("LUNDI") || row[0].includes("MERCREDI") || row[0].includes("VENDREDI") ? "bg-purple-300 text-black" : "bg-yellow-200 text-black"}
            `}>
              {row[0]}
            </div>

            {/* Shift Columns */}
            {row.slice(1, 17).map((cell, cellIndex) => (
              <div key={cellIndex} className={`border-r border-gray-400 flex items-center justify-center ${getCellClass(cell)}`}>
                {cell}
              </div>
            ))}

            {/* Total Column */}
            <div className="p-2 font-bold flex items-center justify-center bg-white text-black">
              {row[17]}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs font-bold uppercase">
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow"><span className="w-4 h-4 bg-cyan-400 block border border-gray-400"></span> OUVERTURE</div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow"><span className="w-4 h-4 bg-pink-500 block border border-gray-400"></span> FERMETURE</div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow"><span className="w-4 h-4 bg-green-500 block border border-gray-400"></span> CONGES</div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow"><span className="w-4 h-4 bg-yellow-200 block border border-gray-400"></span> J. SUPP</div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow"><span className="w-4 h-4 bg-red-600 block border border-gray-400"></span> ABSENCE</div>
        <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow"><span className="w-4 h-4 bg-[#d35400] block border border-gray-400"></span> REPOS</div>
      </div>
    </div>
  );
};

export default PlanningView;
