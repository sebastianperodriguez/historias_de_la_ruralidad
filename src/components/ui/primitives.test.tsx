import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCard } from '@/components/ui/StatCard';

describe('Badge', () => {
  it('renders children with default surface variant', () => {
    render(<Badge>Archivo Vivo Comunitario</Badge>);
    const badge = screen.getByText('Archivo Vivo Comunitario').closest('span');
    expect(badge).toHaveClass('bg-surface-container-high');
    expect(badge).toHaveClass('text-on-surface');
  });

  it('applies the primary variant', () => {
    render(<Badge variant="primary">Cuaderno No. 01</Badge>);
    const badge = screen.getByText('Cuaderno No. 01').closest('span');
    expect(badge).toHaveClass('bg-primary');
    expect(badge).toHaveClass('text-on-primary');
  });
});

describe('StatCard', () => {
  it('renders value and label', () => {
    render(<StatCard value={38} label="Páginas" />);
    expect(screen.getByText('38')).toBeInTheDocument();
    expect(screen.getByText('Páginas')).toBeInTheDocument();
  });
});

describe('SectionHeader', () => {
  it('renders kicker and title with trailing text', () => {
    render(
      <SectionHeader
        kicker="Cuadernos de Campo"
        title="Las Veredas del Archivo"
        trailing="1 Cuaderno"
      />,
    );
    expect(screen.getByText('Cuadernos de Campo')).toBeInTheDocument();
    expect(screen.getByText('Las Veredas del Archivo')).toBeInTheDocument();
    expect(screen.getByText('1 Cuaderno')).toBeInTheDocument();
  });
});
