import { useRef, useState } from 'react';
import type { ChangeEvent, ReactEventHandler } from 'react';
import { Icon } from '@/components/ui/Icon';
import { formatAudioTime } from '@/lib/format';

/*
 * Barras de la onda acústica decorativa (alturas en px), siguiendo el
 * ritmo del prototipo.
 */
const WAVEFORM_HEIGHTS_PX = [12, 20, 28, 16, 32, 24, 12, 20, 28, 16, 8, 24, 16, 12, 20, 8];

type AudioPlayerProps = {
  title: string;
  subtitle?: string;
  src?: string;
  transcript?: string;
  avatarInitials?: string;
};

export function AudioPlayer({
  title,
  subtitle,
  src,
  transcript,
  avatarInitials,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [transcriptOpen, setTranscriptOpen] = useState(false);

  const progress = duration > 0 ? currentTime / duration : 0;

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !src) {
      return;
    }
    if (audio.paused) {
      setPlaying(true);
      void audio.play();
    } else {
      setPlaying(false);
      audio.pause();
    }
  };

  const handleTimeUpdate: ReactEventHandler<HTMLAudioElement> = (event) => {
    setCurrentTime(event.currentTarget.currentTime);
  };

  const handleLoadedMetadata: ReactEventHandler<HTMLAudioElement> = (event) => {
    setDuration(event.currentTarget.duration);
  };

  const handleEnded = () => {
    setPlaying(false);
    setCurrentTime(0);
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !src || !Number.isFinite(duration) || duration <= 0) {
      return;
    }
    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  return (
    <div className="flex flex-col gap-space-sm">
      <div className="flex gap-space-sm items-center">
        {avatarInitials ? (
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-on-secondary font-headline-sm text-headline-sm">
            {avatarInitials}
          </div>
        ) : null}
        <div className="flex min-w-0 flex-col">
          <h4 className="truncate font-headline-sm text-headline-sm leading-tight text-primary">
            {title}
          </h4>
          {subtitle && (
            <span className="truncate font-label-md text-label-md text-on-surface-variant">
              {subtitle}
            </span>
          )}
        </div>
      </div>

      <div className="mt-space-xs flex flex-col gap-space-xs rounded bg-surface p-space-sm shadow-inner">
        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            onClick={togglePlay}
            disabled={!src}
            aria-label={playing ? 'Pausar audio' : 'Reproducir audio'}
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-on-secondary shadow transition-transform active:scale-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon name={playing ? 'pause' : 'play_arrow'} size={24} />
          </button>

          <div
            className="flex h-8 flex-1 items-center gap-[3px] overflow-hidden px-1"
            aria-hidden="true"
          >
            {WAVEFORM_HEIGHTS_PX.map((height, index) => (
              <span
                key={index}
                className={`w-1 rounded-full transition-all duration-300 ${
                  (index + 0.5) / WAVEFORM_HEIGHTS_PX.length <= progress
                    ? 'bg-primary'
                    : 'bg-outline-variant'
                }`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>

          <span className="flex-shrink-0 font-label-md text-label-md tabular-nums text-on-surface-variant">
            {formatAudioTime(currentTime)} / {formatAudioTime(duration)}
          </span>
        </div>

        {src && (
          <input
            type="range"
            min={0}
            max={Number.isFinite(duration) ? duration : 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Progreso del audio"
            className="h-1 w-full cursor-pointer accent-secondary"
          />
        )}

        {transcript && (
          <>
            <button
              type="button"
              onClick={() => setTranscriptOpen((open) => !open)}
              className="inline-flex items-center gap-1 self-start pt-1 font-label-md text-label-md text-secondary hover:underline"
              aria-expanded={transcriptOpen}
            >
              <Icon name="subtitles" size={15} />
              <span>
                {transcriptOpen ? 'Ocultar transcripción' : 'Leer transcripción del relato'}
              </span>
            </button>
            {transcriptOpen && (
              <div className="mt-space-xs rounded border-l-2 border-secondary bg-surface-container-low p-space-sm font-body-sm text-body-sm leading-relaxed text-on-surface">
                {transcript}
              </div>
            )}
          </>
        )}
      </div>

      {src && (
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          className="hidden"
        />
      )}
    </div>
  );
}
