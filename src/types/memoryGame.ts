export interface Card {
  id: number;
  korean: string;
  spanish: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameCategory {
  id: string;
  name: string;
  difficulty: 'facil' | 'medio' | 'dificil';
  cards: Array<{ korean: string; spanish: string }>;
}

export interface GameState {
  cards: Card[];
  flippedCards: number[];
  moves: number;
  gameComplete: boolean;
  selectedCategory: string;
  gameStarted: boolean;
} 