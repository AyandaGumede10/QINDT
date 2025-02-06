import React from 'react';
import "../styles/about.css"

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8"  style={{fontFamily: "Segoe UI", fontWeight: "lighter"}}>
        {/* Quote Section */}
        <div className="mb-12" >
          <div className="bg-gray-50 p-6 rounded-lg shadow-m">
            <h2 className="text-lg md:text-xl italic text-gray-700 leading-relaxed">
              "Excellence is not just what we deliver; it's the standard we hold ourselves to every day. At Quality Inspection and NDT Services, integrity, precision, and innovation drive everything we do."
              <span className="block mt-2 text-sm font-medium">- N.Ziqubu (CEO & FOUNDER OF Quality Inspection and Services)</span>
            </h2>
          </div>
        </div>

        {/* About CEO Section */}
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-8 text-center" style={{fontSize: "19px"}}>
            Nhlanhla Ziqubu is a highly experienced and qualified professional in the field of Non-Destructive Testing (NDT) and the CEO and founder of Quality Inspection and NDT Services,
            established in 2025. With an impeccable background as a Level 2 MT (Magnetic Testing), PT (Penetrant Testing), and UT (Ultrasonic Testing) technician, 
            Nhlanhla has accumulated a wealth of knowledge and hands-on experience over the years, providing inspection services to various high-profile clients across multiple industries.
            His expertise spans the tankage industry, oil and gas sector, railways, and power stations, where he has played an integral role in ensuring the safety, integrity, and quality of critical infrastructure.
          </p>
          <p className="text-gray-700 leading-relaxed text-center" style={{fontSize: "19px"}}>
            Nhlanhla has an in-depth understanding of industry codes and standards, including ASME, API 650 (13th Edition), and AWS D1.1, which have been instrumental in guiding his inspections and ensuring the highest level of compliance with global industry regulations. 
            His professional journey is marked by his dedication to precision, problem-solving, and delivering reliable inspection services that meet the demanding needs of clients. As the founder of Quality Inspection and NDT Services, Nhlanhla continues to lead his company with a forward-thinking approach, aiming to elevate the standards of NDT and inspection services in the industries he serves while contributing to the growth and success of the company.
            His leadership, technical expertise, and commitment to quality have laid the foundation for a business that thrives on innovation and excellence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">OUR MISSION</h1>
          <div className="space-y-4 text-gray-700 text-center" style={{fontSize: "19px"}}>
            <p>We are committed to delivering premium services while maintaining competitive pricing that ensures sustainable business growth.</p>
            <p>Through strategic market expansion and continuous innovation in our core competencies, we aim to capture emerging opportunities across the industry.</p>
            <p>We foster collaborative partnerships with our suppliers and stakeholders, creating mutual growth opportunities.</p>
            <p>Our commitment to employee development and engagement remains paramount, as we believe in nurturing talent that drives our success.</p>
            <p>Excellence in service delivery and adherence to international quality standards form the cornerstone of our operations.</p>
            <p>Our comprehensive quality management system ensures consistent, reliable, and superior service delivery.</p>
            <p>We aspire to establish ourselves as Africa's premier NDT and inspection services provider,</p>
            <p>leveraging cutting-edge technology and innovative methodologies to deliver exceptional value to our clients across the continent.</p>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Key Value Propositions:</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testing & Analytics */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center" style={{fontSize: "19px"}}>
              <ul className="space-y-2">
                <li className="font-lighter">State-of-the-art testing methodologies</li>
                <li className="font-lighter">Advanced analytical techniques</li>
                <li className="font-lighter">Enhanced Operational Excellence</li>
              </ul>
            </div>

            {/* Quality Control */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center" style={{fontSize: "19px"}}>
              <ul className="space-y-2">
                <li className="font-lighter">Optimization of quality control processes</li>
                <li className="font-lighter">Implementation of safety-first protocols</li>
                <li className="font-lighter">Maximization of operational efficiency</li>
              </ul>
            </div>

            {/* Downtime Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center" style={{fontSize: "19px"}}>
              <ul className="space-y-2">
                <li className="font-lighter">Downtime Optimization</li>
                <li className="font-lighter">Strategic maintenance planning</li>
                <li className="font-lighter">Proactive equipment monitoring</li>
              </ul>
            </div>

            {/* Asset Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center" style={{fontSize: "19px"}}>
              <ul className="space-y-2">
                <li className="font-lighter">Cost-Effective Asset Management</li>
                <li className="font-lighter">Data-driven decision support</li>
                <li className="font-lighter">Long-term cost optimization</li>
              </ul>
            </div>

            {/* Risk Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center" style={{fontSize: "19px"}}>
              <ul className="space-y-2">
                <li className="font-lighter">Preventive Risk Management</li>
                <li className="font-lighter">Early defect detection</li>
                <li className="font-lighter">Comprehensive risk assessment</li>
              </ul>
            </div>
            {/* Risk Management */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center" style={{fontSize: "19px"}}>
              <ul className="space-y-2">
                <li className="font-lighter">Preventive Risk Management</li>
                <li className="font-lighter">Early defect detection</li>
                <li className="font-lighter">Comprehensive risk assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

       {/*  image area */}
        <div id="about-bg-image" className="w-full h-48 bg-gray-200"></div>
        
        <hr className="border-t-1 border-gray-500 my-4 w-full" />

        {/* Footer */}
        <footer className="text-gray p-8 rounded-lg text-center" >
          <h1 className="text-xl font-bold mb-4 " style={{fontFamily: "Segoe UI", fontWeight: "lighter", fontSize: "31px"}}>Get in touch with us</h1>
          <p className="mb-2" style={{fontFamily: "Segoe UI", fontWeight: "lighter"}}>
            Cellphone: 0827772482 | Email:
            <a href="mailto:qualityinspectionndtservices@gmail.com" className="ml-2 text-blue-300 hover:text-blue-200">
              qualityinspectionndtservices@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400 mb-2">©2025 Quality Inspection and NDT Services (PYLTD) | All Rights Reserved</p>
          <a href="$" className="text-blue-300 hover:text-blue-200">General Terms & Conditions</a>
        </footer>
    </>
  );
};

export default About;