import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aprende Coreano</h3>
            <p className="text-indigo-100">
              Tu plataforma interactiva para aprender el idioma coreano de manera efectiva y divertida.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/apuntes" className="hover:text-indigo-200 transition-colors">Apuntes</a></li>
              <li><a href="/juegos" className="hover:text-indigo-200 transition-colors">Juegos</a></li>
              <li><a href="/recursos" className="hover:text-indigo-200 transition-colors">Recursos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-indigo-100">
              ¿Tienes alguna pregunta o sugerencia?<br />
              <a href="mailto:contacto@ejemplo.com" className="hover:text-indigo-200 transition-colors">
                contacto@ejemplo.com
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-indigo-400 mt-8 pt-6 text-center text-indigo-100">
          <p>&copy; {new Date().getFullYear()} Aprende Coreano. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 