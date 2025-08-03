import { useLoaderData } from "react-router-dom";
import Shop from "./Shop";

const Shops = () => {
  const shops = useLoaderData();
  return (
    <div className="w-8/12 mx-auto bg-gray-100 my-20 shadow-2xl p-5 rounded-2xl">
      <h1 className="text-3xl font-bold my-3 text-center">
        This is Shop Section.
      </h1>
      <h6 className="text-center mb-5"><strong>All Product:{shops.length}</strong></h6>
      <div className="md:grid grid-cols-2 shadow-2xl bg-gray-200 gap-5 ">
        {shops.map((shop) => (
          <Shop key={shop.id} shop={shop}></Shop>
        ))}
      </div>
    </div>
  );
};

export default Shops;
