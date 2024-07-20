import PostCard from "@/components/PostCard";
import SideTagList from "@/components/SideTagList";
import { getAllPostList } from "@/libs/post";

export default async function Home() {
  const postList = await getAllPostList();

  return (
    <div className="grid gap-4 h-100 grid-cols-auto-1fr">
      
    </div>
  );
}
