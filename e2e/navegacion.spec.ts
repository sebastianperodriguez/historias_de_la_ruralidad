import { expect, test } from '@playwright/test';

test.describe('Navegación general', () => {
  test('la home muestra el proyecto y la revista', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Historias de la Ruralidad Carmelitana').first()).toBeVisible();
    await expect(
      page.getByText('Memorias de una vereda construida en comunidad').first(),
    ).toBeVisible();
  });

  test('el bottom nav lleva a La Aurora y a la revista', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'La Aurora', exact: true }).click();
    await expect(page.getByText('Cuaderno de Campo No. 01')).toBeVisible();

    await page.getByRole('link', { name: 'Revista', exact: true }).click();
    await expect(page.getByText(/páginas/).first()).toBeVisible();
  });

  test('La Honda muestra el aviso próximamente', async ({ page }) => {
    await page.goto('/la-honda');
    await expect(page.getByText('Vereda La Honda')).toBeVisible();
    await expect(page.getByText(/próximamente/i)).toBeVisible();
  });

  test('las rutas desconocidas muestran la página 404', async ({ page }) => {
    await page.goto('/sendero-inexistente');
    await expect(page.getByText('Página no encontrada')).toBeVisible();
  });
});
