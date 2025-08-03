import { useLoaderData } from "react-router-dom";

const ShopDetails = () => {
  const shopDetails = useLoaderData();
  const { title, body, userId } = shopDetails;
  return (
    <div className="w-10/12 mx-auto bg-gray-100 shadow-2xl mb-5 p-5">
      <h1 className=""><small>{userId}</small></h1>
      <h1 className="font-bold text-xl">{title}</h1>
      <h1>{body}</h1>
    </div>
  );
};

export default ShopDetails;
