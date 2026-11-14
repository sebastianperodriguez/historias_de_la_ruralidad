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

  it('renders access cards to the La Aurora content with exact anchors', () => {
    renderPage();
    for (const card of proyecto.accesos.cards) {
      expect(screen.getByText(card.title)).toBeInTheDocument();
      const link = screen.getByRole('link', { name: new RegExp(card.title) });
      expect(link).toHaveAttribute('href', card.href);
    }
  });

  it('links the contribute button to the creator email', () => {
    renderPage();
    const contributeLink = screen.getByRole('link', { name: proyecto.cta.contributeLabel });
    expect(contributeLink).toHaveAttribute('href', proyecto.cta.contributeHref);
    expect(contributeLink.getAttribute('href')).toContain('mailto:zuluagatorodaniela@gmail.com');
  });

  it('links the contact button to the contact page', () => {
    renderPage();
    const contactLink = screen.getByRole('link', { name: proyecto.cta.contactLabel });
    expect(contactLink).toHaveAttribute('href', '/contacto');
  });
});
