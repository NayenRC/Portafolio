// src/test/components/organisms/ProyectoCard.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProyectoCard from '../../../components/organisms/ProyectoCard';

const mockProyecto = {
    id: 1,
    titulo: 'Sistema de Reservas',
    descripcion: 'App para gestionar salas con IA.',
    imagen: 'reserva.jpg',
    link: 'https://github.com/NayenRC/BarkPurr'
};

describe('ProyectoCard Component', () => {
    it('renderiza el título del proyecto', () => {
        render(<ProyectoCard proyecto={mockProyecto} />);
        expect(screen.getByText(mockProyecto.titulo)).toBeInTheDocument();
    });

    it('renderiza la descripción', () => {
        render(<ProyectoCard proyecto={mockProyecto} />);
        expect(screen.getByText(mockProyecto.descripcion)).toBeInTheDocument();
    });

    it('muestra la imagen correctamente', () => {
        render(<ProyectoCard proyecto={mockProyecto} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', mockProyecto.imagen);
    });

    it('el botón o enlace tiene el href correcto', () => {
        render(<ProyectoCard proyecto={mockProyecto} />);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', mockProyecto.link);
    });
});
