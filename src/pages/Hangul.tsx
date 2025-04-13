import React from 'react';
import Recurso from '../components/Recurso';

const Hangul: React.FC = () => {
  const consonantes = [
    { hangul: 'ㄱ', romanizado: 'g/k', nombre: '기역' },
    { hangul: 'ㄴ', romanizado: 'n', nombre: '니은' },
    { hangul: 'ㄷ', romanizado: 'd/t', nombre: '디귿' },
    { hangul: 'ㄹ', romanizado: 'r/l', nombre: '리을' },
    { hangul: 'ㅁ', romanizado: 'm', nombre: '미음' },
    { hangul: 'ㅂ', romanizado: 'b/p', nombre: '비읍' },
    { hangul: 'ㅅ', romanizado: 's', nombre: '시옷' },
    { hangul: 'ㅇ', romanizado: 'ng', nombre: '이응' },
    { hangul: 'ㅈ', romanizado: 'j', nombre: '지읒' },
    { hangul: 'ㅊ', romanizado: 'ch', nombre: '치읓' },
    { hangul: 'ㅋ', romanizado: 'k', nombre: '키읔' },
    { hangul: 'ㅌ', romanizado: 't', nombre: '티읕' },
    { hangul: 'ㅍ', romanizado: 'p', nombre: '피읖' },
    { hangul: 'ㅎ', romanizado: 'h', nombre: '히읗' }
  ];

  const vocales = [
    { hangul: 'ㅏ', romanizado: 'a', nombre: '아' },
    { hangul: 'ㅑ', romanizado: 'ya', nombre: '야' },
    { hangul: 'ㅓ', romanizado: 'eo', nombre: '어' },
    { hangul: 'ㅕ', romanizado: 'yeo', nombre: '여' },
    { hangul: 'ㅗ', romanizado: 'o', nombre: '오' },
    { hangul: 'ㅛ', romanizado: 'yo', nombre: '요' },
    { hangul: 'ㅜ', romanizado: 'u', nombre: '우' },
    { hangul: 'ㅠ', romanizado: 'yu', nombre: '유' },
    { hangul: 'ㅡ', romanizado: 'eu', nombre: '으' },
    { hangul: 'ㅣ', romanizado: 'i', nombre: '이' }
  ];

  return (
    <div className="space-y-12">
      {/* Introducción */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hangul - 한글</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          El Hangul es el alfabeto coreano, creado en 1443 por el rey Sejong el Grande.
          Es uno de los sistemas de escritura más científicos del mundo.
        </p>
      </div>

      {/* Consonantes */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Consonantes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {consonantes.map((consonante, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center transform hover:scale-105 transition-transform duration-200"
            >
              <div className="text-5xl mb-2 text-indigo-600">{consonante.hangul}</div>
              <div className="text-sm text-gray-500 mb-1">{consonante.nombre}</div>
              <div className="text-lg font-medium text-gray-900">{consonante.romanizado}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Vocales */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Vocales</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {vocales.map((vocal, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center transform hover:scale-105 transition-transform duration-200"
            >
              <div className="text-5xl mb-2 text-indigo-600">{vocal.hangul}</div>
              <div className="text-sm text-gray-500 mb-1">{vocal.nombre}</div>
              <div className="text-lg font-medium text-gray-900">{vocal.romanizado}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recursos Adicionales</h2>
        <Recurso 
          nombre={"test"}
          archivo={"public/Aprende Coreano.pdf"}
        />
      </div>

      {/* Información adicional */}
      <div className="bg-indigo-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-indigo-900 mb-4">¿Sabías que...?</h3>
        <p className="text-gray-700">
          El Hangul fue diseñado para ser fácil de aprender. Cada símbolo representa la posición
          de la lengua y la forma de la boca al pronunciar el sonido. Por ejemplo, ㅁ (m) representa
          los labios cerrados, y ㅇ (ng) representa la garganta.
        </p>
      </div>
    </div>
  );
};

export default Hangul; 