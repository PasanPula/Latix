import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { IoIosPeople, IoIosPerson } from "react-icons/io";

const Home = () => {
  return (
    <>
    <div className="container-fluid vh-100 ">
      <div className="row  h-10">
        <div style={{ backgroundColor: "red" }} className="col-md-12 position-front">
          logo
        </div>
      </div>
      <div className="row h-20 align-items-center ">
        <div className="col-md-12  justify-content-center">
            <div className="penguin">
              <div className="penguin-bottom">
                <div className="right-hand"></div>
                <div className="left-hand"></div>
                <div className="right-feet"></div>
                <div className="left-feet"></div>
              </div>
              <div className="penguin-top">
                <div className="right-cheek"></div>
                <div className="left-cheek"></div>
                <div className="belly"></div>
                <div className="right-eye">
                  <div className="sparkle"></div>
                </div>
                <div className="left-eye">
                  <div className="sparkle"></div>
                </div>
                <div className="blush-right"></div>
                <div className="blush-left"></div>
                <div className="beak-top"></div>
                <div className="beak-bottom"></div>
            </div>
          </div>
          <div className="Welcome-text position-front">Welcome to Latix </div>
        </div>
      </div>
      <div className="row h-60 align-items-center">
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <Link to="/Singleplayer">
                <button
                  variant="primary"
                  size="lg"
                  className="home-button"
                >
                  <IoIosPerson className="play-icon" />
                  <br></br>
                  <div className="btn-text"> Single Play </div>
                </button>
              </Link>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <Link to="/Multiplay">
                <button
                  variant="primary"
                  size="lg"
                  className="home-button"
                >
                  <IoIosPeople className="play-icon" />
                  <br></br>
                  <div className="btn-text"> Multi Play </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row bottom-bar position-front h-10">
        <div className="col-md-12 ">
          <div className="row justify-content-center mt-2">
            <div className="col-md-4 d-flex justify-content-center bottom-text">
              Terms & conditions
            </div>
            <div className="col-md-4 d-flex justify-content-center bottom-text">
              Privacy policy
            </div>
            <div className="col-md-4 d-flex justify-content-center bottom-text">
              Contact us
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-md-12 d-flex justify-content-center">
              Made With ❤️ by USJ
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
