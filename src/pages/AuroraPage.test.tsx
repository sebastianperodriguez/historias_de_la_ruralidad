import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AuroraPage } from '@/pages/AuroraPage';
import { aurora } from '@/data/aurora';
import { revista } from '@/data/revista';

function renderPage() {
  return render(
    <MemoryRouter initialEntries={['/la-aurora']}>
      <AuroraPage />
    </MemoryRouter>,
  );
}

describe('AuroraPage', () => {
  it('renders the field notebook header with real project stats', () => {
    renderPage();
    expect(screen.getByText('Cuaderno de Campo No. 01')).toBeInTheDocument();
    expect(screen.getByText('Vereda La Aurora')).toBeInTheDocument();
    expect(screen.getAllByText('4').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Entrevistas')).toBeInTheDocument();
    expect(screen.getByText('Talleres')).toBeInTheDocument();
  });

  it('renders the activity cards at the start', () => {
    renderPage();
    for (const actividad of aurora.actividades.items) {
      expect(screen.getAllByText(actividad.title).length).toBeGreaterThan(0);
      const link = screen.getByRole('link', { name: new RegExp(actividad.title) });
      expect(link).toHaveAttribute('href', actividad.href);
    }
  });

  it('integrates the documentary first', () => {
    renderPage();
    const documental = document.getElementById('documental');
    expect(documental).not.toBeNull();
    const iframe = screen.getByTitle(`Documental — ${revista.titulo}`);
    expect(iframe).toHaveAttribute('src', aurora.documental.youtubeEmbedUrl);
  });

  it('integrates the magazine viewer', () => {
    renderPage();
    const revistaSection = document.getElementById('revista');
    expect(revistaSection).not.toBeNull();
    expect(screen.getByAltText('Página 1 de la revista La Aurora')).toBeInTheDocument();
    expect(screen.getByText('Investigación, edición:')).toBeInTheDocument();
  });

  it('integrates the suite player', () => {
    renderPage();
    expect(document.getElementById('suite')).not.toBeNull();
    expect(screen.getAllByText('Aurora').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Cantando Numebares')).toBeInTheDocument();
  });

  it('renders the chronicle and the real community testimonial', () => {
    renderPage();
    expect(screen.getByText(aurora.cronica.title)).toBeInTheDocument();
    expect(screen.getByText(aurora.testimonial.name)).toBeInTheDocument();
    expect(screen.getByText(aurora.testimonial.meta)).toBeInTheDocument();
  });

  it('renders the water module and community landmarks at the end', () => {
    renderPage();
    expect(screen.getByText(aurora.acueducto.title)).toBeInTheDocument();
    expect(screen.getByText('La Junta de Acción Comunal (1972)')).toBeInTheDocument();
    expect(screen.getByText('La Escuela Rural (1974)')).toBeInTheDocument();
  });

  it('lists every magazine chapter as a story link', () => {
    renderPage();
    for (const capitulo of revista.capitulos) {
      const link = screen.getByRole('link', { name: new RegExp(capitulo.titulo.slice(0, 20)) });
      expect(link).toHaveAttribute('href', `/la-aurora/historias/${capitulo.slug}`);
    }
  });

  it('renders the next cuaderno link to La Honda', () => {
    renderPage();
    const link = screen.getByRole('link', { name: /Vereda La Honda/ });
    expect(link).toHaveAttribute('href', '/la-honda');
  });
});
