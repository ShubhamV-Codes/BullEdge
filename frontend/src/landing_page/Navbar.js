import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg  border-bottom fixed-top " style={{ backgroundColor: "#fff" }}>
            <div className="container">
                <Link className="navbar-brand" to="/"><img src="media/images/bull-market (1).png" style={{ width: "40px", height: "30px" }} alt="BullEdge_logo" /> <b className="pe-5">BullEdge</b></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <form className="d-flex" role="search">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active ms-4" aria-current="page" to="/signup">Signup</Link>
                            </li>     
                            <li className="nav-item">
                                <Link className="nav-link active ms-4" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active  ms-4" aria-current="page" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active  ms-4" aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active  ms-4" aria-current="page" to="/support">Support</Link>
                            </li>
                        </ul>
                    </form>

                </div>
                
            </div>
        </nav>


    );
}

export default Navbar;