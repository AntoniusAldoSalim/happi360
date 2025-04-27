/* ───────── Section 7 – Alumni voices (no ageRole) ───────── */
import { useState } from "react";

import amImg  from "../../assets/landing/section7/am.jpg";
import peImg  from "../../assets/landing/section7/p.jpg";
import oakImg from "../../assets/landing/section7/oak.jpg";
import pepImg from "../../assets/landing/section7/pep.jpg";
import coverImg from "../../assets/landing/section7/friends.jpg"; // header image

/* palette */
const headingColour = "#7e2c21";
const bodyNavy      = "#a36253";
const cardBg        = "#ffffff";
const quoteMark     = "#d7c9b8";

/* testimonials (no ageRole now) */
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
  /* add more objects here if needed */
];

export default function Section7() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? testimonials : testimonials.slice(0, 3);

  return (
    <section
      style={{
        width: "100%",
        padding: "96px 0 120px",
        background: "#fcf9f4",
      }}
    >
      {/* heading & intro */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "38px",
          color: headingColour,
          margin: 0,
        }}
      >
        Voices of Our Grown-Up Students
      </h2>

      <p
        style={{
          textAlign: "center",
          maxWidth: "780px",
          margin: "24px auto 56px",
          fontSize: "18px",
          lineHeight: 1.6,
          color: bodyNavy,
        }}
      >
        The true impact of the Happi360 method is reflected in the lives of those who grew up
        with it. Here's what some alumni have to say — years after leaving the program.
      </p>

      {/* illustrative image */}
      <img
        src={coverImg}
        alt="Alumni friends together"
        style={{
          display: "block",
          width: "340px",
          maxWidth: "90%",
          marginInline: "auto",
          borderRadius: "12px",
          boxShadow: "0 8px 18px rgba(0,0,0,.06)",
        }}
      />

      {/* testimonial grid */}
      <div
        style={{
          marginTop: "72px",
          display: "grid",
          gap: "32px",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
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
              padding: "48px 40px 32px",
              position: "relative",
              boxShadow: "0 6px 14px rgba(0,0,0,.05)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* decorative quote mark */}
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

            {/* photo (optional) */}
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

            <p
              style={{
                fontStyle: "italic",
                fontSize: "18px",
                lineHeight: 1.6,
                color: bodyNavy,
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {quote}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
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

      {/* show-more toggle */}
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

      {/* closing CTA banner */}
      <div
        style={{
          marginTop: "96px",
          background: cardBg,
          borderRadius: "16px",
          padding: "48px 32px",
          maxWidth: "900px",
          marginInline: "auto",
          textAlign: "center",
          boxShadow: "0 6px 14px rgba(0,0,0,.05)",
          fontSize: "18px",
          lineHeight: 1.6,
          color: bodyNavy,
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
