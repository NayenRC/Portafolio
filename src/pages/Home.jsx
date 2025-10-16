import React from 'react';
import { Container } from 'react-bootstrap';
import Image from '../components/atoms/Image';
import perfil from '../assets/img/perfil.webp';
import '../styles/pages/Home.css';
import iconLi from "../assets/img/iconli.webp";
import git from "../assets/img/git.webp";

function Home() {
  return (
    <section className="home-section">
      <Container className="text-center">
        <a
          href="https://github.com/nayenrc"
          target="_blank"
        >
          <Image src={perfil} alt="Perfil" className="home-image" />
        </a>
        <h1 className="home-title">Nayen Román</h1>
        <p>Bienvenidos! Actualemnte soy estudiante de informática y estoy en mi segundo año de carrera, te invito a conocer algunos de mis proyectos y noticias que me inspiran, espero que a ti tambien. Saludos</p>

        <a
          href="https://www.linkedin.com/in/nayen-roman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
        >
          <Image src={iconLi} alt="iconLi" className="icon-li" />
        </a>

        <a
          href="https://github.com/nayenrc"
          target="_blank"
        >
          <Image src={git} alt="git" className="git-icon" />
        </a>
      </Container>
    </section>
  );
}

export default Home;
