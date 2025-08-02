import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  const { name, email, address } = user;
  const { street, suite, city, zipcode, geo } = address || {};
  const { lat, lng } = geo || {};

  return (
    <div className="p-4 bg-gray-100 rounded-xl w-6/12 mx-auto text-center">
      <h2 className="text-2xl font-bold">User Details</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <h3 className="text-xl mt-4 font-semibold">📍 Address Info</h3>
      <p>
        <strong>Street:</strong> {street}
      </p>
      <p>
        <strong>Suite:</strong> {suite}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>Zipcode:</strong> {zipcode}
      </p>
      <h4 className="text-lg mt-4 font-semibold">🧭 Geo Coordinates</h4>
      <p>
        <strong>Latitude:</strong> {lat}
      </p>
      <p>
        <strong>Longitude:</strong> {lng}
      </p>
    </div>
  );
};

export default UserDetails;
