import React from "react";

function LeftSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <>
      <style>{`
        .left-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
          margin-top: 3rem;
          transition: all 0.3s ease;
        }

        .left-section:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
        }

        .left-section img {
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .product-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .product-description {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .learn-more {
          color: #e07f47;
          font-weight: 600;
          font-size: 1.05rem;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .learn-more:hover {
          color: #c86530;
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .left-section {
            padding: 2rem 1rem;
            text-align: center;
          }

          .product-title {
            font-size: 1.6rem;
          }

          .product-description {
            font-size: 1rem;
          }

          .learn-more {
            display: inline-block;
            margin-top: 0.5rem;
          }
        }
      `}</style>

      <section className="container">
        <div className="left-section">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 col-12 mb-4 mb-md-0 text-center">
              <img
                src={imageURL}
                className="img-fluid"
                alt={productName}
                loading="lazy"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-5 col-12 offset-md-1 text-center text-md-start">
              <h1 className="product-title">{productName}</h1>
              <p className="product-description">{productDescription}</p>
              <a href={learnMore} className="learn-more">
                Check it out →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LeftSection;
