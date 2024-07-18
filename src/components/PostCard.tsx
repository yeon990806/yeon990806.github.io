'use client'
import { PostType } from "@/libs/types";
import { useRouter } from "next/navigation";
import { PiTimer } from "react-icons/pi";
import TagPin from "./TagPin";

const PostCard = ({
  title,
  createdDate,
  pageURL,
  readingMinutes,
  description,
  series,
  tags
}: PostType) => {
  const router = useRouter();

  return (
    <div className="p-4 transition-all delay-100 cursor-pointer hover:bg-light-gray200 dark:hover:bg-dark-gray100 hover:ease-in-out" onClick={() => router.push(pageURL)}>
      <div className="text-md text-light-blue400 dark:text-dark-blue400">
        {series}
      </div>
      <div className="grid gap-1">
        <div>
          <h3 className="text-lg text-light-gray800 dark:text-dark-gray800">
            { title }
          </h3>
          <p className="text-md text-light-gray600 dark:text-dark-gray600">
            { description }
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2">
            <p className="text-md text-light-gray500 dark:text-dark-gray500">
              { createdDate }
            </p>
            <p className="inline-flex items-center gap-1 justify-self-end text-md text-light-gray500 dark:text-dark-gray500">
              <PiTimer />
              { readingMinutes }분
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {tags?.map((tag, idx) => (
            <TagPin
              text={tag}
              key={`${title}-tag-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PostCard;