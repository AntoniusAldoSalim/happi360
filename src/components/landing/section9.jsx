/* ───────── Section 9 – Kids’ activities care block ───────── */
import kidsImg from "../../assets/landing/Happy.jpg";        // update path if needed
import { FiStar, FiAward, FiUsers, FiHeart } from "react-icons/fi";

/* palette (or import from your shared tokens) */
const navy        = "#1d2556";
const creamBg     = "#f7f8fc";
const cardBg      = "#ffffff";
const chipBg      = "#fdeedd";          // soft peach circle behind icons
const borderLight = "#ececec";
const quoteColor  = "#5560a3";

export default function Section9() {
  return (
    <section
      style={{
        width: "100%",
        padding: "96px 0 120px",
        background: creamBg,
      }}
    >
      {/* heading & intro */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "38px",
          color: navy,
          margin: 0,
        }}
      >
        Let your children join the fun!
      </h2>

      {/* two-column layout */}
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          marginTop: '60px',
          marginInline: "auto",
          display: "grid",
          gap: "48px",
          gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
          alignItems: "start",
        }}
      >
        {/* left image */}
        <div>
          <img
            src={kidsImg}
            alt="Children activities"
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 8px 18px rgba(0,0,0,.06)",
            }}
          />
        </div>

      </div>

      {/* quote banner */}
      <div
        style={{
          marginTop: "40px",
          maxWidth: "900px",
          marginInline: "auto",
          background: cardBg,
          borderRadius: "16px",
          padding: "56px 32px",
          textAlign: "center",
          boxShadow: "0 6px 14px rgba(0,0,0,.05)",
        //   fontStyle: "italic",
          fontSize: "20px",
          lineHeight: 1.6,
          color: quoteColor,
        }}
      >
        While you're attending the seminar, your child (ages 6-12) will be participating in activities with Milchel alumni - individuals who went through Happi360 program. Your child will have fun and we guarantee that they will have a blast and go back home feeling rejuvenated!
      </div>
    </section>
  );
}
