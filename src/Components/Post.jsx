import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="p-4 rounded-2xl border space-y-2">
      <h1 className="text-xl font-bold line-clamp-1">Title: {title}</h1>
      <p className="line-clamp-6 ">Body: {body}</p>

      {/* <div className="mt-5 text-center"> */}
        <Link
          to={`/posts/${post.id}`}
          className="text-white py-2 px-6 shadow-2xl border rounded-2xl bg-gray-700"
        >
          Show Details
        </Link>
      {/* </div> */}
    </div>
  );
};

export default Post;
