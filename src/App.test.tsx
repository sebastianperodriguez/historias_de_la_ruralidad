import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '@/App';

function renderAt(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>,
  );
}

describe('App routing', () => {
  it('renders the home page at "/"', () => {
    renderAt('/');
    expect(screen.getAllByText(/Historias de la Ruralidad Carmelitana/).length).toBeGreaterThan(0);
  });

  it('renders the La Honda coming-soon page at "/la-honda"', () => {
    renderAt('/la-honda');
    expect(screen.getByText('Vereda La Honda')).toBeInTheDocument();
    expect(screen.getByText(/próximamente/i)).toBeInTheDocument();
  });

  it('renders a magazine chapter as a story page', () => {
    renderAt('/la-aurora/historias/primeros-gestos');
    expect(screen.getByText('Primeros gestos al habitar lo rural')).toBeInTheDocument();
  });

  it('renders the not-found page for unknown routes', () => {
    renderAt('/no-existe');
    expect(screen.getByText('Página no encontrada')).toBeInTheDocument();
  });
});
