import React from 'react';
import { Container, Row } from 'react-bootstrap';
import proyectos from '../data/Proyectos';
import ProyectoCard from '../components/organisms/ProyectoCard';
import '../styles/pages/Proyectos.css'

function Proyectos() {
    return (
        <Container className="my-5">
            <h2 className="section-title">Proyects</h2>
            <Row>
                {proyectos.map((proyecto) => (
                    <ProyectoCard key={proyecto.id} proyecto={proyecto} />
                ))}
            </Row>
        </Container>
    );
}

export default Proyectos;
