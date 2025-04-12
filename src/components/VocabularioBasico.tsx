import React, { useState } from 'react';
import MemoryGame from '../pages/games/MemoryGame';

// Componentes básicos de vocabulario
const Saludos = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-700">Saludos Básicos</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <VocabularioItem
        coreano="안녕하세요"
        romanizacion="Annyeonghaseyo"
        español="Hola"
      />
      <VocabularioItem
        coreano="감사합니다"
        romanizacion="Gamsahamnida"
        español="Gracias"
      />
      <VocabularioItem
        coreano="미안합니다"
        romanizacion="Mianhamnida"
        español="Lo siento"
      />
      <VocabularioItem
        coreano="잘 지내요"
        romanizacion="Jal jinaeyo"
        español="Estoy bien"
      />
    </div>
  </div>
);

const Numeros: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-700">Números</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <VocabularioItem
        coreano="하나"
        romanizacion="Hana"
        español="Uno"
      />
      <VocabularioItem
        coreano="둘"
        romanizacion="Dul"
        español="Dos"
      />
      <VocabularioItem
        coreano="셋"
        romanizacion="Set"
        español="Tres"
      />
      <VocabularioItem
        coreano="넷"
        romanizacion="Net"
        español="Cuatro"
      />
    </div>
  </div>
);

const Colores: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-700">Colores</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <VocabularioItem
        coreano="빨간색"
        romanizacion="Ppalgan-saek"
        español="Rojo"
      />
      <VocabularioItem
        coreano="파란색"
        romanizacion="Paran-saek"
        español="Azul"
      />
      <VocabularioItem
        coreano="노란색"
        romanizacion="Noran-saek"
        español="Amarillo"
      />
      <VocabularioItem
        coreano="녹색"
        romanizacion="Nok-saek"
        español="Verde"
      />
    </div>
  </div>
);

const Familia: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-700">Familia</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <VocabularioItem
        coreano="아버지"
        romanizacion="Abeoji"
        español="Padre"
      />
      <VocabularioItem
        coreano="어머니"
        romanizacion="Eomeoni"
        español="Madre"
      />
      <VocabularioItem
        coreano="형"
        romanizacion="Hyeong"
        español="Hermano mayor (hombre)"
      />
      <VocabularioItem
        coreano="누나"
        romanizacion="Nuna"
        español="Hermana mayor (mujer)"
      />
    </div>
  </div>
);

const Comida: React.FC = () => (
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-gray-700">Comida</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <VocabularioItem
        coreano="밥"
        romanizacion="Bap"
        español="Arroz"
      />
      <VocabularioItem
        coreano="김치"
        romanizacion="Kimchi"
        español="Kimchi"
      />
      <VocabularioItem
        coreano="불고기"
        romanizacion="Bulgogi"
        español="Bulgogi"
      />
      <VocabularioItem
        coreano="비빔밥"
        romanizacion="Bibimbap"
        español="Bibimbap"
      />
    </div>
  </div>
);

interface VocabularioItemProps {
  coreano: string;
  romanizacion: string;
  español: string;
}

const VocabularioItem: React.FC<VocabularioItemProps> = ({ coreano, romanizacion, español }) => (
  <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="text-lg font-bold text-gray-800">{coreano}</div>
    <div className="text-sm text-gray-500">{romanizacion}</div>
    <div className="text-gray-700">{español}</div>
  </div>
);

const VocabularioBasico: React.FC = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('saludos');

  const categorias = [
    { id: 'saludos', nombre: 'Saludos' },
    { id: 'numeros', nombre: 'Números' },
    { id: 'colores', nombre: 'Colores' },
    { id: 'familia', nombre: 'Familia' },
    { id: 'comida', nombre: 'Comida' },
    { id: 'juego', nombre: 'Juego de Memoria' },
  ];

  const renderContenido = () => {
    switch (categoriaSeleccionada) {
      case 'saludos':
        return <Saludos />;
      case 'numeros':
        return <Numeros />;
      case 'colores':
        return <Colores />;
      case 'familia':
        return <Familia />;
      case 'comida':
        return <Comida />;
      case 'juego':
        return <MemoryGame />;
      default:
        return <Saludos />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Vocabulario Básico</h2>
        <div className="flex flex-wrap gap-2">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                categoriaSeleccionada === categoria.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {renderContenido()}
      </div>
    </div>
  );
};

export default VocabularioBasico; 