import React from 'react';
import { Container } from 'react-bootstrap';
import Image from '../components/atoms/Image';

const image = {
    src: 'https://preview.redd.it/funny-cat-pic-v0-tyzusvmzmr7a1.jpg?width=640&crop=smart&auto=webp&s=da5b45015291ff8fe068f5bf06b9efd7fa3176cc',
    alt: 'Not Found Image',
}

function NotFound() {
  return (
    <Container className="my-5">
      <h1>Página no encontrada</h1>
      <p>¿Estás seguro de que era aquí?</p>
      
      <Image src={image.src} alt={image.alt} className="" />
    </Container>
  );
}

export default NotFound;
