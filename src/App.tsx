import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Hangul from './pages/Hangul';
import Batchim from './pages/Batchim';
import VocabularioBasico from './pages/VocabularioBasico';
import GramaticaBasica from './pages/GramaticaBasica';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto">
            <div className="relative flex justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center px-4">
                <Link to="/" className="text-xl font-bold text-indigo-600">
                  Aprende Coreano
                </Link>
              </div>

              {/* Navegación Desktop */}
              <div className="hidden sm:flex sm:items-center">
                <div className="flex space-x-8">
                  <Link
                    to="/"
                    className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium"
                  >
                    Inicio
                  </Link>
                  
                  {/* Menú Principiante */}
                  <div className="relative">
                    <button className="text-gray-500 group inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-gray-700">
                      Principiante
                    </button>
                    <div className="absolute left-0 w-48 mt-1 bg-white rounded-md shadow-lg py-1 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <Link to="/hangul" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Hangul
                      </Link>
                      <Link to="/batchim" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Batchim
                      </Link>
                      <Link to="/vocabulario-basico" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Vocabulario Básico
                      </Link>
                      <Link to="/gramatica-basica" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Gramática Básica
                      </Link>
                    </div>
                  </div>

                  {/* Menú Intermedio */}
                  <div className="relative">
                    <button className="text-gray-500 group inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-gray-700">
                      Intermedio
                    </button>
                    <div className="absolute left-0 w-48 mt-1 bg-white rounded-md shadow-lg py-1 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <Link to="/gramatica-intermedia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Gramática Intermedia
                      </Link>
                      <Link to="/vocabulario-intermedio" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Vocabulario Intermedio
                      </Link>
                      <Link to="/expresiones-comunes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Expresiones Comunes
                      </Link>
                    </div>
                  </div>

                  {/* Menú Avanzado */}
                  <div className="relative">
                    <button className="text-gray-500 group inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-gray-700">
                      Avanzado
                    </button>
                    <div className="absolute left-0 w-48 mt-1 bg-white rounded-md shadow-lg py-1 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <Link to="/gramatica-avanzada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Gramática Avanzada
                      </Link>
                      <Link to="/vocabulario-avanzado" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Vocabulario Avanzado
                      </Link>
                      <Link to="/expresiones-idiomaticas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Expresiones Idiomáticas
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de donaciones y menú móvil */}
              <div className="flex items-center pr-4">
                <a
                  href="https://www.buymeacoffee.com/ponchor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 102 0V7a1 1 0 10-2 0v4zm0 2a1 1 0 102 0 1 1 0 00-2 0z" />
                  </svg>
                  Apoya el Proyecto
                </a>
                <button
                  type="button"
                  className="sm:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <span className="sr-only">Abrir menú principal</span>
                  <svg
                    className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <svg
                    className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Menú móvil */}
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50"
              >
                Inicio
              </Link>
              <div className="pl-3 pr-4 py-2">
                <h3 className="text-sm font-medium text-gray-500">Principiante</h3>
                <div className="mt-2 space-y-1">
                  <Link to="/hangul" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Hangul
                  </Link>
                  <Link to="/batchim" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Batchim
                  </Link>
                  <Link to="/vocabulario-basico" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Vocabulario Básico
                  </Link>
                  <Link to="/gramatica-basica" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Gramática Básica
                  </Link>
                </div>
              </div>
              <div className="pl-3 pr-4 py-2">
                <h3 className="text-sm font-medium text-gray-500">Intermedio</h3>
                <div className="mt-2 space-y-1">
                  <Link to="/gramatica-intermedia" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Gramática Intermedia
                  </Link>
                  <Link to="/vocabulario-intermedio" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Vocabulario Intermedio
                  </Link>
                  <Link to="/expresiones-comunes" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Expresiones Comunes
                  </Link>
                </div>
              </div>
              <div className="pl-3 pr-4 py-2">
                <h3 className="text-sm font-medium text-gray-500">Avanzado</h3>
                <div className="mt-2 space-y-1">
                  <Link to="/gramatica-avanzada" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Gramática Avanzada
                  </Link>
                  <Link to="/vocabulario-avanzado" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Vocabulario Avanzado
                  </Link>
                  <Link to="/expresiones-idiomaticas" className="block pl-4 pr-4 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Expresiones Idiomáticas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hangul" element={<Hangul />} />
            <Route path="/batchim" element={<Batchim />} />
            <Route path="/vocabulario-basico" element={<VocabularioBasico />} />
            <Route path="/gramatica-basica" element={<GramaticaBasica />} />
            <Route path="/gramatica-intermedia" element={<div>Gramática Intermedia (Próximamente)</div>} />
            <Route path="/vocabulario-intermedio" element={<div>Vocabulario Intermedio (Próximamente)</div>} />
            <Route path="/expresiones-comunes" element={<div>Expresiones Comunes (Próximamente)</div>} />
            <Route path="/gramatica-avanzada" element={<div>Gramática Avanzada (Próximamente)</div>} />
            <Route path="/vocabulario-avanzado" element={<div>Vocabulario Avanzado (Próximamente)</div>} />
            <Route path="/expresiones-idiomaticas" element={<div>Expresiones Idiomáticas (Próximamente)</div>} />
        </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
