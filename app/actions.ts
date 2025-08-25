'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { prisma } from './utils/db';
import { redirect } from 'next/navigation';
import { Routes } from '@/common/enums';
import { checkUser } from './utils';

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  checkUser(user);

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

  return redirect(Routes.DASHBOARD);
}
