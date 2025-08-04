import { useLoaderData, useNavigate } from "react-router-dom";

const ShopDetails = () => {
  const navigate = useNavigate()
  const shopDetails = useLoaderData();
  const { title, body,id} = shopDetails;
  const handleGoBackButton = ()=> {
    navigate(-1)
  }
  return (
    <div className="w-6/12 mx-auto bg-gray-100 shadow-2xl mb-5 p-5 text-center ">
      <h1 className=""><small>{id}</small></h1>
      <h1 className="font-bold text-xl">{title}</h1>
      <h1>{body}</h1>
        <button className="mt-4 py-2 px-6 shadow-2xl bg-gray-700 rounded-2xl text-white cursor-pointer" onClick={handleGoBackButton}>Go Back</button>
    </div>
  );
};

export default ShopDetails;
