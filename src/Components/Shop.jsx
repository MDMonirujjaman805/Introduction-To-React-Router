import { Link } from "react-router-dom";
const Shop = ({shop}) => {
    const {title,body,userId}=shop;
    return (
        <div className="border p-3 rounded-2xl ">
            <p><small><strong>User Id: {userId}</strong></small></p>
            <h3 className="text-xl font-bold line-clamp-1">Title: {title}</h3>
            <p className="line-clamp-6">Body: {body}</p>
            <Link to={`/shop/${userId}`} className="text-white py-2 px-6 shadow-2xl border rounded-2xl bg-gray-700 text-center"><button> Shop Details</button>
            </Link>
        </div>
    );
};

export default Shop;