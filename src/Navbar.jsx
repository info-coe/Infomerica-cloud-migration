import React from 'react';
import InfoLogo from './Images/logo.png';


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top scrolled">
                <div className="container-fluid">
                    <div className="d-flex align-items-center gap-4 ps-lg-5 ms-lg-5 ps-2">
                        <span className='toggle' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-text-left"></i></span>
                        <div className="d-none d-lg-block">
                            <img src={InfoLogo} alt="Logo" width="120" height="60"/>
                        </div>
                    </div>
                    {/* <div className="collapse navbar-collapse d-flex justify-content-center d-none d-lg-block" id="navbarNavDropdown">
                        <ul className="navbar-nav d-flex gap-3">
                            <li className="nav-item">
                                HOME
                            </li>
                            <li className="nav-item dropdown">
                              
                                ABOUT US
                               
                            </li>
                            <li className="nav-item dropdown" >
                                INDUSTRIES
                               
                            </li>
                            <li className="nav-item dropdown" >
                                SERVICES
                               
                            </li>
                            <li className="nav-item dropdown " >
                               SOLUTIONS
                                
                            </li>
                            <li className="nav-item">
                                CONTACT US
                            </li>
                            <li className="nav-item">
                                CSR
                            </li>
                            <li className="nav-item dropdown" >
                                CAREERS
                               
                            </li>
                        </ul>
                    </div> */}
                </div>
            </nav>

           
        </>
    );
};

export default Navbar;
