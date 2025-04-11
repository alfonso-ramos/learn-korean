import { LearningData } from '../types/data';

export const learningData: LearningData = {
  topics: [
    {
      id: "hangul",
      title: "Alfabeto Hangul",
      description: "El sistema de escritura coreano",
      sections: [
        {
          id: "consonants",
          title: "Consonantes básicas",
          notes: ["note-1", "note-2"]
        },
        {
          id: "vowels",
          title: "Vocales básicas",
          notes: ["note-3", "note-4"]
        }
      ],
      games: ["game-1", "game-2", "game-3"]
    },
    {
      id: "greetings",
      title: "Saludos y presentaciones",
      description: "Formas de saludar en coreano",
      sections: [
        {
          id: "basic-greetings",
          title: "Saludos básicos",
          notes: ["note-5", "note-6"]
        },
        {
          id: "introductions",
          title: "Presentaciones",
          notes: ["note-7", "note-8"]
        }
      ],
      games: ["game-4", "game-5"]
    }
  ],
  notes: {
    "note-1": {
      id: "note-1",
      title: "Consonantes ㄱ, ㄴ, ㄷ",
      content: "Las consonantes básicas ㄱ (g/k), ㄴ (n) y ㄷ (d/t) son fundamentales en el Hangul. ㄱ se pronuncia como 'g' al inicio de palabra y como 'k' al final. ㄴ siempre se pronuncia como 'n'. ㄷ se pronuncia como 'd' al inicio y como 't' al final.",
      tags: ["básico", "consonantes", "hangul"]
    },
    "note-2": {
      id: "note-2",
      title: "Consonantes ㅁ, ㅂ, ㅅ",
      content: "Las consonantes ㅁ (m), ㅂ (b/p) y ㅅ (s) son esenciales. ㅁ siempre se pronuncia como 'm'. ㅂ se pronuncia como 'b' al inicio y como 'p' al final. ㅅ se pronuncia como 's' en la mayoría de los casos.",
      tags: ["básico", "consonantes", "hangul"]
    },
    "note-3": {
      id: "note-3",
      title: "Vocales ㅏ, ㅓ, ㅗ",
      content: "Las vocales básicas ㅏ (a), ㅓ (eo) y ㅗ (o) son fundamentales. ㅏ se pronuncia como 'a' en 'casa'. ㅓ se pronuncia como 'eo' en 'teoría'. ㅗ se pronuncia como 'o' en 'oso'.",
      tags: ["básico", "vocales", "hangul"]
    },
    "note-4": {
      id: "note-4",
      title: "Vocales ㅜ, ㅡ, ㅣ",
      content: "Las vocales ㅜ (u), ㅡ (eu) y ㅣ (i) completan las vocales básicas. ㅜ se pronuncia como 'u' en 'luna'. ㅡ se pronuncia como 'eu' en 'euro'. ㅣ se pronuncia como 'i' en 'mi'.",
      tags: ["básico", "vocales", "hangul"]
    },
    "note-5": {
      id: "note-5",
      title: "안녕하세요 (Hola)",
      content: "안녕하세요 (annyeonghaseyo) es el saludo más común en coreano. Se usa en situaciones formales y con personas que no conoces bien. La respuesta común es '안녕하세요' también.",
      tags: ["saludos", "básico", "formal"]
    },
    "note-6": {
      id: "note-6",
      title: "안녕 (Hola informal)",
      content: "안녕 (annyeong) es la versión informal de '안녕하세요'. Se usa con amigos y personas cercanas. La respuesta es igual: '안녕'.",
      tags: ["saludos", "básico", "informal"]
    },
    "note-7": {
      id: "note-7",
      title: "제 이름은... (Mi nombre es...)",
      content: "Para presentarte, puedes decir '제 이름은 [nombre]입니다' (je ireumeun [nombre]imnida). Por ejemplo: '제 이름은 마리아입니다' (Mi nombre es María).",
      tags: ["presentaciones", "básico", "formal"]
    },
    "note-8": {
      id: "note-8",
      title: "만나서 반갑습니다 (Encantado de conocerte)",
      content: "Después de presentarte, puedes decir '만나서 반갑습니다' (mannaseo bangapseumnida) que significa 'Encantado de conocerte'. Es una expresión formal y educada.",
      tags: ["presentaciones", "básico", "formal"]
    }
  },
  games: {
    "game-1": {
      id: "game-1",
      type: "fillInTheBlank",
      title: "Completa las consonantes",
      exercises: [
        {
          question: "¿Cómo se escribe 'g/k' en Hangul?",
          answer: "ㄱ"
        },
        {
          question: "¿Cómo se escribe 'n' en Hangul?",
          answer: "ㄴ"
        },
        {
          question: "¿Cómo se escribe 'd/t' en Hangul?",
          answer: "ㄷ"
        }
      ]
    },
    "game-2": {
      id: "game-2",
      type: "matchingPairs",
      title: "Relaciona consonantes con su sonido",
      pairs: [
        { item1: "ㄱ", item2: "g/k" },
        { item1: "ㄴ", item2: "n" },
        { item1: "ㄷ", item2: "d/t" },
        { item1: "ㅁ", item2: "m" },
        { item1: "ㅂ", item2: "b/p" }
      ]
    },
    "game-3": {
      id: "game-3",
      type: "flashcards",
      title: "Flashcards de vocales",
      exercises: [
        {
          question: "ㅏ",
          answer: "a"
        },
        {
          question: "ㅓ",
          answer: "eo"
        },
        {
          question: "ㅗ",
          answer: "o"
        }
      ]
    },
    "game-4": {
      id: "game-4",
      type: "fillInTheBlank",
      title: "Completa los saludos",
      exercises: [
        {
          question: "¿Cómo se dice 'Hola' en coreano formal?",
          answer: "안녕하세요"
        },
        {
          question: "¿Cómo se dice 'Hola' en coreano informal?",
          answer: "안녕"
        }
      ]
    },
    "game-5": {
      id: "game-5",
      type: "matchingPairs",
      title: "Relaciona saludos con su significado",
      pairs: [
        { item1: "안녕하세요", item2: "Hola (formal)" },
        { item1: "안녕", item2: "Hola (informal)" },
        { item1: "만나서 반갑습니다", item2: "Encantado de conocerte" }
      ]
    }
  }
}; 