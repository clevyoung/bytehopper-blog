import React from 'react';

import SocialIcon from '@/components/social-icons';

const ICON_SIZE = 20;

const Footer = () => {
  return (
    <footer className='border-gray_line border-t bg-gray-100'>
      <div className='flex flex-col items-center py-10 text-gray-400'>
        <div className='mb-6 flex gap-4'>
          <SocialIcon kind='mail' href='mailto:clevyoung@gmail.com' size={ICON_SIZE} />
          <SocialIcon kind='github' href='https://github.com/clevyoung' size={ICON_SIZE} />
          <SocialIcon kind='rss' href='rss_temp' size={ICON_SIZE} />
        </div>
        <div className='mb-2 flex space-x-2 text-sm '>
          <span>© 2023</span>
          <span>•</span>
          <span>ByteHopper</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
