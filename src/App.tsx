import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { HomePage } from '@/pages/HomePage';
import { AuroraPage } from '@/pages/AuroraPage';
import { StoryPage } from '@/pages/StoryPage';
import { LaHondaPage } from '@/pages/LaHondaPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/la-aurora" element={<AuroraPage />} />
        <Route path="/la-aurora/historias/:slug" element={<StoryPage />} />
        <Route path="/la-honda" element={<LaHondaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
