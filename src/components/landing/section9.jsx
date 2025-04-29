import { useState, useEffect, useRef } from "react";

import kulImg from "../../assets/landing/panelist/kul.jpg";
import praewImg from "../../assets/landing/panelist/praew.jpg";
import careImg from "../../assets/landing/panelist/care.jpg";

const navy = "#1d2556";
const accentColour = "#d29c4b";

const experts = [
  {
    img: kulImg,
    name: "Kulwanee Meedeng (Kul)",
    title: "Senior Product Specialist, Audimed & Medical Product Company Thailand",
    bio: `<strong> 7 years of experience </strong> in <strong> neurology </strong> and <strong> medical products </strong>. Master's degree in Biomedical Engineering.`,
  },
  {
    img: praewImg,
    name: "Nichapat Prapasil (Praew)",
    title: "Senior Care Supervisor, OpenSchool for Creatives and Design",
    bio: `<strong>12 years of experience as a consultant.</strong> Degree in Education specializing in Psychology of Guidance. Engaging with families to nurture future generations.`,
  },
  {
    img: careImg,
    name: "Patsuda Yuthakram (Care)",
    title: "Head of Care Supervisor, OpenSchool for Creatives and Design",
    bio: `<strong>12 years of teaching experience</strong> at Mater Dei School and OpenSchool for Creatives and Design, Patsuda has worked closely with children from diverse backgrounds.`,
  },
];

export default function Section6() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize immediately
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setCurrent(index);
    }
  };

  const scrollByCard = (dir) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: dir * width, behavior: "smooth" });
    }
  };

  return (
    <section style={{ padding: "96px 0 120px", background: "#ffffff", position: "relative" }}>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "38px",
          lineHeight: 1.3,
          color: navy,
          margin: 0,
          maxWidth: "800px",
          marginInline: "auto",
          paddingInline: "16px",
        }}
      >
        For this seminar, we have invited leading experts in child development.
      </h2>

      {/* Accent Bar */}
      <div
        style={{
          margin: "40px auto 72px",
          width: "120px",
          height: "4px",
          background: accentColour,
          borderRadius: "4px",
        }}
      />

      {/* Scrollable (Mobile) / Flex Grid (Desktop) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: isMobile ? "nowrap" : "wrap",        // ✅ nowrap for mobile, wrap for desktop
          justifyContent: isMobile ? "flex-start" : "center",
          gap: "24px",
          padding: "0 40px",
          overflowX: isMobile ? "auto" : "visible",       // ✅ scrolling only mobile
          scrollSnapType: isMobile ? "x mandatory" : "none",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",                         // hide Firefox scrollbar
        }}
        className="hide-scrollbar" // chrome scrollbar hide
      >
        {experts.map(({ img, name, title, bio }) => (
          <div
            key={name}
            style={{
              minWidth: isMobile ? "280px" : "320px",
              maxWidth: isMobile ? "90vw" : "320px",
              flexShrink: 0,
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 18px rgba(0,0,0,.06)",
              padding: "32px 24px",
              scrollSnapAlign: isMobile ? "center" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={img}
              alt={name}
              style={{
                width: "150px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "16px",
              }}
            />
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "22px",
                color: navy,
                margin: "8px 0",
              }}
            >
              {name}
            </h3>
            <p
              style={{
                fontWeight: 600,
                fontSize: "16px",
                color: navy,
                marginBottom: "16px",
              }}
            >
              {title}
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "#38445b",
                lineHeight: 1.5,
              }}
              dangerouslySetInnerHTML={{ __html: bio }}
            />
          </div>
        ))}
      </div>


      {/* Page Indicators */}
      {isMobile && (
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {experts.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === current ? "24px" : "10px",
                height: "10px",
                borderRadius: "999px",
                background: i === current ? "#565fb0" : "#ccc",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
