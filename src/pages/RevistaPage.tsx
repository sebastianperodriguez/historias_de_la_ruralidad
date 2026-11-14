import { revista } from '@/data/revista';
import { MagazineViewer } from '@/components/media/MagazineViewer';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { Toast } from '@/components/ui/Toast';
import { useToast } from '@/hooks/useToast';

export function RevistaPage() {
  const { toast, showToast } = useToast();

  return (
    <>
      {/* Ficha de la publicación */}
      <section className="flex flex-col gap-space-sm bg-surface-container-low px-margin pb-space-lg pt-space-md">
        <div className="flex items-center justify-between">
          <Badge variant="primary" icon="auto_stories">
            Revista digital
          </Badge>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
            {revista.totalPaginas} páginas
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-primary">
            {revista.titulo}
          </h2>
          <p className="font-body-sm text-body-sm italic text-on-surface-variant">
            {revista.subtitulo}
          </p>
        </div>
        <div className="flex flex-col gap-0.5 font-label-sm text-label-sm text-on-surface-variant">
          <span>
            {revista.serie} • {revista.lugar}
          </span>
          <span>{revista.fecha}</span>
          <span className="text-primary">{revista.apoyo}</span>
        </div>
      </section>

      {/* Visor */}
      <section className="px-margin pb-space-md">
        <MagazineViewer />
      </section>

      {/* Descarga */}
      <section className="px-margin pb-space-lg">
        <button
          type="button"
          onClick={() => showToast(revista.pdfMessage, 'download_for_offline')}
          className="flex h-11 w-full items-center justify-center gap-space-xs rounded-full bg-primary font-label-md text-label-md uppercase tracking-wider text-on-primary shadow transition-transform hover:bg-on-primary-container active:scale-[0.99]"
        >
          <Icon name="download_for_offline" size={18} />
          <span>Descargar revista (PDF)</span>
        </button>
      </section>

      {/* Créditos */}
      <section className="flex flex-col gap-space-sm px-margin pb-space-lg">
        <span className="font-label-sm text-label-sm font-semibold uppercase tracking-widest text-primary">
          Créditos
        </span>
        <div className="flex flex-col gap-1 font-label-md text-label-md text-on-surface-variant">
          {revista.creditos.map((credito) => (
            <span key={credito.rol}>
              <strong className="font-semibold text-on-surface">{credito.rol}:</strong>{' '}
              {credito.personas.join(', ')}
            </span>
          ))}
          <span>
            <strong className="font-semibold text-on-surface">
              {revista.administracion.entidad}:
            </strong>{' '}
            {revista.administracion.programa} — {revista.administracion.alcalde}
          </span>
          <span>
            <strong className="font-semibold text-on-surface">
              {revista.administracion.instituto}:
            </strong>{' '}
            {revista.administracion.director}
          </span>
        </div>
        <p className="font-label-sm text-label-sm text-outline">{revista.contraportada.detalle}</p>
      </section>

      <Toast toast={toast} />
    </>
  );
}
