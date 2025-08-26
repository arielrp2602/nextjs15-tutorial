import { Skeleton } from '@/components/ui/skeleton';

/*
  El componente Loading se muestra mientras se carga el contenido del dashboard.tsx
  Aquí se utiliza el componente Skeleton de Shadcdn para mostrar un esqueleto de carga
  Esto funciona automaticamente siempre y cuando el archivo se llame loading.tsx
*/

export default function Loading() {
  return <Skeleton className="w-full h-[400px]" />;
}
