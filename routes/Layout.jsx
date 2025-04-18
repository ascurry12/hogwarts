import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="side-bar">
        <ul>
          <li className="bar-link" key="home-button">
            <Link style={{ color: "white"}} to="/">
              Home
            </Link>
          </li>
          <li className="bar-link" key="create-button">
            <Link style={{ color: "white"}} to="/student/create">
              Enroll a Student
            </Link>
          </li>
          <li className="bar-link" key="directory-button">
            <Link style={{ color: "white"}} to="/student/directory">
              Student Directory
            </Link>
          </li>
        </ul>  
        <img src="../src/assets/goldensnitch.gif"></img>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
