import { GameCategory } from '../types/memoryGame';

export const gameCategories: GameCategory[] = [
  {
    id: 'saludos',
    name: 'Saludos',
    difficulty: 'facil',
    cards: [
      { korean: '안녕하세요', spanish: 'Hola', image: ''  },
      { korean: '감사합니다', spanish: 'Gracias', image: ''  },
      { korean: '미안합니다', spanish: 'Lo siento', image: ''  },
      { korean: '잘 지내요', spanish: 'Estoy bien', image: ''  },
      { korean: '이름이 뭐예요?', spanish: '¿Cómo te llamas?', image: ''  },
      { korean: '만나서 반갑습니다', spanish: 'Mucho gusto', image: ''  },
    ]
  },
  {
    id: 'numeros',
    name: 'Números',
    difficulty: 'facil',
    cards: [
      { korean: '하나', spanish: 'Uno', image: ''  },
      { korean: '둘', spanish: 'Dos', image: ''  },
      { korean: '셋', spanish: 'Tres', image: ''  },
      { korean: '넷', spanish: 'Cuatro', image: ''  },
      { korean: '다섯', spanish: 'Cinco', image: ''  },
      { korean: '여섯', spanish: 'Seis', image: ''  },
    ]
  },
  {
    id: 'colores',
    name: 'Colores',
    difficulty: 'medio',
    cards: [
      { korean: '빨간색', spanish: 'Rojo', image: '../../public/images/colors/rojo.jpg' },
      { korean: '파란색', spanish: 'Azul', image: '../../public/images/colors/azul.png'  },
      { korean: '노란색', spanish: 'Amarillo', image: '../../public/images/colors/amarillo.jpg'  },
      { korean: '녹색', spanish: 'Verde', image: '../../public/images/colors/verde.png'  },
      { korean: '보라색', spanish: 'Morado', image: '../../public/images/colors/morado.webp'  },
      { korean: '주황색', spanish: 'Naranja', image: '../../public/images/colors/naranja.png'  },
    ]
  }
]; 