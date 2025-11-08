import React from 'react'
function Pricing
    () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-12 p-5">
                    <h1 className="fs-2 mb-3"> Unbeatable Pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges.</p>
                    <a href="/not-available" style={{ textDecoration: "none" }}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
                <div className="col-md-2 "></div>

                <div className="col-md-6 col-12 p-5">
                    <div className="row text-center">
                        <div className="col p-2 border-end">
                            <h1 className="mb-3"> ₹0 </h1>
                            <p>Free equity delivery and <br/> direct mutual funds </p>
                        </div>
                        <div className="col p-2 ">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&0</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Pricing;