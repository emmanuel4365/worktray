// import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
// import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <a href="/">
      <img src={logo} alt="Worktray Logo" className="logo" />
      {/* Worktray */}
    </a>
  );
};

export default Logo;
