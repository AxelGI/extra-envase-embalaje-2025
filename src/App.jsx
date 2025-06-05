import React from "react";

const tests = [
  {
    title: "Prueba Izquierda / Derecha",
    url: "https://www.audiocheck.net/download.php?filename=Audio/audiocheck.net_lft-rgt.mp3",
  },
  {
    title: "Prueba de Bajos",
    url: "https://www.audiocheck.net/download.php?filename=Audio/audiocheck.net_bass.wav",
  },
  {
    title: "Prueba de Agudos",
    url: "https://www.audiocheck.net/download.php?filename=Audio/audiocheck.net_treble.mp3",
  },
  {
    title: "Prueba de Rango Dinámico",
    url: "https://www.audiocheck.net/download.php?filename=Audio/audiocheck.net_drange.mp3",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Pruebas de Sonido para Audífonos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tests.map((test, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
            <audio controls className="w-full">
              <source src={test.url} />
              Tu navegador no soporta el audio.
            </audio>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-center text-gray-500 text-sm">
        Audios cortesía de <a href="https://audiocheck.net" className="underline" target="_blank" rel="noreferrer">AudioCheck.net</a>
      </footer>
    </div>
  );
}
