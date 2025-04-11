export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

export interface Section {
  id: string;
  title: string;
  notes: string[];
}

export interface Game {
  id: string;
  type: 'fillInTheBlank' | 'matchingPairs' | 'flashcards';
  title: string;
  exercises?: {
    question: string;
    answer: string;
  }[];
  pairs?: {
    item1: string;
    item2: string;
  }[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  sections: Section[];
  games: string[];
}

export interface LearningData {
  topics: Topic[];
  notes: Record<string, Note>;
  games: Record<string, Game>;
} 