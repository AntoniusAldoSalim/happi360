import { useState, useEffect } from "react";
import groupImg from "../../assets/section3.jpg";

/* brand tokens */
const headingColour = "#1d2556";
const factBg = "#e7e9ff"; // pale lilac
const accentColour = "#d29c4b"; // ochre

const facts = [
  { tag: "26 Years", text: "Global experience in child development" },
  { tag: "1,000+ Students", text: "Our alumni have grown to be confident, resilient, and empathetic individuals. These values are passed on to every new generation of our students." },
  { tag: "360°", text: "A holistic child-development approach designed specifically for the modern world" },
];

export default function Section3() {
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
        background: "#ffffff",
        padding: isMobile ? "64px 16px" : "96px 0 120px",
        width: "100%",
      }}
    >
      {/* ───── Group Photo ───── */}
      <img
        src={groupImg}
        alt="Michel community group"
        style={{
          display: "block",
          width: "90%",
          maxWidth: "1100px",
          marginInline: "auto",
          borderRadius: "12px",
          objectFit: "cover",
          boxShadow: "0 10px 22px rgba(0,0,0,.08)",
        }}
      />

      {/* ───── Facts List ───── */}
      <div
        style={{
          marginTop: isMobile ? "48px" : "72px",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "32px" : "40px",
          width: "90%",
          maxWidth: "960px",
          marginInline: "auto",
        }}
      >
        {facts.map(({ tag, text }) => (
          <div
            key={tag}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: isMobile ? "16px" : "32px",
              textAlign: isMobile ? "center" : "start",
            }}
          >
            {/* left pill */}
            <div
              style={{
                background: factBg,
                padding: "18px 12px",
                textAlign: "center",
                borderRadius: "8px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? "24px" : "28px",
                color: headingColour,
                lineHeight: 1.2,
                minWidth: isMobile ? "auto" : "160px",
              }}
            >
              {tag}
            </div>

            {/* right explanatory text */}
            <p
              style={{
                margin: 0,
                fontSize: isMobile ? "18px" : "22px",
                lineHeight: 1.5,
                color: "#38445b",
              }}
            >
              {text}
            </p>
          </div>
        ))}

        {/* ───── Accent Line ───── */}
        <div
          style={{
            height: "4px",
            width: "140px",
            background: accentColour,
            margin: "64px auto 0",
            borderRadius: "4px",
          }}
        />
      </div>
    </section>
  );
}
