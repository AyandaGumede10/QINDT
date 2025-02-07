import React from 'react';
import "../styles/about.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Quote Section */}
        <div className="mb-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
              "Excellence is not just what we deliver; it's the standard we hold ourselves to every day. At Quality Inspection and NDT Services, integrity, precision, and innovation drive everything we do."
              <span className="block mt-2 text-sm font-medium">- N.Ziqubu (CEO & FOUNDER OF Quality Inspection and Services)</span>
            </h2>
          </div>
        </div>

        {/* About CEO Section */}
        <div className="mb-12 text-gray-700 text-center" style={{ fontSize: "16.5px" }}>
          <p className="leading-relaxed mb-8 font-segoe font-light">
            Nhlanhla Ziqubu is a highly experienced and qualified professional in the field of Non-Destructive Testing (NDT) and the CEO and founder of Quality Inspection and NDT Services, established in 2025. With an impeccable background as a Level 2 MT (Magnetic Testing), PT (Penetrant Testing), and UT (Ultrasonic Testing) technician, Nhlanhla has accumulated a wealth of knowledge and hands-on experience over the years, providing inspection services to various high-profile clients across multiple industries.
          </p>
          <p className="leading-relaxed font-segoe font-light">
            His expertise spans the tankage industry, oil and gas sector, railways, and power stations, where he has played an integral role in ensuring the safety, integrity, and quality of critical infrastructure. Nhlanhla has an in-depth understanding of industry codes and standards, including ASME, API 650 (13th Edition), and AWS D1.1, which have been instrumental in guiding his inspections and ensuring compliance with global industry regulations.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">OUR MISSION</h1>
          <div className="font-segoe font-light space-y-4 text-gray-700 text-center" style={{ fontSize: "16.5px" }}>
            <p className='font-segoe font-light'>We are committed to delivering premium services while maintaining competitive pricing that ensures sustainable business growth.</p>
            <p className='font-segoe font-light'>Through strategic market expansion and continuous innovation in our core competencies, we aim to capture emerging opportunities across the industry.</p>
            <p className='font-segoe font-light'>We foster collaborative partnerships with our suppliers and stakeholders, creating mutual growth opportunities.</p>
            <p className='font-segoe font-light'>Our commitment to employee development and engagement remains paramount, as we believe in nurturing talent that drives our success.</p>
            <p className='font-segoe font-light'>We aspire to establish ourselves as Africa's premier NDT and inspection services provider, leveraging cutting-edge technology and innovative methodologies to deliver exceptional value to our clients across the continent.</p>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Key Value Propositions</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-segoe font-light">
            {[
              {
                title: "Testing & Analytics",
                points: ["State-of-the-art testing methodologies", "Advanced analytical techniques", "Enhanced Operational Excellence"],
              },
              {
                title: "Quality Control",
                points: ["Optimization of quality control processes", "Implementation of safety-first protocols", "Maximization of operational efficiency"],
              },
              {
                title: "Downtime Management",
                points: ["Downtime Optimization", "Strategic maintenance planning", "Proactive equipment monitoring"],
              },
              {
                title: "Asset Management",
                points: ["Cost-Effective Asset Management", "Data-driven decision support", "Long-term cost optimization"],
              },
              {
                title: "Risk Management",
                points: ["Preventive Risk Management", "Early defect detection", "Comprehensive risk assessment"],
              },
            ].map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center font-segoe font-light" style={{ fontSize: "16.4px" }}>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="font-segoe font-light">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-700 p-6 text-center">
          <p className="text-lg font-segoe font-light">
            Cellphone: 0827772482 | Email:{" "}
            <a href="mailto:qualityinspectionndtservices@gmail.com" className="text-blue-400" style={{marginLeft: "-1%"}}>
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

export default About;
