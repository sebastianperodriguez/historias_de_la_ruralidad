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

  it('renders the name origin chronicle with dropcap', () => {
    renderPage();
    expect(screen.getByText(aurora.cronica.title)).toBeInTheDocument();
    const lead = screen.getByText((_, element) => {
      return (
        element?.tagName === 'P' &&
        (element.textContent ?? '').startsWith('Parece ser que en el sector Los Alticos')
      );
    });
    expect(lead).toBeInTheDocument();
  });

  it('renders the real community testimonial', () => {
    renderPage();
    expect(screen.getByText(aurora.testimonial.name)).toBeInTheDocument();
    expect(screen.getByText(aurora.testimonial.meta)).toBeInTheDocument();
  });

  it('renders the aqueduct module and community landmarks', () => {
    renderPage();
    expect(screen.getByText(aurora.acueducto.title)).toBeInTheDocument();
    expect(screen.getByText('Bocatomas')).toBeInTheDocument();
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
