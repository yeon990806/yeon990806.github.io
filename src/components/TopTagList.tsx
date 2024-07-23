import { cn } from "@/libs/util";

type TopTagListProps = {
  tagList: {[key: string]: number};
  selectedTag: string;
  onClickTag: (v: string)=> void;
};

const COMMON_STYLE = 'shrink-0 h-[32px] cursor-pointer px-3 border border-solid border-light-gray600 dark:border-dark-gray600 rounded-full inline-flex gap-1 items-center justify-center text-sm leading-none';
const ACTIVE_STYLE = 'border-light-blue400 dark:border-dark-blue400 text-light-gray800 dark:text-dark-gray800';

const TopTagList = ({
  tagList,
  selectedTag,
  onClickTag
}: TopTagListProps) => {
  return (
    <div className="w-full my-2 md:hidden">
      <ul className="flex gap-4 overflow-x-auto text-light-gray600 dark:text-dark-gray600 flex-nowrap">
        <li
          key={`main-side-taglist-all`}
          className={cn(COMMON_STYLE, selectedTag === 'all' && ACTIVE_STYLE)}
          onClick={() => onClickTag('all')}
        >
          전체 보기
          <span className="text-xs leading-none text-light-gray400 dark:text-dark-gray400">
            ({tagList.all})
          </span>
        </li>
        { Object.entries(tagList).filter(([key, value]) => key !== 'all').map(([key, value], idx) => (
          <li
            key={`main-side-taglist-${idx}`}
            className={cn(COMMON_STYLE, selectedTag === key && ACTIVE_STYLE)}
            onClick={() => onClickTag(key)}
          >
            {key}
            <span className="text-xs leading-none text-light-gray400 dark:text-dark-gray400">
              {value}
            </span>
          </li>
        )) }
      </ul>
    </div>
  );
};
export default TopTagList;