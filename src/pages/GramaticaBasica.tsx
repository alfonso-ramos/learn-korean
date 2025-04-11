import React, { useState } from 'react';

interface GrammarExample {
  korean: string;
  romanization: string;
  spanish: string;
  explanation?: string;
}

interface GrammarPoint {
  title: string;
  description: string;
  structure: string;
  examples: GrammarExample[];
}

interface GrammarCategory {
  title: string;
  description: string;
  points: GrammarPoint[];
}

const GramaticaBasica: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('estructura');

  const categories: GrammarCategory[] = [
    {
      title: "estructura",
      description: "Estructura básica de las oraciones en coreano",
      points: [
        {
          title: "Orden básico: Sujeto + Objeto + Verbo",
          description: "En coreano, el verbo siempre va al final de la oración.",
          structure: "Sujeto + Objeto + Verbo",
          examples: [
            {
              korean: "저는 사과를 먹어요",
              romanization: "jeoneun sagwareul meogeoyo",
              spanish: "Yo como una manzana",
              explanation: "저(yo) + 는(partícula) + 사과(manzana) + 를(partícula) + 먹다(comer)"
            },
            {
              korean: "그는 책을 읽어요",
              romanization: "geuneun chaegeul ilgeoyo",
              spanish: "Él lee un libro",
              explanation: "그(él) + 는(partícula) + 책(libro) + 을(partícula) + 읽다(leer)"
            }
          ]
        }
      ]
    },
    {
      title: "particulas",
      description: "Partículas básicas y sus usos",
      points: [
        {
          title: "은/는 - Partícula de tema",
          description: "Se usa para marcar el tema de la oración",
          structure: "Sustantivo + 은/는",
          examples: [
            {
              korean: "저는 학생이에요",
              romanization: "jeoneun haksaeng-ieyo",
              spanish: "Yo soy estudiante",
              explanation: "저(yo) + 는(partícula de tema)"
            },
            {
              korean: "한국은 아름다워요",
              romanization: "hangug-eun areumdawoyo",
              spanish: "Corea es hermosa",
              explanation: "한국(Corea) + 은(partícula de tema)"
            }
          ]
        },
        {
          title: "이/가 - Partícula de sujeto",
          description: "Se usa para marcar el sujeto de la oración",
          structure: "Sustantivo + 이/가",
          examples: [
            {
              korean: "비가 와요",
              romanization: "biga wayo",
              spanish: "Llueve (La lluvia viene)",
              explanation: "비(lluvia) + 가(partícula de sujeto)"
            },
            {
              korean: "고양이가 귀여워요",
              romanization: "goyang-iga gwiyeowoyo",
              spanish: "El gato es lindo",
              explanation: "고양이(gato) + 가(partícula de sujeto)"
            }
          ]
        },
        {
          title: "을/를 - Partícula de objeto directo",
          description: "Se usa para marcar el objeto directo de la acción",
          structure: "Objeto + 을/를",
          examples: [
            {
              korean: "커피를 마셔요",
              romanization: "keopireul masyeoyo",
              spanish: "Bebo café",
              explanation: "커피(café) + 를(objeto) + 마시다(beber)"
            },
            {
              korean: "한국어를 공부해요",
              romanization: "hangugeo-reul gongbuhaeyo",
              spanish: "Estudio coreano",
              explanation: "한국어(coreano) + 를(objeto) + 공부하다(estudiar)"
            }
          ]
        },
        {
          title: "에 - Partícula de lugar/tiempo",
          description: "Se usa para indicar lugar o tiempo",
          structure: "Lugar/Tiempo + 에",
          examples: [
            {
              korean: "학교에 가요",
              romanization: "hakgyoe gayo",
              spanish: "Voy a la escuela",
              explanation: "학교(escuela) + 에(a) + 가다(ir)"
            },
            {
              korean: "3시에 만나요",
              romanization: "sesie mannayo",
              spanish: "Nos vemos a las 3",
              explanation: "3시(3 en punto) + 에(a) + 만나다(encontrarse)"
            }
          ]
        },
        {
          title: "에서 - Partícula de lugar de acción",
          description: "Se usa para indicar dónde ocurre una acción",
          structure: "Lugar + 에서",
          examples: [
            {
              korean: "도서관에서 공부해요",
              romanization: "doseogwaneseo gongbuhaeyo",
              spanish: "Estudio en la biblioteca",
              explanation: "도서관(biblioteca) + 에서(en) + 공부하다(estudiar)"
            },
            {
              korean: "공원에서 운동해요",
              romanization: "gongwoneseo undonghaeyo",
              spanish: "Hago ejercicio en el parque",
              explanation: "공원(parque) + 에서(en) + 운동하다(ejercitar)"
            }
          ]
        }
      ]
    },
    {
      title: "verbos",
      description: "Conjugación básica de verbos",
      points: [
        {
          title: "Presente informal polite (-아/어요)",
          description: "Forma básica para hablar en presente de manera educada pero no formal",
          structure: "Verbo + 아/어요",
          examples: [
            {
              korean: "먹어요",
              romanization: "meogeoyo",
              spanish: "Como/Come/Comen",
              explanation: "먹다(comer) → 먹 + 어요"
            },
            {
              korean: "가요",
              romanization: "gayo",
              spanish: "Voy/Va/Van",
              explanation: "가다(ir) → 가 + 아요"
            }
          ]
        },
        {
          title: "Negación simple",
          description: "Dos formas de negar en coreano",
          structure: "안 + Verbo o Verbo + 지 않다",
          examples: [
            {
              korean: "안 먹어요",
              romanization: "an meogeoyo",
              spanish: "No como",
              explanation: "안(no) + 먹다(comer)"
            },
            {
              korean: "먹지 않아요",
              romanization: "meogji anayo",
              spanish: "No como",
              explanation: "먹다(comer) + 지 않다(no hacer)"
            }
          ]
        },
        {
          title: "Pasado (-았/었어요)",
          description: "Forma para expresar acciones en pasado",
          structure: "Verbo + 았/었어요",
          examples: [
            {
              korean: "먹었어요",
              romanization: "meogeosseoyo",
              spanish: "Comí/Comió",
              explanation: "먹다(comer) → 먹 + 었어요"
            },
            {
              korean: "갔어요",
              romanization: "gasseoyo",
              spanish: "Fui/Fue",
              explanation: "가다(ir) → 가 + 았어요"
            }
          ]
        },
        {
          title: "Futuro (-ㄹ/을 거예요)",
          description: "Forma para expresar acciones futuras",
          structure: "Verbo + ㄹ/을 거예요",
          examples: [
            {
              korean: "먹을 거예요",
              romanization: "meogeur geoyeyo",
              spanish: "Comeré/Comerá",
              explanation: "먹다(comer) → 먹 + 을 거예요"
            },
            {
              korean: "갈 거예요",
              romanization: "gal geoyeyo",
              spanish: "Iré/Irá",
              explanation: "가다(ir) → 가 + ㄹ 거예요"
            }
          ]
        },
        {
          title: "Presente continuo (-고 있어요)",
          description: "Forma para expresar acciones en progreso",
          structure: "Verbo + 고 있어요",
          examples: [
            {
              korean: "공부하고 있어요",
              romanization: "gongbuhago isseoyo",
              spanish: "Estoy estudiando",
              explanation: "공부하다(estudiar) + 고 있어요"
            },
            {
              korean: "책을 읽고 있어요",
              romanization: "chaegeul ilgo isseoyo",
              spanish: "Estoy leyendo un libro",
              explanation: "읽다(leer) + 고 있어요"
            }
          ]
        }
      ]
    },
    {
      title: "preguntas",
      description: "Formación de preguntas básicas",
      points: [
        {
          title: "Partícula interrogativa 까/니",
          description: "Se usa para convertir una oración en pregunta",
          structure: "Oración + 까요/니요",
          examples: [
            {
              korean: "학생이에요?",
              romanization: "haksaeng-ieyo?",
              spanish: "¿Eres estudiante?",
              explanation: "학생(estudiante) + 이에요(ser) + ?"
            },
            {
              korean: "밥 먹었어요?",
              romanization: "bap meogeosseoyo?",
              spanish: "¿Has comido?",
              explanation: "밥(comida) + 먹다(comer) + 었어요(pasado) + ?"
            }
          ]
        },
        {
          title: "Palabras interrogativas",
          description: "Palabras básicas para hacer preguntas",
          structure: "Palabra interrogativa + Oración",
          examples: [
            {
              korean: "뭐예요?",
              romanization: "mwoyeyo?",
              spanish: "¿Qué es?",
              explanation: "뭐(qué) + 예요(ser)"
            },
            {
              korean: "어디에 가요?",
              romanization: "eodie gayo?",
              spanish: "¿A dónde vas?",
              explanation: "어디(dónde) + 에(a) + 가다(ir)"
            }
          ]
        }
      ]
    },
    {
      title: "adjetivos",
      description: "Uso y conjugación de adjetivos",
      points: [
        {
          title: "Forma básica de adjetivos",
          description: "Cómo usar adjetivos en presente",
          structure: "Adjetivo + 아/어요",
          examples: [
            {
              korean: "커요",
              romanization: "keoyo",
              spanish: "Es grande",
              explanation: "크다(ser grande) → 커요"
            },
            {
              korean: "작아요",
              romanization: "jagayo",
              spanish: "Es pequeño",
              explanation: "작다(ser pequeño) → 작아요"
            }
          ]
        },
        {
          title: "Adjetivos en forma negativa",
          description: "Cómo negar adjetivos",
          structure: "Adjetivo + 지 않아요",
          examples: [
            {
              korean: "크지 않아요",
              romanization: "keuji anayo",
              spanish: "No es grande",
              explanation: "크다(ser grande) + 지 않아요"
            },
            {
              korean: "비싸지 않아요",
              romanization: "bissaji anayo",
              spanish: "No es caro",
              explanation: "비싸다(ser caro) + 지 않아요"
            }
          ]
        },
        {
          title: "Adjetivos en pasado",
          description: "Cómo expresar adjetivos en pasado",
          structure: "Adjetivo + 았/었어요",
          examples: [
            {
              korean: "예뻤어요",
              romanization: "yeppeosseoyo",
              spanish: "Era bonito/a",
              explanation: "예쁘다(ser bonito) → 예뻤어요"
            },
            {
              korean: "좋았어요",
              romanization: "joasseoyo",
              spanish: "Era bueno/Estaba bien",
              explanation: "좋다(ser bueno) → 좋았어요"
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Gramática Básica Coreana</h1>

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
          className={`space-y-8 ${
            selectedCategory === category.title ? 'block' : 'hidden'
          }`}
        >
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{category.description}</p>
          </div>

          {category.points.map((point, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 mb-4">{point.description}</p>
              <div className="bg-indigo-50 p-3 rounded-md mb-4">
                <p className="text-indigo-700 font-medium">Estructura:</p>
                <p className="text-indigo-600">{point.structure}</p>
              </div>
              <div className="grid gap-4">
                {point.examples.map((example, i) => (
                  <div key={i} className="border-l-4 border-indigo-200 pl-4">
                    <p className="text-lg font-medium text-gray-900 mb-1">
                      {example.korean}
                    </p>
                    <p className="text-sm text-gray-500">{example.romanization}</p>
                    <p className="text-md text-gray-700">{example.spanish}</p>
                    {example.explanation && (
                      <p className="text-sm text-gray-500 mt-2 italic">
                        {example.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Consejos de estudio */}
      <div className="mt-12 bg-indigo-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">
          Consejos para Estudiar Gramática
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Practica cada estructura con diferentes verbos y sustantivos</li>
          <li>Empieza con oraciones simples y ve aumentando la complejidad</li>
          <li>Escucha cómo los nativos usan estas estructuras</li>
          <li>Escribe un diario usando las estructuras aprendidas</li>
          <li>No tengas miedo de cometer errores al practicar</li>
          <li>Revisa regularmente las estructuras básicas</li>
        </ul>
      </div>
    </div>
  );
};

export default GramaticaBasica; 