import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shop.jsx";
import Home from "./Components/Home.jsx";
import Users from "./Components/Users.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import ErrorPage from "./Components/ ErrorPage.jsx";
import Card from "./Components/Card.jsx";
import AllCard from "./Components/AllCard.jsx";
// import Address from "./Components/Address.jsx";
import UserDetails from "./Components/UserDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/logo",
        element: <Card></Card>,
      },
      {
        path: "/home",
        element: <AllCard></AllCard>,
      },
      {
        path: "user/:userId", // <-- fix here
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
