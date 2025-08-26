import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { prisma } from '../utils/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { BlogPostCard } from '@/components/general/BlogPostCard';

type getDataParams = {
  authorId: string;
};

async function getData(params: getDataParams) {
  await new Promise((r) => setTimeout(r, 1000));
  // Esto es el equivalente a hacer un select * from BlogPosts where authorId = '...'
  const data = await prisma.blogPost.findMany({
    where: {
      ...params,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData({ authorId: user?.id ?? '' });
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>
      {!data.length ? null : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <BlogPostCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
