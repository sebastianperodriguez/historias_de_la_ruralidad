import { useParams } from 'react-router-dom';
import { PagePlaceholder } from '@/components/PagePlaceholder';

export function StoryPage() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <PagePlaceholder
      title={`Historia: ${slug ?? ''}`}
      description="Página de historia individual — en construcción (Fase 3)."
    />
  );
}
