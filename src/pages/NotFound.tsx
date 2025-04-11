import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">¡Ups! Página no encontrada</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Volver al Inicio
          </Link>
          
          <div className="flex justify-center space-x-4">
            <Link 
              to="/apuntes" 
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Apuntes
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/juegos" 
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Juegos
            </Link>
            <span className="text-gray-400">|</span>
            <Link 
              to="/recursos" 
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Recursos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 