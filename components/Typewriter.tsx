import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  onFinished: () => void;
  className?: string;
  scrollContainerRef?: React.RefObject<HTMLDivElement>;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 40, onFinished, className, scrollContainerRef }) => {
  const [displayText, setDisplayText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsFinished(false);
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsFinished(true);
        onFinished();
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, onFinished]);

  useEffect(() => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [displayText, scrollContainerRef]);

  return (
    <div className={className}>
      {displayText}
      {!isFinished && <span className="cursor-blink">█</span>}
    </div>
  );
};

export default Typewriter;
