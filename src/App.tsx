import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomePage } from '@/pages/HomePage';
import { AuroraPage } from '@/pages/AuroraPage';
import { StoryPage } from '@/pages/StoryPage';
import { RevistaPage } from '@/pages/RevistaPage';
import { DocumentalPage } from '@/pages/DocumentalPage';
import { LaHondaPage } from '@/pages/LaHondaPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/la-aurora" element={<AuroraPage />} />
        <Route path="/la-aurora/historias/:slug" element={<StoryPage />} />
        <Route path="/revista" element={<RevistaPage />} />
        <Route path="/documental" element={<DocumentalPage />} />
        <Route path="/la-honda" element={<LaHondaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
