import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProyectoCard from '../../../components/organisms/ProyectoCard';

// Envoltorio del router de prueba
const MockRouter = ({ children }) => {
    const router = createMemoryRouter(
        [{ path: '*', element: children }],
        { initialEntries: ['/'] }
    );
    return <RouterProvider router={router} />;
};

describe('ProyectoCard Component', () => {
    // Simula window.open para que Jasmine lo pueda verificar
    beforeAll(() => {
        global.open = jasmine.createSpy('open');
    });

    const mockProyecto = {
        id: 1,
        name: 'Proyecto Test',
        description: 'Descripción de prueba',
        image: 'test.jpg',
        github: 'https://github.com/test',
    };

    it('renderiza el título del proyecto', () => {
        render(
            <MockRouter>
                <ProyectoCard proyecto={mockProyecto} />
            </MockRouter>
        );
        expect(screen.getByText(mockProyecto.name)).toBeTruthy();
    });

    it('renderiza la descripción del proyecto', () => {
        render(
            <MockRouter>
                <ProyectoCard proyecto={mockProyecto} />
            </MockRouter>
        );
        expect(screen.getByText(mockProyecto.description)).toBeTruthy();
    });

    it('renderiza la imagen con el alt correcto', () => {
        render(
            <MockRouter>
                <ProyectoCard proyecto={mockProyecto} />
            </MockRouter>
        );
        const image = screen.getByRole('img', { name: mockProyecto.name });
        expect(image).toBeTruthy();
        expect(image.getAttribute('src')).toBe(mockProyecto.image);
    });

    it('renderiza el botón "Ver Proyecto"', () => {
        render(
            <MockRouter>
                <ProyectoCard proyecto={mockProyecto} />
            </MockRouter>
        );
        const button = screen.getByText('Ver Proyecto');
        expect(button).toBeTruthy();
        expect(button.className).toContain('btn-primary');
    });

    it('abre el enlace de GitHub al hacer clic en el botón', () => {
        render(
            <MockRouter>
                <ProyectoCard proyecto={mockProyecto} />
            </MockRouter>
        );
        const button = screen.getByText('Ver Proyecto');
        fireEvent.click(button);
        expect(global.open).toHaveBeenCalledWith(mockProyecto.github, '_blank');
    });
});
