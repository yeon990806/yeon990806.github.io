import { PostType } from "@/libs/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
// @ts-expect-error no types
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkBreaks from "remark-breaks";

type PostContentProps = {
  post: PostType
}

const PostContent = ({
  post
}: PostContentProps) => {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkToc, remarkA11yEmoji, remarkBreaks],
          rehypePlugins: [
            rehypeSlug,
            rehypeCodeTitles,
            [rehypePrettyCode, { theme: 'tokyo-night', keepBackground: false }],
            rehypeAutolinkHeadings,
          ]
        }
      }}
    />
  );
};
export default PostContent;