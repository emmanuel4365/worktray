import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Landing = () => {
  const userData = useOutletContext();
  const [loggedout, setLoggedout] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let localStorageValue = localStorage.getItem("loggedout") === "false";
    if (localStorageValue) {
      setLoggedout(false);
    }
  }, []);

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
            An online job tracking software that takes the statistics of jobs
            created in terms of status or type and presents them with user
            friendly charts...
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
              Login / Demo User
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
