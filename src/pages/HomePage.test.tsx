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
  it('renders the project header with real names', () => {
    renderPage();
    expect(screen.getAllByText(proyecto.nombre).length).toBeGreaterThan(0);
    expect(screen.getAllByText(proyecto.subtitulo).length).toBeGreaterThan(0);
  });

  it('renders real project stats', () => {
    renderPage();
    expect(screen.getAllByText('4').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Entrevistas')).toBeInTheDocument();
    expect(screen.getByText('Talleres')).toBeInTheDocument();
    expect(screen.getByText('Capítulos')).toBeInTheDocument();
  });

  it('links the magazine and the documentary', () => {
    renderPage();
    expect(screen.getByRole('link', { name: /Abrir la revista/ })).toHaveAttribute(
      'href',
      '/revista',
    );
    expect(screen.getByRole('link', { name: /Ver documental/ })).toHaveAttribute(
      'href',
      '/documental',
    );
  });

  it('renders the community call-to-action from the magazine conclusions', () => {
    renderPage();
    expect(screen.getByText(proyecto.cta.title)).toBeInTheDocument();
    expect(screen.getByText(proyecto.cta.badge)).toBeInTheDocument();
  });
});
