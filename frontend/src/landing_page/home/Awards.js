import React from 'react';
function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 " style={{height:"90%"}}>
                    <img src="media/images/largestBroker.svg" alt="Largest Broker" className="img-fluid" />
                </div>

                <div className="col-md-6 p-2">
                    <h1 className="mb-4">Largest Stock Broker in India</h1>
                    <p className="mb-3">2+ Million BullEdge clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity Derivatives</li>
                                <li>Currency Derivatives</li>
                                <li>Index Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-12">
                            <ul>
                                <li>Stock & IPOs</li>
                                <li>Direct Mutual Funds</li>
                                <li>Bonds and Govt. Securities</li>
                                <li>Exchange-Traded Funds (ETFs)</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="Press logos" className="img-fluid mt-3" style={{width:"80%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;