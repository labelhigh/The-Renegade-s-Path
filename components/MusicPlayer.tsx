import React, { useState, useRef, useEffect } from 'react';

interface MusicPlayerProps {
  src: string | null;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  // Set audio volume when the volume slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  // This effect handles the core logic of playing or pausing the audio
  // It runs when the user's intent (isPlaying) or the music source (src) changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && src) {
      // If the source is different from the current one, update it
      if (audio.currentSrc !== src) {
        audio.src = src;
      }
      // Play the audio
      audio.play().catch(error => {
        // This catch block handles the browser's autoplay policy.
        // If it fails, it means the user hasn't interacted with the page yet.
        console.log("Audio autoplay was prevented by the browser.");
        // We revert the state, and the interaction listener below will handle starting the music.
        setIsPlaying(false);
      });
    } else {
      // If isPlaying is false or there's no src, pause the audio.
      audio.pause();
    }
  }, [isPlaying, src]);

  // This effect sets up a one-time event listener to start music on the first user interaction.
  // This is necessary to comply with modern browser autoplay policies.
  useEffect(() => {
    const playOnFirstInteraction = () => {
      // Once the user interacts, we can freely play audio.
      // We set the state to playing, which will trigger the effect above.
      if (audioRef.current && audioRef.current.paused) {
          setIsPlaying(true);
      }
      // Clean up the event listener after it runs once.
      window.removeEventListener('click', playOnFirstInteraction);
      window.removeEventListener('keydown', playOnFirstInteraction);
    };

    window.addEventListener('click', playOnFirstInteraction);
    window.addEventListener('keydown', playOnFirstInteraction);

    return () => {
      window.removeEventListener('click', playOnFirstInteraction);
      window.removeEventListener('keydown', playOnFirstInteraction);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount.


  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };
  
  // The icon should reflect whether music is actually playing and a source is available.
  const showPlayingIcon = isPlaying && !!src;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center group">
      <audio ref={audioRef} loop />
      <button 
        onClick={togglePlayPause}
        className="w-12 h-12 bg-black/70 rounded-full shadow-lg border-2 border-amber-700 flex items-center justify-center text-amber-400 hover:bg-amber-900/80 transition-all duration-300 transform hover:scale-110"
        aria-label={showPlayingIcon ? "Mute music" : "Play music"}
      >
        <i className={`fas ${showPlayingIcon ? 'fa-volume-up' : 'fa-volume-mute'} text-xl`}></i>
      </button>
      <div className="transition-all duration-300 ease-in-out overflow-hidden w-0 ml-0 group-hover:w-32 group-hover:ml-4">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600"
          aria-label="Volume control"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
