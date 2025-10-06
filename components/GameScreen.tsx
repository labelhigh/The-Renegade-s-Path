import React, { useState, useEffect, useCallback } from 'react';
import { PlayerStats, GameFlags, Choice, CharacterSprite } from '../types';
import { INITIAL_PLAYER_STATS } from '../constants';
import { story } from '../game/story';
import DialogueBox from './DialogueBox';
import Hud from './Hud';
import CharacterSheet from './CharacterSheet';
import Typewriter from './Typewriter';

interface GameScreenProps {
  setMusicUrl: (url: string | null) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ setMusicUrl }) => {
  const [playerStats, setPlayerStats] = useState<PlayerStats>(INITIAL_PLAYER_STATS);
  const [flags, setFlags] = useState<GameFlags>({});
  const [currentSceneId, setCurrentSceneId] = useState<string>('start');
  const [sceneText, setSceneText] = useState('');
  const [isRevealingText, setIsRevealingText] = useState(false);
  const [waitingForConfirmation, setWaitingForConfirmation] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [showCharacterSheet, setShowCharacterSheet] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [background, setBackground] = useState('');

  const currentScene = story[currentSceneId];
  const speakerSprite = showDialogue ? currentScene.sprites.find(s => s.id === currentScene.dialogue?.speakerId) : null;
  const speakerPosition = speakerSprite ? speakerSprite.position : 'center';

  useEffect(() => {
    setMusicUrl(currentScene.music || null);
  }, [currentScene, setMusicUrl]);

  const updateTitle = useCallback(() => {
    let newTitle = playerStats.title;
    if (playerStats.righteousness >= 50 && newTitle !== '義薄雲天') newTitle = '義薄雲天';
    else if (playerStats.righteousness >= 20 && newTitle !== '江湖大俠') newTitle = '江湖大俠';
    else if (playerStats.righteousness <= -50 && newTitle !== '邪魔外道') newTitle = '邪魔外道';
    else if (playerStats.righteousness <= -20 && newTitle !== '冷血無情') newTitle = '冷血無情';
    else if (playerStats.righteousness > -20 && playerStats.righteousness < 20 && newTitle !== '赤龍寨二當家') newTitle = '赤龍寨二當家';
    
    if (playerStats.title !== newTitle) {
      setPlayerStats(prev => ({ ...prev, title: newTitle }));
    }
  }, [playerStats.righteousness, playerStats.title]);

  useEffect(() => {
    updateTitle();
  }, [playerStats.righteousness, updateTitle]);

  const handleChoice = useCallback((choice: Choice) => {
    if (isRevealingText || isTransitioning) return;

    setPlayerStats(prevStats => {
      const newStats: PlayerStats = { ...prevStats };
      if (choice.effects) {
        newStats.health = Math.min(prevStats.maxHealth, (prevStats.health + (choice.effects.health || 0)));
        newStats.internalEnergy = Math.min(prevStats.maxInternalEnergy, (prevStats.internalEnergy + (choice.effects.internalEnergy || 0)));
        newStats.money += choice.effects.money || 0;
        newStats.righteousness += choice.effects.righteousness || 0;
        if (choice.effects.title) newStats.title = choice.effects.title;
      }
      return newStats;
    });

    if (choice.effects?.flags) {
      setFlags(prevFlags => ({ ...prevFlags, ...choice.effects?.flags }));
    }

    setIsTransitioning(true);
    setTimeout(() => {
        if (!story[choice.nextSceneId]) {
            console.error(`[Story Error] Scene ID "${choice.nextSceneId}" not found in story data. This is a story configuration error.`);
            setCurrentSceneId('error_scene');
        } else {
            setCurrentSceneId(choice.nextSceneId);
        }
        setIsTransitioning(false);
    }, 500);
  }, [isRevealingText, isTransitioning]);

  const startScene = useCallback((sceneId: string) => {
    const scene = story[sceneId];
    if (!scene) {
        console.error(`[Story Error] Attempted to start non-existent scene: "${sceneId}".`);
        setCurrentSceneId('error_scene');
        return;
    }

    setIsRevealingText(true);
    setWaitingForConfirmation(false);
    setShowDialogue(false);
    setShowChoices(false);
    setSceneText(scene.description.join('\n\n'));
    setBackground(scene.image || '');
  }, []);

  useEffect(() => {
    startScene(currentSceneId);
  }, [currentSceneId, startScene]);

  const handleTextRevealFinish = () => {
    setIsRevealingText(false);
    setWaitingForConfirmation(true);
  };

  const handleConfirmation = () => {
    if (!waitingForConfirmation) return;
    setWaitingForConfirmation(false);

    if (currentScene.dialogue) {
      setShowDialogue(true);
    } else if (currentScene.choices) {
      setShowChoices(true);
    } else if (currentScene.nextSceneId) {
      handleChoice({ text: '', nextSceneId: currentScene.nextSceneId });
    } else {
      console.error(`[Story Error] Dead end scene: "${currentSceneId}" has no dialogue, choices, or nextSceneId.`);
      setCurrentSceneId('error_scene');
    }
  };

  const handleDialogueFinish = () => {
    setShowDialogue(false);
    
    // A small delay for a smoother UI transition before choices appear
    setTimeout(() => {
      if (currentScene.choices) {
        setShowChoices(true);
      } else if (currentScene.nextSceneId) {
        handleChoice({ text: '', nextSceneId: currentScene.nextSceneId });
      } else {
        console.error(`[Story Error] Dead end after dialogue: "${currentSceneId}" has no choices or nextSceneId.`);
        setCurrentSceneId('error_scene');
      }
    }, 100);
  };

  const getSpriteContainerClass = (sprite: CharacterSprite) => {
    let positionClass = '';
    switch (sprite.position) {
      case 'left':
        positionClass = 'left-8 top-1/2 -translate-y-1/2';
        break;
      case 'right':
        positionClass = 'right-8 top-1/2 -translate-y-1/2';
        break;
      case 'center':
        // Keep center sprites at the bottom to avoid overlapping with the central scene description text.
        positionClass = 'left-1/2 -translate-x-1/2 bottom-24'; // Increased bottom to make space for nameplate
        break;
      default:
        positionClass = 'left-8 top-1/2 -translate-y-1/2';
    }
    const isActive = showDialogue && currentScene.dialogue?.speakerId === sprite.id;
    
    const baseClasses = 'absolute transition-all duration-500 ease-in-out w-48 h-64'; // New smaller rectangular size
    const activeClasses = isActive ? 'scale-105' : 'scale-100';
    const visibilityClass = sprite.visible ? 'opacity-100' : 'opacity-0 pointer-events-none';
    const brightnessClass = showDialogue && !isActive ? 'brightness-[0.6]' : 'brightness-100';

    return `${baseClasses} ${positionClass} ${activeClasses} ${visibilityClass} ${brightnessClass}`;
  };

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden select-none">
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${background})`, opacity: isTransitioning ? 0 : 1 }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Transition Overlay */}
      <div 
        className="absolute inset-0 bg-black z-50 transition-opacity duration-500"
        style={{ opacity: isTransitioning ? 1 : 0, pointerEvents: 'none' }}
      />
      
      {/* HUD */}
      <Hud stats={playerStats} onCharacterSheetOpen={() => setShowCharacterSheet(true)} />

      {/* Character Sprites */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {currentScene.sprites.map(sprite => {
           const isPlayer = sprite.id === 'player';
           const title = isPlayer ? playerStats.title : sprite.title;

           return (
            <div key={`${currentSceneId}-${sprite.id}`} className={getSpriteContainerClass(sprite)}>
              <div className="w-full h-full bg-black/30 border-2 border-amber-800/40 rounded-lg overflow-hidden shadow-lg">
                  <img
                      src={sprite.image}
                      alt={sprite.name}
                      className="w-full h-full object-cover"
                  />
              </div>
              <div className="absolute -bottom-14 w-full flex flex-col items-center">
                <div className="bg-black/70 px-4 py-1 rounded-md text-center shadow-lg whitespace-nowrap">
                    <p className="text-amber-300 text-lg font-bold">{sprite.name}</p>
                    {title && <p className="text-gray-300 text-sm">{title}</p>}
                </div>
              </div>
            </div>
           )
        })}
      </div>

      {/* Main Content Area */}

      {/* Scene Description Text & Confirmation */}
      {(isRevealingText || waitingForConfirmation) && (
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl p-8 bg-black/60 rounded-lg text-gray-200 text-xl md:text-2xl leading-relaxed z-20"
          onClick={waitingForConfirmation ? handleConfirmation : undefined}
          style={{ cursor: waitingForConfirmation ? 'pointer' : 'default' }}
        >
          {isRevealingText ? (
            <Typewriter
              text={sceneText}
              onFinished={handleTextRevealFinish}
            />
          ) : (
            <>
              <div className="whitespace-pre-line">{sceneText}</div>
              <div className="text-center mt-4">
                  <span className="text-gray-400 animate-pulse text-2xl">▼</span>
              </div>
            </>
          )}
        </div>
      )}

      {/* Dialogue Box */}
      {showDialogue && currentScene.dialogue && speakerSprite && (
        <DialogueBox
          speaker={currentScene.dialogue.speaker}
          lines={currentScene.dialogue.lines}
          onFinished={handleDialogueFinish}
          position={speakerPosition}
        />
      )}

      {/* Choices */}
      {showChoices && currentScene.choices && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full z-20 flex flex-col items-center justify-center">
          <div className="w-full max-w-xl animate-fade-in space-y-4">
            {currentScene.situation && (
                <div className="text-center mb-4 p-4 bg-black/70 rounded-lg border border-cyan-700/50">
                    <p className="text-cyan-200 text-lg whitespace-pre-line">{currentScene.situation}</p>
                </div>
            )}
            {currentScene.choices
              .filter(choice => choice.condition ? choice.condition({ playerStats, flags }) : true)
              .map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                className="w-full text-left p-4 bg-gray-900/80 border border-gray-600 rounded-lg shadow-lg hover:bg-red-800/90 hover:border-red-500 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-200 text-lg"
              >
                {`> ${choice.text}`}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Character Sheet Modal */}
      {showCharacterSheet && (
          <CharacterSheet stats={playerStats} onClose={() => setShowCharacterSheet(false)} />
      )}
    </div>
  );
};

export default GameScreen;
