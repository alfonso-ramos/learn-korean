import React, { createContext, useContext, useState } from 'react';
import { Topic, Section, Note, LearningData } from '../types/data';
import { learningData } from '../data/learningData';

interface LearningContextType {
  topics: Topic[];
  getNote: (id: string) => Note | undefined;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data] = useState<LearningData>(learningData);

  const getNote = (id: string) => data.notes[id];

  return (
    <LearningContext.Provider value={{ 
      topics: data.topics,
      getNote
    }}>
      {children}
    </LearningContext.Provider>
  );
}; 