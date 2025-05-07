import { useState, useEffect } from "react";
import { FiClock, FiTarget, FiActivity, FiGift, FiUser } from "react-icons/fi";
import G5 from "../../assets/landing/G5.jpg";
import { useLang } from "../../i18n/LanguageContext";
import { t }       from "../../i18n/dictionary";


const headingClr = "#7e2c21";
const bodyClr = "#1d2556";
const creamBg = "#fffaf4";
const cardBg = "#ffffff";
const chipBg = "#fdeedd";
const borderLight = "#eee";

const points = [
  {
    icon: FiClock,
    title: "Full-Day Format",
    desc: "8 hours of action-packed engagement",
  },
  {
    icon: FiTarget,
    title: "Focus & Mindfulness",
    desc: "Mindfulness and focus-building games",
  },
  {
    icon: FiActivity,
    title: "High-Tech Tools",
    desc: "Exploration with brainwave reader tools",
  },
  {
    icon: FiGift,
    title: "Reward System",
    desc: "Tangible rewards for positive behavior",
  },
  {
    icon: FiUser,
    title: "Parent Involvement",
    desc: "A final parent-child debrief session to continue the momentum at home",
  },
];

export default function Section10() {
  const [isMobile, setIsMobile] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // run immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ padding: isMobile ? "64px 16px" : "96px 0 120px", background: creamBg }}>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: isMobile ? "32px" : "38px",
          color: headingClr,
          margin: 0,
          paddingInline: isMobile ? "12px" : "0",
        }}
      >
        {lang ===  "en" ? "Try the 1-Day Kids Experience" : "ร่วมคอร์สทดลองหลักสูตร 1 วัน!"}


      </h2>

      {/* Paragraph */}
      <p
        style={{
          maxWidth: "750px",
          margin: "24px auto 40px",
          textAlign: "center",
          fontSize: isMobile ? "16px" : "18px",
          lineHeight: 1.6,
          color: bodyClr,
          paddingInline: isMobile ? "12px" : "0",
        }}
        dangerouslySetInnerHTML={{ __html: t.sec8Body[lang] }}
      />

      {/* Grid of Cards */}
      {/* <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
          width: "90%",
          maxWidth: "1000px",
          marginInline: "auto",
        }}
      >
        {points.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            style={{
              background: cardBg,
              borderRadius: "16px",
              padding: isMobile ? "28px 20px" : "38px 30px",
              border: `1px solid ${borderLight}`,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: chipBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: headingClr,
              }}
            >
              <Icon />
            </div>

            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "16px",
                color: headingClr,
                margin: 0,
              }}
            >
              {title}
            </h4>

            <p style={{ fontSize: "14px", lineHeight: 1.5, color: bodyClr, margin: 0 }}>
              {desc}
            </p>
          </div>
        ))}
      </div> */}

      {/* Note Banner */}
      <div
        style={{
          marginTop: "40px",
          background: cardBg,
          borderRadius: "16px",
          padding: isMobile ? "32px 24px" : "36px 32px",
          maxWidth: "600px",
          marginInline: "auto",
          textAlign: "center",
          boxShadow: "0 6px 14px rgba(0,0,0,.05)",
          fontSize: isMobile ? "15px" : "16px",
          lineHeight: 1.6,
          color: headingClr,
          marginBottom: isMobile ? "60px" : "80px",
        }}
        dangerouslySetInnerHTML={{ __html: t.sec8Note[lang] }}
      />

        {/* Image */}
      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "1100px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,.08)",
        }}
      >
        <img
          src={G5}
          alt="Milchel students engaging with mentors"
          style={{ display: "block", width: "100%", objectFit: "cover" }}
        />
      </div>
      
    </section>
  );
}
