import { Outlet } from 'react-router-dom';
import { TopNav } from '@/components/layout/TopNav';

export function DefaultLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopNav />
      <main className="flex-1 pb-space-lg pt-space-md">
        <Outlet />
      </main>
    </div>
  );
}
