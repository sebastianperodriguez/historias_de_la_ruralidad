import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { BottomNav } from '@/components/layout/BottomNav';

function renderNav(initialRoute: string) {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <BottomNav />
    </MemoryRouter>,
  );
}

describe('BottomNav', () => {
  it('renders the four sections', () => {
    renderNav('/');
    for (const label of ['Inicio', 'La Aurora', 'Revista', 'La Honda']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    }
  });

  it('marks the current route as active', () => {
    renderNav('/la-aurora');
    expect(screen.getByRole('link', { name: 'La Aurora' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inicio' })).not.toHaveAttribute('aria-current');
  });

  it('marks Inicio active only on the root route', () => {
    renderNav('/revista');
    expect(screen.getByRole('link', { name: 'Revista' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Inicio' })).not.toHaveAttribute('aria-current');
  });
});
