import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 bg-gray-200">
      <h1 className="text-center text-4xl font-bold py-3 ">
        Wellcome to Out Website.
      </h1>
      <div className="flex justify-between items-center  py-2 ">
        <Link to="./logo" className="text-2xl font-bold cursor-pointer">
          Monir
        </Link>
        <div className="space-x-5 cursor-pointer font-bold">
          <Link to="./home">Home</Link>
          <Link to="./shop">Shop</Link>
          <Link to="./users">Users</Link>
          <Link to="./about">About Us</Link>
          <Link to="./contact">Contact me</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
