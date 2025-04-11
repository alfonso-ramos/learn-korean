import React from 'react';
import { Link } from 'react-router-dom';

const Apuntes = () => {
  const categorias = [
    {
      id: 1,
      titulo: 'Hangul',
      descripcion: 'Aprende el alfabeto coreano, su pronunciación y escritura.',
      icono: '🔤',
      color: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200'
    },
    {
      id: 2,
      titulo: 'Gramática Básica',
      descripcion: 'Conceptos fundamentales de la gramática coreana.',
      icono: '📚',
      color: 'bg-green-100',
      hoverColor: 'hover:bg-green-200'
    },
    {
      id: 3,
      titulo: 'Vocabulario',
      descripcion: 'Palabras y frases esenciales para el día a día.',
      icono: '📝',
      color: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-200'
    },
    {
      id: 4,
      titulo: 'Pronunciación',
      descripcion: 'Guía completa para mejorar tu pronunciación coreana.',
      icono: '🎤',
      color: 'bg-pink-100',
      hoverColor: 'hover:bg-pink-200'
    },
    {
      id: 5,
      titulo: 'Cultura',
      descripcion: 'Aprende sobre la cultura coreana y sus tradiciones.',
      icono: '🎎',
      color: 'bg-yellow-100',
      hoverColor: 'hover:bg-yellow-200'
    },
    {
      id: 6,
      titulo: 'Expresiones Comunes',
      descripcion: 'Frases útiles para conversaciones cotidianas.',
      icono: '💬',
      color: 'bg-indigo-100',
      hoverColor: 'hover:bg-indigo-200'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Apuntes de Coreano</h1>
        <p className="text-xl text-gray-600">
          Explora nuestros apuntes organizados por categorías para aprender coreano de manera efectiva.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categorias.map((categoria) => (
          <Link 
            key={categoria.id}
            to={`/apuntes/${categoria.titulo.toLowerCase().replace(/\s+/g, '-')}`}
            className={`block p-6 rounded-xl shadow-lg transition-all duration-300 ${categoria.color} ${categoria.hoverColor}`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl">{categoria.icono}</span>
              <h2 className="text-xl font-semibold text-gray-800">{categoria.titulo}</h2>
            </div>
            <p className="text-gray-600">{categoria.descripcion}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda?</h2>
        <p className="mb-6 text-indigo-100">
          Si tienes dudas sobre algún tema o necesitas material adicional, no dudes en contactarnos.
        </p>
        <Link 
          to="/contacto" 
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
        >
          Contactar
        </Link>
      </div>
    </div>
  );
};

export default Apuntes; 