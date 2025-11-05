import React from 'react'
function Education() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <img src="media/images/education.svg" style={{ width: "70%" }} />
                </div>
                <div className="col-md-6 col-12 p-5">
                    <h1 className="fs-2 mb-5">Free and open market education</h1>
                    <p className="mb-1"> Varsity, the largest online stock market education book in the world<br />covering everything from the basics to advanced trading.</p>
                    <a href="" style={{ textDecoration: "none" }} className="mb-5"> Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className="mt-4 mb-1"> Trading Q&A, the most active Trading and investment community in <br />india for all your market related queries.</p>
                    <a href="" style={{ textDecoration: "none" }} className="mb-5"> Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
            </div>
        </div>
    );
}

export default Education;