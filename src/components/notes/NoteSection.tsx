import React from 'react';
import { Section } from '../../types/data';
import { useLearning } from '../../context/LearningContext';

interface NoteSectionProps {
  section: Section;
}

const NoteSection = ({ section }: NoteSectionProps) => {
  const { getNote } = useLearning();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
      
      <div className="space-y-4">
        {section.notes.map((noteId) => {
          const note = getNote(noteId);
          return note ? (
            <div key={note.id} className="border-l-4 border-indigo-500 pl-4">
              <h3 className="text-lg font-medium text-gray-900">{note.title}</h3>
              <p className="text-gray-600 mt-2">{note.content}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default NoteSection; 