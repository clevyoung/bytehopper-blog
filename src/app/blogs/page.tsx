import { allBlogs } from 'contentlayer/generated';

import { Search } from '@/components/common/icons';
import PostList from '@/components/common/post/post-list';
import Tag from '@/components/common/tag';

export default function BlogListPage() {
  return (
    <main className='w-section mx-auto min-h-screen'>
      <div className='mt-20 flex justify-between gap-20'>
        <div className='w-3/4'>
          <h2 className='text-3xl font-bold'>
            All Blog Posts
            <span className='ml-2 text-primary'>{allBlogs.length}</span>
          </h2>
          <PostList posts={allBlogs} />
        </div>
        <div className='flex w-1/4 flex-col gap-8'>
          <div className='relative flex items-center'>
            <Search className='absolute left-4' />
            <input
              type='text'
              className='w-full rounded-lg border py-2 pl-10 placeholder-gray-400'
              placeholder='Search for Keyword'
            />
          </div>
          <div>
            <span className='mb-2 inline-block text-lg font-semibold'>Keywords</span>
            <div className='flex flex-wrap gap-2'>
              <Tag name='All' />
              <Tag name='react' />
              <Tag name='nextjs' />
              <Tag name='javascript' />
              <Tag name='performance' />
              <Tag name='pwa' />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
