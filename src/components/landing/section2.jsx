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
        It takes a village to raise a child
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
            Over the past two decades, we've watched more children struggle with screen
            addiction, loneliness, and emotional burnout — even as they excel academically.
            That's why <strong>Milchel</strong> created a nurturing, values-based way to raise
            children who are both strong and kind — long before this became a trend.
          </p>
          <p>
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
          In just 4&nbsp;hours, you will learn…
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
            "How to communicate effectively with your child",
            "How to manage phone and digital device usage",
            "How to instill discipline and a positive growth mindset",
            "How to build responsibility and social skills in your child",
          ].map((item) => (
            <li
              key={item}
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
