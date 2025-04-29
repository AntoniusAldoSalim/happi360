import { useState, useEffect, useRef } from "react";

import amImg from "../../assets/landing/section7/am.jpg";
import peImg from "../../assets/landing/section7/p.jpg";
import oakImg from "../../assets/landing/section7/oak.jpg";
import pepImg from "../../assets/landing/section7/pep.jpg";
import coverImg from "../../assets/landing/section7/friends.jpg";
import Arrow from '../../assets/icons/large-arrow-right.svg';

/* Colors */
/* colour tokens */
const headingClr = "#7e2c21";
const bodyClr    = "#a36253";
const cardBg     = "#ffffff";
const quoteMark  = "#d7c9b8";

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
  const [isMobile, setIsMobile] = useState(false);
  const [current,   setCurrent] = useState(0);           // active page for mobile dots
  const scrollRef               = useRef(null);

  /* ───── responsive flag ───── */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    onResize();                       // run once at mount
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ───── page tracking only on mobile ───── */
  const handleScroll = () => {
    if (!isMobile || !scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const pageWidth  = scrollRef.current.offsetWidth;      // one “page” = full viewport width
    setCurrent(Math.round(scrollLeft / pageWidth));
  };

  return (
    <section
      style={{
        width: "100%",
        padding: isMobile ? "64px 16px" : "96px 0 120px",
        background: "#fcf9f4",
      }}
    >
      {/* heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: isMobile ? "32px" : "38px",
          color: headingClr,
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
          fontSize: isMobile ? "16px" : "18px",
          lineHeight: 1.6,
          color: bodyClr,
        }}
      >
        The true impact of the Happi360 method is reflected in the lives of those who grew up
        with it. Here’s what our alumni say — even years later.
      </p>

      {/* cover image */}
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
          marginBottom: "56px",
        }}
      />

      {/* ───────── testimonials container ───────── */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: isMobile ? "auto" : "visible",
          scrollSnapType: isMobile ? "x mandatory" : "none",
          scrollBehavior: "smooth",
          flexWrap: isMobile ? "nowrap" : "wrap",
          justifyContent: isMobile ? "flex-start" : "center",
          gap: "24px",
          padding: "0 5%",
          scrollbarWidth: "none",
        }}
        className="hide-scrollbar"     /* hide WebKit scrollbar via global CSS */
      >
        {testimonials.map(({ img, quote, name, initial }) => (
          <div
            key={name}
            style={{
              background: cardBg,
              borderRadius: "16px",
              minWidth: isMobile ? "300px" : "260px",
              maxWidth: isMobile ? "320px" : "300px",
              flexShrink: 0,
              padding: "32px 28px",
              scrollSnapAlign: isMobile ? "center" : "none",
              boxShadow: "0 6px 14px rgba(0,0,0,.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              gap: "48px",
            }}
          >
            {/* decorative quote mark */}
            <span
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                fontSize: "28px",
                color: quoteMark,
              }}
            >
              99
            </span>

            {/* avatar */}
            {img && (
              <img
                src={img}
                alt={name}
                style={{
                  width: "74px",
                  height: "74px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            )}

            {/* quote */}
            <p
              style={{
                fontStyle: "italic",
                fontSize: "16px",
                lineHeight: 1.6,
                color: bodyClr,
                margin: 0,
              }}
            >
              {quote}
            </p>

            {/* name */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: quoteMark,
                  color: bodyClr,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {initial}
              </div>
              <strong style={{ fontSize: "16px", color: bodyClr }}>– {name}</strong>
            </div>
          </div>
        ))}
      </div>

      {/* dot indicators – mobile-only */}
      {isMobile && (
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {testimonials.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === current ? "24px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background: i === current ? headingClr : quoteMark,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}