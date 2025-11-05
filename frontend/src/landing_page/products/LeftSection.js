import React from "react";

function LeftSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 col-12 p-3">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        <div className="col-1"></div>
        <div className="col-md-5 col-12 p-5 mt-5 text-center">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-3 text-center">
            <a
              href={learnMore}
              style={{
                marginRight: "50px",
                textDecoration: "none",
                color: "#e07f47ff",
              }}
              className="text-center"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
