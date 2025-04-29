import { useState, useEffect } from "react";
import foundersImg from "../../assets/landing/section4/Mildred and Rachel.jpg";

/* Shared colours */
const navy = "#1d2556";
const accentColour = "#d4d9f2";

export default function Section4() {
  const [isMobile, setIsMobile] = useState(false);

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
        background: "#f9fafb",
      }}
    >
      {/* ─────── Image wrapper ─────── */}
      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "600px",
          marginInline: "auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 22px rgba(0,0,0,.08)",
        }}
      >
        <img
          src={foundersImg}
          alt="Michel sisters with students"
          style={{
            display: "block",
            width: "100%",
            objectFit: "cover",
          }}
        />

        {/* Carousel dots (static)
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "10px",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
          }}
        >
          {["#424242", "#8c8c8c", "#8c8c8c"].map((c, i) => (
            <span
              key={i}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: c,
              }}
            />
          ))}
        </div> */}
      </div>

      {/* ─────── Text block ─────── */}
      <div
        style={{
          marginTop: isMobile ? "48px" : "72px",
          width: "90%",
          maxWidth: "900px",
          marginInline: "auto",
          textAlign: "center",
          color: navy,
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: isMobile ? "30px" : "36px",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          Meet the Founders of the Happi360 Program!
        </h2>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: 1.6,
            margin: "32px 0 48px",
            maxWidth: "720px",
            marginInline: "auto",
            paddingInline: isMobile ? "8px" : "0",
          }}
        >
          Mildred and Rachel Yong are the founders of Milchel, a student residence established in 1997.
          What began as a small dormitory for international students soon evolved into something much more—thanks to their shared vision of providing a nurturing space that supported students academically, emotionally, mentally, and physically.
        </p>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: isMobile ? "22px" : "26px",
            margin: "60px 0 24px",
            paddingInline: isMobile ? "8px" : "0",
          }}
        >
          Their goal: <strong>To raise children with values and emotional strength.</strong>
        </h3>

        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: 1.6,
            maxWidth: "720px",
            marginInline: "auto",
            paddingInline: isMobile ? "8px" : "0",
          }}
        >
          Even though the path they chose wasn't easy, it became incredibly fulfilling when they saw the results—children growing up with kindness, values, and empathy—they knew it was all worth it. Their approach has since gained trust from students, parents, and teachers alike — <strong>inspiring and transforming lives for generations.</strong>
        </p>

        {/* Accent Line */}
        <div
          style={{
            marginTop: "64px",
            width: "120px",
            height: "4px",
            background: accentColour,
            marginInline: "auto",
            borderRadius: "4px",
          }}
        />
      </div>
    </section>
  );
}
