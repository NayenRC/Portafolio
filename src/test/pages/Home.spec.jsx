// src/test/pages/Home.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Page', () => {
    it('renderiza el título de la página de inicio', () => {
        render(<Home />);
        expect(screen.getByText('Página de Inicio')).toBeInTheDocument();
    });

    it('renderiza el párrafo de bienvenida', () => {
        render(<Home />);
        expect(screen.getByText('Bienvenidos a nuestro sitio web.')).toBeInTheDocument();
    });

    it('renderiza el contenedor de Bootstrap', () => {
        render(<Home />);
        const container = screen.getByText('Página de Inicio').closest('div');
        expect(container).toHaveClass('container');
        expect(container).toHaveClass('my-5');
    });
});
