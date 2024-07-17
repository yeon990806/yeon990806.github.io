import { getAllPostList } from "@/libs/post";
import { PostType } from "@/libs/types";

const BlogPage = async () => {
  const postList = await getAllPostList();
  
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {postList?.map((post: PostType, idx: number) => (
          <li key={idx}>{post.slug}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;