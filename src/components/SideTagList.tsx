import { getAllTagList } from "@/libs/post";

const SideTagList = async () => {
  const tagList = await getAllTagList();

  return (
    <aside className="w-[120px] p-4 pr-0">
      <div className="pb-2 font-semibold leading-none border-b border-solid text-md text-light-gray800 dark:text-dark-gray800">
        태그 리스트
      </div>
      <ul className="grid gap-1 mt-3 text-sm text-light-gray600 dark:text-dark-gray600">
        <li key={`main-side-taglist-all`} className="cursor-pointer">
          전체 보기 ({tagList.all})
        </li>
        { Object.entries(tagList).filter(([key, value]) => key !== 'all').map(([key, value], idx) => (
          <li key={`main-side-taglist-${idx}`} className="cursor-pointer">
            {`${key} (${value})`}
          </li>
        )) }
      </ul>
    </aside>
  );
};
export default SideTagList;