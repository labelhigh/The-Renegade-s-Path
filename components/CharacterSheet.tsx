
import React from 'react';
import { PlayerStats } from '../types';

interface CharacterSheetProps {
  stats: PlayerStats;
  onClose: () => void;
}

const StatItem: React.FC<{label: string, value: any, icon: string, colorClass: string}> = ({ label, value, icon, colorClass }) => (
    <div className="flex items-center justify-between p-3 bg-gray-900/50 rounded-md">
        <div className="flex items-center">
            <i className={`fas ${icon} ${colorClass} mr-3 w-6 text-center`}></i>
            <span className="text-gray-300">{label}</span>
        </div>
        <span className={`font-bold ${colorClass}`}>{value}</span>
    </div>
);


const CharacterSheet: React.FC<CharacterSheetProps> = ({ stats, onClose }) => {
  const getRighteousnessColor = (value: number) => {
    if (value > 0) return 'text-sky-400';
    if (value < 0) return 'text-red-500';
    return 'text-gray-300';
  };

  return (
    <div 
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-fade-in"
        onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl h-auto bg-cover bg-center rounded-lg shadow-2xl border-2 border-amber-800 flex relative" 
        style={{backgroundImage: "url('https://i.meee.com.tw/YcwCZAV.png')" /* 角色面板背景圖 - 帶有墨跡的羊皮紙 (Character sheet background - parchment with ink stains) */}}
        onClick={e => e.stopPropagation()}
      >
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl z-10"
            aria-label="關閉"
        >
            <i className="fas fa-times-circle"></i>
        </button>

        {/* Left Side - Portrait */}
        <div className="w-1/3 relative flex items-end justify-center">
          <img 
            src={stats.portrait} 
            alt="Player Portrait" 
            className="h-[85%] object-contain"
          />
        </div>

        {/* Right Side - Stats */}
        <div className="w-2/3 p-8 text-white">
            <div className="text-center mb-6 border-b-2 border-amber-800/50 pb-4">
                <h1 className="text-5xl font-bold text-amber-100" style={{ fontFamily: "'HuiwenMingChao', serif" }}>蕭遠</h1>
                <p className="text-2xl text-yellow-400 mt-2">{stats.title}</p>
            </div>

            <div className="space-y-3">
                 <h2 className="text-xl text-amber-200 border-b border-amber-800/30 pb-1 mb-2">基礎屬性</h2>
                 <StatItem label="氣血" value={`${stats.health} / ${stats.maxHealth}`} icon="fa-heartbeat" colorClass="text-green-400" />
                 <StatItem label="內力" value={`${stats.internalEnergy} / ${stats.maxInternalEnergy}`} icon="fa-khanda" colorClass="text-blue-400" />
                 <StatItem label="正邪" value={stats.righteousness} icon="fa-yin-yang" colorClass={getRighteousnessColor(stats.righteousness)} />
                 <StatItem label="銀兩" value={stats.money} icon="fa-coins" colorClass="text-yellow-500" />
            </div>
        </div>
      </div>
    </div>
  );
};

// FIX: Add default export for the CharacterSheet component.
export default CharacterSheet;