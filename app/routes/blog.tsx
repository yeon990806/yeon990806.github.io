import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
// import { getAllPosts } from "~/libs/constants/dataset";

// const loader = async () => json(await getAllPosts());

const Blog = () => {
  // const postList = useLoaderData<typeof loader>();
  return (
    <ul>
      {/* {postList.map((post) => (
        <li key={post.slug}>
          <Link to={post.slug}>{post.title}</Link>
          {post.description ? (
            <p>{post.description}</p>
          ) : null}
        </li>
      ))} */}
    </ul>
  );
};
export default Blog;