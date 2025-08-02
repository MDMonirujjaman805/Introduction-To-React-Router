import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-9/12 mx-auto  mt-56">
      <div
        className="bg-gray-300 shadow-2xl p-20 text-center rounded-4xl"
        id="error-page"
      >
        <h1 className="text-5xl font-bold">😩 Oops!</h1>
        <p className="font-bold pt-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="font-bold">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
