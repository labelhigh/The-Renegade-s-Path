
import React, { useState, useRef, useCallback, useEffect } from 'react';
import Typewriter from './Typewriter';
import { SPLASH_SCREEN_TEXT } from '../constants';

const SPLASH_MUSIC_URL = 'https://cdn.pixabay.com/audio/2025/06/04/audio_d93b373461.mp3';

interface SplashScreenProps {
  onStartGame: () => void;
  isReady: boolean;
  setMusicUrl: (url: string | null) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onStartGame, isReady, setMusicUrl }) => {
  const [typingFinished, setTypingFinished] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMusicUrl(SPLASH_MUSIC_URL);
  }, [setMusicUrl]);

  const handleTypingFinished = useCallback(() => {
    setTypingFinished(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen p-8 bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://i.meee.com.tw/z9YT6rb.png')" /* 啟動畫面背景 - 水墨風格的山水畫 (Splash screen background - ink wash style landscape painting) */ }}>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Loader View */}
      <div className={`relative z-20 text-center text-white p-8 rounded-lg flex flex-col items-center transition-opacity duration-500 ease-in-out ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <i className="fas fa-yin-yang fa-spin text-6xl text-amber-400 mb-6"></i>
        <h2 className="text-2xl text-gray-300 tracking-widest">筆墨丹青，稍待片刻...</h2>
        <p className="text-lg text-gray-400 mt-2">正在載入字體資源</p>
      </div>

      {/* Main Content View */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-2000 ease-in-out ${isReady ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <div className="relative z-10 max-w-4xl text-center text-white p-8 rounded-lg">
            <h1 className="text-5xl font-bold mb-8 text-red-500 tracking-widest">末路江湖</h1>
            <h2 className="text-3xl mb-12 text-gray-300">卷一: 叛道</h2>
            <div ref={scrollContainerRef} className="text-lg leading-relaxed text-left max-w-2xl mx-auto whitespace-pre-line max-h-[40vh] overflow-y-auto pr-4">
              {isReady && ( // Only render Typewriter when visible to start the animation
                <Typewriter 
                  text={SPLASH_SCREEN_TEXT.join('\n\n')} 
                  onFinished={handleTypingFinished}
                  scrollContainerRef={scrollContainerRef}
                />
              )}
            </div>
            
            <button
                onClick={onStartGame}
                disabled={!typingFinished}
                className={`mt-12 px-12 py-4 text-white text-xl font-bold rounded-lg transition-all duration-300 ease-in-out
                    ${!typingFinished
                        ? 'bg-gray-700/80 cursor-not-allowed opacity-60'
                        : 'bg-red-700 hover:bg-red-600 transform hover:scale-105 animate-pulse'
                    }`}
            >
                踏入江湖
            </button>
          </div>
      </div>
    </div>
  );
};

export default SplashScreen;
