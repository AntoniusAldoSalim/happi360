import { useState, useEffect } from "react";
import { FiCheckCircle, FiCalendar, FiMapPin, FiUser } from "react-icons/fi";

/* palette */
const navy = "#1d2556";
const lilacBg = "#e7e9ff";
const btnBg = "#464e9a";
const borderLight = "#eee";
const paleBg = "#fafafb";
const cardBg = "#ffffff";
const textLight = "#7b7e86";

const benefits = [
  "Only 100 seats available",
  "Parents and children welcome",
  "Refreshments will be provided",
  "No obligation to join future programs",
];

const eventDetails = [
  { icon: FiCalendar, title: "Date", info: "18 May" },
  { icon: FiMapPin, title: "Time", info: "13:00 - 17:00" },
  { icon: FiUser, title: "Place", info: "Sukhumvit Park, Bangkok - Marriott Executive Apartments" },
];

export default function Section11() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ background: paleBg, padding: isMobile ? "64px 16px" : "96px 0 120px" }}>
      {/* Main white card */}
      <div
        style={{
          width: "90%",
          maxWidth: "1100px",
          marginInline: "auto",
          background: cardBg,
          borderRadius: "16px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          overflow: "hidden",
          boxShadow: "0 8px 18px rgba(0,0,0,0.06)",
        }}
      >
        {/* Left - Registration */}
        <div style={{ padding: isMobile ? "40px 24px" : "56px 48px", flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? "28px" : "32px",
                color: navy,
                margin: 0,
              }}
            >
              Register for the Event
            </h2>
            <p
              style={{
                fontSize: isMobile ? "16px" : "18px",
                lineHeight: 1.6,
                marginTop: "16px",
                color: navy,
              }}
            >
              Reserve your seats for the whole family to attend the seminar together. <br />
              Registration is completely free of charge!
            </p>
          </div>

          {/* Benefits */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {benefits.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", color: navy }}>
                <FiCheckCircle style={{ color: "#868cff", fontSize: "24px" }} />
                <span style={{ fontSize: isMobile ? "16px" : "18px" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Register Button */}
          <div>
            <button
              style={{
                background: btnBg,
                border: "none",
                marginTop: "20px",
                borderRadius: "50px",
                width: "100%",
                padding: "18px",
                fontSize: "18px",
                fontWeight: 600,
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Register Now
            </button>
            <p
              style={{
                marginTop: "16px",
                fontSize: "14px",
                color: textLight,
                textAlign: "center",
              }}
            >
              Registration closes once all spots are filled
            </p>
          </div>
        </div>

        {/* Right - Event Info */}
        <div style={{ background: lilacBg, padding: isMobile ? "40px 24px" : "56px 48px", flex: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: isMobile ? "22px" : "24px",
              color: navy,
              margin: 0,
            }}
          >
            Event Information
          </h3>

          {/* Event Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {eventDetails.map(({ icon: Icon, title, info }) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontWeight: 600, color: navy }}>
                  <Icon style={{ fontSize: "20px", color: "#868cff" }} />
                  {title}
                </div>
                <div style={{ marginLeft: "32px", color: navy, fontSize: "16px", lineHeight: 1.5 }}>
                  {info}
                </div>
              </div>
            ))}
          </div>

          {/* Quote Box */}
          <div
            style={{
              background: cardBg,
              borderRadius: "12px",
              padding: "24px",
              fontSize: isMobile ? "15px" : "16px",
              fontStyle: "italic",
              lineHeight: 1.5,
              color: navy,
              marginTop: "24px",
              boxShadow: "0 4px 8px rgba(0,0,0,.04)",
            }}
          >
            “Our sharing session is designed to be a warm, welcoming environment where parents
            can gain insights while children engage in meaningful activities. We look forward
            to meeting your family.”
            <div style={{ marginTop: "12px", textAlign: "right", fontWeight: 600 }}>
              - The Milchel Team
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div style={{ marginTop: "72px", textAlign: "center", paddingInline: isMobile ? "12px" : "0" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: isMobile ? "22px" : "26px",
            color: navy,
            marginBottom: "16px",
          }}
        >
          For More Information
        </h3>
        <p
          style={{
            fontSize: isMobile ? "16px" : "18px",
            color: navy,
            marginBottom: "32px",
          }}
        >
          Contact us at: xxx-xxx-xxxx
        </p>
      </div>
    </section>
  );
}
