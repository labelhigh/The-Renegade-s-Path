import React from 'react';
import { PlayerStats } from '../types';

interface HudProps {
  stats: PlayerStats;
  onCharacterSheetOpen: () => void;
}

const Hud: React.FC<HudProps> = ({ stats, onCharacterSheetOpen }) => {
  
  const getRighteousnessColor = (value: number) => {
    if (value > 0) return 'text-sky-400';
    if (value < 0) return 'text-red-500';
    return 'text-gray-300';
  };

  return (
    <div className="absolute top-4 right-4 z-30 flex items-center space-x-4">
        <div className="p-4 bg-black/70 rounded-lg shadow-lg border border-gray-700 text-gray-200 w-64">
            <div className="flex justify-between items-baseline mb-2">
                <span className="font-bold text-yellow-400 text-lg">{stats.title}</span>
                <span className={`font-bold ${getRighteousnessColor(stats.righteousness)}`}>{stats.righteousness} <i className="fa-solid fa-yin-yang"></i></span>
            </div>
             <div className="space-y-2">
                <div>
                    <span className="text-sm text-green-400">氣血: {stats.health} / {stats.maxHealth}</span>
                    <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-green-600 h-2.5 rounded-full" style={{width: `${(stats.health/stats.maxHealth)*100}%`}}></div></div>
                </div>
                 <div>
                    <span className="text-sm text-blue-400">內力: {stats.internalEnergy} / {stats.maxInternalEnergy}</span>
                    <div className="w-full bg-gray-700 rounded-full h-2.5"><div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${(stats.internalEnergy/stats.maxInternalEnergy)*100}%`}}></div></div>
                </div>
             </div>
        </div>
        <button 
            onClick={onCharacterSheetOpen}
            className="w-16 h-16 bg-black/70 rounded-full shadow-lg border-2 border-amber-700 flex flex-col items-center justify-center text-amber-400 hover:bg-amber-900/80 transition-all duration-300 transform hover:scale-110"
            aria-label="打開角色面板"
            >
            <i className="fa-solid fa-user text-2xl"></i>
            <span className="text-xs mt-1">角色</span>
        </button>
    </div>
  );
};

export default Hud;
