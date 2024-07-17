import dayjs from "dayjs";
import { PiCalendarBlank, PiTimer } from "react-icons/pi";

type PostHeaderProps = {
  title: string;
  createdDate: string;
  readingTime: number;
}

const PostHeader = ({
  title,
  createdDate,
  readingTime
}: PostHeaderProps) => {
  return (
    <header className="grid gap-3 pb-8 border-b border-solid border-light-gray300">
      <h1 className="p-0 m-0 text-2xl font-semibold text-light-gray800 dark:text-dark-gray800">{title}</h1>
      <div className="grid gap-2 text-sm leading-none text-light-gray500">
        <div className="inline-flex items-center gap-x-1">
          <PiCalendarBlank />
          <span>
            {createdDate}
          </span>
        </div>
        <div className="inline-flex items-center gap-x-1">
          <PiTimer />
          <span>
            이 포스트를 읽는데 {readingTime}분이 걸립니다.
          </span>
        </div>
      </div>
    </header>
  );
};
export default PostHeader;