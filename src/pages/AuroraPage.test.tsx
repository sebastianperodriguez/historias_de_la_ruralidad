import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AuroraPage } from '@/pages/AuroraPage';

function renderPage() {
  return render(
    <MemoryRouter initialEntries={['/la-aurora']}>
      <AuroraPage />
    </MemoryRouter>,
  );
}

describe('AuroraPage', () => {
  it('renders the field notebook header and ficha stats', () => {
    renderPage();
    expect(screen.getByText('Cuaderno de Campo No. 01')).toBeInTheDocument();
    expect(screen.getByText('Vereda La Aurora')).toBeInTheDocument();
    expect(screen.getAllByText('Altitud').length).toBeGreaterThan(0);
    expect(screen.getByText('2.150 msnm')).toBeInTheDocument();
    expect(screen.getByText('142 predios')).toBeInTheDocument();
  });

  it('renders the central chronicle with dropcap', () => {
    renderPage();
    expect(
      screen.getByText('El despertar entre nieblas y el telar de las lomas'),
    ).toBeInTheDocument();
    const lead = screen.getByText((_, element) => {
      return (
        element?.tagName === 'P' &&
        (element.textContent ?? '').startsWith('Antes de que despuntara')
      );
    });
    expect(lead).toBeInTheDocument();
  });

  it('renders the water module stats and community landmarks', () => {
    renderPage();
    expect(screen.getByText('La Ronda de las Tres Quebradas')).toBeInTheDocument();
    expect(screen.getByText('18.2 L/segundo')).toBeInTheDocument();
    expect(screen.getByText('La Escuela Vieja de Barro (1954)')).toBeInTheDocument();
    expect(screen.getByText('Nacimiento La Chorrera')).toBeInTheDocument();
  });

  it('renders the next cuaderno link to La Honda', () => {
    renderPage();
    const link = screen.getByRole('link', { name: /Vereda La Honda/ });
    expect(link).toHaveAttribute('href', '/la-honda');
  });

  it('shows a toast when requesting the PDF download', async () => {
    renderPage();
    await userEvent.click(screen.getByRole('button', { name: /Descargar informe investigativo/ }));
    expect(
      screen.getByText('Generando cuaderno investigativo La Aurora (PDF)...'),
    ).toBeInTheDocument();
  });
});
