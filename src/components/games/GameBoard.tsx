import type { Card as CardType } from '../../types/memoryGame';
import { Card } from './Card';

interface GameBoardProps {
  cards: CardType[];
  onCardClick: (cardId: number) => void;
}

export function GameBoard({ cards, onCardClick }: GameBoardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {cards.map(card => (
        <Card key={card.id} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
} 