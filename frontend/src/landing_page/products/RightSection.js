import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <>
      <style>{`
        .right-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 3rem 2rem;
          margin-top: 3rem;
          transition: all 0.3s ease;
        }

        .right-section:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
        }

        .right-section img {
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
          .right-section {
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
        <div className="right-section">
          <div className="row align-items-center">
            {/* Left Content (Text) */}
            <div className="col-md-5 col-12 text-center text-md-start">
              <h1 className="product-title">{productName}</h1>
              <p className="product-description">{productDescription}</p>
              <a href={learnMore} className="learn-more">
                Check it out →
              </a>
            </div>

            {/* Spacer for layout symmetry */}
            <div className="col-md-1"></div>

            {/* Right Image */}
            <div className="col-md-6 col-12 text-center mt-4 mt-md-0">
              <img
                src={imageURL}
                className="img-fluid"
                alt={productName}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RightSection;
