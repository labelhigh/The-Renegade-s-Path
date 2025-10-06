import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import GameScreen from './components/GameScreen';
import MusicPlayer from './components/MusicPlayer';

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [appReady, setAppReady] = useState(false);
  const [musicUrl, setMusicUrl] = useState<string | null>(null);

  useEffect(() => {
    // Use document.fonts.ready to wait for custom fonts to be loaded.
    // This prevents a flash of unstyled text and makes the loading feel more intentional.
    document.fonts.ready.then(() => {
      // A small delay to ensure a smooth visual transition after fonts are ready.
      setTimeout(() => setAppReady(true), 500); 
    });
  }, []);


  const handleGameStart = () => {
    setGameStarted(true);
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen w-full">
      {!gameStarted ? (
        <SplashScreen 
            onStartGame={handleGameStart} 
            isReady={appReady} 
            setMusicUrl={setMusicUrl}
        />
      ) : (
        <GameScreen setMusicUrl={setMusicUrl} />
      )}
      <MusicPlayer src={musicUrl} />
    </div>
  );
};

export default App;
