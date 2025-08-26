'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { prisma } from './utils/db';
import { redirect } from 'next/navigation';
import { Routes } from '@/common/enums';
import { checkUser } from './utils';
import { revalidatePath } from 'next/cache';

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  checkUser(user);

  // Esto es el equivalente a un insert into BlogPosts (...)
  await prisma.blogPost.create({
    data: {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      imageUrl: formData.get('imageUrl') as string,
      authorId: user?.id as string,
      authorImage: (user?.picture ?? '') as string,
      authorName: user?.given_name as string,
    },
  });

  // Esto es para que se actualice la página principal después de crear un nuevo post
  // sin necesidad de que el usuario tenga que refrescar manualmente
  // Internamente limpia la caché de la ruta indicada
  // y Next.js vuelve a generar la página con los nuevos datos
  revalidatePath(Routes.HOME);

  return redirect(Routes.DASHBOARD);
}
