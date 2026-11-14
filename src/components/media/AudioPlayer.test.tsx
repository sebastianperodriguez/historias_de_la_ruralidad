import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AudioPlayer } from '@/components/media/AudioPlayer';
import { formatAudioTime } from '@/lib/format';

describe('formatAudioTime', () => {
  it('formats seconds as m:ss', () => {
    expect(formatAudioTime(0)).toBe('0:00');
    expect(formatAudioTime(74)).toBe('1:14');
    expect(formatAudioTime(222)).toBe('3:42');
  });

  it('returns 0:00 for invalid values', () => {
    expect(formatAudioTime(Number.NaN)).toBe('0:00');
    expect(formatAudioTime(-5)).toBe('0:00');
  });
});

describe('AudioPlayer', () => {
  const baseProps = {
    title: 'Doña Rosalba relata el camino real',
    subtitle: 'Portadora de tradición oral • Vereda La Aurora',
    src: '/audio/test.mp3',
    transcript: '“Cuando yo estaba chiquita, no había carretera...”',
  };

  it('renders title, timer and play button', () => {
    render(<AudioPlayer {...baseProps} />);
    expect(screen.getByText('Doña Rosalba relata el camino real')).toBeInTheDocument();
    expect(screen.getByText('Portadora de tradición oral • Vereda La Aurora')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reproducir audio' })).toBeEnabled();
    expect(screen.getByText('0:00 / 0:00')).toBeInTheDocument();
  });

  it('toggles play/pause and shows the transcript on demand', async () => {
    render(<AudioPlayer {...baseProps} />);
    await userEvent.click(screen.getByRole('button', { name: 'Reproducir audio' }));
    expect(screen.getByRole('button', { name: 'Pausar audio' })).toBeInTheDocument();

    const toggle = screen.getByRole('button', { name: 'Leer transcripción del relato' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText(baseProps.transcript)).not.toBeInTheDocument();
    await userEvent.click(toggle);
    expect(screen.getByText(baseProps.transcript)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ocultar transcripción' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Ocultar transcripción' }));
    expect(screen.queryByText(baseProps.transcript)).not.toBeInTheDocument();
  });

  it('disables the play button when there is no audio source', () => {
    render(<AudioPlayer title="Audio sin fuente" />);
    expect(screen.getByRole('button', { name: 'Reproducir audio' })).toBeDisabled();
  });

  it('calls play on the audio element when toggled', async () => {
    const playSpy = vi.spyOn(window.HTMLMediaElement.prototype, 'play');
    render(<AudioPlayer {...baseProps} />);
    await userEvent.click(screen.getByRole('button', { name: 'Reproducir audio' }));
    expect(playSpy).toHaveBeenCalled();
  });
});
