import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { IoIosPeople, IoIosPerson } from "react-icons/io";

const Home = () => {
  return (
    <div class="container-fluid vh-100 ">
      <div class="row  h-10">
        <div style={{ backgroundColor: "red" }} class="col-md-12">
          logo
        </div>
      </div>
      <div class="row h-20 align-items-center ">
        <div class="col-md-12  justify-content-center">
            <div class="penguin">
              <div class="penguin-bottom">
                <div class="right-hand"></div>
                <div class="left-hand"></div>
                <div class="right-feet"></div>
                <div class="left-feet"></div>
              </div>
              <div class="penguin-top">
                <div class="right-cheek"></div>
                <div class="left-cheek"></div>
                <div class="belly"></div>
                <div class="right-eye">
                  <div class="sparkle"></div>
                </div>
                <div class="left-eye">
                  <div class="sparkle"></div>
                </div>
                <div class="blush-right"></div>
                <div class="blush-left"></div>
                <div class="beak-top"></div>
                <div class="beak-bottom"></div>
            </div>
          </div>
          <div className="Welcome-text">Welcome to Latix </div>
        </div>
      </div>
      <div class="row h-60 align-items-center">
        <div class="col-md-3"></div>
        <div class="col-md-6 ">
          <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
              <Link to="/Singleplayer">
                <button
                  variant="primary"
                  size="lg"
                  className="btnGame learn-more home-button"
                >
                  <IoIosPerson className="play-icon" />
                  <div className="btn-text"> Single Play </div>
                </button>
              </Link>
            </div>
          </div>
          <div class="row pt-4 ">
            <div class="col-md-12 d-flex justify-content-center">
              <Link to="/Multiplay">
                <button
                  variant="primary"
                  size="lg"
                  className="btnGame learn-more home-button"
                >
                  <IoIosPeople className="play-icon" />
                  <div className="btn-text"> Multi Play </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row bottom-bar  h-10">
        <div class="col-md-12 ">
          <div class="row justify-content-center mt-3">
            <div class="col-md-4 d-flex justify-content-center bottom-text">
              Terms & conditions
            </div>
            <div class="col-md-4 d-flex justify-content-center bottom-text">
              Privacy policy
            </div>
            <div class="col-md-4 d-flex justify-content-center bottom-text">
              Contact us
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-md-12 d-flex justify-content-center">
              Made With ❤️ by USJ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
