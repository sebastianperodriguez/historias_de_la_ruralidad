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
    expect(screen.getByText('Cuaderno No. 01')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Abrir el cuaderno de la Vereda La Aurora' }),
    ).toHaveAttribute('href', '/la-aurora');
    const image = screen.getByRole('img', { name: laAurora.image.alt });
    expect(image).toHaveAttribute('loading', 'lazy');
  });

  it('renders the unavailable vereda with a placeholder and coming-soon link', () => {
    const laHonda = veredas[1]!;
    render(
      <MemoryRouter>
        <VeredaCard vereda={laHonda} />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'Vereda La Honda próximamente' });
    expect(link).toHaveAttribute('href', '/la-honda');
    expect(screen.getAllByText('Próximamente').length).toBeGreaterThan(0);
  });
});
