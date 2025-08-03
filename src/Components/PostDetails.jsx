import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { title, body } = post;
  return (
    <div className="p-4 bg-gray-100 rounded-xl w-6/12 mx-auto text-center">
      <h2 className="text-2xl font-bold">Post Details</h2>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
