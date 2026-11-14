import { useState } from 'react';
import { AudioPlayer } from '@/components/media/AudioPlayer';
import { Icon } from '@/components/ui/Icon';
import { suite } from '@/data/suite';

type SuitePlayerProps = {
  /** Acción alternativa cuando no hay archivos cargados todavía. */
  onMissingTrack?: () => void;
};

export function SuitePlayer({ onMissingTrack }: SuitePlayerProps) {
  const [selected, setSelected] = useState(suite.pistas[0]?.numero ?? 1);
  const pista = suite.pistas.find((p) => p.numero === selected) ?? suite.pistas[0];
  const hasSource = Boolean(pista?.src);

  return (
    <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
      <div className="flex items-center justify-between gap-space-sm">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
            <Icon name="music_note" size={18} />
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="truncate font-label-md text-label-md font-semibold text-on-surface">
              {suite.titulo}
            </span>
            <span className="truncate font-label-sm text-label-sm text-on-surface-variant">
              {suite.compositor}
            </span>
          </div>
        </div>
        <span className="rounded bg-primary-container px-2 py-0.5 font-label-sm text-label-sm text-on-primary-container">
          {suite.pistas.length} pistas
        </span>
      </div>

      <div className="flex flex-col gap-1">
        {suite.pistas.map((p) => {
          const isActive = p.numero === selected;
          return (
            <button
              key={p.numero}
              type="button"
              onClick={() => setSelected(p.numero)}
              aria-current={isActive}
              className={`flex items-center justify-between gap-space-sm rounded px-3 py-2 font-label-md text-label-md transition-colors ${
                isActive
                  ? 'bg-primary-container text-on-primary-container'
                  : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
              }`}
            >
              <span className="flex min-w-0 items-center gap-2">
                <Icon
                  name={isActive ? 'play_circle' : 'radio_button_unchecked'}
                  size={18}
                  className="flex-shrink-0"
                />
                <span className="truncate">{p.titulo}</span>
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                {String(p.numero).padStart(2, '0')}
              </span>
            </button>
          );
        })}
      </div>

      {hasSource ? (
        <AudioPlayer
          key={pista?.numero}
          title={pista?.titulo ?? suite.titulo}
          subtitle={`${suite.titulo} • ${suite.compositor}`}
          avatarIcon="graphic_eq"
          src={pista?.src}
        />
      ) : (
        <button
          type="button"
          onClick={onMissingTrack}
          className="flex items-center gap-2 rounded bg-surface-container px-3 py-2 font-label-md text-label-md text-on-surface-variant"
        >
          <Icon name="hourglass_empty" size={18} />
          <span>{suite.pistaMessage}</span>
        </button>
      )}
    </div>
  );
}
