import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Aprende Coreano</h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Explora el fascinante mundo del idioma coreano. Comienza tu viaje desde lo básico
        y avanza hasta dominar el idioma.
      </p>

      {/* Nivel Principiante */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Nivel Principiante</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link
            to="/hangul"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">한글</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hangul</h3>
            <p className="text-gray-600">
              Aprende el alfabeto coreano, uno de los sistemas de escritura más científicos del mundo.
            </p>
          </Link>

          <Link
            to="/batchim"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">받침</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Batchim</h3>
            <p className="text-gray-600">
              Domina las consonantes finales y sus reglas de pronunciación en coreano.
            </p>
          </Link>

          <Link
            to="/vocabulario-basico"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">단어</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vocabulario Básico</h3>
            <p className="text-gray-600">
              Palabras y expresiones esenciales para comenzar a comunicarte en coreano.
            </p>
          </Link>

          <Link
            to="/gramatica-basica"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">문법</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gramática Básica</h3>
            <p className="text-gray-600">
              Fundamentos de la estructura gramatical del coreano.
            </p>
          </Link>
        </div>
      </div>

      {/* Nivel Intermedio */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Nivel Intermedio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/gramatica-intermedia"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">문법</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gramática Intermedia</h3>
            <p className="text-gray-600">
              Estructuras gramaticales más complejas y su uso en contextos reales.
            </p>
          </Link>

          <Link
            to="/vocabulario-intermedio"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">단어</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vocabulario Intermedio</h3>
            <p className="text-gray-600">
              Amplía tu vocabulario con palabras y expresiones más específicas.
            </p>
          </Link>

          <Link
            to="/expresiones-comunes"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">표현</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expresiones Comunes</h3>
            <p className="text-gray-600">
              Frases y expresiones utilizadas en situaciones cotidianas.
            </p>
          </Link>
        </div>
      </div>

      {/* Nivel Avanzado */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Nivel Avanzado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/gramatica-avanzada"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">문법</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gramática Avanzada</h3>
            <p className="text-gray-600">
              Estructuras gramaticales complejas y su uso en contextos formales.
            </p>
          </Link>

          <Link
            to="/vocabulario-avanzado"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">단어</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Vocabulario Avanzado</h3>
            <p className="text-gray-600">
              Vocabulario especializado y términos técnicos.
            </p>
          </Link>

          <Link
            to="/expresiones-idiomaticas"
            className="bg-white rounded-xl shadow-sm p-8 text-center transform hover:scale-105 transition-transform duration-200"
          >
            <div className="text-5xl mb-4 text-indigo-600">관용어</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expresiones Idiomáticas</h3>
            <p className="text-gray-600">
              Modismos y expresiones culturales del coreano.
            </p>
          </Link>
        </div>
      </div>

      {/* Sección de Donaciones */}
      <div className="mt-16 bg-yellow-50 rounded-xl p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">¿Te gusta este proyecto?</h2>
        <p className="text-gray-600 mb-6">
          Si este sitio te ha ayudado a aprender coreano, considera apoyar su desarrollo
          con una donación. Tu apoyo nos ayuda a seguir mejorando y agregando más contenido.
        </p>
        <a
          href="https://www.buymeacoffee.com/ponchor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 102 0V7a1 1 0 10-2 0v4zm0 2a1 1 0 102 0 1 1 0 00-2 0z" />
          </svg>
          Apoya con un Café
        </a>
      </div>
    </div>
  );
};

export default Home;
