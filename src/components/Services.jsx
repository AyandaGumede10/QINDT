import "../styles/services.css";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="w-full h-48 bg-gray-200" id='image'></div>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-6 font-segoe font-light">QINDT Services</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center font-segoe font-light">
          Quality Inspection and NDT Services specializes in providing cutting-edge Non-Destructive Testing (NDT) 
          solutions to ensure structural integrity, safety, and regulatory compliance across diverse industries. 
          Our team of certified professionals leverages industry-best practices and state-of-the-art technology 
          to identify potential defects before they pose risks to operational safety.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Service Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center font-segoe font-light" style={{fontSize: "16.5px"}}>
            <h2 className="text-xl font-semibold mb-4">Magnetic Particle Inspection (MPI)</h2>
            <p className="text-gray-600 font-segoe font-light">
              MPI is a critical NDT method for detecting surface and near-surface defects in ferromagnetic materials. 
              It is widely used in industries such as aerospace, automotive, and heavy manufacturing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center font-segoe font-light" style={{fontSize: "16.5px"}}>
            <h2 className="text-xl font-semibold mb-4">Radiographic Testing (RT)</h2>
            <p className="text-gray-600 font-segoe font-light">
              Radiographic Testing employs X-ray or gamma-ray technology to examine the internal integrity of materials. 
              It is commonly utilized in the oil and gas sector, power plants, and heavy industrial applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center font-segoe font-light" style={{fontSize: "16.5px"}}>
            <h2 className="text-xl font-semibold mb-4">Ultrasonic Thickness Testing (UT)</h2>
            <p className="text-gray-600 font-segoe font-light">
              UT uses high-frequency sound waves to measure material thickness and detect subsurface flaws. 
              This testing method is crucial for industries focused on corrosion monitoring and pipeline inspection.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center font-segoe font-light" style={{fontSize: "16.5px"}}>
            <h2 className="text-xl font-semibold mb-4">Wall Thickness Testing (WT)</h2>
            <p className="text-gray-600 font-segoe font-light">
              WT ensures the accurate measurement of material thickness to assess structural soundness. 
              This inspection method is essential in construction, petrochemical, and marine industries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center font-segoe font-light" style={{fontSize: "16.5px"}}>
            <h2 className="text-xl font-semibold mb-4">Liquid Penetrant Inspection (LPI)</h2>
            <p className="text-gray-600 font-segoe font-light">
              LPI is an effective and economical NDT technique for detecting surface discontinuities in 
              non-porous materials. It is widely applied in aerospace, weld inspections, and structural components.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center font-segoe font-light" style={{fontSize: "16.5px"}}>
            <h2 className="text-xl font-semibold mb-4">Visual Inspection</h2>
            <p className="text-gray-600 font-segoe font-light">
              Visual Inspection is the fundamental NDT method that provides a first-line defense in quality assurance. 
              Our trained inspectors assess welds, coatings, and structural components to detect visible defects.
            </p>
          </div>
        </div>
        
        <div className="p-8 rounded-lg mb-12 text-center" style={{fontSize: "16.5px"}}>
          <h2 className="text-2xl font-semibold mb-6 font-segoe">Why Choose Us?</h2>
          <p className="text-gray-700 mb-6 font-segoe font-light">
            At Quality Inspection and NDT Services, we are committed to excellence. Our certified specialists 
            bring years of experience, ensuring that every inspection adheres to international standards.
          </p>
          <ul className="space-y-4 list-disc pl-6 text-gray-700 font-segoe font-light" style={{listStyle: "none"}}>
            <li className="font-segoe font-light">Highly skilled and certified NDT professionals.</li>
            <li className="font-segoe font-light">Strict adherence to international codes ASME, ISO, ASNT, ASTM, API.</li>
            <li className="font-segoe font-light">Advanced inspection technology for precise and reliable results.</li>
            <li className="font-segoe font-light">Rapid response times and on-site testing services.</li>
            <li className="font-segoe font-light">Customized solutions tailored to specific industry needs.</li>
          </ul>
        </div>
        
        <div className="p-8 rounded-lg mb-12 text-center" style={{fontSize: "16.5px"}}>
          <h2 className="text-2xl font-semibold mb-6">Industries We Serve</h2>
          <p className="text-gray-700 mb-6 font-segoe font-light">
            Our expertise extends across multiple industries where quality assurance is critical.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 font-segoe font-light">
            <li className="flex items-center justify-center space-x-2">
              <span className="text-center flex-1 font-segoe font-light">Oil & Gas Industry</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-center flex-1 font-segoe font-light">Automotive Manufacturing</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-center flex-1 font-segoe font-light">Power Generation & Energy</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-center flex-1 font-segoe font-light">Railway & Heavy Equipment</span>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <span className="text-center flex-1 font-segoe font-light">Petrochemical & Marine Sectors</span>
            </li>
          </ul>
          
        </div>
        


        </div>

        <div className="w-full h-48 bg-gray-200" style={{height: "60vh", marginBottom: "5%"}} id="services-footer-image"></div>


        
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
    </>
  );
};

export default Services;