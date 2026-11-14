import { expect, test } from '@playwright/test';

test.describe('Revista', () => {
  test('el visor carga la primera página y navega con los botones', async ({ page }) => {
    await page.goto('/revista');
    await expect(page.getByText('1 / 38')).toBeVisible();

    await page.getByRole('button', { name: 'Página siguiente' }).click();
    await expect(page.getByText('2 / 38')).toBeVisible();

    await page.getByRole('button', { name: 'Página anterior' }).click();
    await expect(page.getByText('1 / 38')).toBeVisible();
  });

  test('navega con las flechas del teclado', async ({ page }) => {
    await page.goto('/revista');
    await expect(page.getByText('1 / 38')).toBeVisible();
    await expect(page.getByAltText('Página 1 de la revista La Aurora')).toBeVisible();
    await page.keyboard.press('ArrowRight');
    await expect(page.getByText('2 / 38')).toBeVisible();
    await page.keyboard.press('ArrowLeft');
    await expect(page.getByText('1 / 38')).toBeVisible();
  });

  test('muestra los créditos de la publicación', async ({ page }) => {
    await page.goto('/revista');
    await expect(page.getByText('Investigación, edición: Daniela Zuluaga Toro')).toBeVisible();
  });
});
