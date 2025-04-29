import { useState, useEffect } from "react";
import founders2 from "../../assets/landing/Founder2.jpg";

/* Shared colours */
const navy = "#1d2556";
const accentColour = "#d4d9f2";

export default function Section4() {
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
        background: "#f9fafb",
      }}
    >
      {/* ─────── Image wrapper ─────── */}
      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "600px",
          marginInline: "auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,.08)",
        }}
      >
        <img
          src={founders2}
          alt="Michel sisters with students"
          style={{
            display: "block",
            width: "100%",
            minHeight:'180px',
            objectFit: "cover",
          }}
        />

      </div>

      {/* ─────── Text block ─────── */}
      <div
        style={{
          marginTop: isMobile ? "48px" : "72px",
          width: "90%",
          maxWidth: "900px",
          marginInline: "auto",
          textAlign: "center",
          color: navy,
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: isMobile ? "30px" : "36px",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          Meet the Founders of the Happi360 Program!
        </h2>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: 1.6,
            margin: "32px 0 48px",
            maxWidth: "750px",
            marginInline: "auto",
            paddingInline: isMobile ? "8px" : "0",
          }}
        >
          Mildred and Rachel started <strong> <a href="https://milchel.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "underline", fontWeight:700 }}>Milchel</a></strong> a small dormitory for international students <strong>since 1997</strong>.
          <br /><br />
          With a commitment to nurturing <strong>children's values and emotional strength</strong>, their shared vision has positively impacted over 1,000 students <strong>academically, emotionally, mentally, and physically</strong> — inspiring and transforming lives for generations.
        </p>



        {/* Accent Line */}
        <div
          style={{
            marginTop: "64px",
            width: "120px",
            height: "4px",
            background: accentColour,
            marginInline: "auto",
            borderRadius: "4px",
          }}
        />
      </div>
    </section>
  );
}
