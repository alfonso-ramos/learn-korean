import type { Card as CardType } from '../../types/memoryGame';

interface CardProps {
  card: CardType;
  onCardClick: (cardId: number) => void;
}

export function Card({ card, onCardClick }: CardProps) {
  const cardClasses = `card ${card.isFlipped ? 'flipped' : ''} ${card.isMatched ? 'matched' : ''}`;

  return (
    <div
      onClick={() => onCardClick(card.id)}
      className="aspect-[3/4] cursor-pointer"
    >
      <div className={cardClasses}>
        {/* Cara frontal */}
        <div className="card-face card-front">
          <div className="text-2xl">?</div>
        </div>
        
        {/* Cara trasera */}
        <div className={`card-face card-back ${card.isMatched ? 'bg-green-100' : ''}`}>
          <div className="card-content">
            <div className="text-lg font-bold text-gray-800">{card.korean}</div>
            <div className="text-sm text-gray-600">{card.spanish}</div>
          </div>
        </div>
      </div>
    </div>
  );
} 