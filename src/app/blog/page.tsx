import PostList from "@/components/PostList";
import PageTitle from "@/components/layout/PageTitle";
import { getAllPostList, getAllTagList } from "@/libs/post";

const BlogPage = async () => {
  const postList = await getAllPostList();
  const tagList = await getAllTagList();
  
  return (
    <div className="relative w-full h-full max-w-5xl px-4 mx-auto lg:max-w-6xl lg:px-8">
      <PageTitle
        pageTitle="Blog"
        pageDescription=""
      />
      <PostList
        postList={postList}
        tagList={tagList}
      />
    </div>
  );
};

export default BlogPage;