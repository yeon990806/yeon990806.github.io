import { getAllPostList, sortPostList } from "@/libs/post";
import { cn } from "@/libs/util";
import Link from "next/link";

const SeriesPost = async ({series, thisPost}: {series: string, thisPost: string}) => {
  const postList = sortPostList((await getAllPostList()).filter(v => v.series === series));

  return (
    <div className="px-2 py-4 mt-4 border-solid border-y border-light-gray400 dark:border-dark-gray400">
      <h4 className="p-0 pl-4 m-0 leading-none text-md text-light-gray600 dark:text-dark-gray600">
        {series} 시리즈의 모든 포스트
      </h4>
      <ul className="grid gap-2 p-0 m-0 mt-4">
        {postList.map((post, idx) => (
          <Link
            key={`${post.series}-${post.slug}-${idx}`}
            href={post.pageURL}
            className={cn("no-underline text-light-gray800 dark:text-dark-gray800 hover:pl-2 transition-all", post.pageURL === thisPost && "text-light-gray500 dark:text-dark-gray500")}
          >
            {idx + 1}. {post.title} {(post.pageURL === thisPost) && "(현재 포스트)" }
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SeriesPost;