import { allBlogs } from 'contentlayer/generated';

import PostManager from '@/components/post/post-manager';
export default function BlogListPage() {
  return <PostManager title='All Blog Posts' blogs={allBlogs} />;
}
