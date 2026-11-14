import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { ContactoPage } from '@/pages/ContactoPage';
import { contacto } from '@/data/contacto';
import { proyecto } from '@/data/proyecto';

describe('ContactoPage', () => {
  it('shows the project name and contact description', () => {
    render(
      <MemoryRouter initialEntries={['/contacto']}>
        <ContactoPage />
      </MemoryRouter>,
    );
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getAllByText(proyecto.nombre).length).toBeGreaterThan(0);
  });

  it('shows each person with their role', () => {
    render(
      <MemoryRouter initialEntries={['/contacto']}>
        <ContactoPage />
      </MemoryRouter>,
    );
    for (const persona of contacto.personas) {
      expect(screen.getByText(persona.nombre)).toBeInTheDocument();
      expect(screen.getByText(persona.rol)).toBeInTheDocument();
    }
  });

  it('renders icon buttons for email and personal site', () => {
    render(
      <MemoryRouter initialEntries={['/contacto']}>
        <ContactoPage />
      </MemoryRouter>,
    );
    const emailButtons = screen.getAllByRole('link', { name: /Enviar correo a/ });
    expect(emailButtons).toHaveLength(contacto.personas.length);
    expect(emailButtons[0]).toHaveAttribute('href', `mailto:${contacto.personas[0]?.email}`);

    const sitioButton = screen.getByRole('link', {
      name: /Página web de Sebastián Pérez/,
    });
    expect(sitioButton).toHaveAttribute('href', 'https://www.sebasperez.dev/');
    expect(sitioButton).toHaveAttribute('target', '_blank');
  });

  it('renders the credits footer with the year', () => {
    render(
      <MemoryRouter initialEntries={['/contacto']}>
        <ContactoPage />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Creadora del proyecto: Daniela Zuluaga Toro/)).toBeInTheDocument();
    expect(screen.getByText(/Desarrollo web: Sebastián Pérez/)).toBeInTheDocument();
    expect(screen.getByText(/© \d{4}/)).toBeInTheDocument();
  });
});
