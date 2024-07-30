import React from 'react';
// import { Link } from 'react-router-dom';

const SideNavbar = () => {
   

    return (
        <>
            <div>
                <ul className="list-unstyled sidenavbardiv ps-4 mt-4">
                    {/* Home section */}
                    <li  className="fw-bold" data-bs-dismiss="offcanvas">
                        HOME
                    </li>
                    <hr />

                    {/* About us section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                ABOUT US
                            </li>
                        </div>
                        <hr />
                        {/* <div >
                                <li className="ps-4" data-bs-dismiss="offcanvas">Vision</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Mission</li>
                            <hr />
                        </div> */}
                    </div>

                    {/* Industries section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="text-decoration-none fw-bold">
                                <span className='industriesLink'>INDUSTRIES</span>
                            </li>
                        </div>
                        <hr />
                        {/* <div >
                                <li className="ps-4" data-bs-dismiss="offcanvas">Manufacturing & Automotive</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Energy & Utilities</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Banking & Insurance Services</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Healthcare & Life Sciences</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Media & Telecom</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Airline / Travel / Logistics</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Consumer & Retail</li>
                            <hr />
                        </div> */}
                    </div>

                    {/* Services section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                SERVICES
                            </li>
                        </div>
                        <hr />
                        {/* <div >
                                <li className="ps-4" data-bs-dismiss="offcanvas">Customer Relationship Management (CRM)</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Digital Transformation Services</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Security Architecture</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Application Services</li>
                            <hr />
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <li className="text-decoration-none ps-4">Cloud</li>
                                </div>
                                <hr />
                                <div >
                                        <li className="ps-4" data-bs-dismiss="offcanvas">Cloud Services</li>
                                    <hr />
                                        <li className="ps-4" data-bs-dismiss="offcanvas">AWS Services</li>
                                    <hr />
                                        <li className="ps-4" data-bs-dismiss="offcanvas">Microsoft Cloud Services</li>
                                    <hr />
                                        <li className="ps-4" data-bs-dismiss="offcanvas">Microsoft 365</li>
                                    <hr />
                                </div>
                            </div>
                                <li className="ps-4" data-bs-dismiss="offcanvas">Data Services</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Internet Of Things</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Business Assurance & Testing</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Enterprise Portal</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Free POC & POT</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Software Sales</li>
                            <hr />
                        </div> */}
                    </div>

                    {/* Solutions section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="text-decoration-none fw-bold">
                                <span className='solutionLink'>SOLUTIONS</span>
                            </li>
                        </div>
                        <hr />
                        {/* <div >
                                <li className="ps-4" data-bs-dismiss="offcanvas">Robotic Automation Process</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Oracle Cloud</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">SAP</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">CRM</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Mobility</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Business Process Management</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">DevOps</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Service Oriented Architecture</li>
                            <hr />
                        </div> */}
                    </div>

                    {/* Contact Us section */}
                    <li  className="fw-bold" data-bs-dismiss="offcanvas">
                        CONTACT US
                    </li>
                    <hr />

                    {/* CSR section */}
                    <li  className="fw-bold" data-bs-dismiss="offcanvas">
                        CSR
                    </li>
                    <hr />

                    {/* Careers section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                CAREERS
                            </li>
                        </div>
                        <hr />
                        {/* <div >
                                <li className="ps-4" data-bs-dismiss="offcanvas">Hyderabad</li>
                            <hr />
                                <li className="ps-4" data-bs-dismiss="offcanvas">Bangalore</li>
                            <hr />
                        </div> */}
                    </div>
                </ul>
            </div>
        </>
    );
};

export default SideNavbar;
