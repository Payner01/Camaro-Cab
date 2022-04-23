import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Camaro Cab</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="about" style={{ textDecoration: "none", color: "white" }}>
            <b>About Us</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="schedule" style={{ textDecoration: "none", color: "white" }}>
            <b>Schedule</b>
          </Link>
        </li>
        
      </ul>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        
    </div>
  );
};

export default Navbar;
