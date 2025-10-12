// src/test/pages/Proyectos.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Proyectos from '../../../pages/Proyectos';
import proyectos from '../../../data/Proyectos';

describe('Proyectos Page', () => {
    it('renderiza el título principal', () => {
        render(<Proyectos />);
        expect(screen.getByText('Proyectos')).toBeInTheDocument();
    });

    it('renderiza todas las tarjetas de proyectos', () => {
        render(<Proyectos />);
        const cards = screen.getAllByText(/Ver detalles/i); // o el texto del botón de ProyectoCard
        expect(cards.length).toBe(proyectos.length);
    });
});
