import { useState, useEffect } from "react";
import kidsImg from "../../assets/landing/Happy.webp";
import { useLang } from "../../i18n/LanguageContext";
import { t }       from "../../i18n/dictionary";

const navy = "#1d2556";
const creamBg = "#f7f8fc";
const cardBg = "#ffffff";
const chipBg = "#fdeedd";
const borderLight = "#ececec";
const quoteColor = "#5560a3";

export default function Section9() {
  const [isMobile, setIsMobile] = useState(false);
  const { lang } = useLang();

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
        background: creamBg,
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: isMobile ? "32px" : "38px",
          color: navy,
          margin: 0,
          paddingInline: isMobile ? "12px" : "0",
        }}
      >
        
        {lang ===  "en" ? "Let Your Children Join the Fun!" : "พาลูก ๆ ของท่านมาร่วมสนุกกัน!"}

      </h2>

      {/* Two-column layout */}
      <div
        style={{
          width: "90%",
          maxWidth: "900px",
          marginTop: isMobile ? "32px" : "60px",
          marginInline: "auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "32px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div style={{ flex: 1 }}>
          <img
            src={kidsImg}
            alt="Children activities"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 8px 18px rgba(0,0,0,.06)",
            }}
          />
        </div>
      </div>

      {/* Quote banner */}
      <div
        style={{
          marginTop: isMobile ? "32px" : "40px",
          maxWidth: "900px",
          marginInline: "auto",
          background: cardBg,
          borderRadius: "16px",
          padding: isMobile ? "32px 24px" : "56px 32px",
          textAlign: "center",
          boxShadow: "0 6px 14px rgba(0,0,0,.05)",
          fontSize: isMobile ? "18px" : "20px",
          lineHeight: 1.6,
          color: quoteColor,
          fontFamily: "'Playfair Display', serif",
        }}
        dangerouslySetInnerHTML={{ __html: t.sec7Note[lang] }}
      />
    </section>
  );
}
