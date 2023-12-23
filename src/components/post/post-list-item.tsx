import React from 'react';
import NextLink from 'next/link';

import { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';

import { Calendar, Heart, Show } from '@/components/common/icons';
import Tag from '@/components/common/tag';

interface Props extends Pick<Blog, 'title' | 'description' | 'publishedAt' | 'url' | 'tags'> {}

const PostListItem = (props: Props) => {
  const { title, description, publishedAt, url, tags } = props;
  return (
    <div>
      <NextLink href={url}>
        <h3 className='mb-1 text-2xl font-semibold'>{title}</h3>
      </NextLink>
      <p className='mb-6 text-lg text-gray-600'>{description}</p>
      <div className='flex gap-x-2'>
        <Tag
          name={format(new Date(publishedAt), 'yyyy-MM-dd')}
          colorScheme='blue'
          icon={<Calendar />}
        />
        <Tag name='123temp' colorScheme='red' icon={<Heart width={16} height={16} />} />
        <Tag name='456temp' colorScheme='yellow' icon={<Show />} />
        {tags?.map((tag: string, index: number) => (
          <Tag key={index} name={tag} colorScheme='gray' />
        ))}
      </div>
    </div>
  );
};

export default PostListItem;
