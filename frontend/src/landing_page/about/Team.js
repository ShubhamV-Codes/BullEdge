import React from "react";

function Team() {
  return (
    <>
      <style>{`
        .team-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%);
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          padding: 4rem 2rem;
          margin-top: 3rem;
        }

        .team-heading {
          text-align: center;
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 3rem;
          letter-spacing: -0.5px;
        }

        .team-img {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .team-img img {
          width: 260px;
          height: 260px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #0d6efd;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .team-img img:hover {
          transform: scale(1.03);
        }

        .team-name {
          text-align: center;
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.5rem;
          color: #1a1a1a;
        }

        .team-role {
          text-align: center;
          color: #6c757d;
          font-size: 1rem;
          margin-bottom: 2rem;
        }

        .team-content {
          color: #555;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        .team-content p {
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .team-heading {
            font-size: 1.75rem;
          }

          .team-img img {
            width: 200px;
            height: 200px;
          }

          .team-content {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .team-section {
            padding: 2rem 1rem;
          }

          .team-heading {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section className="container">
        <div className="team-section">
          <h3 className="team-heading">Profile</h3>

          <div className="row align-items-center">
            {/* Left Side: Image */}
            <div className="col-md-5 col-12 mb-4 mb-md-0">
              <div className="team-img">
                <img
                  src="media/images/MyPhoto.jpg"
                  alt="Shubham Vishwakarma"
                />
              </div>
              <h5 className="team-name">Shubham Vishwakarma</h5>
              <p className="team-role">Founder & CEO</p>
            </div>

            {/* Right Side: Description */}
            <div className="col-md-7 col-12 team-content">
              <p>
                Shubham is pursuing a Bachelor’s degree in Computer Science Engineering
                and is currently in his third year. He is passionate about technology,
                product design, and building solutions that simplify complex problems.
              </p>

              <p>
                Beyond academics, he maintains a strong focus on personal growth and
                discipline through regular gym training and competitive badminton. His
                approach to both work and life is guided by consistency, focus, and a
                commitment to continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
