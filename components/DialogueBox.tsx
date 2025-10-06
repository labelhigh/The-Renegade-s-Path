import React, { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

interface DialogueBoxProps {
  speaker: string;
  lines: string[];
  onFinished: () => void;
  position: 'left' | 'right' | 'center';
}

const DialogueBox: React.FC<DialogueBoxProps> = ({ speaker, lines, onFinished, position }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setCurrentLineIndex(0);
    setIsTyping(true);
  }, [lines]);

  const handleLineFinish = () => {
    setIsTyping(false);
  };
  
  const handleNext = () => {
    if (isTyping) {
      // Allow skipping the typewriter effect
      setIsTyping(false);
    } else if (currentLineIndex < lines.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
      setIsTyping(true);
    } else {
      onFinished();
    }
  };

  const currentLine = lines[currentLineIndex];

  const getPositionClasses = () => {
    // Sprite is w-48 (12rem) and positioned at 8 (2rem) from edge.
    // Dialogue box offset: 2rem margin + 12rem sprite width + 2rem space = 16rem.
    switch(position) {
        case 'left':
            return 'left-[16rem] top-1/2 -translate-y-1/2'; 
        case 'right':
            return 'right-[16rem] top-1/2 -translate-y-1/2';
        case 'center':
        default:
            // Above a center sprite (h-64 / 16rem) at bottom-24 (6rem).
            // Box starts at 6rem + 16rem + 2rem space = 24rem from bottom.
            return 'left-1/2 -translate-x-1/2 bottom-[24rem]'; 
    }
  };

  const getTailClasses = () => {
    const base = "absolute w-0 h-0 border-[10px] border-solid";
    switch(position) {
        case 'left':
            return `${base} -left-5 top-1/2 -translate-y-1/2 border-y-transparent border-l-0 border-r-red-800`;
        case 'right':
            return `${base} -right-5 top-1/2 -translate-y-1/2 border-y-transparent border-r-0 border-l-red-800`;
        case 'center':
        default:
            return `${base} bottom-[-20px] left-1/2 -translate-x-1/2 border-x-transparent border-b-0 border-t-red-800`;
    }
  };


  return (
    <div 
      className={`absolute w-full max-w-md p-6 bg-black/80 border-2 border-red-800 rounded-lg shadow-2xl animate-fade-in z-20 ${getPositionClasses()}`}
      onClick={handleNext}
      style={{ cursor: 'pointer' }}
    >
      <div className={getTailClasses()} />
      <h3 className="text-xl font-bold text-amber-300 tracking-widest mb-3">{speaker}</h3>
      <div className="text-white text-lg min-h-[4rem] leading-relaxed">
        {isTyping ? (
          <Typewriter text={currentLine} onFinished={handleLineFinish} speed={30} />
        ) : (
          <div>
            {currentLine}
            <span className="ml-4 text-gray-400 animate-pulse">▼</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogueBox;