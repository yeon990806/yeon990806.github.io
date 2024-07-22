import { SeriesType } from "@/libs/types";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const SeriesCard = ({
  title,
  img,
  desc,
  postCnt,
  lastModified
}: SeriesType) => {
  return (
    <Link
      href={`/series/${title}`}
      className="p-4 transition-all delay-100 cursor-pointer hover:bg-light-gray200 dark:hover:bg-dark-gray100 hover:ease-in-out"
    >
      <div className="">
        <Image src={img} width={128} height={128} alt={`series-${title}`} />
      </div>
      <div className="mt-2 text-lg font-bold leading-none">
        {title}
      </div>
      <div className="mt-1 font-normal leading-none text-md">
        {desc}
      </div>
      <div className="mt-1 font-normal leading-none text-md">
        {postCnt}
      </div>
      <div className="mt-1 font-normal leading-none text-md">
        { dayjs(lastModified).locale('ko').format('YYYY년 MM월 DD일')}
      </div>
    </Link>
  );
};
export default SeriesCard;