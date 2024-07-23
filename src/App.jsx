import "./App.css";
import Logo from "./Images/company-logo.png";
import AWSLogo from "./Images/AWS.png";
import AWSCompetency from "./Images/AWS-competency.png";
import MAPCustomerJourney from "./Images/Customer-journey-map.png";
// import AWSMigrationServices from "./Images/AWS-migration-services.png";
// import AWSMigrationModernization from "./Images/AWS-migration-modernization.png";
import capability1 from "./Images/capability1.webp";
import capability2 from "./Images/capability2.png";
import capability3 from "./Images/capability3.png";
import capability4 from "./Images/capability4.png";

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
            marginLeft: "110px",
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

          {/* <div className="d-md-flex gap-3 m-4 fs-6">
            <p className=" p-3 shadow rounded">
              As an AWS Select Consulting Partner, Infomerica offers
              unparalleled services and support to help clients navigate the
              complexities of cloud migration with confidence and efficiency. We
              believe in leveraging AWS's innovative capabilities to drive
              efficiency, scalability, and cost optimization for our clients.
              Our approach involves exploring AWS services, tools, and features
              to identify opportunities for optimization and innovation that
              deliver tangible business value.
            </p>
            <p className=" p-3 shadow rounded">
              Infomerica's approach emphasizes strategic planning, meticulous
              execution, and continuous support to ensure seamless migration and
              maximize the benefits of AWS cloud services. With our cutting-edge
              Cloud Services, we enable you to harness the full potential of the
              cloud, ensuring optimal flexibility, security, and performance.
              Crafted to align with your unique business objectives, our
              services help you overcome challenges and seize opportunities in
              the evolving digital landscape.
            </p>
          </div> */}
        </div>
      </div>
      <div className="m-5">
        <h1>Our AWS Service Portfolio</h1>
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

      {/* <div className="text-center">
        <img
          src={MAPCustomerJourney}
          alt="MAP Customer Journey"
          width="60%"
          className="m-2"
        />
      </div> */}
      <div className="m-5">
        <div className="">
          {/* <img
            src={AWSMigrationServices}
            alt="AWS Migration Services"
            width="20%"
          ></img> */}
          <h1 className="text-center">Our Capabilities</h1>
        </div>

        <div className="mt-5 ourcapabilities-grid">
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Migration Strategy Development</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  We offers customized cloud migration solutions to support your
                  digital transformation. We work with you to develop strategies
                  that align with your business goals, using pre-set templates
                  and data analytics to ensure a smooth migration with minimal
                  disruption.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Strategy Planning and Infrastructure Audit</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  Our capabilities include strategy planning to assess your
                  organization’s readiness for cloud services and an
                  infrastructure audit to evaluate your existing setup against
                  best practices for security, scalability, and disaster
                  recovery.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Decade of Expertise and Support</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  With over a decade of experience in cloud migration
                  consulting, Infomerica offers extensive expertise and support.
                  We help develop a detailed migration roadmap, re-architect and
                  re-platform databases and applications, and provide continuous
                  support throughout the migration process.
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card" tabIndex="0">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <h3>Ongoing Optimization and Maintenance</h3>
              </div>
              <div className="flip-card-back">
                <p className="p-4">
                  {" "}
                  Infomerica’s commitment doesn’t end with migration. We offer
                  ongoing optimization and maintenance services to ensure your
                  cloud environment remains efficient and effective. Our
                  continuous monitoring and proactive improvements help you
                  maximize the benefits of your cloud investment.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-3 mb-3 shadow-lg customCard">
            <div className="card">
              <img
                src={capability1}
                className="card-img-top"
                alt="logo"
                height="220px"
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Migration Strategy Development
                </h5>
                <p className="card-text mt-4">
                  {" "}
                  We offers customized cloud migration solutions to support your
                  digital transformation. We work with you to develop strategies
                  that align with your business goals, using pre-set templates
                  and data analytics to ensure a smooth migration with minimal
                  disruption.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-3 mb-3 shadow-lg customCard">
            <div className="card">
              <img
                src={capability2}
                className="card-img-top"
                alt="logo"
                height="220px"
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Five-Step Migration Plan
                </h5>
                <p className="card-text mt-4">
                  {" "}
                  Our comprehensive five-step migration plan includes several
                  critical phases. We start with a well-planned strategy to
                  assess your organization’s readiness for cloud services. This
                  is followed by an infrastructure audit to evaluate your
                  existing setup against best practices for security,
                  scalability, and disaster recovery.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-3 mb-3 shadow-lg customCard">
            <div className="card">
              <img
                src={capability3}
                className="card-img-top"
                alt="logo"
                height="220px"
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Decade of Expertise and Support
                </h5>
                <p className="card-text mt-4">
                  {" "}
                  With over a decade of experience in cloud migration
                  consulting, Infomerica offers extensive expertise and support.
                  We help develop a detailed migration roadmap, re-architect and
                  re-platform databases and applications, and provide continuous
                  support throughout the migration process.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="mt-3 mb-3 shadow-lg customCard">
            <div className="card">
              <img
                src={capability4}
                className="card-img-top"
                alt="logo"
                height="220px"
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Detailed Ten-Step Migration Process
                </h5>
                <p className="card-text mt-4">
                  {" "}
                  Our detailed ten-step cloud migration process includes
                  defining a strategy and objectives based on your business
                  goals, assessing your current infrastructure, and planning the
                  migration with a focus on workload prioritization, timelines,
                  and resources.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div class="flip-card" tabIndex="0">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3>Migration Strategy Development</h3>
                </div>
                <div class="flip-card-back">
                  <p>
                    Infomerica provides tailored cloud migration solutions
                    designed to support your digital transformation journey. We
                    collaborate with you to develop customized migration
                    strategies that align with your business objectives. Whether
                    you opt for public, private, or hybrid cloud solutions, our
                    approach involves using pre-set templates and data analytics
                    to ensure a smooth, effective migration with minimal
                    business disruption.
                  </p>
                </div>
              </div>
            </div> */}
          {/* <div className="m-2 p-2 shadow">
              <h5>Migration Strategy Development</h5>
              <p>
                Infomerica collaborates with clients to develop comprehensive
                migration strategies aligned with their business objectives.
                This involves assessing the current IT environment,
                understanding business goals, and determining the most suitable
                migration approach. The strategy encompasses workload
                prioritization, timeline planning, risk assessment, and resource
                allocation.
              </p>
            </div>
            <div className="bg-light m-2 p-2">
              <h5>Migration Execution and Management</h5>
              <p>
                Infomerica manages the end-to-end migration process, overseeing
                workload migration, data migration, and application refactoring.
                This includes planning migration waves, executing migration
                tasks, and validating migrated workloads to ensure they meet
                performance and functionality requirements. Throughout the
                migration journey, Infomerica coordinates with stakeholders,
                monitors progress, and resolves issues promptly to ensure a
                smooth transition to the cloud.
              </p>
            </div>
            <div className="m-2 p-2 shadow">
              <h5>Cloud Optimization and Cost Management</h5>
              <p>
                Post-migration, Infomerica optimizes AWS environments to enhance
                performance, scalability, and cost efficiency. This involves
                right-sizing resources, implementing cost-saving measures, and
                optimizing architecture for maximum value. Infomerica
                continuously monitors resource utilization, identifies cost
                optimization opportunities, and implements adjustments to
                optimize AWS spending while maintaining optimal performance.
              </p>
            </div> */}
          {/* <div>
            <div className="bg-light m-2 p-2">
              <h5>Workload Discovery and Assessment</h5>
              <p>
                Infomerica thoroughly assesses existing applications and
                workloads to evaluate their cloud migration readiness. This
                process involves analyzing dependencies, performance
                characteristics, data volumes, and compliance requirements. The
                assessment helps identify potential migration challenges,
                prioritize workloads, and develop plans tailored to each
                workload's needs.
              </p>
            </div>
            <div className="m-2 p-2 shadow">
              <h5>Security and Compliance Assurance</h5>
              <p>
                Infomerica prioritizes security and compliance throughout the
                migration process, implementing robust security controls,
                encryption mechanisms, and compliance frameworks to protect data
                and ensure regulatory adherence in the AWS cloud. This includes
                implementing security best practices, conducting security
                assessments, and configuring security policies to mitigate risks
                and safeguard sensitive information.
              </p>
            </div>
            <div className="bg-light m-2 p-2">
              <h5>Migration Tooling and Automation</h5>
              <p>
                Infomerica leverages advanced migration tooling and automation
                frameworks to streamline migration processes and reduce manual
                effort. This includes tools for workload discovery, data
                migration, application refactoring, and infrastructure
                provisioning. By automating repetitive tasks and leveraging
                migration tooling, Infomerica accelerates migration timelines,
                improves accuracy, and reduces the risk of errors during the
                migration process.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div>
        <div className="migrationmodernization">
          <div className="text-center">
            <img
              src={AWSMigrationModernization}
              alt="AWS Migration and Modernization"
              width="60%"
            ></img>
          </div> 
          <h1 className="text-center" >
            Simplifying AWS Migration & Modernization
          </h1>
        </div>
        <div className="m-5 d-md-flex gap-3">
          <div className="p-2 shadow rounded">
            <h5 className="text-center">
              Discovery, Planning, and Recommendation
            </h5>
            <p>
              Infomerica assists in assessing your existing environment,
              identifying workloads suitable for migration, and recommending the
              best approach. Our expertise ensures faster and automated
              application portfolio assessments, cutting down weeks of effort
              needed for modernization assessments.
            </p>
          </div>
          <div className="p-2 shadow rounded">
            <h5 className="text-center">Business Case Analysis</h5>
            <p>
              Infomerica helps build a compelling business case for application
              modernization. For legacy workloads on AWS, automated analysis
              with containers and serverless tech is provided.
            </p>
          </div>
          <div className="p-2 shadow rounded">
            <h5 className="text-center">Application Mobility</h5>
            <p>
              Infomerica offers tools for automated re-platforming, refactoring,
              and augmented refactoring by developers. Our services enable
              seamless migration and modernization of applications.
            </p>
          </div>
          <div className="p-2 shadow rounded">
            <h5 className="text-center">Data Mobility</h5>
            <p>
              Ensuring data remains accessible during migration is crucial.
              Infomerica provides solutions for efficient data movement and
              synchronization between on-premises systems and AWS.
            </p>
          </div>
          <div className="p-2 shadow rounded">
            <h5 className="text-center">App monitoring & composition</h5>
            <p>
              During migration, monitoring and managing applications are
              essential. Infomerica helps you manage and govern applications
              while they are being modernized.
            </p>
          </div>
        </div>
      </div> */}
      <div className="contactusdiv bg-light mt-3 mb-3">
        <h1 className="text-center">Contact Us</h1>
        <p className="text-center mt-3">
          Please take a moment to get in touch, we will get back to you shortly.
        </p>
        <div className="d-md-flex p-2 ps-lg-5 pe-lg-5">
          <div className="d-flex flex-column gap-3 col-md-6 p-2 p-lg-5">
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
          </div>
          <div className="d-flex flex-column gap-3 col-md-6 p-2 p-lg-5">
            <label>
              <b>Message</b>
            </label>
            <textarea rows="10" cols="50" className="form-control"></textarea>
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
