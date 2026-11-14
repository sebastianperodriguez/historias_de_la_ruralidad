import { Link, NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/la-aurora', label: 'La Aurora' },
  { to: '/la-honda', label: 'La Honda' },
] as const;

const inactiveLink =
  'border-b-2 border-transparent pb-0.5 text-on-surface-variant transition-colors hover:text-primary';
const activeLink = 'border-b-2 border-primary pb-0.5 font-semibold text-primary';

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 pt-safe shadow-[0_1px_12px_rgba(47,43,40,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-space-sm px-margin">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-space-sm"
          aria-label="Historias de la Ruralidad Carmelitana — Inicio"
        >
          <img alt="" className="h-8 w-8 flex-shrink-0 object-contain" src="/favicon.svg" />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="truncate font-label-sm text-label-sm uppercase tracking-wider text-primary">
              El Carmen de Viboral
            </span>
            <span className="truncate font-headline-sm text-headline-sm leading-tight text-on-surface">
              Historias de Ruralidad
            </span>
          </span>
        </Link>

        <nav
          className="flex items-center gap-space-sm font-label-sm text-label-sm sm:gap-space-md"
          aria-label="Navegación principal"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={'end' in link ? link.end : undefined}
              className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contacto"
            className="rounded-full bg-primary px-3 py-1 font-label-sm text-label-sm font-semibold text-on-primary transition-transform active:scale-95"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
