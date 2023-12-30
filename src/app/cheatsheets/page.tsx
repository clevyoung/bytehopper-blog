import NextImage from 'next/image';
import NextLink from 'next/link';

import categoryData from '@/data/categoryData.mjs';

export default function CheatSheetPage() {
  return (
    <main className='w-section mx-auto my-20'>
      <h1 className='text-4xl font-bold'>Cheatsheets</h1>
      <div className='mt-10 grid grid-cols-4 gap-x-6 gap-y-10'>
        {categoryData.map((category) => {
          return (
            <div
              className=' rounded-md border-2 border-gray-200 shadow-md transition-all hover:-translate-y-2 hover:shadow-xl dark:border-gray-600 dark:shadow-none'
              key={category.name}
            >
              <NextLink href={`/cheatsheets/${category.slug}`}>
                <div className='after-content flex-initial'>
                  <NextImage
                    src={category.image.src}
                    alt={category.image.alt}
                    width='0'
                    height='0'
                    className='absolute-image'
                  />
                </div>
                <div className='flex justify-center border-t-2 border-t-gray-200 p-2 text-lg font-light'>
                  {category.name}
                </div>
              </NextLink>
            </div>
          );
        })}
      </div>
    </main>
  );
}
