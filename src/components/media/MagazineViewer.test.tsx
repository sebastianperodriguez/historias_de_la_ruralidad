import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { MagazineViewer } from '@/components/media/MagazineViewer';

describe('MagazineViewer', () => {
  it('renders the first page with counter', () => {
    render(<MagazineViewer />);
    expect(screen.getByAltText('Página 1 de la revista La Aurora')).toBeInTheDocument();
    expect(screen.getByText('1 / 38')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Página anterior' })).toBeDisabled();
  });

  it('navigates with the next and previous buttons', async () => {
    render(<MagazineViewer />);
    await userEvent.click(screen.getByRole('button', { name: 'Página siguiente' }));
    expect(screen.getByText('2 / 38')).toBeInTheDocument();
    expect(screen.getByAltText('Página 2 de la revista La Aurora')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Página anterior' }));
    expect(screen.getByText('1 / 38')).toBeInTheDocument();
  });

  it('navigates with the keyboard arrows', async () => {
    render(<MagazineViewer />);
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByText('2 / 38')).toBeInTheDocument();
    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.getByText('1 / 38')).toBeInTheDocument();
  });

  it('shows and hides the thumbnails panel', async () => {
    render(<MagazineViewer />);
    expect(screen.queryByRole('button', { name: 'Ir a la página 3' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Ver miniaturas' }));
    expect(screen.getByRole('button', { name: 'Ir a la página 3' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Ocultar miniaturas' }));
    expect(screen.queryByRole('button', { name: 'Ir a la página 3' })).not.toBeInTheDocument();
  });
});
