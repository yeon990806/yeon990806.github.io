'use client'
import { PostType } from "@/libs/types";
import PostCard from "./PostCard";
import SideTagList from "./SideTagList";
import { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import useDebounce from "@/hooks/useDebounce";

type PostListProps = {
  postList: PostType[];
  tagList: {[key: string]: number};
}

const PostList = ({
  postList,
  tagList
}: PostListProps) => {
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [filteredPostList, setFilteredPostList] = useState<PostType[]>(postList);

  const debouncedVaule = useDebounce(searchKeyword, 300);

  useEffect(() => {
    if (selectedTag === 'all') {
      setFilteredPostList(postList);
    } else {
      setFilteredPostList(postList.filter(v => v.tags && v.tags?.includes(selectedTag)));
    }
  }, [selectedTag, postList])

  useEffect(() => {
    setFilteredPostList(postList.filter(v => v.title.toLowerCase().includes(debouncedVaule.toLowerCase())))
  }, [debouncedVaule, postList])

  return (
    <div className="pt-4 mt-3 border-t border-solid border-light-gray800 dark:border-dark-gray800">
      <InputSearch
        keyword={searchKeyword}
        onInputValue={setSearchKeyword}
      />
      <div className="grid gap-4 mt-8 grid-cols-auto-1fr">
        <SideTagList
          tagList={tagList}
          selectedTag={selectedTag}
          onClickTag={setSelectedTag}
        />
        <section>
          {filteredPostList.map((post, idx) => (
            <PostCard
              { ...post }
              key={idx}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
export default PostList;