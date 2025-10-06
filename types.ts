export interface PlayerStats {
  health: number;
  maxHealth: number;
  internalEnergy: number;
  maxInternalEnergy: number;
  money: number;
  righteousness: number;
  title: string;
  portrait: string;
}

export interface GameFlags {
  [key: string]: boolean | number | string;
}

export interface GameState {
  playerStats: PlayerStats;
  flags: GameFlags;
}

export interface Choice {
  text: string;
  nextSceneId: string;
  effects?: Partial<PlayerStats> & { flags?: GameFlags };
  condition?: (gameState: GameState) => boolean;
}

export interface CharacterSprite {
  id: string;
  image: string;
  name: string;
  title?: string;
  position: 'left' | 'right' | 'center';
  visible: boolean;
}

export interface Dialogue {
  speaker: string;
  speakerId: string; // id from CharacterSprite
  lines: string[];
}

export interface SceneNode {
  description: string[];
  sprites: CharacterSprite[];
  dialogue?: Dialogue;
  situation?: string;
  choices?: Choice[];
  image?: string;
  music?: string;
  nextSceneId?: string; // For automatic progression from scenes without choices.
}

export type StoryData = {
  [key: string]: SceneNode;
};
