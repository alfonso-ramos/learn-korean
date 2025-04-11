import React from 'react';

const Batchim: React.FC = () => {
  const batchimRules = [
    {
      rule: "ㄱ, ㄲ → [k˺]",
      examples: [
        { word: "책", romanization: "chaek", meaning: "libro" },
        { word: "국", romanization: "guk", meaning: "sopa" },
        { word: "밖", romanization: "bak", meaning: "fuera" }
      ],
      explanation: "Se pronuncia como una 'k' suave sin expulsión de aire"
    },
    {
      rule: "ㄴ → [n]",
      examples: [
        { word: "안녕", romanization: "annyeong", meaning: "hola" },
        { word: "문", romanization: "mun", meaning: "puerta" },
        { word: "은행", romanization: "eunhaeng", meaning: "banco" }
      ],
      explanation: "Mantiene su sonido nasal 'n'"
    },
    {
      rule: "ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ → [t˺]",
      examples: [
        { word: "옷", romanization: "ot", meaning: "ropa" },
        { word: "있다", romanization: "itda", meaning: "existir/tener" },
        { word: "꽃", romanization: "kkot", meaning: "flor" }
      ],
      explanation: "Todos estos batchim se pronuncian como una 't' suave"
    },
    {
      rule: "ㄹ → [l]",
      examples: [
        { word: "달", romanization: "dal", meaning: "luna" },
        { word: "얼굴", romanization: "eolgul", meaning: "cara" },
        { word: "설날", romanization: "seollal", meaning: "año nuevo lunar" }
      ],
      explanation: "Se pronuncia como una 'l' suave, similar al español"
    },
    {
      rule: "ㅁ → [m]",
      examples: [
        { word: "마음", romanization: "maeum", meaning: "corazón/mente" },
        { word: "남자", romanization: "namja", meaning: "hombre" },
        { word: "감사합니다", romanization: "gamsahamnida", meaning: "gracias" }
      ],
      explanation: "Mantiene su sonido 'm'"
    },
    {
      rule: "ㅂ, ㅍ → [p˺]",
      examples: [
        { word: "밥", romanization: "bap", meaning: "arroz" },
        { word: "입", romanization: "ip", meaning: "boca" },
        { word: "앞", romanization: "ap", meaning: "frente" }
      ],
      explanation: "Se pronuncia como una 'p' suave sin expulsión de aire"
    },
    {
      rule: "ㅇ → [ŋ]",
      examples: [
        { word: "강", romanization: "gang", meaning: "río" },
        { word: "영화", romanization: "yeonghwa", meaning: "película" },
        { word: "정말", romanization: "jeongmal", meaning: "verdaderamente" }
      ],
      explanation: "Se pronuncia como la 'ng' en 'ring'"
    }
  ];

  const complexExamples = [
    {
      type: "Asimilación",
      examples: [
        {
          word: "꽃망울",
          pronunciation: "꼰망울",
          romanization: "kkonmangul",
          meaning: "capullo de flor",
          explanation: "El ㅊ (t) se convierte en ㄴ (n) antes de ㅁ"
        },
        {
          word: "닫는다",
          pronunciation: "단는다",
          romanization: "danneunda",
          meaning: "cerrar",
          explanation: "El ㄷ (t) se convierte en ㄴ (n) antes de ㄴ"
        }
      ]
    },
    {
      type: "Neutralización",
      examples: [
        {
          word: "부엌문",
          pronunciation: "부억문",
          romanization: "bueokmun",
          meaning: "puerta de la cocina",
          explanation: "El ㅋ (k) se neutraliza a ㄱ (k) en posición final"
        },
        {
          word: "낯설다",
          pronunciation: "낟설다",
          romanization: "natseolda",
          meaning: "extraño/unfamiliar",
          explanation: "El ㅅ (s) se neutraliza a ㄷ (t) en posición final"
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Batchim (받침) - Consonantes Finales</h1>
      
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-4">
          El batchim (받침) se refiere a las consonantes que aparecen en la posición final de una sílaba en coreano.
          Su pronunciación es crucial para hablar correctamente y puede cambiar según el contexto.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm text-yellow-700">
            <strong>Nota importante:</strong> En coreano, solo 7 sonidos consonánticos son posibles en posición final:
            [k˺], [n], [t˺], [l], [m], [p˺], [ŋ]. Todas las demás consonantes se neutralizan a uno de estos sonidos.
          </p>
        </div>
      </div>

      {/* Reglas básicas */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Reglas Básicas del Batchim</h2>
        <div className="grid gap-6">
          {batchimRules.map((rule, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">{rule.rule}</h3>
              <p className="text-gray-600 mb-4">{rule.explanation}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {rule.examples.map((example, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded">
                    <div className="text-xl font-medium text-gray-900 mb-1">{example.word}</div>
                    <div className="text-sm text-gray-500">{example.romanization}</div>
                    <div className="text-sm text-gray-600 italic">{example.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ejemplos complejos */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cambios Fonéticos Complejos</h2>
        <div className="space-y-8">
          {complexExamples.map((category, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">{category.type}</h3>
              <div className="space-y-6">
                {category.examples.map((example, i) => (
                  <div key={i} className="border-l-4 border-indigo-200 pl-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                      <div>
                        <span className="text-lg font-medium text-gray-900">{example.word}</span>
                        <span className="text-gray-500 mx-2">→</span>
                        <span className="text-lg font-medium text-indigo-600">{example.pronunciation}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div>{example.romanization}</div>
                        <div className="italic">{example.meaning}</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{example.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consejos de práctica */}
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consejos para Practicar</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Practica pronunciando palabras con el mismo batchim en secuencia</li>
          <li>Presta atención a los cambios de sonido cuando una palabra termina en batchim y la siguiente empieza con vocal</li>
          <li>Escucha atentamente cómo los nativos pronuncian las palabras con batchim</li>
          <li>Grábate pronunciando y compara con la pronunciación correcta</li>
        </ul>
      </section>
    </div>
  );
};

export default Batchim; 