import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { VeredaCard } from '@/components/ui/VeredaCard';
import { veredas } from '@/data/veredas';

describe('VeredaCard', () => {
  it('renders the available vereda with investigation link', () => {
    const laAurora = veredas[0]!;
    render(
      <MemoryRouter>
        <VeredaCard vereda={laAurora} />
      </MemoryRouter>,
    );
    expect(screen.getByText('Vereda La Aurora')).toBeInTheDocument();
    expect(screen.getByText('2.150 m.s.n.m.')).toBeInTheDocument();
    expect(screen.getByText('24 testimonios')).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Leer investigación de la Vereda La Aurora' });
    expect(link).toHaveAttribute('href', '/la-aurora');
    expect(screen.getByRole('img', { name: laAurora.image.alt })).toHaveAttribute(
      'loading',
      'lazy',
    );
  });

  it('renders the unavailable vereda with coming-soon link', () => {
    const laHonda = veredas[1]!;
    render(
      <MemoryRouter>
        <VeredaCard vereda={laHonda} />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'Vereda La Honda próximamente' });
    expect(link).toHaveAttribute('href', '/la-honda');
    expect(screen.getByText('Próximamente')).toBeInTheDocument();
  });
});
