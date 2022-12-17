import { NavLink } from "react-router-dom";
import "../styles/common.css";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav className="primary-nav">
      <NavLink to="/" style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/Students" style={navLinkStyles}>
        Students
      </NavLink>
      <NavLink to="/projects" style={navLinkStyles}>
        Projects
      </NavLink>
      <NavLink to="/Gallery" style={navLinkStyles}>
        Gallery
      </NavLink>
      <NavLink to="/Resume" style={navLinkStyles}>
        Resume
      </NavLink>
      <NavLink to="/about" style={navLinkStyles}>
        About
      </NavLink>
    </nav>
  );
};
