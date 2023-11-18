import React from 'react';

import { Blog } from 'contentlayer/generated';

import PostListItem from './post-list-item';

interface Props {
  posts: Blog[];
  count?: number;
}

const PostList = ({ posts, count }: Props) => {
  const postsToShow = count ? posts.slice(0, count) : posts;

  return (
    <div>
      {postsToShow.map((blog: Blog, index: number) => {
        return (
          <div
            key={blog._id}
            className={`py-9 ${
              index !== postsToShow.length - 1 ? 'border-gray_line border-b' : 'pb-0'
            }`}
          >
            <PostListItem
              title={blog.title}
              description={blog.description}
              publishedAt={blog.publishedAt}
              url={blog.url}
              tags={blog.tags}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
