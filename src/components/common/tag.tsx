import React from 'react';

interface Props {
  name: string;
  icon?: React.ReactNode;
  colorScheme?: TagColor;
}

export type TagColor = 'red' | 'blue' | 'yellow' | 'gray';

const colorVariants = {
  blue: 'bg-blue',
  red: 'bg-red',
  yellow: 'bg-yellow',
  gray: 'bg-gray-100',
};

const Tag = ({ name, icon, colorScheme = 'gray' }: Props) => {
  return (
    <span
      className={`${colorVariants[colorScheme]} inline-flex items-center rounded-md px-2 py-1`}
      role='tag'
    >
      {icon && <span className='mr-1'>{icon}</span>}
      <span className='text-sm text-gray-400'>{name}</span>
    </span>
  );
};

export default Tag;
