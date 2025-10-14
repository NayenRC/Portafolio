import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function ProyectoCard({ proyecto }) {
    const navigate = useNavigate();

    return (
        <Card className="proyecto-card">
            <Image src={proyecto.image} alt={proyecto.name} className="card-img-top" />
            <Card.Body>
                <CardBody title={proyecto.name}description={proyecto.description}/>
                <Button
                    variant="primary"
                    onClick={() => window.open(proyecto.github, "_blank")}
                >
                    Ver Proyecto
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProyectoCard;
