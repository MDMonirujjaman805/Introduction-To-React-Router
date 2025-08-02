import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
