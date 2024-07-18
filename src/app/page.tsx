import PostCard from "@/components/PostCard";
import { getAllPostList } from "@/libs/post";

export default async function Home() {
  const postList = await getAllPostList();

  return (
    <main className="h-100">
      {postList.map((post, idx) => (
        <PostCard
          { ...post }
          key={idx}
        />
      ))}
    </main>
  );
}
