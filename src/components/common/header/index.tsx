import React from 'react';
import NextLink from 'next/link';

import { Down, Global, Moon } from '@/components/common/icons';

import navLinks from '@/data/nav-links';

const header = () => {
  return (
    <header className='border-b border-gray-300'>
      <div className='w-section mx-auto flex items-center justify-between py-4'>
        <NextLink href='/' className='text-[1.75rem] font-semibold text-primary '>
          ByteHopper
        </NextLink>
        <div className='flex items-center gap-x-12'>
          <nav>
            <ul className='flex gap-x-10'>
              {navLinks.map((nav, index) => {
                return (
                  <li key={index}>
                    <NextLink href={nav.href} className='inline-block text-gray-600'>
                      {nav.title}
                    </NextLink>
                  </li>
                );
              })}
              <li>
                <a
                  href='https://medium.com/@clevyoung'
                  className='inline-block text-gray-600'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  ByteHopper
                </a>
              </li>
            </ul>
          </nav>
          <div className='flex items-center gap-x-4'>
            <div>
              <button className='flex items-center text-gray-600'>
                <Global />
                <span className='ml-1 mr-[0.125rem] text-sm'>한국어</span>
                <Down />
              </button>
            </div>
            <button>
              <Moon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
