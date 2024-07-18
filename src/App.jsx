import "./App.css";
import Logo from "./Images/logo.png";
import AWSLogo from "./Images/AWS.png";
import AWSCompetency from "./Images/AWS-competency.png";
import MAPCustomerJourney from "./Images/Customer-journey-map.png";
import AWSMigrationServices from "./Images/AWS-migration-services.png";
import AWSMigrationModernization from "./Images/AWS-migration-modernization.png";

function App() {
  return (
    <>
      <div className="awsmain">
        <div className="text-end">
          <img
            src={Logo}
            width="20%"
            className="bg-white m-3 p-2"
            alt="LOGO"
          ></img>
        </div>
        <div
          className="w-50 p-3"
          style={{ backgroundColor: "rgb(14, 46, 78)", marginLeft: "100px" }}
        >
          <h1 className="text-white text-center p-2">
            AWS Cloud Migration Competency Services
          </h1>
        </div>
        <div className="text-end">
          <img
            src={AWSLogo}
            width="20%"
            className="bg-light p-4 me-5"
            alt="AWS LOGO"
          ></img>
        </div>
        <div>
          <h4 className="text-white ms-5">
            Infomerica: Demystifying the AWS Migration Competency for
            Prospective Partners
          </h4>
        </div>
        <div className="mt-3">
          <a
            className="bg-white ms-5 p-2 fs-5 ps-5 pe-5"
            href="https://infomericainc.com/AWS-Services"
            target="blank"
          >
            Our Services
          </a>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-center">AWS Competency – Our Approach</h1>
        <div>
          <div className="d-md-flex justify-content-center align-items-center gap-5 m-4">
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
            </p>
          </div>
          <div className="d-md-flex gap-3 m-4 fs-6">
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
          </div>
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
        <div className="d-md-flex gap-4 mt-4">
          <div className="shadow ">
            <h5
              className="text-white p-3"
              style={{ backgroundColor: "rgb(14, 46, 78)" }}
            >
              Seamless Migration Strategies
            </h5>
            <p className="p-3">
              At Infomerica, we specialize in crafting seamless migration
              strategies tailored to your unique business needs. Leveraging our
              deep understanding of AWS services, we ensure a smooth transition
              of your applications, data, and infrastructure to the cloud
              environment. Our meticulously designed migration plans prioritize
              minimal disruption to your operations, allowing for a seamless
              migration experience.
            </p>
          </div>
          <div className="shadow ">
            <h5
              className="text-white p-3"
              style={{ backgroundColor: "rgb(14, 46, 78)" }}
            >
              Minimal Downtime Assurance
            </h5>
            <p className="p-3">
              Minimizing downtime is paramount during the migration process to
              mitigate any potential impact on your business operations. With
              our proven methodologies and robust migration frameworks, we
              guarantee minimal downtime throughout the migration journey. Our
              expert team meticulously plans and executes each migration phase
              to ensure uninterrupted service availability, thereby safeguarding
              your business continuity.
            </p>
          </div>
          <div className="shadow ">
            <h5
              className="text-white p-3"
              style={{ backgroundColor: "rgb(14, 46, 78)" }}
            >
              Comprehensive Risk Mitigation Strategies
            </h5>
            <p className="p-3">
              Infomerica. employs comprehensive risk mitigation strategies to
              address potential challenges and mitigate associated risks during
              the migration process. Our team conducts thorough risk
              assessments, identifying and addressing potential issues before
              they escalate. By implementing proactive measures and contingency
              plans, we ensure a secure and risk-free migration experience,
              safeguarding your data integrity and operational resilience.
            </p>
          </div>
          <div className="shadow ">
            <h5
              className="text-white p-3"
              style={{ backgroundColor: "rgb(14, 46, 78)" }}
            >
              Post-Migration Support Excellence
            </h5>
            <p className="p-3">
              Our commitment to excellence extends beyond the migration phase,
              as we provide comprehensive post-migration support to ensure a
              seamless transition to the cloud environment. Our dedicated
              support team remains available round-the-clock to address any
              post-migration issues or concerns promptly. Additionally, we offer
              ongoing monitoring, optimization, and maintenance services to
              maximize the performance and efficiency of your cloud
              infrastructure, ensuring long-term success and value realization.
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1>Migration Services</h1>
        <p className="fs-5">
          Infomerica excels in guiding clients through the entire migration
          acceleration program lifecycle with expertise and ​precision.
        </p>
        <div className="fs-6">
          <div className="d-md-flex gap-3">
            <p className="p-2 shadow rounded">
              <b className="fs-5">Assess: </b>Infomerica initiates the migration
              journey with a thorough Migration Readiness Assessment (MRA)
              aligned ​with the AWS Cloud Adoption Framework. This assessment
              evaluates the enterprise's cloud readiness and ​provides an action
              plan to address identified gaps.
            </p>
            <p className="p-2 shadow rounded">
              <b className="fs-5">Mobilise: </b>Infomerica builds AWS
              proficiency within client organizations by facilitating hands-on
              migration ​experiences. This phase focuses on establishing a
              scalable and secure AWS landing zone while migrating select
              ​business applications to the cloud.
            </p>
          </div>
          <p className="p-2 shadow rounded">
            <b className="fs-5">Migrate & Modernise: </b>A significant portion
            (20-50%) of an enterprise application portfolio comprises repeated
            ​patterns that can be optimized through a factory approach. So,
            we're working with you to set up a Migration Factory ​using
            patterns, processes, tools, resources, and methodologies defined and
            tested during the mobilization phase to ​migrate applications at
            scale. Larger and more complex applications often follow the
            refactor/rearchitect pattern, ​and Infomerica's Architects, Cloud
            Specialists, and SecOps Specialists work diligently to ensure your
            success in ​migrating to AWS.
          </p>
        </div>
      </div>
      <div className="text-center">
        <img
          src={MAPCustomerJourney}
          alt="MAP Customer Journey"
          width="60%"
          className="m-2"
        />
      </div>
      <div className="m-5">
        <div className="d-md-flex gap-5 justify-content-center align-items-center">
          <img
            src={AWSMigrationServices}
            alt="AWS Migration Services"
            width="20%"
          ></img>
          <h1 className="d-md-flex justify-content-center align-items-center">
            Infomerica Provides the Migration Services
          </h1>
        </div>

        <div className="mt-5 d-md-flex gap-3">
          <div>
            <div className="m-2 p-2 shadow">
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
            </div>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div>
        <div className="d-md-flex">
          <div className="text-center">
            <img
              src={AWSMigrationModernization}
              alt="AWS Migration and Modernization"
              width="60%"
            ></img>
          </div>
          <h1 className="d-md-flex justify-content-center align-items-center">
            Infomerica Empowering Seamless AWS Migration and Modernization
          </h1>
        </div>
        <div className="m-5 d-md-flex gap-3">
          <div className="p-2 shadow rounded">
            <h5 className="text-center">Discovery, Planning, and Recommendation</h5>
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
      </div>
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
              <button className="btn btn-danger fs-5 w-100">
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
