import React from 'react';

const Gramatica: React.FC = () => {
  const temasGramatica = [
    {
      titulo: 'Partículas',
      descripcion: 'Las partículas son elementos esenciales en coreano que indican la función de las palabras en la oración.',
      ejemplos: [
        { coreano: '은/는', uso: 'Partícula de tema', ejemplo: '저는 학생입니다 (Yo soy estudiante)' },
        { coreano: '이/가', uso: 'Partícula de sujeto', ejemplo: '고양이가 있습니다 (Hay un gato)' },
        { coreano: '을/를', uso: 'Partícula de objeto', ejemplo: '사과를 먹어요 (Como una manzana)' }
      ]
    },
    {
      titulo: 'Conjugación de Verbos',
      descripcion: 'Los verbos en coreano se conjugan según el nivel de formalidad y el tiempo.',
      ejemplos: [
        { coreano: '하다', uso: 'Forma básica', ejemplo: '공부하다 (estudiar)' },
        { coreano: '해요', uso: 'Forma presente informal', ejemplo: '공부해요 (estudio)' },
        { coreano: '합니다', uso: 'Forma presente formal', ejemplo: '공부합니다 (estudio)' }
      ]
    },
    {
      titulo: 'Adjetivos',
      descripcion: 'Los adjetivos en coreano se conjugan de manera similar a los verbos.',
      ejemplos: [
        { coreano: '예쁘다', uso: 'Forma básica', ejemplo: '예쁘다 (ser bonito)' },
        { coreano: '예뻐요', uso: 'Forma presente informal', ejemplo: '예뻐요 (es bonito)' },
        { coreano: '예쁩니다', uso: 'Forma presente formal', ejemplo: '예쁩니다 (es bonito)' }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Introducción */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Gramática Coreana</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          La gramática coreana tiene una estructura única que difiere del español.
          Aquí aprenderás los conceptos básicos y fundamentales.
        </p>
      </div>

      {/* Temas de Gramática */}
      <div className="space-y-8">
        {temasGramatica.map((tema, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{tema.titulo}</h2>
            <p className="text-gray-700 mb-6">{tema.descripcion}</p>
            
            <div className="space-y-4">
              {tema.ejemplos.map((ejemplo, ejIndex) => (
                <div key={ejIndex} className="bg-indigo-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-lg font-medium text-indigo-900 mr-2">{ejemplo.coreano}</span>
                    <span className="text-sm text-gray-500">- {ejemplo.uso}</span>
                  </div>
                  <p className="text-gray-700">{ejemplo.ejemplo}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Consejos de Estudio */}
      <div className="bg-indigo-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-4">Consejos para Aprender Gramática</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Practica con oraciones simples primero</li>
          <li>Presta atención al orden de las palabras (Sujeto-Objeto-Verbo)</li>
          <li>Memoriza las partículas más comunes</li>
          <li>Practica la conjugación de verbos y adjetivos</li>
          <li>Usa las formas formales e informales apropiadamente</li>
        </ul>
      </div>
    </div>
  );
};

export default Gramatica; 