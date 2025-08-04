import { Link, useNavigate } from "react-router-dom";
const Shop = ({shop}) => {
    const navigate = useNavigate();
    const handleShowButton = ()=> {
        // navigate( +1 )
        navigate(`/shop/${id}`)
    }
    const {title,body,id}=shop;
    return (
        <div className="border p-3 rounded-2xl ">
            <p><small><strong>User Id: {id}</strong></small></p>
            <h3 className="text-xl font-bold line-clamp-1">Title: {title}</h3>
            <p className="line-clamp-6">Body: {body}</p>
            <Link to={`/shop/${id}`} className="text-white py-2 px-6 shadow-2xl border rounded-2xl bg-gray-700 text-center "><button> Shop Details</button>
            </Link> 
            <br />
            <button className="mt-4 py-2 px-6 shadow-2xl bg-gray-700 rounded-2xl text-white cursor-pointer" onClick={handleShowButton}>Show Details in Button</button>
        </div>
    );
};

export default Shop;