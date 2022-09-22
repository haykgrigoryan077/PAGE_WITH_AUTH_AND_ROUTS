import { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { LoginContext } from "../../LoginPage";
import "./style.css";

const Layout = () => {
  const location = useLocation()
  console.log(location.pathname);
  const context = useContext(LoginContext);
  console.log(context);
  const isHomePage = location.pathname.slice()
  return (
    <div className="layoutWrapper">
      <div className="leftBar">
        <NavLink to="/home/blogs" className='navLink'>Blogs</NavLink>
        <NavLink to="/home/about" className='navLink'>About</NavLink>
        <NavLink to="/home/contact" className='navLink'>Contact</NavLink>
      </div>
      <main className="main">
        {location.pathname.length < 7 && 
        <div className="homePage">
          <h1 className="homePageTitle">HomePage</h1>
          <h1>In This Page You Can Find Products With Its Descriptions</h1>
        </div>}
        {<Outlet />}
      </main>
    </div>
  );
};

export default Layout;
