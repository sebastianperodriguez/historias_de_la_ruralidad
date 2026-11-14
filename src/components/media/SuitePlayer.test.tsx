import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SuitePlayer } from '@/components/media/SuitePlayer';
import { suite } from '@/data/suite';

describe('SuitePlayer', () => {
  it('renders the suite header and track list', () => {
    render(<SuitePlayer />);
    expect(screen.getByText(suite.titulo)).toBeInTheDocument();
    expect(screen.getByText(suite.compositor)).toBeInTheDocument();
    expect(screen.getByText('Pista 1')).toBeInTheDocument();
    expect(screen.getByText('Pista 3')).toBeInTheDocument();
    expect(screen.getByText('3 pistas')).toBeInTheDocument();
  });

  it('shows the pending message when no tracks have sources', async () => {
    const onMissingTrack = vi.fn();
    render(<SuitePlayer onMissingTrack={onMissingTrack} />);
    await userEvent.click(screen.getByText(suite.pistaMessage));
    expect(onMissingTrack).toHaveBeenCalledTimes(1);
  });

  it('selects another track from the playlist', async () => {
    render(<SuitePlayer />);
    const pista3 = screen.getByRole('button', { name: /Pista 3/ });
    await userEvent.click(pista3);
    expect(pista3).toHaveAttribute('aria-current', 'true');
    expect(screen.getByRole('button', { name: /Pista 1/ })).toHaveAttribute(
      'aria-current',
      'false',
    );
  });
});
