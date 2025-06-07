import React, { useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #f7f9fc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #34495e;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? "#e74c3c" : "#3498db")};
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: ${(props) => (props.active ? "#c0392b" : "#2980b9")};
  }
`;

const Embed = styled.embed`
  width: 100%;
  height: 600px;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: auto;
`;

const Video = styled.video`
  display: block;
  margin: 2rem auto;
  border-radius: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  text-align: center;
  color: #7f8c8d;
  font-size: 0.9rem;

  a {
    color: #2980b9;
    text-decoration: underline;

    &:hover {
      color: #1c5980;
    }
  }
`;

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
      if (currentUrl === url && !audioRef.current.paused) {
        audioRef.current.pause();
        return;
      }
      audioRef.current.pause();
    }
    const newAudio = new Audio(url);
    audioRef.current = newAudio;
    setCurrentUrl(url);
    newAudio.play();
  };

  return (
    <Container>
      <Content>
        <Title>Manual de Usuario</Title>
        <Embed
          src="https://manuals.plus/m/7bf504a1c6871d0e056e04993e3842a67dc840e38f8311415d74a20a72d4ba21_optim.pdf"
          type="application/pdf"
        />

        <Title>Pruebas de Sonido para Audífonos Bluetooth</Title>
        <Grid>
          {tests.map((test, i) => (
            <Card key={i}>
              <Subtitle>{test.title}</Subtitle>
              <Button
                onClick={() => handlePlayPause(test.url)}
                active={
                  currentUrl === test.url &&
                  audioRef.current &&
                  !audioRef.current.paused
                }
              >
                {currentUrl === test.url &&
                audioRef.current &&
                !audioRef.current.paused
                  ? "Pausar"
                  : "Reproducir"}
              </Button>
            </Card>
          ))}
        </Grid>

        <Title>¡No tires tu caja!</Title>
      </Content>

      <ImageContainer>
        <StyledImage
          src="/extra-envase-embalaje-2025/assets/soporte-cel.png"
          alt="Soporte para celular hecho con la caja"
        />
      </ImageContainer>

      <Content>
        <Title>Y así de fácil podrías tener un soporte para tu celular</Title>
        <Video
          src="/extra-envase-embalaje-2025/assets/soportecel.mp4"
          controls
        />

        <Footer>
          Audios cortesía de{" "}
          <a
            href="https://OnlineSound.net"
            target="_blank"
            rel="noreferrer"
          >
            OnlineSound.net
          </a>
          . <br />
          Sitio creado por Axel García Ibarra para el extra de envase y
          embalaje.
        </Footer>
      </Content>
    </Container>
  );
}
