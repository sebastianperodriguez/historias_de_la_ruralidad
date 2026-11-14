import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCard } from '@/components/ui/StatCard';

describe('Badge', () => {
  it('renders children with default surface variant', () => {
    render(<Badge>Archivo Vivo Comunitario</Badge>);
    const badge = screen.getByText('Archivo Vivo Comunitario').closest('span');
    expect(badge).toHaveClass('bg-surface-container-high');
    expect(badge).toHaveClass('text-primary');
  });

  it('applies the primary variant and optional icon', () => {
    render(
      <Badge variant="primary" icon="history_edu">
        Cuaderno No. 01
      </Badge>,
    );
    const badge = screen.getByText('Cuaderno No. 01').closest('span');
    expect(badge).toHaveClass('bg-primary-fixed');
    expect(screen.getByText('history_edu')).toBeInTheDocument();
  });
});

describe('StatCard', () => {
  it('renders value and label', () => {
    render(<StatCard value={48} label="Relatos Orales" />);
    expect(screen.getByText('48')).toBeInTheDocument();
    expect(screen.getByText('Relatos Orales')).toBeInTheDocument();
  });
});

describe('SectionHeader', () => {
  it('renders kicker and title with trailing text', () => {
    render(
      <SectionHeader
        kicker="Etnografía Territorial"
        title="Veredas en Custodia"
        trailing="2 Cuadernos"
      />,
    );
    expect(screen.getByText('Etnografía Territorial')).toBeInTheDocument();
    expect(screen.getByText('Veredas en Custodia')).toBeInTheDocument();
    expect(screen.getByText('2 Cuadernos')).toBeInTheDocument();
  });
});

describe('Icon', () => {
  it('renders the material symbol name', () => {
    render(<Icon name="landscape" size={22} filled />);
    const icon = screen.getByText('landscape');
    expect(icon.className).toContain('material-symbols-outlined');
    expect(icon).toHaveStyle({ fontVariationSettings: "'FILL' 1" });
  });
});
