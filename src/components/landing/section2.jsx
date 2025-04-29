import { useState, useEffect } from "react";
import section2Img from "../../assets/section2.jpg"; 

const headingColour = "#7e2c21"; // deep reddish-brown
const accentColour = "#d29c4b";  // warm ochre underline

export default function Section2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "64px 16px" : "96px 0 120px",
        background: "linear-gradient(#fffefb 0%, #fff 80%)",
      }}
    >
      {/* Section heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: isMobile ? "38px" : "56px",
          color: headingColour,
          margin: 0,
          paddingInline: "12px",
        }}
      >
        "It takes a village to raise a child"
      </h2>

      {/* Two-column content */}
      <div
        style={{
          marginTop: isMobile ? "32px" : "56px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          gap: isMobile ? "32px" : "64px",
          maxWidth: "1180px",
          marginInline: "auto",
          paddingInline: isMobile ? "12px" : "0",
        }}
      >
        {/* Left - Image */}
        <img
          src={section2Img}
          alt="Child"
          style={{
            width: isMobile ? "100%" : "480px",
            maxWidth: "100%",
            borderRadius: "16px",
            objectFit: "cover",
          }}
        />

        {/* Right - Text */}
        <div
          style={{
            maxWidth: "560px",
            fontSize: isMobile ? "18px" : "22px",
            lineHeight: 1.5,
            color: "#38445b",
            textAlign: isMobile ? "center" : "start",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <p>
            Nowadays, children struggle with <strong>screen addiction, loneliness, and emotional burnout.</strong><br /><br />
            That's why&nbsp;
            <a href="https://milchel.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline", fontWeight: "bold" }}>
              Milchel
            </a> 
            &nbsp;wants to bring a <strong>nurturing, value-based way</strong> to raise children who are both <strong>strong and kind</strong> under the name 
            <strong>“Happi360”</strong>.
            
            <br /><br />
            Now, for the first time, this proven approach — born in Singapore and rooted in
            real relationships — is coming to Thailand.
          </p>


        </div>
      </div>

      {/* Accent underline */}
      <div
        style={{
          width: "120px",
          height: "4px",
          background: accentColour,
          margin: "72px auto 0",
          borderRadius: "4px",
        }}
      />

      {/* Bullet points */}
      <div
        style={{
          marginTop: "56px",
          maxWidth: "720px",
          marginInline: "auto",
          fontSize: isMobile ? "18px" : "22px",
          color: "#38445b",
          lineHeight: 1.5,
          textAlign: "center",
          paddingInline: isMobile ? "12px" : "0",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            marginBottom: "32px",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          In just 4 hours, you will learn…
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            fontWeight: 400,
            fontFamily: "'Playfair Display', serif",
            textAlign: isMobile ? "start" : "center",
          }}
        >
          {[
            <>How to <strong>communicate</strong> effectively with your child</>,
            <>How to <strong>manage phone</strong> and digital device usage</>,
            <>How to instill <strong>discipline</strong> and a <strong>positive</strong> growth <strong>mindset</strong></>,
            <>How to build <strong>responsibility</strong> and <strong>social skills</strong> in your child</>,
          ].map((item, idx) => (
            <li
              key={idx}
              style={{
                position: "relative",
                paddingLeft: "28px",
                fontSize: isMobile ? "18px" : "22px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "8px",
                  width: "8px",
                  height: "8px",
                  background: accentColour,
                  borderRadius: "50%",
                }}
              />
              {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
