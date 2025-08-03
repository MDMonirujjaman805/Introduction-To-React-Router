import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Components/Shops.jsx";
import Home from "./Components/Home.jsx";
import Users from "./Components/Users.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import ErrorPage from "./Components/ ErrorPage.jsx";
import Card from "./Components/Card.jsx";
import AllCard from "./Components/AllCard.jsx";
// import Address from "./Components/Address.jsx";
import UserDetails from "./Components/UserDetails.jsx";
import ShopDetails from "./Components/ShopDetails.jsx";
import Posts from "./Components/Posts.jsx";
import PostDetails from "./Components/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/shop",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Shop></Shop>,
      },
      {
        path: "shop/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <ShopDetails></ShopDetails>,
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
      {
        path: "user/:userId", // <-- fix here
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails />,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "posts/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <PostDetails />,
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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
