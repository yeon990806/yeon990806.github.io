import TableOfContent from "@/components/TableOfContent";
import { ReactNode } from "react";

type BlogLayoutProps = {
  children: ReactNode
  params: { slug: string; }
}

const BlogLayout = ({ children, params: { slug } }: BlogLayoutProps) => {
  return (
    <div className="relative w-full h-full max-w-6xl px-4 mx-auto lg:max-w-6xl lg:px-8">
      <div className="flex justify-center">
        <section className="w-full max-w-3xl">
          {children}
        </section>
        <div className="w-[180px] fixed right-toc pl-8">
          <TableOfContent />
        </div>
      </div>
    </div>
  );
};
export default BlogLayout;