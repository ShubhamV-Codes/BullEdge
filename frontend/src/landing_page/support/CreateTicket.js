import React from 'react'
function CreateTicket() {
    return ( 
        <div className="container">

            <div className="row"><h1 className="fs-2 p-4 mt-5 mb-3 text-center" >To create a ticket, select a relevant topic</h1></div>
             <div className="row">
                <div className="col-md-4 col-12 text-center p-3 border-end">
                  <h3 className="fs-4 mb-4"><i class="fa-solid fa-square-plus"></i>&nbsp;Account Opening</h3> 
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Online Account Opening</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Charges at BullEdge</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Offline Account Opening</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">NRI Account Opening</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">BullEdge SBI Bank</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Getting Started</a></div>
                </div>

                <div className="col-md-4 col-12 text-center p-3 border-end">
                  <h3 className="fs-4 mb-4"><i class="fa-solid fa-user"></i>&nbsp;Your BullEdge Account</h3> 
                  <div className="mt-3"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Login Credentials</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="https://vistara-lime.vercel.app">Vistara</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">DP ID and bank details</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Your Profile</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Transfer and conversion of shares</a><br/></div>
                </div>

                <div className="col-md-4 col-12 text-center p-3">
                  <h3 className="fs-4 mb-4"><i class="fa-solid fa-chart-simple"></i>&nbsp;Your BullEdge Graphs</h3> 
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Margin/leverge, Product and Order types</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Trading FAQs</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Corporate Actions</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Sentinel</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">Stockesports+</a><br/></div>
                  <div className="mt-1"><a className=" support-links" style={{textDecoration:"none", color:"#000"}} href="/">GTT</a></div>
                </div>
            </div>
        </div>
        
        
     );
}

export default CreateTicket;