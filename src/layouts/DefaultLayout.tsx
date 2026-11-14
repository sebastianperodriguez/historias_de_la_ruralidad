import { Outlet, useLocation } from 'react-router-dom';
import { BottomNav } from '@/components/layout/BottomNav';
import { TopHeader } from '@/components/layout/TopHeader';
import { useTheme } from '@/hooks/useTheme';

const PAGE_TITLES: Array<{ match: RegExp; title: string }> = [
  { match: /^\/la-aurora\/historias\//, title: 'Historias' },
  { match: /^\/la-aurora/, title: 'La Aurora' },
  { match: /^\/revista/, title: 'Revista' },
  { match: /^\/documental/, title: 'Documental' },
  { match: /^\/la-honda/, title: 'La Honda' },
  { match: /^\//, title: 'Inicio' },
];

function pageTitle(pathname: string): string {
  const entry = PAGE_TITLES.find(({ match }) => match.test(pathname));
  return entry?.title ?? 'Inicio';
}

export function DefaultLayout() {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-dvh flex-col">
      <TopHeader title={pageTitle(pathname)} theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1 pb-24 pt-16">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
}
