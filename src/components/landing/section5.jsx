import { useState, useEffect, useRef } from "react";
import { FiAward, FiCheckCircle, FiLayers } from "react-icons/fi";
import mentorsImg from "../../assets/landing/section5.jpg";

/* Colour tokens */
const navy = "#1d2556";
const paleLilac = "#e7e9ff";
const accentColour = "#d4d9f2";

/* Data */
const pillars = [
  {
    icon: FiAward,
    title: "7 Core Values",
    items: [
      "Magnanimous",
      "Integrity",
      "Loving-kindness",
      "Compassionate",
      "Holistic living",
      "Effort",
      "Leadership",
    ],
  },
  {
    icon: FiCheckCircle,
    title: "5 Key Traits",
    items: ["Awareness", "Discipline", "Responsibility", "Perseverance", "Confidence"],
  },
  {
    icon: FiLayers,
    title: "3-Level Character Care",
    items: [
      "Level 1: Conduct & Mannerism – Good Value & Character",
      "Level 2: Leadership",
      "Level 3: Philanthropy & Humanitarian",
    ],
  },
];

export default function Section5() {
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
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
    <section style={{ padding: isMobile ? "64px 16px" : "96px 0 120px", background: "#f7f8fc", position: "relative" }}>
      {/* Hero Image */}
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
          src={mentorsImg}
          alt="Milchel students engaging with mentors"
          style={{ display: "block", width: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Accent Line */}
      <div
        style={{
          margin: isMobile ? "48px auto 0" : "72px auto 0",
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
          marginTop: isMobile ? "48px" : "72px",
          display: "flex",
          flexDirection: "row",
          flexWrap: isMobile ? "nowrap" : "wrap",
          justifyContent: isMobile ? "flex-start" : "center",
          gap: "24px",
          padding: "0 40px",
          overflowX: isMobile ? "auto" : "visible",
          scrollSnapType: isMobile ? "x mandatory" : "none",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
        className="hide-scrollbar"
      >
        {pillars.map(({ icon: Icon, title, items }, idx) => (
          <div
            key={title}
            style={{
              minWidth: isMobile ? "280px" : "300px",
              maxWidth: isMobile ? "90vw" : "300px",
              flexShrink: 0,
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 18px rgba(0,0,0,.05)",
              padding: isMobile ? "36px 28px" : "48px 40px",
              scrollSnapAlign: isMobile ? "center" : "none",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Icon */}
            <div
              style={{
                alignSelf: "center",
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: paleLilac,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "34px",
                color: navy,
              }}
            >
              <Icon />
            </div>

            {/* Title */}
            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? "20px" : "22px",
                color: navy,
                margin: 0,
              }}
            >
              {title}
            </h4>

            {/* Items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: isMobile ? "15px" : "17px",
                lineHeight: 1.45,
                color: "#38445b",
              }}
            >
              {items.map((txt) => (
                <span key={txt}>{txt}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Mobile Only) */}
      {isMobile && (
        <div
          style={{
            position: "absolute",
            right: "24px",
            bottom: "60px",
            display: "flex",
            gap: "12px",
          }}
        >
        </div>
      )}

      {/* Page Indicators */}
      {isMobile && (
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {pillars.map((_, i) => (
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
