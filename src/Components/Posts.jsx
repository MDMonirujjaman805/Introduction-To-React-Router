import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className="w-10/12 mx-auto bg-gray-100 my-20 shadow-2xl p-5 rounded-2xl">
      <div className="md:grid grid-cols-2 shadow-2xl bg-gray-200 gap-5  ">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
