import React from 'react';
import { Note } from '../../types/data';

interface NoteViewProps {
  note: Note;
}

const NoteView = ({ note }: NoteViewProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{note.title}</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700 whitespace-pre-line">{note.content}</p>
      </div>
      {note.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteView; 