import NextImage from 'next/image';
import NextLink from 'next/link';

import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { Book, Calendar } from '@/components/common/icons';

import seriesData from '@/data/seriesData.mjs';

interface Props {
  count?: number;
}

const SeriesList = ({ count }: Props) => {
  const seriesToShow = count ? seriesData.slice(0, count) : seriesData;
  function timeSince(date: string): string {
    const now = new Date();
    const pastDate = new Date(date);
    const msDiff = now.getTime() - pastDate.getTime();

    const seconds = Math.floor(msDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return '방금 전';
    } else if (minutes < 60) {
      return `${minutes}분 전`;
    } else if (hours < 24) {
      return `${hours}시간 전`;
    } else if (days < 30) {
      return `${days}일 전`;
    } else if (months < 12) {
      return `${months}개월 전`;
    } else {
      return `${years}년 전`;
    }
  }

  return (
    <div className='mt-10 grid grid-cols-3 gap-10'>
      {seriesToShow.map((series) => {
        const seriesPosts = allBlogs.filter((post) => post.series === series.key);
        seriesPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
        return (
          <NextLink href={`/series/${series.slug}`} key={series.key}>
            <NextImage
              src={series.image.src}
              alt={series.image.alt}
              width='0'
              height='0'
              sizes='100vw'
              className='h-auto w-full rounded-lg'
            />
            <h2 className='mt-4 text-xl font-semibold'>{series.translation.kr}</h2>
            <div className='mt-1 flex'>
              <div className='flex items-center'>
                <Book width={16} height={16} />
                <span className='ml-1 text-base text-gray-500'>
                  {seriesPosts.length}개의 포스트
                </span>
              </div>
              <span className='mx-2 text-gray-500'>&middot;</span>
              {seriesPosts[0] && (
                <div className='flex items-center'>
                  <Calendar width={16} height={16} />
                  <span className='ml-1 text-base text-gray-500'>
                    {timeSince(seriesPosts[0].publishedAt)}
                  </span>
                </div>
              )}
            </div>
          </NextLink>
        );
      })}
    </div>
  );
};

export default SeriesList;
