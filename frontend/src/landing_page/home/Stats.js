import React from 'react'
function Stats() {
    return (
        <div className="container p-2">
            <div className="row p-3">
                <div className="col-md-6 col-12 pt-5 pb-5 pr-5">
                    <h1 className="fs-2 mb-5">Trust With Confidence</h1>

                    <h2 className="fs-4"> Customer-First Always </h2>
                    <p className="text-muted"> That's Why 13 Million Customers Trust BullEdge with $766 Million Worth of Equity Investments</p>

                    <h2 className="fs-4"> No Spam or Gimmicks </h2>
                    <p className="text-muted">No gimmicks, spam, "gammification", or annoying push notifications. High Quality apps that you use at your pace, the way you like.</p>

                    <h2 className="fs-4"> The BullEdge Universe </h2>
                    <p className="text-muted">Not Just an app, but a whole ecosystem. Our Investments in 30+ Fintech startups offer you tailored services specific to you needs.</p>

                    <h2 className="fs-4"> Do Better with Money  </h2>
                    <p className="text-muted"> With Initiatives like Nudes and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>


                </div>
                <div className="col-md-6 col-12 ">
                    <img src="media/images/ecosystem.png" style={{ width: "90%" }} />
                    <div className="text-center">
                        <a href="/product" style={{ textDecoration: "none" }} className="mx-5">Explore Our Product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="https://bull-edge-kite.vercel.app" style={{ textDecoration: "none" }}>Try Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;