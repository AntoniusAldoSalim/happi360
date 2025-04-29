import { useState, useEffect } from "react";
import { FiCheckCircle, FiCalendar, FiMapPin, FiUser, FiPhone } from "react-icons/fi";

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
  { icon: FiCalendar, title: "Date", info: "Sunday, 18th May 2025" },
  { icon: FiMapPin, title: "Time", info: "13:00 - 17:00" },
  { icon: FiUser, title: "Venue", info: "Sukhumvit Park, Bangkok - Marriott Executive Apartments", link: "https://g.co/kgs/eqHDqSg" },
];

/***** 2. lightweight Messenger SVG component *****/
const MessengerSVG = ({ size = 24, color = "#0084FF" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Facebook Messenger"
    style={{ display: "block" }}
  >
    {/* single-colour Messenger mark */}
    <path d="M256 32C132.3 32 32 125.4 32 240c0 66.4 35.3 124.9 90.4 162.9V480l83.1-45.6c15.4 4.3 31.6 6.6 50.5 6.6 123.7 0 224-93.4 224-208S379.7 32 256 32zm39.2 257.4l-53-56.3-94 56.3 105.4-112.1 53 56.3 94-56.3-105.4 112.1z"/>
  </svg>
);

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
              onClick={() => window.open("https://forms.gle/9Dcnm78H3qz3oVqr6", "_blank")}
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
            {eventDetails.map(({ icon: Icon, title, info, link }) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", gap: "4px", fontWeight: 600, color: navy }}>
            <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Icon style={{ width:'25px', height:'25px',  flexShrink: 0  }}/>
              
                {/* Text (Label + Value) */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px" }}>{title}</span>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: navy,
                        textDecoration: "underline",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      {info}
                    </a>
                  ) : (
                    <span style={{ fontSize: "16px" }}>{info}</span>
                  )}
                </div>
                
              </span>
              
            </div>
            ))}
          </div>

        </div>
      </div>

      {/* Contact Us */}
      <div style={{ marginTop:  isMobile ? "40px": "100px", textAlign: "center", paddingInline: isMobile ? "12px" : "0" }}>
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

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            fontSize: isMobile ? "16px" : "18px",
            color: navy,
            marginBottom: "0px",
          }}
        >
          <a
            href="tel:0852998866"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#6B7FAA",          // grey-blue
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            <FiPhone size={22} />
            085-299-8866
          </a>
          {/* messenger */}
          <a
            href="https://www.facebook.com/Happi360.TH/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: isMobile ? 16 : 18,
              color: navy,
              textDecoration: "none",
            }}
          >
            <MessengerSVG size={22} />
            Facebook Messenger
          </a>
        </div>
      </div>
    </section>
  );
}
