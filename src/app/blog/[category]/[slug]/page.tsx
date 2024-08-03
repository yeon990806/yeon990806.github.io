import Giscus from "@/components/Giscus";
import PostContent from "@/components/PostContent";
import PostHeader from "@/components/PostHeader";
import PrevNextPost from "@/components/PrevNextPost";
import SeriesPost from "@/components/SeriesPost";
import { getPostBasicInfo, getPostDetail, getPostPathList, getSortedPostList } from "@/libs/post";
import { PostType } from "@/libs/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostPageProps = {
  params: { category: string; slug: string };
};

export const dynamicParams: boolean = false;

export async function generateStaticParams() {
  const postPathList: string[] = getPostPathList();
  return postPathList.map((path: string) => getPostBasicInfo(path)).map(data => ({ category: data.category, slug: data.slug }));
}

export async function generateMetadata({ params: { category, slug } }: PostPageProps): Promise<Metadata> {
  const post: PostType = await getPostDetail(category, slug);

  const title = `${post.title} | YeON.me`;
  // const imageURL = `${baseDomain}${post.thumbnail}`;

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title,
    description: post.description,

    openGraph: {
      title,
      description: post.description,
      type: 'article',
      publishedTime: post.date.toISOString(),
      // url: `${baseDomain}${post.url}`,
      // images: [imageURL],
    },
    twitter: {
      title,
      description: post.description,
      // images: [imageURL],
    },
  };
}

const PostDetail = async ({ params: { category, slug } }: PostPageProps) => {
  const postData: PostType = await getPostDetail(category, slug);
  const sortedPostList: PostType[] = await getSortedPostList();
  const currentIdx = sortedPostList.findIndex(v => v.slug === slug);

  if (!postData) {
    notFound();
  }

  return (
    <section className="w-full">
      <div className="max-w-full prose break-words dark:prose-invert">
        <PostHeader
          title={postData.title}
          createdDate={postData.createdDate}
          readingTime={postData.readingMinutes}
        />
        <PostContent post={postData} />
        <SeriesPost
          series={postData.series}
          thisPost={postData.pageURL}
        />
        <PrevNextPost
          prevPost={sortedPostList[currentIdx - 1]}
          nextPost={sortedPostList[currentIdx + 1]}
        />
        <Giscus />
      </div>
    </section>
  );
};

export default PostDetail;