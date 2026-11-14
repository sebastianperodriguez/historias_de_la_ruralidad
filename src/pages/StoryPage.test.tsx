import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { StoryPage } from '@/pages/StoryPage';
import { revista } from '@/data/revista';

function renderStory(slug: string) {
  return render(
    <MemoryRouter initialEntries={[`/la-aurora/historias/${slug}`]}>
      <Routes>
        <Route path="/la-aurora/historias/:slug" element={<StoryPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('StoryPage', () => {
  it('renders the chapter header and paragraphs', () => {
    renderStory('primeros-gestos');
    expect(screen.getByText('Capítulo 2')).toBeInTheDocument();
    expect(screen.getByText('Primeros gestos al habitar lo rural')).toBeInTheDocument();
    expect(screen.getByText(/La vereda La Aurora desde su génesis/)).toBeInTheDocument();
  });

  it('renders quotes with their author', () => {
    renderStory('primeros-gestos');
    expect(screen.getAllByText(/Gustavo Franco/).length).toBeGreaterThan(0);
  });

  it('renders the formula block of the first chapter', () => {
    renderStory('aportes-conceptuales');
    expect(screen.getByText(/Comunidad Vereda La Aurora = Territorio/)).toBeInTheDocument();
  });

  it('shows chapter navigation', () => {
    renderStory('la-escuela');
    const anterior = screen.getByRole('link', { name: /Capítulo anterior/ });
    const siguiente = screen.getByRole('link', { name: /Capítulo siguiente/ });
    expect(anterior).toHaveAttribute('href', '/la-aurora/historias/junta-accion-comunal');
    expect(siguiente).toHaveAttribute('href', '/la-aurora/historias/acueducto-aurora-viboral');
  });

  it('renders the not-found page for unknown slugs', () => {
    renderStory('no-existe');
    expect(screen.getByText('Página no encontrada')).toBeInTheDocument();
  });

  it('covers every chapter of the magazine', () => {
    expect(revista.capitulos).toHaveLength(8);
  });
});
