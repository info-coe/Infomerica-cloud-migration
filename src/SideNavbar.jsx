// import React from 'react';

// const SideNavbar = () => {
   

//     return (
//         <>
//             <div>
//                 <ul className="list-unstyled sidenavbardiv ps-4 mt-4">
//                     <li  className="fw-bold" data-bs-dismiss="offcanvas">
//                         HOME
//                     </li>
//                     <hr />

//                     <div>
//                         <div className="d-flex justify-content-between align-items-center">
//                             <li className="fw-bold" data-bs-dismiss="offcanvas">
//                                 ABOUT US
//                             </li>
//                         </div>
//                         <hr />
                       
//                     </div>

//                     <div>
//                         <div className="d-flex justify-content-between align-items-center">
//                             <li className="text-decoration-none fw-bold">
//                                 <span className='industriesLink'>INDUSTRIES</span>
//                             </li>
//                         </div>
//                         <hr />
                       
//                     </div>

//                     <div>
//                         <div className="d-flex justify-content-between align-items-center">
//                             <li className="fw-bold" data-bs-dismiss="offcanvas">
//                                 SERVICES
//                             </li>
//                         </div>
//                         <hr />
                       
//                     </div>

//                     <div>
//                         <div className="d-flex justify-content-between align-items-center">
//                             <li className="text-decoration-none fw-bold">
//                                 <span className='solutionLink'>SOLUTIONS</span>
//                             </li>
//                         </div>
//                         <hr />
                      
//                     </div>

//                     <li  className="fw-bold" data-bs-dismiss="offcanvas">
//                         CONTACT US
//                     </li>
//                     <hr />

//                     <li  className="fw-bold" data-bs-dismiss="offcanvas">
//                         CSR
//                     </li>
//                     <hr />

//                     <div>
//                         <div className="d-flex justify-content-between align-items-center">
//                             <li className="fw-bold" data-bs-dismiss="offcanvas">
//                                 CAREERS
//                             </li>
//                         </div>
//                         <hr />
                       
//                     </div>
//                 </ul>
//             </div>
//         </>
//     );
// };

// export default SideNavbar;


import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const SideNavbar = () => {
    // const data = props.data;
    const [showChilds, setShowChilds] = useState({ about: false });

    const toggleChilds = (section, event) => {
        event.stopPropagation();  // Prevent triggering on link click
        setShowChilds(prevState => ({ ...prevState, [section]: !prevState[section] }));
    };

    return (
        <>
            <div>
                <ul className="list-unstyled sidenavbardiv ps-4 mt-4">
                    {/* Home section */}
                    <li >
                        <a href="https://infomericainc.com/"  target="blank" data-bs-dismiss="offcanvas" className="text-decoration-none fw-bold">HOME</a>
                    </li>
                    <hr />

                    {/* About us section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold">
                                <a href="https://infomericainc.com/About-Infomerica" data-bs-dismiss="offcanvas" target="blank" className='text-decoration-none'> ABOUT US</a>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.about ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('about', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.about ? 'show' : ''}`}>
                            <a href="https://infomericainc.com/Infomerica-Vision" data-bs-dismiss="offcanvas" target="blank" className="text-decoration-none">
                                <li className="ps-4">Vision</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Infomerica-Mission" data-bs-dismiss="offcanvas" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Mission</li>
                            </a>
                            <hr />
                        </div>
                    </div>

                    {/* Industries section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="text-decoration-none fw-bold">
                                <span className='industriesLink'>INDUSTRIES</span>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.industries ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('industries', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.industries ? 'show' : ''}`}>
                            <a href="https://infomericainc.com/Manufacturing-Automotive" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Manufacturing & Automotive</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Energy-Utilities" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Energy & Utilities</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Banking-Insurance-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Banking & Insurance Services</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Healthcare-LifeSciences" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Healthcare & Life Sciences</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Media-Telecom" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Media & Telecom</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Airline-Travel-Logistics" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Airline / Travel / Logistics</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Consumer-Retail" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Consumer & Retail</li>
                            </a>
                            <hr />
                        </div>
                    </div>

                    {/* Services section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                <a href="https://infomericainc.com/Services" target="blank" className='text-decoration-none'>SERVICES</a>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.services ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('services', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.services ? 'show' : ''}`}>
                            <a href="https://infomericainc.com/CRM" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Customer Relationship Management (CRM)</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Digital-Transformation-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Digital Transformation Services</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Security-Architecture" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Security Architecture</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Application-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Application Services</li>
                            </a>
                            <hr />
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <li className="text-decoration-none ps-4">Cloud</li>
                                    <i className={`bi bi-caret-right-square fs-5 ${showChilds.cloud ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('cloud', event)}></i>
                                </div>
                                <hr />
                                <div className={`aboutchilds ${showChilds.cloud ? 'show' : ''}`}>
                                    <a href="https://infomericainc.com/Cloud-Services" target="blank" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">Cloud Services</li>
                                    </a>
                                    <hr />
                                    <a href="https://infomericainc.com/AWS-Services" target="blank" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">AWS Services</li>
                                    </a>
                                    <hr />
                                    <a href="https://infomericainc.com/Microsoft-Cloud-Services" target="blank" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">Microsoft Cloud Services</li>
                                    </a>
                                    <hr />
                                    <a href="https://infomericainc.com/Microsoft365" target="blank" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">Microsoft 365</li>
                                    </a>
                                    <hr />
                                </div>
                            </div>
                            <a href="https://infomericainc.com/Data-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Data Services</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Internet-Of-Things" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Internet Of Things</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Testing-QA-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Business Assurance & Testing</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Enterprise-Portal" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Enterprise Portal</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Service-Oriented-Architecture" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Service Oriented Architecture</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Free-POC-POT" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Free POC & POT</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Software-Sales" target="blank" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">Software Sales</li>
                            </a>
                            <hr />
                        </div>
                    </div>

                    {/* Solutions section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="text-decoration-none fw-bold">
                                <span className='solutionLink'>SOLUTIONS</span>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.solutions ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('solutions', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.solutions ? 'show' : ''}`}>
                            <Link to="/Robotic-Automation-Process" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.roboticAutomationProcess}</li>
                            </Link>
                            <hr />
                            <Link to="/Oracle-Cloud" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.oracleCloud}</li>
                            </Link>
                            <hr />
                            <Link to="/SAP" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.sap}</li>
                            </Link>
                            <hr />
                            <Link to="/CRM" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.solutionsCrm}</li>
                            </Link>
                            <hr />
                            <Link to="/Mobility" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.mobility}</li>
                            </Link>
                            <hr />
                            <Link to="/Business-Process-Management" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.businessProcessManagement}</li>
                            </Link>
                            <hr />
                            <Link to="/DevOps" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.devops}</li>
                            </Link>
                            <hr />
                            <Link to="/Service-Oriented-Architecture" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.serviceOrientedArchitecture}</li>
                            </Link>
                            <hr />
                        </div>
                    </div>

                    {/* Contact Us section */}
                    {/* <li data-bs-dismiss="offcanvas">
                        <Link to="/Contact" className="text-decoration-none fw-bold">{data.contactus}</Link>
                    </li>
                    <hr /> */}

                    {/* CSR section */}
                    {/* <li data-bs-dismiss="offcanvas">
                        <Link to="/CSR" className="text-decoration-none fw-bold">{data.csr}</Link>
                    </li>
                    <hr /> */}

                    {/* Careers section */}
                    {/* <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                <Link to="/Careers" className='text-decoration-none'>{data.careers}</Link>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.careers ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('careers', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.careers ? 'show' : ''}`}>
                            <Link to="/Careers-Hyd" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.hyderabad}</li>
                            </Link>
                            <hr />
                            <Link to="/Careers-Bangalore" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.bangalore}</li>
                            </Link>
                            <hr />
                        </div>
                    </div> */}
                </ul>
            </div>
        </>
    );
};

export default SideNavbar;
