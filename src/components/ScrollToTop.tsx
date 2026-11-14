import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restablece el scroll en cada navegación y respeta los anclajes (#hash):
 * sin esto, las rutas nuevas abren a mitad de página y los anclajes no
 * llegan a su destino exacto.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // Doble frame para asegurar que el destino ya está renderizado.
      const rafId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      return () => cancelAnimationFrame(rafId);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
