import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from '@/App';

describe('App routing', () => {
  it('renders the home placeholder at "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Historias de Ruralidad/)).toBeInTheDocument();
  });

  it('renders the La Honda coming-soon page at "/la-honda"', () => {
    render(
      <MemoryRouter initialEntries={['/la-honda']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Vereda La Honda')).toBeInTheDocument();
    expect(screen.getByText(/próximamente/i)).toBeInTheDocument();
  });

  it('renders the story page with slug param', () => {
    render(
      <MemoryRouter initialEntries={['/la-aurora/historias/el-despertar']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Historia: el-despertar')).toBeInTheDocument();
  });

  it('renders the not-found page for unknown routes', () => {
    render(
      <MemoryRouter initialEntries={['/no-existe']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Página no encontrada')).toBeInTheDocument();
  });
});
