import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HomePage } from '@/pages/HomePage';
import { contacto } from '@/data/contacto';
import { proyecto } from '@/data/proyecto';

function renderPage() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );
}

describe('HomePage', () => {
  it('presents the general project, not a single vereda', () => {
    renderPage();
    expect(screen.getAllByText(proyecto.nombre).length).toBeGreaterThan(0);
    expect(screen.getByText('Memorias de la ruralidad carmelitana')).toBeInTheDocument();
  });

  it('renders the methodology and stats on the aurora page instead', () => {
    renderPage();
    expect(screen.queryByText('Entrevistas')).not.toBeInTheDocument();
    expect(screen.queryByText('Talleres')).not.toBeInTheDocument();
  });

  it('shows the contact section with the project team', () => {
    renderPage();
    expect(screen.getByText(contacto.title)).toBeInTheDocument();
    for (const persona of contacto.personas) {
      expect(screen.getByText(persona.nombre)).toBeInTheDocument();
      expect(screen.getByText(persona.rol)).toBeInTheDocument();
      const emailLink = screen.getByRole('link', { name: persona.email });
      expect(emailLink).toHaveAttribute('href', `mailto:${persona.email}`);
    }
  });

  it('renders access cards to the La Aurora content', () => {
    renderPage();
    for (const card of proyecto.accesos.cards) {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    }
  });

  it('links the contact button to the contact section', () => {
    renderPage();
    const contactLink = screen.getByRole('link', { name: proyecto.cta.contactLabel });
    expect(contactLink).toHaveAttribute('href', '/#contacto');
  });

  it('renders the community call-to-action with the contact anchor', () => {
    renderPage();
    expect(screen.getByText(proyecto.cta.title)).toBeInTheDocument();
    expect(screen.getByText(proyecto.cta.badge)).toBeInTheDocument();
    const cta = document.getElementById(proyecto.cta.id);
    expect(cta).not.toBeNull();
  });
});
