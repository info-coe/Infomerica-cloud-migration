import React, { useState } from 'react';

const SideNavbar = () => {
    const [showChilds, setShowChilds] = useState({ about: false, industries: false, services: false, solutions: false, careers: false });

    const toggleChilds = (section, event) => {
        event.stopPropagation();  
        setShowChilds(prevState => ({ ...prevState, [section]: !prevState[section] }));
    };

    return (
        <>
            <div>
                <ul className="list-unstyled sidenavbardiv ps-4 mt-4">
                    {/* Home section */}
                    <li >
                        <a  href="https://infomericainc.com/"   target="blank"  className="text-decoration-none fw-bold" >HOME</a>
                    </li>
                    <hr />

                    {/* About us section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold">
                                <a href="https://infomericainc.com/About-Infomerica"  target="blank" className='text-decoration-none'> ABOUT US</a>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.about ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('about', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.about ? 'show' : ''}`}>
                            <a href="https://infomericainc.com/Infomerica-Vision"  target="blank" className="text-decoration-none">
                                <li className="ps-4">Vision</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Infomerica-Mission"  target="blank" className="text-decoration-none">
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
                                <li className="ps-4" >Manufacturing & Automotive</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Energy-Utilities" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Energy & Utilities</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Banking-Insurance-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Banking & Insurance Services</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Healthcare-LifeSciences" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Healthcare & Life Sciences</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Media-Telecom" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Media & Telecom</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Airline-Travel-Logistics" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Airline / Travel / Logistics</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Consumer-Retail" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Consumer & Retail</li>
                            </a>
                            <hr />
                        </div>
                    </div>

                    {/* Services section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" >
                                <a href="https://infomericainc.com/Services" target="blank" className='text-decoration-none'>SERVICES</a>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.services ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('services', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.services ? 'show' : ''}`}>
                            <a href="https://infomericainc.com/CRM" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Customer Relationship Management (CRM)</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Digital-Transformation-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Digital Transformation Services</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Security-Architecture" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Security Architecture</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Application-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Application Services</li>
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
                                        <li className="ps-4" >Cloud Services</li>
                                    </a>
                                    <hr />
                                    <a href="https://infomericainc.com/AWS-Services" target="blank" className="text-decoration-none">
                                        <li className="ps-4" >AWS Services</li>
                                    </a>
                                    <hr />
                                    <a href="https://infomericainc.com/Microsoft-Cloud-Services" target="blank" className="text-decoration-none">
                                        <li className="ps-4" >Microsoft Cloud Services</li>
                                    </a>
                                    <hr />
                                    <a href="https://infomericainc.com/Microsoft365" target="blank" className="text-decoration-none">
                                        <li className="ps-4" >Microsoft 365</li>
                                    </a>
                                    <hr />
                                </div>
                            </div>
                            <a href="https://infomericainc.com/Data-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Data Services</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Internet-Of-Things" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Internet Of Things</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Testing-QA-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Business Assurance & Testing</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Enterprise-Portal" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Enterprise Portal</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Service-Oriented-Architecture" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Service Oriented Architecture</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Free-POC-POT" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Free POC & POT</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Software-Sales" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Software Sales</li>
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
                            <a href="https://infomericainc.com/Robotic-Automation-Process" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Robotic Automation Process</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Oracle-Cloud" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Oracle Cloud</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/SAP" target="blank" className="text-decoration-none">
                                <li className="ps-4" >SAP</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/CRM" target="blank" className="text-decoration-none">
                                <li className="ps-4" >CRM</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Mobility" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Mobility</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Business-Process-Services" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Business Process Management</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/DevOps" target="blank" className="text-decoration-none">
                                <li className="ps-4" >DevOps</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Service-Oriented-Architecture" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Service Oriented Architecture</li>
                            </a>
                            <hr />
                        </div>
                    </div>

                    {/* Contact Us section */}
                    <li >
                        <a href="https://infomericainc.com/Contact" target="blank" className="text-decoration-none fw-bold">CONTACT US</a>
                    </li>
                    <hr />

                    {/* CSR section */}
                    <li >
                        <a href="https://infomericainc.com/CSR" target="blank" className="text-decoration-none fw-bold">CSR</a>
                    </li>
                    <hr />

                    {/* Careers section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" >
                                <a href="https://infomericainc.com/Careers" target="blank" className='text-decoration-none'>CAREERS</a>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.careers ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('careers', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.careers ? 'show' : ''}`}>
                            <a href="https://infomericainc.com/Careers-Hyd" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Hyderabad</li>
                            </a>
                            <hr />
                            <a href="https://infomericainc.com/Careers-Banglore" target="blank" className="text-decoration-none">
                                <li className="ps-4" >Bangalore</li>
                            </a>
                            <hr />
                        </div>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default SideNavbar;

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