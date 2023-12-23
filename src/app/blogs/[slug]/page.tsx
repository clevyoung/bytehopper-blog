import NextLink from 'next/link';
import { notFound } from 'next/navigation';

import { allBlogs, Blog } from 'contentlayer/generated';
import { compareDesc, format } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { ArrowLeft, ArrowRight, Heart, List, Share } from '@/components/common/icons';
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
        <div className='mb-4 flex items-end justify-between'>
          <h2 className='text-4xl font-bold'>{post.title}</h2>
          <div className='flex gap-6'>
            <Heart width={24} height={24} />
            <Share width={24} height={24} />
          </div>
        </div>
        <div>
          <span className='text-gray-500'>{format(new Date(post.publishedAt), 'yyyy-MM-dd')}</span>
        </div>
      </div>
      <div className='mb-10 rounded-md border-l-8 border-gray-300 bg-secondary-100 px-8 py-10'>
        <span className='mb-6 inline-block text-2xl font-semibold text-gray-700'>
          {seriesTitle}
        </span>
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
      <div className='prose prose-lg max-w-none dark:prose-dark'>
        <MDXComponent />
      </div>
      <div className='mb-8 mt-24'>
        {post.tags?.map((tag) => {
          return <Tag name={tag} key={tag} />;
        })}
      </div>
      <div className='mb-8 flex justify-between border-b border-gray-300 pb-6'>
        <div>
          <button className=' flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-sm'>
            <Heart width={16} height={16} />
            좋아요
          </button>
        </div>
        <div className='flex'>
          <button className='mr-2 flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-sm'>
            <List width={16} height={16} />
            목록
          </button>
          <button className='flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-sm'>
            <Share width={16} height={16} />
            공유하기
          </button>
        </div>
      </div>
      <div className='vertical-divider relative mb-24 flex rounded-xl bg-gray-100 px-6 py-8'>
        <div className='w-1/2 pr-4'>
          <div className='flex items-center gap-1'>
            <ArrowLeft width={24} height={24} />
            <strong className='text-lg text-primary'>Prev Post</strong>
          </div>
          <NextLink href={`/blogs/${prev?._raw.flattenedPath}`} className='text-sm text-gray-500'>
            {prev ? prev.title : '이전 포스트가 없습니다.'}
          </NextLink>
        </div>
        <div className='flex w-1/2 flex-col items-end pl-4'>
          <div className='flex items-center gap-1'>
            <strong className='text-lg text-primary'>Next Post</strong>
            <ArrowRight width={24} height={24} />
          </div>
          <NextLink href={`/blogs/${next?._raw.flattenedPath}`} className='text-sm text-gray-500'>
            {next ? next.title : '다음 포스트가 없습니다.'}
          </NextLink>
        </div>
      </div>
      {/* <div className='fixed right-0 top-0 col-span-12 lg:col-span-4'>
        <details
          className='border-dark dark:border-light text-dark dark:text-light sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto rounded-lg border-[1px] border-solid p-4'
          open
        >
          <summary className='cursor-pointer text-lg font-semibold capitalize'>
            Table Of Content
          </summary>
          <ul className='font-in mt-4 text-base'>
            {post.toc.map((heading: any) => {
              return (
                <li key={`#${heading.slug}`} className='py-1'>
                  <a
                    href={`#${heading.slug}`}
                    data-level={heading.level}
                    className='border-dark/40  flex
                                       items-center justify-start border-solid
                                       data-[level=two]:border-t
                                       data-[level=three]:pl-4
                                       data-[level=two]:pl-0 data-[level=two]:pt-2 sm:data-[level=three]:pl-6
                                       '
                  >
                    {heading.level === 'three' ? (
                      <span className='bg-dark mr-2 flex h-1 w-1 rounded-full'>&nbsp;</span>
                    ) : null}

                    <span className='hover:underline'>{heading.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </div> */}
    </div>
  );
}
