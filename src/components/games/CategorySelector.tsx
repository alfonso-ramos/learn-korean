import React from 'react';
import { GameCategory } from '../../types/memoryGame';

interface CategorySelectorProps {
  categories: GameCategory[];
  onCategorySelect: (categoryId: string) => void;
}

export function CategorySelector({
  categories,
  onCategorySelect,
}: CategorySelectorProps) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Selecciona una categoría</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            <p className="text-sm text-gray-500">
              Dificultad: {category.difficulty === 'facil' ? 'Fácil' : category.difficulty === 'medio' ? 'Medio' : 'Difícil'}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
} 