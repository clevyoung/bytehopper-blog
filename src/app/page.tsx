import { allBlogs } from 'contentlayer/generated';

import PostList from '@/components/post/post-list';
import SeriesList from '@/components/series/series-list';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='flex h-[20rem] items-center bg-hero bg-cover bg-center'>
        <div className='w-section w-full'>
          <div>
            <h1 className='text-5xl font-bold text-white'>ByteHopper Blog</h1>
            <p className='mt-4 text-white'>개발 블로그입니다.</p>
          </div>
        </div>
      </div>
      <div className='w-section mx-auto'>
        <div className='mt-20'>
          <h2 className='text-3xl font-bold'>시리즈</h2>
          <SeriesList count={3} />
        </div>
        <div className='mt-20'>
          <div className='mb-20'>
            <h2 className='text-3xl font-bold'>최신 포스트</h2>
            <PostList posts={allBlogs} count={3} />
          </div>
          <div className='mb-20'>
            <h2 className='text-3xl font-bold'>인기 포스트</h2>
            <PostList posts={allBlogs} count={3} />
          </div>
        </div>
      </div>
    </main>
  );
}
