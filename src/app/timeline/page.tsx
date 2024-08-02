import { getAllPostList } from "@/libs/post";
import Link from "next/link";

const Timeline = async () => {
  const postList = await getAllPostList();
  const yearList = Array.from(new Set(postList.map(v => v.date.getFullYear())));

  return (
    <div className="grid w-full h-full max-w-5xl gap-8 px-4 mx-auto lg:max-w-6xl lg:px-8">
      { yearList.map((v) => (
        <section key={`timeline-year-${v}`} className="grid gap-4 md:grid-cols-auto-1fr md:gap-8">
          <div className="flex items-baseline gap-2">
            <h3 className="text-lg font-black text-light-gray800 dark:text-dark-gray800">
              { v }
            </h3>
            <span className="font-normal text-md text-light-gray400 dark:text-dark-gray400">
              ( {postList.filter(post => post.date.getFullYear() === v).length} )
            </span>
          </div>
          <div className="grid gap-2">
            { postList.filter(post => post.date.getFullYear() === v).map((post, idx) => (
              <Link
                key={`timeline-${v}=${idx}`}
                className="grid items-center gap-2 transition-all grid-cols-1fr-auto hover:pl-4 transition-ease-out transition-delay-150"
                href={`${post.pageURL}`}
              >
                <h4>
                  {post.title}
                </h4>
                <div>
                  {post.createdDate}
                </div>
              </Link>
            )) }
          </div>
        </section>
      )) }
    </div>
  );
};
export default Timeline;