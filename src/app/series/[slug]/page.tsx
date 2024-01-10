import { allBlogs } from 'contentlayer/generated';

import PostManager from '@/components/post/post-manager';

import seriesData from '@/data/seriesCategory.mjs';

interface Props {
  params: {
    slug: string;
  };
}

export default function SeriesPostsPage({ params }: Props) {
  const currentSeries = seriesData.find((series) => series.slug === params.slug);
  if (!currentSeries) {
    return <div>시리즈를 찾을 수 없습니다.</div>;
  }
  const currentSeriesPosts = allBlogs.filter((post) => post.series === currentSeries?.key);
  return <PostManager title={currentSeries?.key} blogs={currentSeriesPosts} />;
}
