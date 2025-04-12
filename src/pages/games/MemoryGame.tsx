import React, { useState, useEffect } from 'react';
import { Card, GameCategory, GameState } from '../../types/memoryGame';
import { gameCategories } from '../../data/gameCategories';
import { CategorySelector } from '../../components/games/CategorySelector';
import { GameHeader } from '../../components/games/GameHeader';
import { GameBoard } from '../../components/games/GameBoard';
import { GameControls } from '../../components/games/GameControls';
import '../../styles/MemoryGame.css';

export default function MemoryGame() {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    flippedCards: [],
    moves: 0,
    gameComplete: false,
    selectedCategory: 'saludos',
    gameStarted: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (gameState.gameStarted) {
      initializeGame();
    }
  }, [gameState.selectedCategory, gameState.gameStarted]);

  const initializeGame = () => {
    const category = gameCategories.find(cat => cat.id === gameState.selectedCategory);
    if (!category) return;

    const duplicatedCards = [...category.cards, ...category.cards].map((card, index) => ({
      ...card,
      id: index,
      isFlipped: false,
      isMatched: false,
    }));

    const shuffledCards = duplicatedCards.sort(() => Math.random() - 0.5);
    setGameState(prev => ({
      ...prev,
      cards: shuffledCards,
      flippedCards: [],
      moves: 0,
      gameComplete: false,
    }));
    setIsProcessing(false);
  };

  const handleCardClick = (cardId: number) => {
    if (isProcessing || gameState.flippedCards.length >= 2) {
      return;
    }

    const clickedCard = gameState.cards.find(card => card.id === cardId);
    
    if (!clickedCard || clickedCard.isMatched || clickedCard.isFlipped) {
      return;
    }

    const newCards = gameState.cards.map(card =>
      card.id === cardId ? { ...card, isFlipped: true } : card
    );

    const newFlippedCards = [...gameState.flippedCards, cardId];

    setGameState(prev => ({
      ...prev,
      cards: newCards,
      flippedCards: newFlippedCards,
    }));

    if (newFlippedCards.length === 2) {
      setIsProcessing(true);
      setGameState(prev => ({ ...prev, moves: prev.moves + 1 }));
      checkForMatch(newFlippedCards);
    }
  };

  const checkForMatch = (flippedIds: number[]) => {
    const [firstId, secondId] = flippedIds;
    const firstCard = gameState.cards.find(card => card.id === firstId);
    const secondCard = gameState.cards.find(card => card.id === secondId);

    if (firstCard?.korean === secondCard?.korean) {
      // Si hay match, actualizamos inmediatamente para mostrar la animación
      const newCards = gameState.cards.map(card =>
        card.id === firstId || card.id === secondId
          ? { ...card, isMatched: true, isFlipped: true }
          : card
      );
      
      const isGameComplete = newCards.every(card => card.isMatched);
      
      setGameState(prev => ({
        ...prev,
        cards: newCards,
        flippedCards: [],
        gameComplete: isGameComplete,
      }));

      // Esperamos a que termine la animación antes de permitir más clicks
      setTimeout(() => {
        setIsProcessing(false);
      }, 600);
    } else {
      // Si no hay match, esperamos antes de voltear las cartas
      setTimeout(() => {
        const newCards = gameState.cards.map(card =>
          card.id === firstId || card.id === secondId
            ? { ...card, isFlipped: false }
            : card
        );
        setGameState(prev => ({
          ...prev,
          cards: newCards,
          flippedCards: [],
        }));
        setIsProcessing(false);
      }, 1000);
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setGameState(prev => ({
      ...prev,
      selectedCategory: categoryId,
      gameStarted: true,
    }));
  };

  const handleBackToCategories = () => {
    setIsProcessing(false);
    setGameState(prev => ({
      ...prev,
      gameStarted: false,
    }));
  };

  if (!gameState.gameStarted) {
    return (
      <CategorySelector
        categories={gameCategories}
        onCategorySelect={handleCategorySelect}
      />
    );
  }

  const selectedCategory = gameCategories.find(cat => cat.id === gameState.selectedCategory);
  if (!selectedCategory) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <GameHeader
        selectedCategory={selectedCategory}
        moves={gameState.moves}
        gameComplete={gameState.gameComplete}
        onBackToCategories={handleBackToCategories}
      />
      
      <GameBoard
        cards={gameState.cards}
        onCardClick={handleCardClick}
      />
      
      <GameControls
        onBackToCategories={handleBackToCategories}
        onRestart={initializeGame}
      />
    </div>
  );
} 