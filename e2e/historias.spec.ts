import { expect, test } from '@playwright/test';

test.describe('Historias', () => {
  test('los capítulos de La Aurora navegan a las historias', async ({ page }) => {
    await page.goto('/la-aurora');
    await expect(page.getByText('Una casa azul al borde del camino')).toBeVisible();
    await expect(page.getByText('Mariela de Jesús Espinoza')).toBeVisible();

    await page.getByRole('link', { name: /Conclusiones/ }).click();
    await expect(page.getByRole('heading', { name: 'Conclusiones' })).toBeVisible();
  });

  test('una historia muestra párrafos, citas y navegación entre capítulos', async ({ page }) => {
    await page.goto('/la-aurora/historias/primeros-gestos');
    await expect(page.getByText(/La vereda La Aurora desde su génesis/)).toBeVisible();
    await expect(page.getByText(/Gustavo Franco, comunicación personal/).first()).toBeVisible();

    await page.getByRole('link', { name: /Capítulo siguiente/ }).click();
    await expect(
      page.getByText(
        'Vínculos y creación de espacios participativos vitales: La Junta de Acción Comunal',
      ),
    ).toBeVisible();
  });
});

test.describe('Documental', () => {
  test('incluye el reproductor de YouTube embebido', async ({ page }) => {
    await page.goto('/documental');
    const iframe = page.getByTitle('Documental — Historias de la Ruralidad Carmelitana');
    await expect(iframe).toBeVisible();
    await expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/b9piVmaFnns');
  });
});
