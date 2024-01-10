'use client';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useParams } from 'next/navigation';

import { allCheatsheets } from 'contentlayer/generated';

import { ArrowRight, Heart, Search, Show } from '@/components/common/icons';
import Tag from '@/components/common/tag';

export default function CheatSheetPage() {
  const param = useParams();
  const cheatsheetPosts = allCheatsheets.filter((post) => {
    return post.category?.toUpperCase() === (param.slug as string).toUpperCase();
  });

  return (
    <main className='w-section mx-auto my-20'>
      <h1 className='text-4xl font-bold capitalize'>{param.slug} Cheatsheet</h1>
      <div className='relative mt-8 flex items-center'>
        <Search className='absolute left-4' />
        <input
          type='text'
          className='w-full rounded-lg border py-2 pl-10 placeholder-gray-400'
          placeholder='Search for Keyword'
        />
      </div>
      <div className='mt-10 grid grid-cols-3 gap-x-6 gap-y-6'>
        {cheatsheetPosts.map((post) => {
          return (
            <div
              className='relative overflow-hidden rounded-md  shadow-md transition-all hover:-translate-y-2 hover:shadow-xl dark:border-gray-600 dark:shadow-none'
              key={post.category}
            >
              <div className='absolute left-0 top-0 h-1 w-full bg-pink-300'></div>
              <NextLink href={`/cheatsheets/`} className='block border-2 border-gray-200 p-4'>
                {/* <div className='absolute right-0 top-0 rounded-bl-md rounded-tr-md bg-secondary-200 px-6 py-0 text-xs text-white'>
                  Generic
                </div> */}

                <div className='mb-10'>
                  <h3 className='mb-1 text-lg font-semibold'>{post.title}</h3>
                  <p className='text-sm text-gray-400'>{post.description}</p>
                </div>

                <div className='flex justify-between'>
                  {/* <div>
                    <Calendar />
                  </div> */}
                  <div className='flex items-center gap-2'>
                    <div className='flex items-center'>
                      <Show />
                      <span className='ml-1 text-sm text-gray-400'>12</span>
                    </div>
                    <div className='flex items-center'>
                      <Heart width={16} height={16} />
                      {/* <Tag name='123' colorScheme='red' icon={<Heart width={16} height={16} />} /> */}
                      <span className='ml-1 text-sm text-gray-400'>12</span>
                    </div>
                    <div>
                      <NextImage
                        src={`/static/images/cheatsheets/${post.category?.toLowerCase()}.svg`}
                        alt='javascript'
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      {post.tags?.map((tag) => {
                        return <Tag name={tag} key={tag} />;
                      })}
                    </div>
                  </div>
                  <div>
                    <ArrowRight width={24} height={24} />
                  </div>
                </div>
              </NextLink>
            </div>
          );
        })}
      </div>
    </main>
  );
}
