import React, { useRef, useState } from "react";
import "./App.css"; // <— Importa aquí tu CSS puro

const tests = [
  {
    title: "🎧 1. Prueba de Estéreo (Canales Izquierdo/Derecho)",
    url: "/extra-envase-embalaje-2025/assets/stereo.mp3",
  },
  {
    title: "🔊 2. Prueba de Bajos (1–150 Hz, Barrido Lineal)",
    url: "/extra-envase-embalaje-2025/assets/bass.mp3",
  },
  {
    title: "🎶 3. Prueba de Agudos (6000–20000 Hz)",
    url: "/extra-envase-embalaje-2025/assets/sinewave.mp3",
  },
  {
    title: "🌫️ 4. Ruido Rosa (Pink Noise)",
    url: "/extra-envase-embalaje-2025/assets/pink.mp3",
  },
];

export default function App() {
  const audioRef = useRef(null);
  const [currentUrl, setCurrentUrl] = useState(null);

  const handlePlayPause = (url) => {
    if (audioRef.current) {
      // Si ya está sonando el mismo audio, pausa
      if (currentUrl === url && !audioRef.current.paused) {
        audioRef.current.pause();
        return;
      }
      // Si es otro audio, detiene el anterior
      audioRef.current.pause();
    }
    // Carga el nuevo audio
    const newAudio = new Audio(url);
    audioRef.current = newAudio;
    setCurrentUrl(url);
    newAudio.play();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="w-full max-w-screen-md">
        <h1 className="text-3xl font-bold text-center mb-6">Manual de Usuario</h1>
        <embed
          src="https://manuals.plus/m/7bf504a1c6871d0e056e04993e3842a67dc840e38f8311415d74a20a72d4ba21_optim.pdf"
          type="application/pdf"
          width="100%"
          height="600px"
        />

        <h1 className="text-3xl font-bold text-center mb-6">
          Pruebas de Sonido para Audifonos Bluetooth
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-md text-center">
              <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
              <button
                onClick={() => handlePlayPause(test.url)}
                className={`${
                  currentUrl === test.url && audioRef.current && !audioRef.current.paused
                    ? "bg-red-500"
                    : "bg-blue-500"
                } text-white px-4 py-2 rounded`}
              >
                {currentUrl === test.url && audioRef.current && !audioRef.current.paused
                  ? "Pausar"
                  : "Reproducir"}
              </button>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-center mb-6">¡No tires tu caja!</h1>
        <img
          src="/extra-envase-embalaje-2025/assets/soporte-cel.png"
          alt="Soporte para celular hecho con la caja"
          className="mx-auto my-6 rounded-lg shadow-lg w-full h-auto max-w-screen-lg"
        />

        <h2 className="text-3xl font-bold text-center mb-6">
          Y así de facil podrias tener un soporte para tu celular
        </h2>

        <video
          src="/extra-envase-embalaje-2025/assets/soportecel.mp4"
          controls
          className="mx-auto my-6 rounded-lg shadow-lg w-full max-w-sm"
          style={{ height: "auto" }}
        />

        <br />
        <br />
        <br />
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
            </a>
            . <br />
            Sitio creado por Axel García Ibarra para el extra de envase y embalaje.
          </div>
        </footer>
      </div>
    </div>
  );
}
