import React from 'react'

function Hero() {
    return (  
        <section className="container-fluid support-hero">
           
            <div className="row "><h2 className="text-center" style={{textDecoration:"underline", marginTop:"25px"}}><i>Bull-Support</i></h2></div>
            <div className="row p-5">
                <div className="col-md-6 col-12 mt-2">
                    <h2 className="fs-4 mb-4 search-heading">
                        Search for an answer or browse help topics to create a ticket
                    </h2>
                    <input 
                        type="text" 
                        placeholder="Eg: how do I activate F&O, why is my order getting rejected..." 
                        className="form-control search-input mb-4"
                    />
                    <div className="help-links">
                        <a href="/not-available" className="help-link">Track account opening</a>
                        <a href="/not-available" className="help-link">Track segment activation</a>
                        <a href="/not-available" className="help-link">Intraday</a>
                        <a href="/not-available" className="help-link">margins</a>
                        <a href="https://bull-edge-kite.vercel.app" className="help-link">Kite user manual</a>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-5 col-12 mt-3">
                    <h2 className="fs-4 mb-4 featured-heading">Featured</h2>
                    <ol className="featured-list">
                        <li className="mb-3">
                            <a href="/not-available" className="featured-link">
                                Current Takeovers and Delisting - January 2024
                            </a>
                        </li>
                        <li>
                            <a href="/not-available" className="featured-link">
                                Latest Intraday leverages - MIS & CO
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;