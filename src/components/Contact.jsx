import "../styles/contact.css";

const Contact = () => {

  return (
        <div className="contact-info mt-8" id="contact-background-image" style={{color: "white", fontFamily:"Segoe UI", fontWeight: "lighter", textAlign: "center", justifyContent: "center"}}>
          <h2 className="text-2xl font-semibold mb-4" style={{paddingTop: "20%", fontWeight: "lighter"}}>Contact Information</h2>
          <p className="text-lg">Address: Avoca Hills, Durban, Kwazulu Natal</p>
          <p className="text-lg"><a href="mailto:qualityinspectionndtservices@gmail.com" className="text-blue-500 hover:none font-segoe font-light">qualityinspectionndtservices@gmail.com</a></p>
          <p className="text-lg font-segoe font-light">📞 Phone: +27 827772482</p>
        </div>
  );
};

export default Contact;
