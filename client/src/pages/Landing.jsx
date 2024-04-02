import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";

const Landing = () => {
  const checkLogoutStatus = () => {
    let newState = localStorage.getItem("loggedout") === "true";
    return newState;
  };
  const userData = useOutletContext();
  const [loggedout, setLoggedout] = useState(checkLogoutStatus());
  const navigate = useNavigate();

  const logoutUser = async () => {
    localStorage.setItem("loggedout", "true");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
    navigate("/");
    location.reload();
  };

  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            nesciunt inventore ipsum animi rem corrupti aspernatur eius
            laudantium autem adipisci.
          </p>
          <Link to="/register" className="btn register-link">
            {userData && loggedout ? (
              "Register"
            ) : (
              <Link to="/dashboard" style={{ color: "white" }}>
                Go Back to DashBoard
              </Link>
            )}
          </Link>
          {userData && loggedout ? (
            <button
              type="button"
              className="btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              "Login / Demo User"
            </button>
          ) : (
            <button type="button" className="btn" onClick={logoutUser}>
              Logout
            </button>
          )}
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
