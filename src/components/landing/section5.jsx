import { useState, useEffect } from "react";
import {
  FiMessageSquare,
  FiUsers,
  FiStar,
  FiBookOpen,
  FiCheck,
  FiGift,
} from "react-icons/fi";

const navy = "#1d2556";
const paleCreamBg = "#fdf7ef";
const cardBg = "#ffffff";
const lilacBg = "#e7e9ff";
const accentBeige = "#f1f3fd";

const items = [
  {
    icon: FiMessageSquare,
    text:
      "Learn modern strategies to help your child grow with <strong> confidence </strong> and <strong> happiness</strong>  in today's world",
  },
  {
    icon: FiUsers,
    text:
      "Dive into real parenting challenges and explore <strong> practical solutions</strong> with panel of experts.",
  },
  {
    icon: FiStar,
    text:
      "Hear <strong>real-life stories</strong> from <strong>former students </strong>who grew up with Milchel, under Happi360 approach.",
  },
  {
    icon: FiBookOpen,
    text:
      "Engage in open conversations and <strong>exchange insights with experts</strong>. You'll leave with simple,<strong> practical strategies<strong> you can apply immediately.",
  },
];

export default function Section8() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
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
        What You'll Gain From This Seminar
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
            fontSize: isMobile ? "18px" : "20px",
            lineHeight: 1.6,
            color: navy,
            paddingInline: isMobile ? "12px" : "0",
          }}
        >
          This seminar is <strong>not</strong> a product pitch or sales event. It's a space
          for <strong>connection, sharing, and exploring</strong> modern parenting approaches that empower your
          children to grow up happy and prepared for today's world.
        </p>
      </div>
    </section>
  );
}
