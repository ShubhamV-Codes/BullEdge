import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className="row mt-5 p-2">
                <h1 className="fs-1 text-center mt-3">Open a free demat and trading account online</h1>
                <h5 className="text-muted text-center mt-4 mb-4 fs-5">Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
            </div>
            <div className="row mt-3">
                <div className="col-md-1"></div>
                <div className="col-md-5 col-12 p-3">
                <img src="media/images/account_open.svg"/>
                </div>

                <div className="col-md-5 col-12">
                  <h1 className="text-center fs-2">
                    Signup Now </h1>  
                </div>
                 <div className="col-md-1"></div>
            </div>


        </div>
     );
}

export default Hero;