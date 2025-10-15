import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // 👈 Import necesario
import Proyectos from '../../pages/Proyectos';
import proyectos from '../../data/Proyectos';

describe('Página Proyectos', () => {
    it('renderiza el título "Proyectos"', () => {
        render(
            <MemoryRouter>
                <Proyectos />
            </MemoryRouter>
        );
        const title = screen.getByText('Proyectos');
        expect(title).not.toBeNull();
    });

    it('renderiza el mismo número de tarjetas que proyectos en el JSON', () => {
        render(
            <MemoryRouter>
                <Proyectos />
            </MemoryRouter>
        );
        const cards = screen.getAllByText((content, element) =>
            proyectos.some(p => p.name === content || p.titulo === content)
        );
        expect(cards.length).toBe(proyectos.length);
    });

    it('verifica que el contenedor principal tenga la clase "my-5"', () => {
        render(
            <MemoryRouter>
                <Proyectos />
            </MemoryRouter>
        );
        const container = screen.getByText('Proyectos').closest('div');
        expect(container).toHaveClass('my-5');
    });
});

