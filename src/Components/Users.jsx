import { useLoaderData } from "react-router-dom";
import User from "./User";
const Users = () => {
  const users = useLoaderData();
  return (
    <div className="w-10/12 mx-auto bg-gray-100 my-20 shadow-2xl p-5 rounded-2xl">
      <h4 className="text-xl font-bold">Users: {users.length}</h4>
      <h1 className="text-3xl font-bold my-3">This is Users Info Section</h1>
      <div className="md:grid grid-cols-2 shadow-2xl bg-gray-200 gap-5 ">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
