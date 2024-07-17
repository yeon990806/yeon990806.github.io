'use client'
import { PostType } from "@/libs/types";
import { useRouter } from "next/navigation";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi"
import { motion } from "framer-motion";

type PrevNextPostProps = {
  prevPost: PostType;
  nextPost: PostType;
};

const PrevNextPost = ({
  prevPost,
  nextPost
}: PrevNextPostProps) => {
  const router = useRouter();
  const onClickPost = (slug: string, category?: string) => {
    router.push(`/blog/${category ? `${category}/` : ''}${slug}`);
  };

  return (
    <div className="flex items-center justify-between mt-8">
      <motion.button
        className="inline-flex items-center gap-4 p-4"
        onClick={() => onClickPost(prevPost.slug, prevPost.category)}
        disabled={!prevPost}
        aria-disabled={!prevPost}
        whileHover="hover"
      >
        {prevPost ? (
          <>
            <motion.div
              variants={{
                hover: { x: -6 },
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <PiArrowLeft size={24} />
            </motion.div>
            <div className="flex flex-col items-start">
              <span className="text-sm text-light-gray500 text-dark-gray500">이전 포스트</span>
              <h6 className="text-lg font-semibold">
                {prevPost.title}
              </h6>
            </div>
          </>
        ) : (
          '이전 포스트가 없습니다.'
        )}
      </motion.button>
      <motion.button
        className="inline-flex items-center gap-4 p-4"
        onClick={() => onClickPost(nextPost.slug, nextPost.category)}
        disabled={!nextPost}
        aria-disabled={!nextPost}
        whileHover="hover"
      >
        {nextPost ? (
          <>
            <div className="flex flex-col items-start">
              <span className="text-sm text-light-gray500 text-dark-gray500">다음 포스트</span>
              <h6 className="text-lg font-semibold">
                {nextPost.title}
              </h6>
            </div>
            <motion.div
              variants={{
                hover: { x: 6 },
              }}
              transition={{ ease: "easeInOut", duration: 0.3 }}
            >
              <PiArrowRight size={24} />
            </motion.div>
          </>
        ) : (
          '다음 포스트가 없습니다.'
        )}
      </motion.button>
    </div>
  );
};
export default PrevNextPost;