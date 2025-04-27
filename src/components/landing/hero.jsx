import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import landingimg from "../../assets/landing/G2.jpeg"; 

// 1️⃣  Shared colour tokens
const colours = {
  navy: "#1d2556",
  lilacBg: "#f6f6ff",
  paleLilac: "#e7e9ff",
  btn: "#464e9a",
};

// 2️⃣  Typography
const headingStyle = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: "72px",
  lineHeight: 1.1,
  color: colours.navy,
  marginTop: "32px",
  marginBottom: "24px",
};

const subHeadingStyle = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  fontSize: "28px",
  color: colours.navy,
  margin: "32px 0 24px",
};

// 3️⃣  Component
export default function HeroSection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "55px",
        background: colours.lilacBg,
        padding: "48px 0",
      }}
    >
      {/*  Left column  */}
      <div style={{ width: "650px", maxWidth: "100%", display: "flex", flexDirection: "column" }}>
        <img
          src={landingimg}
          alt="Landing"
          style={{ width: "100%", borderRadius: "20px", objectFit: "cover" }}
        />

        <h1 style={headingStyle}>
          Raising Happy
          <br />
          Children in the Age of&nbsp;AI
        </h1>

        <p style={{ fontSize: "22px", color: colours.navy, fontFamily: "'Playfair Display', serif",}}>
        Singapore's trusted child development program is now in Thailand! Proven with over 26 years of experience and more than 1,000 children across Southeast Asia.
        <p style={{ fontSize: "22px", color: colours.navy, marginBottom: "40px", fontWeight:600 }}>Don't miss this opportunity! </p>
        </p>

        {/* <blockquote
          style={{
            fontStyle: "italic",
            background: colours.paleLilac,
            padding: "24px 32px",
            borderRadius: "12px",
            fontSize: "20px",
            color: colours.navy,
          }}
        >
          “I'm Man, and this program changed my life. Now I'm bringing it home to Thailand.”
        </blockquote> */}
      </div>

      {/* Right column (card)  */}
      <div style={{ width: "600px", maxWidth: "100%", justifySelf:'center', alignSelf : 'center'}}>
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "48px 45px",
            boxSizing: "border-box",
            boxShadow: "0 14px 32px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <h2 style={{ ...subHeadingStyle, marginTop: 0 }}>Join Our FREE Seminar! 
            <p style={{fontSize:'20px'}}> Learn how to understand your child deeply and communicate effectively!</p>
        </h2>

          {/* Date */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontWeight: 600, color: colours.navy  }}>
            <span style={{ display: "flex", alignItems: "center", gap: "12px"}}>
              <FiCalendar style= {{ width:'25px', height: '25px'}}/> Date <br/> June&nbsp;24,&nbsp;2024
            </span>
          </div>

          {/* Time */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontWeight: 600, color: colours.navy }}>
            <span style={{ display: "flex", alignItems: "center", gap: "12px"}}>
              <FiClock style= {{ width:'25px', height: '25px'}}/> Time <br/> 9:00 AM - 12:00 PM
            </span>
          </div>

          {/* Venue */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontWeight: 600, color: colours.navy }}>
            <span style={{ display: "flex", alignItems: "center", gap: "12px"}}>
              <FiMapPin style= {{ width:'25px', height: '25px'}}/> Venue <br/> The Sukosol Hotel, Bangkok
            </span>
          </div>

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
              marginTop:'30px'
            }}
          >
            Both parents and children are WELCOMED! While you attend the seminar, <strong> your children will have fun through learning activities from our alumni guidance!
            </strong>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px"}}>
            <button
                style={{
                marginTop: "0px",
                width: "100%",
                padding: "18px 0",
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
    </div>
  );
}
