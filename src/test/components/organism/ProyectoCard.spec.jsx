// ProyectoCard.spec.jsx

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProyectoCard from './ProyectoCard';

describe('ProyectoCard', () => {
    it('renderiza correctamente el título del proyecto', () => {
        render(
            <MemoryRouter>
                <ProyectoCard />
            </MemoryRouter>
        );
        expect(screen.getByText(/Título del Proyecto/i)).toBeInTheDocument();
    });

    it('el botón tiene el href correcto', () => {
        render(
            <MemoryRouter>
                <ProyectoCard />
            </MemoryRouter>
        );
        const button = screen.getByRole('button');
        expect(button.closest('a')).toHaveAttribute('href', '/ruta-del-proyecto');
    });

    // Agrega más pruebas según sea necesario
});
