import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Page', () => {
    it('renderiza el nombre "Nayen Román" en el título', () => {
        render(<Home />);
        const title = screen.getByText('Nayen Román');
        expect(title).not.toBeNull();
    });

    it('renderiza el texto de presentación', () => {
        render(<Home />);
        const text = screen.getByText(/estudiante de informática/i);
        expect(text).not.toBeNull();
    });

    it('renderiza la imagen de perfil con su alt correcto', () => {
        render(<Home />);
        const image = screen.getByAltText('Perfil');
        expect(image).not.toBeNull();
        expect(image).toHaveClass('home-image');
    });

    it('verifica que el contenedor principal tenga las clases de estilo', () => {
        render(<Home />);
        const container = screen.getByText('Nayen Román').closest('section');
        expect(container).toHaveClass('home-section');
    });
});
