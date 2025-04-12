import { GameCategory } from '../types/memoryGame';

export const gameCategories: GameCategory[] = [
  {
    id: 'saludos',
    name: 'Saludos',
    difficulty: 'facil',
    cards: [
      { korean: '안녕하세요', spanish: 'Hola' },
      { korean: '감사합니다', spanish: 'Gracias' },
      { korean: '미안합니다', spanish: 'Lo siento' },
      { korean: '잘 지내요', spanish: 'Estoy bien' },
      { korean: '이름이 뭐예요?', spanish: '¿Cómo te llamas?' },
      { korean: '만나서 반갑습니다', spanish: 'Mucho gusto' },
    ]
  },
  {
    id: 'numeros',
    name: 'Números',
    difficulty: 'facil',
    cards: [
      { korean: '하나', spanish: 'Uno' },
      { korean: '둘', spanish: 'Dos' },
      { korean: '셋', spanish: 'Tres' },
      { korean: '넷', spanish: 'Cuatro' },
      { korean: '다섯', spanish: 'Cinco' },
      { korean: '여섯', spanish: 'Seis' },
    ]
  },
  {
    id: 'colores',
    name: 'Colores',
    difficulty: 'medio',
    cards: [
      { korean: '빨간색', spanish: 'Rojo' },
      { korean: '파란색', spanish: 'Azul' },
      { korean: '노란색', spanish: 'Amarillo' },
      { korean: '녹색', spanish: 'Verde' },
      { korean: '보라색', spanish: 'Morado' },
      { korean: '주황색', spanish: 'Naranja' },
    ]
  }
]; 