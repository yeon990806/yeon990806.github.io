/* eslint-disable @next/next/no-img-element */
import { SeriesType } from "@/libs/types";
import dayjs from "dayjs";
import Link from "next/link";
import { FiBook, FiCalendar, FiClock } from "react-icons/fi";

const SeriesCard = ({
  title,
  img,
  desc,
  postCnt,
  lastModified,
  slug,
}: SeriesType) => {
  return (
    <Link
      href={`/series/${slug}`}
      className="p-2 transition-all delay-100 cursor-pointer hover:bg-light-gray200 dark:hover:bg-dark-gray100 hover:ease-in-out text-light-gray800 dark:text-dark-gray800"
    >
      <div className="flex items-center w-full overflow-hidden rounded-lg aspect-video">
        <img src={img} alt={`series-${title}`} loading="lazy" className="w-full" />
      </div>
      <div className="mt-4 text-lg font-bold leading-none">
        {title}
      </div>
      <div className="mt-3 font-normal leading-relax text-md">
        {desc}
      </div>
      <div className="grid items-center gap-2 mt-3 font-normal leading-none text-md grid-cols-auto-1fr">
        <FiBook className="mb-0.5" /> {postCnt}개의 포스트
      </div>
      <div className="grid items-center gap-2 mt-1 font-normal leading-none text-md grid-cols-auto-1fr">
        <FiCalendar className="mb-0.5" /> { dayjs(lastModified).locale('ko').format('YYYY년 MM월 DD일')}
      </div>
    </Link>
  );
};
export default SeriesCard;