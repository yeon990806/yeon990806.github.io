/* eslint-disable @next/next/no-img-element */
import PostCard from "@/components/PostCard";
import PageTitle from "@/components/layout/PageTitle";
import { Series } from "@/constant/series";
import { getAllSeriesSlugs, getSeriesPostList, sortPostList } from "@/libs/post";
import dayjs from "dayjs";
import { FiBook, FiClock } from "react-icons/fi";

type SeriesPageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams: boolean = false;

export const generateStaticParams = async () => {
  const slugs = getAllSeriesSlugs();
  
  return slugs.map((slug: string) => ({
    slug,
  }));
};

export const generateMetadata = async ({ params }: SeriesPageProps) => {
  const series = Series.find(series => series.slug === params.slug);

  if (!series) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${series?.title} 시리즈`,
    description: series?.desc || '',
  };
};

const SeriesDetail = async ({ params }: SeriesPageProps) => {
  const seriesPostList = sortPostList(await getSeriesPostList(params.slug));
  const series = Series.find(series => series.title === params.slug);

  return (
    <div>
      <PageTitle
        pageTitle={`시리즈`}
        pageDescription=""
      />
      <div className="grid gap-10 pt-4 mt-2 border-t border-solid border-light-gray800 dark:border-dark-gray800 md:grid-cols-auto-1fr">
        <div className="w-full md:w-[240px]">
          <div className="w-full overflow-hidden rounded-md">
            <img src={series?.img} alt={series?.title} />
          </div>
          <h2 className="mt-4 text-xl font-bold leading-relaxed text-light-gray800 dark:text-dark-gray800">
            { series?.title }
          </h2>
          <div className="grid gap-2 mt-3 font-normal text-light-gray500 dark:text-dark-gray500">
            <div className="grid items-center gap-2 leading-none grid-cols-auto-1fr">
              <FiClock className="mb-0.5" /> { dayjs(seriesPostList[seriesPostList.length - 1].date).locale('ko').format('YYYY.MM.DD')}
            </div>
            <div className="grid items-center gap-2 leading-none grid-cols-auto-1fr">
              <FiBook className="mb-0.5" /> { seriesPostList.length }개의 포스트
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-md text-light-gray600 dark:text-dark-gray600">
            { series?.desc }
          </p>
        </div>
        <section>
          { seriesPostList.map((post, idx) => (
            <div
              key={`series-post-${post.title}-${idx}`}
              className="grid gap-2 grid-cols-auto-1fr"
            >
              <div className="flex items-center justify-center w-8 text-3xl italic font-semibold">
                {idx + 1}
              </div>
              <PostCard {...post} hideSeries />
            </div>
          )) }
        </section>
      </div>
    </div>
  );
}
export default SeriesDetail;