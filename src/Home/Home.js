import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    // <div >
    //     <div className="mb-2 center">
    //         <Link to="/Singleplayer">
    //             <Button variant="primary" size="lg" className="button">
    //                 Single Play
    //             </Button>
    //         </Link>
    //         <br/>
    //         <Link to="/Multiplay">
    //             <Button variant="primary" size="lg" className="button">
    //                 Multi Play
    //             </Button>
    //         </Link>
    //     </div>
    // </div>

    <div class="container-fluid vh-100 ">
      <div class="row  h-10">
        <div style={{ backgroundColor: "red" }} class="col-md-12">
          logo
        </div>
      </div>
      <div class="row h-80 align-items-center">
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
                  Single Play
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
                  Multi Play
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-3"></div>
      </div>
      <div class="row bottom-bar  h-10">
        <div class="col-md-12 ">
          <div class="row ">
            <div class="col-md-3 ">Terms & conditions</div>
            <div class="col-md-3 ">Privacy policy</div>
            <div class="col-md-3 ">Contact us</div>
            <div class="col-md-3 ">Contact us</div>
          </div>
          Allrigh
        </div>
      </div>
    </div>
  );
};

export default Home;
