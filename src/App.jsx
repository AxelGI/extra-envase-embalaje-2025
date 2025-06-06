import React from "react";

const tests = [
  {
    title: "🎧 1. Prueba de Estéreo (Canales Izquierdo/Derecho)",
    url: "/src/assets/stereo.mp3",
  },
  {
    title: "🔊 2. Prueba de Bajos (1–150 Hz, Barrido Lineal)",
    url: "/src/assets/bass.mp3",
  },
  {
    title: "🎶 3. Prueba de Agudos (6000–20000 Hz)",
    url: "../src/assets/sinewave.mp3",
  },
  {
    title: "🌫️ 4. Ruido Rosa (Pink Noise)",
    url: "../src/assets/pink.mp3",
  },
];

export default function App() {
  const handlePlay = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Pruebas de Sonido para Audífonos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tests.map((test, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
            <button
              onClick={() => handlePlay(test.url)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Reproducir
            </button>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        <div>
          Audios cortesía de{" "}
          <a
            href="https://OnlineSound.net"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            OnlineSound.net
          </a>. <br />
          Sitio creado por Axel García Ibarra para el extra de envase y
          embalaje.
        </div>
      </footer>
    </div>
  );
}
