import { useState, useEffect } from "react";
import {
  FiMessageSquare,
  FiUsers,
  FiStar,
  FiBookOpen,
  FiHelpCircle
} from "react-icons/fi";

import { useLang } from "../../i18n/LanguageContext";
import { t }       from "../../i18n/dictionary";
import useTrackSection from "../../hooks/useTrackSection";


const navy = "#1d2556";
const paleCreamBg = "#fdf7ef";
const cardBg = "#ffffff";
const lilacBg = "#e7e9ff";
const accentBeige = "#f1f3fd";



export default function Section5() {
  const [isMobile, setIsMobile] = useState(false);
  const { lang } = useLang();
  const trackRef = useTrackSection("What you will gain from this seminar");   

  const items = [
    {
      icon: FiMessageSquare,
      text:
        lang === "en"
          ? '<strong>14:00</strong> - Mildred and Rachel Yong share "Raising Happy Children in the Age of AI".'
          : '<strong>14:00</strong> - Mildred และ Rachel Yong บรรยายในหัวข้อ<br />“เจาะลึกแนวทางพัฒนาเด็กสมัยใหม่”',
    },
    {
      icon: FiStar,
      text:
        lang === "en"
          ? "<strong>14:30</strong> - Alumni share their stories."
          : "<strong>14:30</strong> - ศิษย์เก่าเล่าเรื่อง",
    },
    {
      icon: FiUsers,
      text:
        lang === "en"
          ? "<strong>15:00</strong> - Experts panel discussion with parent, educator, consultant and Edutech representatives."
          : "<strong>15:00</strong> - ถกคำถามโดยมีตัวแทนจาก ผู้ปกครอง นักวิชาการ และ ที่ปรึกษา",
    },
    {
      icon: FiBookOpen,
      text:
        lang === "en"
          ? "<strong>16:00</strong> - What is Happi360?"
          : "<strong>16:00</strong> - Happi360 คืออะไร​...",
    },
    {
      icon: FiHelpCircle,
      text:
        lang === "en"
          ? "<strong>16:30</strong> - Q&A session addressing current challenges in child upbringing."
          : "<strong>16:30</strong> - Q&A ถามตอบเกี่ยวกับปัญหาที่พบเจอในการเลี้ยงลูกในปัจจุบัน",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={trackRef}
      style={{
        width: "100%",
        padding: isMobile ? "64px 16px" : "96px 0 120px",
        background: paleCreamBg,
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
          margin: isMobile ? "0 20px" : "0px 40px",
        }}
      >
        
      {lang ===  "en" ? "What You'll Gain From This Seminar" : "กำหนดการ"}

      </h2>

      {/* Bullet Card Container */}
      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          marginInline: "auto",
          background: cardBg,
          borderRadius: "16px",
          padding: isMobile ? "40px 24px" : "56px 48px",
          marginTop: isMobile ? "40px" : "80px",
          boxShadow: "0 8px 18px rgba(0,0,0,.05)",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? "24px" : "32px",
        }}
      >


        {/* <p
          style={{
            maxWidth: "820px",
            margin: isMobile ? "24px 0 30px 0px" : "24px 0 30px 60px",
            textAlign: isMobile ? "center" : 'start',
            fontSize: isMobile ? "24px" : "24px",
            lineHeight: 1.6,
            color: navy,
            paddingInline: isMobile ? "0px" : "0",
            fontWeight:'700'
          }}
        >
          {lang ===  "en" ? "Agenda" : "กำหนดการ"}
        
        </p> */}

        {items.map(({ icon: Icon, text }) => (
          <div
            key={text}
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "flex-start" : "center",
              gap: "16px",
              fontSize: isMobile ? "18px" : "20px",
              lineHeight: 1.5,
              color: navy,
            }}
          >
            <span
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: lilacBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                flexShrink: 0,
                color: navy,
              }}
            >
              <Icon />
            </span>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        ))}

        {/* Final Paragraph */}
        <p
          style={{
            maxWidth: "820px",
            margin: "24px auto 0",
            textAlign: "center",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: 1.6,
            color: navy,
            paddingInline: isMobile ? "0px" : "0",

          }}
          dangerouslySetInnerHTML={{ __html: t.sec5note[lang] }}

        />

      </div>
    </section>
  );
}
