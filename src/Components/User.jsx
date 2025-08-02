import { Link } from "react-router-dom";
const User = ({ user }) => {
  const { name, phone, website } = user;
  return (
    <div className="p-4 rounded-2xl border space-y-2">
      <h6 className="text-xl font-bold">Name: {name}</h6>
      {/* <p>Email: {email}</p> */}
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <Link
        to={`/user/${user.id}`} // <-- fixed from './user/...'
        className="text-white py-2 px-6 shadow-2xl border rounded-2xl bg-gray-700 "
      >
        Show Details
      </Link>
    </div>
  );
};

export default User;
