import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './Home.css'

const Home = ()=>{
    return(
        <div >
            <div className="mb-2 center">
                <Link to="/SinglePlayer">
                    <Button variant="primary" size="lg" className="button">
                        Single Play
                    </Button>
                </Link>
                <br/>
                {/* <Link to="/Multi_play">
                    <Button variant="primary" size="lg" className="button">
                        Multi Play
                    </Button>
                </Link> */}
            </div>
            {/* <Link to="/Single_play">Single Play</Link> */}
        </div>
    );
}

export default Home;