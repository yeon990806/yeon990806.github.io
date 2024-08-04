'use client'
import { PostType } from "@/libs/types";
import PostCard from "./PostCard";
import SideTagList from "./SideTagList";
import { useEffect, useState } from "react";
import InputSearch from "./InputSearch";
import useDebounce from "@/hooks/useDebounce";
import TopTagList from "./TopTagList";
import GoogleAd from "./GoogleAd";

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
      <TopTagList
        tagList={tagList}
        selectedTag={selectedTag}
        onClickTag={setSelectedTag}
      />
      <div className="grid mt-4 md:gap-8 gap-y-4 grid-cols-auto-1fr md:mt-8">
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
          <GoogleAd type="6520852603" />
        </section>
      </div>
    </div>
  );
};
export default PostList;