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
        <p>Bienvenidos a nuestro sitio web.</p>
      </Container>
    </section>
  );
}

export default Home;
