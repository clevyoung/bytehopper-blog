import NextImage from 'next/image';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='flex h-[20rem] items-center bg-hero bg-cover bg-center'>
        <div className='w-section flex w-full items-center gap-x-6'>
          <div>
            <NextImage
              src='/static/images/hero-rabbit.svg'
              alt='hero rabbit'
              width={110}
              height={125}
            />
          </div>
          <div>
            <h1 className='text-5xl font-bold text-white'>ByteHopper Blog</h1>
            <p className='mt-4 text-white'>개발 블로그입니다.</p>
          </div>
        </div>
      </div>
      <div className='w-section mx-auto'></div>
    </main>
  );
}
