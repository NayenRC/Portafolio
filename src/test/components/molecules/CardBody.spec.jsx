import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBody from '../../../components/molecules/CardBody';

describe('Componente CardBody', () => {
    const mockProps = {
        title: 'Título de prueba',
        description: 'Descripción del proyecto',
    };

    it('renderiza el título correctamente', () => {
        render(<CardBody {...mockProps} />);
        expect(screen.getByText(mockProps.title)).toBeTruthy();
    });

    it('renderiza la descripción correctamente', () => {
        render(<CardBody {...mockProps} />);
        expect(screen.getByText(mockProps.description)).toBeTruthy();
    });

    it('incluye un elemento con la clase "text-muted"', () => {
        render(<CardBody {...mockProps} />);
        const muted = document.querySelector('.text-muted');
        expect(muted).not.toBeNull();
    });

    it('renderiza al menos tres elementos de texto', () => {
        render(<CardBody {...mockProps} />);
        const textElements = screen.getAllByText(/./); // busca cualquier texto
        expect(textElements.length).toBeGreaterThanOrEqual(3);
    });
});


