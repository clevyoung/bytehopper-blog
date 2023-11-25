import NextLink from 'next/link';
import { notFound } from 'next/navigation';

import { allBlogs, Blog } from 'contentlayer/generated';
import { compareDesc, format } from 'date-fns';
import {} from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { Heart, Share } from '@/components/common/icons';
import Tag from '@/components/common/tag';

const getSortedPosts = (posts: Blog[]) => {
  return posts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
};

function getPost(slug: string) {
  const post = allBlogs.find((p) => p._raw.flattenedPath === slug);

  if (!post) {
    return {};
  }
  const filteredPosts = getSortedPosts(
    allBlogs.filter((p) => (post.series ? p.series === post.series : !p.series))
  );
  const postIndex = filteredPosts.findIndex((p) => p._raw.flattenedPath === slug);

  const series = filteredPosts
    .filter((p) => p.series)
    .map((p) => ({ title: p.title, slug: p._raw.flattenedPath }));
  const seriesTitle = post.series ?? null;

  let prev = null;
  let next = null;
  let prevIndex = postIndex - 1;
  let nextIndex = postIndex + 1;

  while (prevIndex >= 0) {
    if (filteredPosts[prevIndex].isPublished) {
      prev = filteredPosts[prevIndex];
      break;
    }
    prevIndex--;
  }

  while (nextIndex < filteredPosts.length) {
    if (filteredPosts[nextIndex].isPublished) {
      next = filteredPosts[nextIndex];
      break;
    }
    nextIndex++;
  }

  return {
    post,
    prev,
    next,
    series,
    seriesTitle,
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: Props) {
  const { post, next, prev, series, seriesTitle } = getPost(params.slug);

  if (!post) {
    notFound();
  }

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div className='w-section mx-auto mt-20'>
      <div className='mb-10 border-b border-gray-300 pb-10'>
        <div className='mb-4 flex justify-between'>
          <h2 className='text-3xl font-bold'>{post.title}</h2>
          <div className='flex'>
            <Heart />
            <Share />
          </div>
        </div>
        <div>
          <span className='text-gray-500'>{format(new Date(post.publishedAt), 'yyyy-MM-dd')}</span>
        </div>
      </div>
      <div className='rounded-md border-l-8 border-gray-300 bg-secondary-100 px-8 py-10'>
        <strong className='mb-6 inline-block text-2xl text-gray-700'>동작원리</strong>
        <ul className='flex flex-col gap-2'>
          {series.map((p, index) => {
            return (
              <li
                key={p.slug}
                className={params.slug === p.slug ? 'font-semibold text-primary' : 'text-gray-500'}
              >
                <NextLink href={`/blogs/${p.slug}`}>
                  <span className='mr-1'>{index + 1}.</span>
                  {p.title}
                </NextLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <MDXComponent />
      </div>
      <div className='mb-8'>
        {post.tags?.map((tag) => {
          return <Tag name={tag} key={tag} />;
        })}
      </div>
      <div className='flex justify-between mb-8 pb-6 border-b border-gray-300'>
        <div>
          <button className='border border-gray-300 rounded px-2 py-1 text-sm'>좋아요</button>
        </div>
        <div>
          <button className='border border-gray-300 rounded px-2 py-1 text-sm mr-2'>목록</button>
          <button className='border border-gray-300 rounded px-2 py-1 text-sm'>공유하기</button>
        </div>
      </div>
      <div className='flex rounded-xl bg-gray-100 px-6 py-8 vertical-divider relative'>
        <div className='w-1/2 pr-4'>
          <div>
            <span></span>
            <strong className='text-lg text-primary'>Prev Post</strong>
          </div>
          <NextLink href={`/blogs/${prev?._raw.flattenedPath}`} className='text-sm text-gray-500'>
            {prev?.title}
          </NextLink>
        </div>
        <div className='flex w-1/2 flex-col items-end pl-4'>
          <div>
            <span></span>
            <strong className='text-lg text-primary'>Next Post</strong>
          </div>
          <NextLink href={`/blogs/${next?._raw.flattenedPath}`} className='text-sm text-gray-500'>
            {next?.title}
          </NextLink>
        </div>
      </div>
    </div>
  );
}
