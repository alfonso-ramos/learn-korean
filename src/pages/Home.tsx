import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-6 animate-slide-up">
          Aprende Coreano Fácil
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Tu plataforma interactiva para aprender coreano de manera efectiva y divertida.
          Todo el contenido es completamente gratuito.
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <Link to="/apuntes" className="group animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg group-hover:rotate-12 transition-transform">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                Apuntes
              </h2>
            </div>
            <p className="text-gray-600">
              Accede a apuntes detallados y bien organizados sobre gramática, vocabulario y más.
            </p>
          </div>
        </Link>

        <Link to="/juegos" className="group animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:rotate-12 transition-transform">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                Juegos
              </h2>
            </div>
            <p className="text-gray-600">
              Aprende mientras te diviertes con nuestros juegos interactivos y ejercicios.
            </p>
          </div>
        </Link>

        <Link to="/recursos" className="group animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-pink-100 rounded-lg group-hover:rotate-12 transition-transform">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                Recursos
              </h2>
            </div>
            <p className="text-gray-600">
              Encuentra recursos adicionales, herramientas y materiales de apoyo para tu aprendizaje.
            </p>
          </div>
        </Link>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="mb-6 text-indigo-100">
            Únete a nuestra comunidad de aprendices y comienza tu viaje hacia el dominio del coreano.
          </p>
          <Link 
            to="/apuntes" 
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors hover:scale-110"
          >
            Comenzar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
