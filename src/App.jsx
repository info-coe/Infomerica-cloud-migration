import "./App.css";
import Logo from "./Images/company-logo.png";
import AWSLogo from "./Images/AWS.png";
import AWSCompetency from "./Images/AWS-competency.png";
import Benefit1 from "./Images/Benefits1.png";
import Benefit2 from "./Images/Benefits2.png";
import Benefit3 from "./Images/Benefits3.png";
import Benefit4 from "./Images/Benefits4.png";
import contactImage from "./Images/contactus.jpg";

function App() {
  return (
    <>
      <div className="awsmain">
        <div className="text-end">
          <img
            src={Logo}
            width="17%"
            className="bg-white m-3 p-2"
            alt="LOGO"
          ></img>
        </div>
        <div
          className="w-50 p-4"
          style={{
            backgroundColor: "rgba(14, 46, 78,0.7)",
            marginLeft: "60px",
          }}
        >
          <h1 className="text-white text-center">
            Streamline Your Operations with Infomerica's AWS Services
          </h1>
        </div>
        <div className="d-md-flex" style={{ marginTop: "140px" }}>
          <div className="mt-5">
            <div className="">
              <h4 className="text-white" style={{ marginLeft: "60px" }}>
                Achieve Greater Efficiency and Security with Our Customized
                Solutions
              </h4>
            </div>
          </div>
          <div className="text-end">
            <img
              src={AWSLogo}
              width="30%"
              className="bg-light p-4 me-3"
              alt="AWS LOGO"
            ></img>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-center">Our Approach</h1>
        <div>
          <div className="d-md-flex justify-content-center align-items-center gap-5 m-2 mb-0">
            <img
              src={AWSCompetency}
              className=""
              width="20%"
              alt="AWS Compentency"
            ></img>
            <p className="fs-5">
              Infomerica is a leading AWS Select Consulting Partner,
              specializing in providing comprehensive cloud migration solutions
              to businesses worldwide. With a strong focus on AWS expertise,
              Infomerica excels in guiding customers through every phase of
              their migration journey, from initial planning to post-migration
              optimization.
              <br />
              <span className="d-flex justify-content-start me-4 fs-6 mt-3">
                <a
                  className="bg-dark rounded p-2 text-decoration-none text-white"
                  href="https://infomericainc.com/AWS-Services"
                  target="blank"
                >
                  <b>
                    Get More <i className="bi bi-arrow-right"></i>
                  </b>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1>Our Service Portfolio</h1>
        <p className="fs-5">
          Infomerica, where innovation meets execution. As an AWS Select
          Consulting Partner, we specialize in harnessing the sophisticated
          architecture of AWS services to deliver transformative solutions,
          meticulously crafted to meet the unique demands of the cloud
          landscape.
        </p>
        <div className="ourserviceportfolio-grid mt-4">
          <div className="shadow ">
            <h5
              className="text-white p-3 portfoliohead"
              style={{ backgroundColor: "rgb(14, 46, 78)", height: "auto" }}
            >
              Seamless Migration Strategies
            </h5>
            <p className="p-3">
              At Infomerica, we craft tailored migration strategies for your
              unique business needs, ensuring a smooth transition of
              applications, data, and infrastructure to AWS. Our meticulous
              plans prioritize minimal disruption, guaranteeing a seamless
              migration experience.
            </p>
          </div>
          <div className="shadow ">
            <h5
              className="text-white p-3 portfoliohead"
              style={{ backgroundColor: "rgb(14, 46, 78)", height: "auto" }}
            >
              Minimal Downtime Assurance
            </h5>
            <p className="p-3">
              Minimizing downtime is crucial during migration. With our proven
              methodologies and robust frameworks, we ensure minimal downtime
              throughout the process. Our expert team meticulously plans each
              phase to maintain uninterrupted service, safeguarding business
              continuity.
            </p>
          </div>
          <div className="shadow ">
            <h5
              className="text-white p-3 portfoliohead"
              style={{ backgroundColor: "rgb(14, 46, 78)", height: "auto" }}
            >
              Comprehensive Risk Mitigation Strategies
            </h5>
            <p className="p-3">
              Infomerica employs comprehensive risk mitigation strategies to
              address potential challenges during migration. We conduct thorough
              risk assessments and implement proactive measures and contingency
              plans, ensuring a secure, risk-free migration experience.
            </p>
          </div>
          <div className="shadow ">
            <h5
              className="text-white p-3 portfoliohead"
              style={{ backgroundColor: "rgb(14, 46, 78)", height: "auto" }}
            >
              Post-Migration Support Excellence
            </h5>
            <p className="p-3">
              Our commitment extends beyond migration with comprehensive
              post-migration support. Our dedicated team is available
              round-the-clock to address any issues promptly. We offer ongoing
              monitoring, optimization, and maintenance to maximize your cloud
              infrastructure’s performance and efficiency, ensuring long-term
              success.
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="">
          <h1 className="text-center">Benefits of Cloud Migration</h1>
        </div>

        <div className="mt-5 ourcapabilities-grid">
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front d-flex flex-column">
                <img src={Benefit1} alt="Migration Strategy Development" width="80%"></img>
                <h3>Migration Strategy Development</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  Leverage our cloud migration services to facilitate your
                  digital transformation, ensuring a seamless and efficient
                  transition to the cloud. We employ the right strategy,
                  roadmap, workflow model, and ecosystem collaborations to
                  determine the best cloud solution for your organization—be it
                  public, private, or hybrid.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front d-flex flex-column">
                <img src={Benefit3} alt="Strategy Planning and Infrastructure Audit" width="80%"></img>
                <h3>Strategy Planning and Infrastructure Audit</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  Our customer-centric cloud migration consulting services
                  guarantee smooth and systematic transitions. Utilizing pre-set
                  templates and data analytics applications, we mitigate
                  business disruptions. Infomerica’s comprehensive 5-step plan
                  includes strategy planning, infrastructure audit, architect
                  design, automation, and deployment & testing.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
            <div className="flip-card-front d-flex flex-column">
                <img src={Benefit2} alt="Decade of Expertise and Support" width="80%"></img>
                <h3>Decade of Expertise and Support</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  We ensure a seamless transition of business applications and
                  data to leading cloud platforms such as Microsoft Azure, AWS,
                  GCP, VMWare, IBM, and others. Our approach begins with
                  understanding your organization's adaptability to cloud
                  services, followed by an infrastructure audit to assess your
                  existing systems against industry best practices. We then
                  design the cloud architecture, automate processes, and deploy
                  & test the new environment.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
            <div className="flip-card-front d-flex flex-column">
                <img src={Benefit4} alt="Ongoing Optimization and Maintenance" width="70%"></img>
                <h3>Ongoing Optimization and Maintenance</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  With over a decade of experience, Infomerica delivers reliable
                  and efficient cloud migration solutions. We build robust
                  roadmaps and strategies, provide re-architecting and
                  re-platforming support, and offer round-the-clock assistance.
                  Our aim is to minimize errors and ensure a seamless migration
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactusdiv mt-3 mb-3">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center mt-3">
          Please take a moment to get in touch, we will get back to you shortly.
        </p>
        <div className="d-md-flex">
          <div className="col-md-6">
            <img src={contactImage} alt="contact" width="100%" height="100%"></img>
          </div>
          <div className="d-flex flex-column gap-3 col-md-6 p-2 p-lg-5 bg-light">
            <label>
              <b>Your Name</b>
            </label>
            <input type="text" className="form-control" />
            <label>
              <b>Email Address</b>
            </label>
            <input type="email" className="form-control" />
            <label>
              <b>Phone Number</b>
            </label>
            <input type="tel" className="form-control" />
            <label>
              <b>Orgaization</b>
            </label>
            <input type="text" className="form-control" />
            <label>
              <b>Message</b>
            </label>
            <textarea rows="3" cols="50" className="form-control"></textarea>
            <a
              href="mailto:info@infomericainc.com"
              className="text-decoration-none text-white"
            >
              <button
                className="btn fs-5 w-100 text-white"
                style={{ backgroundColor: "rgb(14, 46, 78)" }}
              >
                Send Message
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="p-3 text-center">
        <p>
          For more details or to discuss your specific needs,{" "}
          <b>
            <a
              href="https://infomericainc.com/contact"
              target="blank"
              className="text-dark"
            >
              Contact Us
            </a>
          </b>{" "}
          today!
        </p>
      </div>
    </>
  );
}

export default App;
