import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { SuitePlayer } from '@/components/media/SuitePlayer';
import { suite } from '@/data/suite';

describe('SuitePlayer', () => {
  it('renders the suite header and track list', () => {
    render(<SuitePlayer />);
    expect(screen.getByText(suite.titulo)).toBeInTheDocument();
    expect(screen.getByText(suite.compositor)).toBeInTheDocument();
    expect(screen.getAllByText('Aurora').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Berceuse')).toBeInTheDocument();
    expect(screen.getByText('Cantando Numebares')).toBeInTheDocument();
    expect(screen.getByText('3 pistas')).toBeInTheDocument();
  });

  it('renders an enabled audio player for the selected track', () => {
    render(<SuitePlayer />);
    expect(screen.getByRole('button', { name: 'Reproducir audio' })).toBeEnabled();
    expect(screen.queryByRole('button', { name: 'Pausar audio' })).not.toBeInTheDocument();
  });

  it('selects another track from the playlist', async () => {
    render(<SuitePlayer />);
    const pista3 = screen.getByRole('button', { name: /Cantando Numebares/ });
    await userEvent.click(pista3);
    expect(pista3).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('button', { name: /Aurora/ })).toHaveAttribute('aria-current', 'false');
  });
});
