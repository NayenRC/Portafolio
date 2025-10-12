import React from 'react';
import { Container, Row } from 'react-bootstrap';
import proyectos from '../data/Proyectos';
import ProyectoCard from '../components/organisms/ProyectoCard';
import  '../styles/pages/Noticias.css'

function Proyectos() {
    return (
        <Container className="my-5">
            <h1>Proyectos</h1>
            <Row>
                {proyectos.map((proyecto) => (
                    <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                ))}
            </Row>
        </Container>
    );
}

export default Proyectos;
