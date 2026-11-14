import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/ui/Icon';

type NavItem = {
  to: string;
  label: string;
  icon: string;
};

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Inicio', icon: 'cottage' },
  { to: '/la-aurora', label: 'La Aurora', icon: 'landscape' },
  { to: '/revista', label: 'Revista', icon: 'auto_stories' },
  { to: '/la-honda', label: 'La Honda', icon: 'terrain' },
];

const activeClasses =
  'relative font-semibold text-primary after:absolute after:bottom-1 after:h-1.5 after:w-1.5 after:rounded-full after:bg-secondary';
const inactiveClasses = 'text-on-surface-variant transition-colors hover:text-primary';

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 z-50 w-full bg-surface-container-lowest/90 pb-safe shadow-[0_-4px_20px_rgba(9,34,23,0.05)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-space-xs">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            aria-label={item.label}
            className={({ isActive }) =>
              `flex h-full min-w-[56px] flex-col items-center justify-center ${isActive ? activeClasses : inactiveClasses}`
            }
          >
            {({ isActive }) => (
              <>
                <Icon name={item.icon} size={22} filled={isActive} />
                <span className="mt-0.5 font-label-sm text-label-sm tracking-tight">
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
