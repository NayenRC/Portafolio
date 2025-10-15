import React from 'react';
import { Container } from 'react-bootstrap';
import Image from '../components/atoms/Image';
import perfil from '../assets/img/perfil.webp';
import '../styles/pages/Home.css'; 

function Home() {
  return (
    <section className="home-section">
      <Container className="text-center">
        <Image src={perfil} alt="Perfil" className="home-image" />
        <h1 className="home-title">Nayen Román</h1>
        <p>Bienvenidos! Actualemnte soy estudiante de informática y estoy en mi segundo año de carrera, te invito a conocer algunos de mis proyectos y noticias que me inspiraan, espero que a ti tambien. Saludos</p>
      </Container>
    </section>
  );
}

export default Home;
