import PostList from "@/components/PostList";
import PageTitle from "@/components/layout/PageTitle";
import { getAllPostList } from "@/libs/post";

const BlogPage = async () => {
  // const selectedTag = searchParams.tags || 'all';
  const postList = await getAllPostList();
  
  return (
    <div className="w-full max-w-5xl mx-auto relative h-full px-4 mx-auto lg:max-w-6xl lg:px-8">
      <PageTitle
        pageTitle="Blog"
        pageDescription=""
      />
      <PostList postList={postList} />
    </div>
  );
};

export default BlogPage;