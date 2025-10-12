// src/test/components/organisms/NoticiasCard.spec.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import NoticiasCard from '../../../components/organisms/NoticiasCard';

const mockNoticia = {
    id: 1,
    titulo: 'Nueva iniciativa ecológica',
    descripcion: 'GreenTech Solutions lanza nuevo sistema de energía solar.',
    imagen: 'test.jpg',
    enlace: 'https://greentechsolutions.cl/noticia/1'
};

describe('NoticiasCard Component', () => {
    it('renderiza el título de la noticia', () => {
        render(<NoticiasCard newsItem={mockNoticia} />);
        expect(screen.getByText(mockNoticia.titulo)).toBeInTheDocument();
    });

    it('muestra la descripción correctamente', () => {
        render(<NoticiasCard newsItem={mockNoticia} />);
        expect(screen.getByText(mockNoticia.descripcion)).toBeInTheDocument();
    });

    it('renderiza la imagen de la noticia', () => {
        render(<NoticiasCard newsItem={mockNoticia} />);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', mockNoticia.imagen);
    });

    it('tiene el botón de leer más con el enlace correcto', () => {
        render(<NoticiasCard newsItem={mockNoticia} />);
        const button = screen.getByText('Leer más');
        expect(button.closest('a')).toHaveAttribute('href', mockNoticia.enlace);
    });
});
