import React from 'react';
import { Note } from '../../types/data';

interface NoteCardProps {
  note: Note;
}

const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">{note.title}</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700 text-lg leading-relaxed">{note.content}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {note.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NoteCard; 