'use client'
import { useRouter } from "next/navigation";

interface PostCardProps {
  postTitle: string;
  createdDate: string;
  url: string;
}

const PostCard = ({
  postTitle,
  createdDate,
  url
}: PostCardProps) => {
  const router = useRouter();

  return (
    <div className="" onClick={() => router.push(url)}>
      <div className="">
        <h3>
          { postTitle }
        </h3>
        <p>
          { createdDate }
        </p>
      </div>
    </div>
  );
};
export default PostCard;