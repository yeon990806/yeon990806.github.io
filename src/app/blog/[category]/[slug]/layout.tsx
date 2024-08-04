import GoogleAd from "@/components/GoogleAd";
import TableOfContent from "@/components/TableOfContent";
import { ReactNode } from "react";

type BlogLayoutProps = {
  children: ReactNode
  params: { slug: string; }
}

const BlogLayout = ({ children, params: { slug } }: BlogLayoutProps) => {
  return (
    <div className="relative w-full h-full max-w-6xl px-6 mx-auto lg:max-w-6xl lg:px-8">
      <div className="flex justify-center">
        <section className="w-full max-w-5xl">
          {children}
          <GoogleAd type="7642362584" />
        </section>
        <div className="w-[180px] fixed right-toc pl-8 max-xl:hidden">
          <TableOfContent />
        </div>
      </div>
    </div>
  );
};
export default BlogLayout;