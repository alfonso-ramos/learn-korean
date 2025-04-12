interface GameControlsProps {
  onBackToCategories: () => void;
  onRestart: () => void;
}

export function GameControls({
  onBackToCategories,
  onRestart,
}: GameControlsProps) {
  return (
    <div className="mt-4 flex justify-between">
      <button
        onClick={onBackToCategories}
        className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        Volver a categorías
      </button>
      <button
        onClick={onRestart}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Reiniciar Juego
      </button>
    </div>
  );
} 