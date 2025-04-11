import React from 'react';
import { Topic } from '../../types/data';
import { useLearning } from '../../context/LearningContext';
import NoteSection from './NoteSection';
import { Link } from 'react-router-dom';

interface TopicViewProps {
  topic: Topic;
}

const TopicView = ({ topic }: TopicViewProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          to="/topics" 
          className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block"
        >
          ← Volver a Temas
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{topic.title}</h1>
        <p className="text-xl text-gray-600">{topic.description}</p>
      </div>

      <div className="space-y-12">
        {topic.sections.map((section) => (
          <NoteSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default TopicView; 