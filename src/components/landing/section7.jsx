import { useState, useEffect } from "react";

import amImg from "../../assets/landing/section7/am.jpg";
import peImg from "../../assets/landing/section7/p.jpg";
import oakImg from "../../assets/landing/section7/oak.jpg";
import pepImg from "../../assets/landing/section7/pep.jpg";
import coverImg from "../../assets/landing/section7/friends.jpg";

const headingColour = "#7e2c21";
const bodyNavy = "#a36253";
const cardBg = "#ffffff";
const quoteMark = "#d7c9b8";

const testimonials = [
  {
    img: amImg,
    quote:
      "Michel wasn't just a dorm or temporary stay—it felt like family. There were always brothers, sisters, and friends looking out for one another. They offered many activities that helped us grow, like clubs and various sports that allowed us to develop leadership, responsibility, and collaboration skills. I truly enjoyed being part of this nurturing community!",
    name: "Boonyawee Boonsongkor (Am)",
    initial: "B",
  },
  {
    img: peImg,
    quote:
      "Michel wasn't just a dorm or temporary stay—it felt like family. There were always brothers, sisters, and friends looking out for one another. They offered many activities that helped us grow, like clubs and various sports that allowed us to develop leadership, responsibility, and collaboration skills. I truly enjoyed being part of this nurturing community!",
    name: "Chakrid Aussavasirisilp (Pe)",
    initial: "C",
  },
  {
    img: oakImg,
    quote:
      "Michel's activities were incredibly beneficial and helped me develop key life skills—like teamwork, collaboration, and effective communication. Beyond that, Michel gave me the chance to meet new friends and build meaningful relationships.",
    name: "Kankavee Pipatsawetwanan (Oak)",
    initial: "K",
  },
  {
    img: pepImg,
    quote:
      "Living at Michel encouraged me to try new activities, meet new people, and step outside my comfort zone. I learned valuable skills that schools don't always teach—like planning, teamwork, cultural awareness, and discipline. These are things I carry with me even now, and I can apply them in many parts of my life.",
    name: "Thornthun Kitjasateanphun (Pep)",
    initial: "T",
  },
];

export default function Section7() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const visible = expanded ? testimonials : testimonials.slice(0, 3);

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
        background: "#fcf9f4",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: isMobile ? "32px" : "38px",
          color: headingColour,
          margin: 0,
          paddingInline: isMobile ? "12px" : "0",
        }}
      >
        Voices of Our Grown-Up Students
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "780px",
          margin: "24px auto 56px",
          fontSize: isMobile ? "16px" : "18px",
          lineHeight: 1.6,
          color: bodyNavy,
          paddingInline: isMobile ? "12px" : "0",
        }}
      >
        The true impact of the Happi360 method is reflected in the lives of those who grew up
        with it. Here's what some alumni have to say — years after leaving the program.
      </p>

      {/* Cover Image */}
      <img
        src={coverImg}
        alt="Alumni friends together"
        style={{
          display: "block",
          width: isMobile ? "260px" : "340px",
          maxWidth: "90%",
          marginInline: "auto",
          borderRadius: "12px",
          boxShadow: "0 8px 18px rgba(0,0,0,.06)",
        }}
      />

      {/* Testimonials Grid */}
      <div
        style={{
          marginTop: isMobile ? "48px" : "72px",
          display: "grid",
          gap: "24px",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))",
          width: "90%",
          maxWidth: "1100px",
          marginInline: "auto",
        }}
      >
        {visible.map(({ img, quote, name, initial }) => (
          <div
            key={name}
            style={{
              background: cardBg,
              borderRadius: "16px",
              padding: isMobile ? "32px 24px" : "48px 40px 32px",
              position: "relative",
              boxShadow: "0 6px 14px rgba(0,0,0,.05)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Decorative quote mark */}
            <span
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                fontSize: "32px",
                lineHeight: 1,
                color: quoteMark,
                fontFamily: "serif",
              }}
            >
              99
            </span>

            {/* Avatar */}
            {img && (
              <img
                src={img}
                alt={name}
                style={{
                  width: "74px",
                  height: "74px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  alignSelf: "center",
                }}
              />
            )}

            {/* Quote */}
            <p
              style={{
                fontStyle: "italic",
                fontSize: isMobile ? "16px" : "18px",
                lineHeight: 1.6,
                color: bodyNavy,
                margin: 0,
                whiteSpace: "pre-line",
                textAlign: "center",
              }}
            >
              {quote}
            </p>

            {/* Name */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", justifyContent: "center" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: quoteMark,
                  color: bodyNavy,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {initial}
              </div>
              <div style={{ fontSize: "16px", color: bodyNavy }}>— <strong>{name}</strong></div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {testimonials.length > 3 && (
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            style={{
              border: 0,
              background: "transparent",
              color: headingColour,
              fontSize: "18px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}

      {/* CTA Banner */}
      <div
        style={{
          marginTop: isMobile ? "64px" : "96px",
          background: cardBg,
          borderRadius: "16px",
          padding: isMobile ? "32px 24px" : "48px 32px",
          maxWidth: "900px",
          marginInline: "auto",
          textAlign: "center",
          boxShadow: "0 6px 14px rgba(0,0,0,.05)",
          fontSize: isMobile ? "16px" : "18px",
          lineHeight: 1.6,
          color: bodyNavy,
          marginBottom: isMobile ? "40px" : "0",
        }}
      >
        Experience the same transformative approach that has shaped these remarkable
        individuals.
        <br />
        <strong>
          Join us for our special sharing session and discover how your child can benefit too.
        </strong>
      </div>
    </section>
  );
}
