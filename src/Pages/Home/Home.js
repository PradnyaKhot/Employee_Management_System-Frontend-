import React from "react";
import "./css/home.css";

export default function Home() {
    return (
        <div>
            <header className="header">

                <div className="overlay"></div>


                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src="https://res.cloudinary.com/hunter-corp/video/upload/v1649910372/PromoVideo_fjcip7.mp4" type="video/mp4" />
                </video>


                <div className="container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100 text-white">
                            <h1 className="display-3">Employee Managment System</h1>
                            <p className="lead mb-0">Managging the employees</p>
                        </div>
                    </div>
                </div>
            </header>
            {/* Service Section Start */}
            <section className="god-section service-section">
                <div className="container">
                    <div className="row d-flex service-info">
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="">
                                        <i className="fa-solid fa-list-check"></i>
                                    </span>
                                </div>
                                <h3 className="mb-4">Managment</h3>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="">
                                        <i className="fa-solid fa-briefcase"></i>
                                    </span>
                                </div>
                                <h3 className="mb-4">Employee</h3>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="">
                                        <i className="fa-solid fa-building-user"></i>
                                    </span>
                                </div>
                                <h3 className="mb-4">Department</h3>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex">
                            <div className="align-self-stretch box p-4 text-center">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="">
                                        <i className="fa-solid fa-users"></i>
                                    </span>
                                </div>
                                <h3 className="mb-4">Users</h3>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Service Section End */}


        </div>
    );
}