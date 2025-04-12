import React from 'react';
import { GameCategory } from '../../types/memoryGame';

interface GameHeaderProps {
  selectedCategory: GameCategory;
  moves: number;
  gameComplete: boolean;
  onBackToCategories: () => void;
}

export function GameHeader({
  selectedCategory,
  moves,
  gameComplete,
  onBackToCategories,
}: GameHeaderProps) {
  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedCategory.name}
          </h2>
          <p className="text-sm text-gray-500">
            Dificultad: {selectedCategory.difficulty === 'facil' ? 'Fácil' : 'Medio'}
          </p>
        </div>
        <div className="text-gray-600">
          Movimientos: {moves}
        </div>
      </div>

      {gameComplete && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-lg">
          ¡Felicidades! Has completado el juego en {moves} movimientos.
          <button
            onClick={onBackToCategories}
            className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Volver a categorías
          </button>
        </div>
      )}
    </>
  );
} 