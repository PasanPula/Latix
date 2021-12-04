import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


export default function MultiPlayerMode({HandleShowCheckBox}) {

   

     const  createButtonClick = () =>
    {
        HandleShowCheckBox(true);
    }

    return (
        <div>
             <div >
            <div className="mb-2 center">
                <Link to="/Multiplay/Login">
                    <Button variant="primary" size="lg" className="button">
                        Join
                    </Button>
                </Link>
                <br/>
                <Link to="/Multiplay/login">
                    <Button onClick={createButtonClick} variant="primary" size="lg" className="button">
                        Create
                    </Button>
                </Link>
            </div>
        </div>
        </div>
    )
}
