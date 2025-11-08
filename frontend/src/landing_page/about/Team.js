import React from 'react'
function Team() {
    return (
        <div className="container">
            <h3 className="p-4 text-center">Profile</h3>
            <div className="row">
            <div className="col-md-5 col-12">
            <div className=" my-img"> <img src="media/images/MyPhoto.jpg" alt="Shubham Vishwakarma"
            /></div>
            <h5 className="mt-3 mb-3 text-center">Shubham Vishwakarma</h5>
            <p className="text-muted text-center mb-5">Founder,CEO</p>
            </div>

            <div className="col-md-7 col-12 p-3">
            <p>Shubham is pursuing a Bachelor’s degree in Computer Science Engineering and is currently in his third year. He is passionate about technology, product design, and building solutions that simplify complex problems. </p>

            <p>Beyond academics, he maintains a strong focus on personal growth and discipline through regular gym training and competitive badminton. His approach to both work and life is guided by consistency, focus, and a commitment to continuous improvement.</p>
           </div>
           </div>

        </div>
    );
}

export default Team;