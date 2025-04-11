import React, { useState } from 'react';

interface VocabularyItem {
  korean: string;
  romanization: string;
  spanish: string;
  example?: {
    korean: string;
    romanization: string;
    spanish: string;
  };
}

interface VocabularyCategory {
  title: string;
  description: string;
  items: VocabularyItem[];
}

const VocabularioBasico: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('saludos');

  const categories: VocabularyCategory[] = [
    {
      title: "saludos",
      description: "Expresiones comunes para saludar y despedirse",
      items: [
        {
          korean: "안녕하세요",
          romanization: "annyeonghaseyo",
          spanish: "Hola (formal)",
          example: {
            korean: "안녕하세요, 만나서 반갑습니다",
            romanization: "annyeonghaseyo, mannaseo bangapseumnida",
            spanish: "Hola, encantado de conocerte"
          }
        },
        {
          korean: "안녕",
          romanization: "annyeong",
          spanish: "Hola/Adiós (informal)",
          example: {
            korean: "안녕, 잘 지냈어?",
            romanization: "annyeong, jal jinaesseo?",
            spanish: "Hola, ¿cómo has estado?"
          }
        },
        {
          korean: "안녕히 계세요",
          romanization: "annyeonghi gyeseyo",
          spanish: "Adiós (cuando te vas)",
          example: {
            korean: "저는 이제 가요. 안녕히 계세요",
            romanization: "jeoneun ije gayo. annyeonghi gyeseyo",
            spanish: "Me voy ahora. Adiós"
          }
        },
        {
          korean: "안녕히 가세요",
          romanization: "annyeonghi gaseyo",
          spanish: "Adiós (cuando alguien se va)",
          example: {
            korean: "내일 봐요. 안녕히 가세요",
            romanization: "naeil bwayo. annyeonghi gaseyo",
            spanish: "Nos vemos mañana. Adiós"
          }
        }
      ]
    },
    {
      title: "numeros",
      description: "Números en sistema coreano nativo (1-10) y sino-coreano (1-10)",
      items: [
        {
          korean: "하나, 둘, 셋, 넷, 다섯",
          romanization: "hana, dul, set, net, daseot",
          spanish: "1, 2, 3, 4, 5 (nativo)",
          example: {
            korean: "사과 두 개 주세요",
            romanization: "sagwa du gae juseyo",
            spanish: "Dos manzanas, por favor"
          }
        },
        {
          korean: "여섯, 일곱, 여덟, 아홉, 열",
          romanization: "yeoseot, ilgop, yeodeol, ahop, yeol",
          spanish: "6, 7, 8, 9, 10 (nativo)",
          example: {
            korean: "책 일곱 권이 있어요",
            romanization: "chaek ilgop gweoni isseoyo",
            spanish: "Tengo siete libros"
          }
        },
        {
          korean: "일, 이, 삼, 사, 오",
          romanization: "il, i, sam, sa, o",
          spanish: "1, 2, 3, 4, 5 (sino-coreano)",
          example: {
            korean: "삼층에 있어요",
            romanization: "samcheunge isseoyo",
            spanish: "Está en el tercer piso"
          }
        },
        {
          korean: "육, 칠, 팔, 구, 십",
          romanization: "yuk, chil, pal, gu, sip",
          spanish: "6, 7, 8, 9, 10 (sino-coreano)",
          example: {
            korean: "구시 삼십분",
            romanization: "gusi samsipbun",
            spanish: "9:30 (Nueve y treinta)"
          }
        }
      ]
    },
    {
      title: "familia",
      description: "Términos familiares más comunes",
      items: [
        {
          korean: "어머니/엄마",
          romanization: "eomeoni/eomma",
          spanish: "Madre/Mamá",
          example: {
            korean: "엄마, 사랑해요",
            romanization: "eomma, saranghaeyo",
            spanish: "Mamá, te quiero"
          }
        },
        {
          korean: "아버지/아빠",
          romanization: "abeoji/appa",
          spanish: "Padre/Papá",
          example: {
            korean: "아빠랑 공원에 가요",
            romanization: "apparang gongwone gayo",
            spanish: "Voy al parque con papá"
          }
        },
        {
          korean: "언니/누나",
          romanization: "eonni/nuna",
          spanish: "Hermana mayor (dicho por mujer/hombre)",
          example: {
            korean: "우리 언니는 의사예요",
            romanization: "uri eonnineun uisayeyo",
            spanish: "Mi hermana mayor es doctora"
          }
        },
        {
          korean: "오빠/형",
          romanization: "oppa/hyeong",
          spanish: "Hermano mayor (dicho por mujer/hombre)",
          example: {
            korean: "형이 도와줬어요",
            romanization: "hyeongi dowajwosseoyo",
            spanish: "Mi hermano mayor me ayudó"
          }
        }
      ]
    },
    {
      title: "colores",
      description: "Colores básicos en coreano",
      items: [
        {
          korean: "빨간색/빨강",
          romanization: "ppalgansaek/ppalgang",
          spanish: "Rojo",
          example: {
            korean: "빨간 장미",
            romanization: "ppalgan jangmi",
            spanish: "Rosa roja"
          }
        },
        {
          korean: "파란색/파랑",
          romanization: "paransaek/parang",
          spanish: "Azul",
          example: {
            korean: "하늘이 파래요",
            romanization: "haneuri paraeyo",
            spanish: "El cielo es azul"
          }
        },
        {
          korean: "노란색/노랑",
          romanization: "noransaek/norang",
          spanish: "Amarillo",
          example: {
            korean: "노란 바나나",
            romanization: "noran banana",
            spanish: "Plátano amarillo"
          }
        },
        {
          korean: "검은색/검정",
          romanization: "geomeunsaek/geomjeong",
          spanish: "Negro",
          example: {
            korean: "검은 고양이",
            romanization: "geomeun goyangi",
            spanish: "Gato negro"
          }
        }
      ]
    },
    {
      title: "comidas",
      description: "Comidas, bebidas y expresiones relacionadas",
      items: [
        {
          korean: "밥",
          romanization: "bap",
          spanish: "Arroz/Comida",
          example: {
            korean: "밥 먹었어요?",
            romanization: "bap meogeosseoyo?",
            spanish: "¿Has comido?"
          }
        },
        {
          korean: "물",
          romanization: "mul",
          spanish: "Agua",
          example: {
            korean: "물 한 잔 주세요",
            romanization: "mul han jan juseyo",
            spanish: "Un vaso de agua, por favor"
          }
        },
        {
          korean: "김치",
          romanization: "gimchi",
          spanish: "Kimchi",
          example: {
            korean: "김치는 매워요",
            romanization: "gimchineun maewoyo",
            spanish: "El kimchi es picante"
          }
        },
        {
          korean: "커피",
          romanization: "keopi",
          spanish: "Café",
          example: {
            korean: "아이스 커피 좋아해요",
            romanization: "aiseu keopi joahaeyo",
            spanish: "Me gusta el café helado"
          }
        }
      ]
    },
    {
      title: "tiempo",
      description: "Días de la semana y expresiones temporales básicas",
      items: [
        {
          korean: "월요일, 화요일, 수요일",
          romanization: "woryoil, hwayoil, suyoil",
          spanish: "Lunes, Martes, Miércoles",
          example: {
            korean: "월요일에 만나요",
            romanization: "woryoire mannayo",
            spanish: "Nos vemos el lunes"
          }
        },
        {
          korean: "목요일, 금요일",
          romanization: "mogyoil, geumyoil",
          spanish: "Jueves, Viernes",
          example: {
            korean: "금요일에 영화 볼까요?",
            romanization: "geumyoire yeonghwa bolkkayo?",
            spanish: "¿Vemos una película el viernes?"
          }
        },
        {
          korean: "토요일, 일요일",
          romanization: "toyoil, iryoil",
          spanish: "Sábado, Domingo",
          example: {
            korean: "주말 잘 보내세요",
            romanization: "jumal jal bonaeseyo",
            spanish: "Que tengas un buen fin de semana"
          }
        },
        {
          korean: "오늘, 내일, 어제",
          romanization: "oneul, naeil, eoje",
          spanish: "Hoy, Mañana, Ayer",
          example: {
            korean: "오늘 날씨가 좋아요",
            romanization: "oneul nalssiga joayo",
            spanish: "Hoy hace buen tiempo"
          }
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Vocabulario Básico Coreano</h1>

      {/* Selector de categorías */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setSelectedCategory(category.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category.title
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Contenido de la categoría seleccionada */}
      {categories.map((category) => (
        <div
          key={category.title}
          className={`space-y-6 ${
            selectedCategory === category.title ? 'block' : 'hidden'
          }`}
        >
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{category.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {category.items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-gray-900 mb-1">
                    {item.korean}
                  </h3>
                  <p className="text-sm text-gray-500">{item.romanization}</p>
                  <p className="text-md text-gray-700">{item.spanish}</p>
                </div>

                {item.example && (
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      Ejemplo:
                    </p>
                    <p className="text-md text-gray-900">{item.example.korean}</p>
                    <p className="text-sm text-gray-500">
                      {item.example.romanization}
                    </p>
                    <p className="text-sm text-gray-700 italic">
                      {item.example.spanish}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Consejos de estudio */}
      <div className="mt-12 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">
          Consejos para Estudiar Vocabulario
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Practica escribiendo las palabras varias veces</li>
          <li>Crea tarjetas de memoria con el vocabulario</li>
          <li>Usa las palabras en oraciones simples</li>
          <li>Escucha la pronunciación de hablantes nativos</li>
          <li>Repasa el vocabulario regularmente</li>
          <li>Intenta usar las palabras en conversaciones diarias</li>
        </ul>
      </div>
    </div>
  );
};

export default VocabularioBasico; 