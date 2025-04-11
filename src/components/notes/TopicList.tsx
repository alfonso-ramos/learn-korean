import React from 'react';
import { Topic } from '../../types/data';
import { useLearning } from '../../context/LearningContext';
import { Link } from 'react-router-dom';

interface TopicListProps {
  topics: Topic[];
}

const TopicList = ({ topics }: TopicListProps) => {
  const { getSection } = useLearning();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Temas de Estudio</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{topic.title}</h2>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>{topic.sections.length} secciones</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicList; 