import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { HomePage } from '@/pages/HomePage';
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

  it('renders real project stats', () => {
    renderPage();
    expect(screen.getAllByText('4').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Entrevistas')).toBeInTheDocument();
    expect(screen.getByText('Talleres')).toBeInTheDocument();
    expect(screen.getByText('Páginas')).toBeInTheDocument();
  });

  it('shows the researcher section', () => {
    renderPage();
    expect(screen.getByText(proyecto.investigadora.nombre)).toBeInTheDocument();
    expect(screen.getByText(proyecto.investigadora.kicker)).toBeInTheDocument();
  });

  it('renders access cards to the La Aurora content', () => {
    renderPage();
    for (const card of proyecto.accesos.cards) {
      expect(screen.getByText(card.title)).toBeInTheDocument();
    }
  });

  it('links the magazine and the documentary', () => {
    renderPage();
    expect(screen.getAllByRole('link', { name: /Abrir la revista/ }).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /Ver documental/ })).toHaveAttribute(
      'href',
      '/documental',
    );
  });

  it('renders the community call-to-action with the contact anchor', () => {
    renderPage();
    expect(screen.getByText(proyecto.cta.title)).toBeInTheDocument();
    expect(screen.getByText(proyecto.cta.badge)).toBeInTheDocument();
    const cta = document.getElementById(proyecto.cta.id);
    expect(cta).not.toBeNull();
  });
});
