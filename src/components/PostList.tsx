import { useState } from "react";
import { PostType } from "@/libs/types";
import PostCard from "./PostCard";
import SideTagList from "./SideTagList";

type PostListProps = {
  postList: PostType[];
}

const PostList = ({
  postList
}: PostListProps) => {

  return (
    <section className="mt-8 grid grid-cols-auto-1fr gap-4">
      <SideTagList />
      <div>
        {postList.map((post, idx) => (
          <PostCard
            { ...post }
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};
export default PostList;