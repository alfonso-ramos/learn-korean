import React from "react";

function home() {
  return (
    <>
      <main>
        <div>
          <h1>Aprende coreano facil</h1>
          <p>
            Este es un sitio web que tiene como objetivo guardar notas, jugar y
            hacer el aprendizaje mas sencillo y gratis (por el momento)
          </p>
        </div>

        <div className="flex flex-col">
          <a href="/">
            <div className="w-[90%] mx-auto bg-blue-200 p-4 rounded-2xl">
              <h2 className="text-2xl font-semibold">Titulo de algun tema</h2>
              <p className="text-lg">
                Descripcion breve,Nobis eum amet recusandae quam eligendi est
                distinctio ea exercitationem beatae quis?
              </p>
            </div>
          </a>
        </div>
      </main>
    </>
  );
}

export default home;
