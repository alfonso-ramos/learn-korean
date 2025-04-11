import React from 'react';
import { useParams } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';
import NoteView from '../components/notes/NoteView';
import { Link } from 'react-router-dom';

const HangulPage = () => {
  const { getTopic, getNote } = useLearning();
  const { sectionId } = useParams<{ sectionId: string }>();
  const topic = getTopic('hangul');

  if (!topic) {
    return <div className="p-4">Tema no encontrado</div>;
  }

  const currentSection = topic.sections.find(section => section.id === sectionId);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{topic.title}</h1>
        <p className="text-gray-600">{topic.description}</p>
      </div>

      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {topic.sections.map((section) => (
          <Link
            key={section.id}
            to={`/topics/hangul/${section.id}`}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              sectionId === section.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {section.title}
          </Link>
        ))}
      </div>

      {currentSection ? (
        <div>
          {currentSection.notes.map((noteId) => {
            const note = getNote(noteId);
            return note ? <NoteView key={note.id} note={note} /> : null;
          })}
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600">Selecciona una sección para ver su contenido</p>
        </div>
      )}
    </div>
  );
};

export default HangulPage; 