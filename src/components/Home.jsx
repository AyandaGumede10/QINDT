import "../styles/home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Welcome Section */}
      <div
        className="text-left p-8 text-white bg-gray-900"
        id="front-area"
      >
        <h2 className="font-segoe text-4xl font-light" style={{paddingTop: "10%"}}>Welcome to</h2>
        <h1 className="text-6xl font-bold text-gray-400">Quality Inspection & NDT Services</h1>
        <p className="font-segoe mt-4 text-lg font-light leading-relaxed pb-20">
          At Quality Inspection and NDT Services, we are committed to delivering precise and reliable Non-Destructive Testing (NDT) and inspection solutions across a wide range of industries, including Rail, Petrochemical, Marine, Mining, Paper & Pulp, Energy, and Sugar. Established in 2025, we specialize in ensuring the integrity and safety of assets through our tailored inspection services. 
          As a BBBEE Level 1 contributor, we actively support diversity and empowerment, with a focus on fostering growth opportunities for previously disadvantaged individuals within our industry. Our team, with deep expertise in NDT and engineering, is dedicated to providing solutions that meet the highest standards of quality, safety, and compliance. 
          Trust Quality Inspection and NDT Services to be your reliable partner in maintaining the performance and longevity of your operations.
        </p>
      </div>

      <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto p-6">
          {/* Services Section */}
          <div className="mb-10">
            <h1 className="text-3xl font-segoe font-bold text-center mb-6 mt-9 font-light">
              Our Non-Destructive Testing Services Include
            </h1>
            <div className="space-y-6">
              <details className="p-4 border-t border-b border-gray-300 w-11/12 mx-auto list-none">
                <summary className="font-segoe summary-icon cursor-pointer pl-8 font-light relative">
                  Magnetic Particle Inspection (MPI)
                </summary>
                <p className="mt-2 font-segoe font-light">
                  MPI is a non-destructive testing (NDT) method used to detect surface and slightly subsurface discontinuities in ferromagnetic materials such as iron, nickel, cobalt, and some of their alloys. The process involves applying a magnetic field to the test object.
                </p>
              </details>

              <details className="p-4 border-b border-gray-300 w-11/12 mx-auto list-none">
                <summary className="font-segoe summary-icon cursor-pointer pl-8 font-light relative">
                  Ultrasonic Thickness Testing (UT)
                </summary>
                <p className="mt-2 font-segoe font-light">
                  UT uses high-frequency ultrasonic waves to detect surface discontinuities and internal imperfections, measure material thickness, and determine whether a test object meets specific acceptance or rejection criteria based on industry standards.
                </p>
              </details>

              <details className="p-4 border-b border-gray-300 w-11/12 mx-auto list-none">
                <summary className="font-segoe summary-icon cursor-pointer pl-8 font-light relative">
                  Wall Thickness Testing (WT)
                </summary>
                <p className="mt-2 font-segoe font-light">
                  Wall Thickness Testing employs ultrasonic frequencies to accurately measure the thickness and identify thinning in both ferritic and non-ferritic materials.
                </p>
              </details>

              <details className="p-4 border-b border-gray-300 w-11/12 mx-auto list-none">
                <summary className="font-segoe summary-icon cursor-pointer pl-8 font-light relative">
                  Liquid Penetrant Inspection (LPI)
                </summary>
                <p className="mt-2 font-segoe font-light">
                  Liquid Penetrant Inspection is one of the most widely used NDT methods due to its simplicity and versatility. It can be applied to inspect almost any material for surface discontinuities.
                </p>
              </details>

              <details className="p-4 border-b border-gray-300 w-11/12 mx-auto list-none">
                <summary className="font-segoe summary-icon cursor-pointer pl-8 font-light relative">
                  Visual Inspection
                </summary>
                <p className="mt-2 font-segoe font-light">
                  Visual Inspection is a non-destructive testing method used to identify surface defects, imperfections, or inconsistencies in materials or components. Our certified inspectors ensure quality by assessing welds, coatings, and structural elements to detect flaws before they escalate.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* Image Area (Placeholder) */}
        <div className="w-full h-48 bg-gray-200" id="bg-image"></div>

        {/* Footer */}
        <div className="text-gray-700 p-6 text-center">
          <p className="text-lg font-segoe font-light">
            Cellphone: 0827772482 | Email:{" "}
            <a href="mailto:qualityinspectionndtservices@gmail.com" className="text-blue-400">
              qualityinspectionndtservices@gmail.com
            </a>
          </p>
          <p className="mt-4 font-segoe font-light">
            &#169;2025 Quality Inspection and NDT Services (PYLTD) | All Rights Reserved
          </p>
          <NavLink to="/terms-and-conditions" className="text-blue-600 hover:text-blue-800 font-segoe font-light">
            Terms & Conditions
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
