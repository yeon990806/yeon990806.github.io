'use client'
import { cn } from "@/libs/util";

type SideTagListProps = {
  tagList: {[key: string]: number};
  selectedTag: string;
  onClickTag: (v: string)=> void;
};

const SideTagList = ({
  tagList,
  selectedTag,
  onClickTag,
}: SideTagListProps) => {
  return (
    <aside className="w-[180px] max-md:hidden">
      <div className="px-2 pb-2 font-semibold leading-none border-b border-solid text-md text-light-gray800 dark:text-dark-gray800">
        태그 리스트
      </div>
      <ul className="grid gap-1 mt-3 text-sm text-light-gray600 dark:text-dark-gray600">
        <li
          key={`main-side-taglist-all`}
          className={cn("cursor-pointer px-2 hover:underline", selectedTag === 'all' && 'font-bold')}
          onClick={() => onClickTag('all')}
        >
          전체 보기 ({tagList.all})
        </li>
        { Object.entries(tagList).filter(([key, value]) => key !== 'all').map(([key, value], idx) => (
          <li
            key={`main-side-taglist-${idx}`}
            className={cn("cursor-pointer px-2 hover:underline", selectedTag === key && 'font-bold')}
            onClick={() => onClickTag(key)}
          >
            {`${key} (${value})`}
          </li>
        )) }
      </ul>
    </aside>
  );
};
export default SideTagList;