import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopicList from '../components/notes/TopicList';
import TopicView from '../components/notes/TopicView';
import { useLearning } from '../context/LearningContext';

const AppRoutes = () => {
  const { topics } = useLearning();

  return (
    <Routes>
      <Route path="/" element={<TopicList topics={topics} />} />
      <Route path="/topics" element={<TopicList topics={topics} />} />
      <Route 
        path="/topics/:topicId" 
        element={
          <TopicView 
            topic={topics.find(t => t.id === window.location.pathname.split('/').pop())!} 
          />
        } 
      />
    </Routes>
  );
};

export default AppRoutes; 