import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import G1 from "../../assets/landing/G1.jpg"; 
import G2 from "../../assets/landing/G2.jpeg"; 
import G4 from "../../assets/landing/G4.jpg"; 

import { useEffect, useState } from "react";

const colours = {
  navy: "#1d2556",
  lilacBg: "#f6f6ff",
  paleLilac: "#e7e9ff",
  btn: "#464e9a",
};

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // set initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headingStyle = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: isMobile ? "38px" : "72px",
    lineHeight: 1.2,
    color: colours.navy,
    marginTop: "32px",
    marginBottom: "24px",
    textAlign: isMobile ? "center" : "start",
  };

  const subHeadingStyle = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: isMobile ? "22px" : "28px",
    color: colours.navy,
    margin: "32px 0 24px",
    textAlign: isMobile ? "center" : "start",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        gap: isMobile ? "32px" : "55px",
        background: colours.lilacBg,
        padding: isMobile ? "24px 16px" : "48px 0",
      }}
    >
      {/* Left Column */}
      <div style={{ width: isMobile ? "100%" : "650px", maxWidth: "100%", display: "flex", flexDirection: "column", paddingTop: '10vh' }}>
        <img
          src={G2}
          alt="Landing"
          style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }}
        />
        <h1 style={headingStyle}>
          Raising Happy
          <br />
          Children in the Age of&nbsp;AI
        </h1>

        <p style={{ fontSize: isMobile ? "18px" : "22px", color: colours.navy, fontFamily: "'Playfair Display', serif", textAlign: isMobile ? "center" : "start" }}>
          Singapore's trusted child development program is now in Thailand! Proven with over 26 years of experience and more than 1,000 children across Southeast Asia.
        </p>
        <p style={{ fontSize: isMobile ? "18px" : "22px", color: colours.navy, marginBottom: "40px", fontWeight:600, textAlign: isMobile ? "center" : "start" }}>
          Don't miss this opportunity!
        </p>
      </div>

      {/* Right Column */}
      <div style={{ width: isMobile ? "100%" : "600px", maxWidth: "100%", justifySelf:'center', alignSelf : 'center' }}>
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: isMobile ? "32px 24px" : "48px 45px",
            boxSizing: "border-box",
            boxShadow: "0 14px 32px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h2 style={{ ...subHeadingStyle, marginTop: 0 }}>
            Join Our FREE Seminar!
            <p style={{fontSize: isMobile ? '18px' : '20px'}}>
              Learn how to understand your child deeply and communicate effectively!
            </p>
          </h2>

          {/* Info */}
          {[{
            Icon: FiCalendar,
            label: "Date",
            value: "June 24, 2024"
          },{
            Icon: FiClock,
            label: "Time",
            value: "9:00 AM - 12:00 PM"
          },{
            Icon: FiMapPin,
            label: "Venue",
            value: "The Sukosol Hotel, Bangkok"
          }].map(({ Icon, label, value }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px", fontWeight: 600, color: colours.navy }}>
              <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Icon style={{ width:'25px', height:'25px' }}/> {label} <br /> {value}
              </span>
            </div>
          ))}

          {/* Note */}
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              background: colours.paleLilac,
              padding: "16px 20px",
              borderRadius: "8px",
              fontSize: "12px",
              lineHeight: 1.3,
              fontWeight: 400,
              color: '#000000',
              opacity:0.6,
              textAlign:'start',
              marginTop:'20px'
            }}
          >
            Both parents and children are WELCOMED! While you attend the seminar, <strong>your children will have fun through learning activities from our alumni guidance!</strong>
          </div>

          {/* Button */}
          <button
            style={{
              marginTop: "16px",
              width: "100%",
              padding: "16px 0",
              border: 0,
              borderRadius: "10px",
              background: colours.btn,
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Register Now! (Limited to 100 Seats!)
          </button>

        </div>
      </div>
    </div>
  );
}
