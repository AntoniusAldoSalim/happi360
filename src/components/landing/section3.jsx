/* ───────── Section 3  –  Track-record facts ───────── */
import groupImg from "../../assets/section3.jpg";

/* brand tokens (or import from shared file) */
const headingColour = "#1d2556";
const factBg        = "#e7e9ff";   // pale lilac
const accentColour  = "#d29c4b";   // ochre (for the border line)

const facts = [
  { tag: "26 Years",  text: "Global experience in child development" },
  { tag: "1,000+ Students", text: "Our alumni have grown to be confident, resilient, and empathetic individuals. These values are passed on to every new generation of our students." },
  { tag: "360°", text: "A holistic child-development approach designed specifically for the modern world" },
];

export default function Section3() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "96px 0 120px",
        width: "100%",
      }}
    >
        
      {/* ─────────── Group photo ─────────── */}
      <img
        src={groupImg}
        alt="Michel community group"
        style={{
          display: "block",
          width: "90%",
          maxWidth: "1100px",
          marginInline: "auto",
          borderRadius: "12px",
          objectFit: "cover",
          boxShadow: "0 10px 22px rgba(0,0,0,.08)",
        }}
      />

      {/* ─────────── Facts list ─────────── */}
      <div
        style={{
          marginTop: "72px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "90%",
          maxWidth: "960px",
          marginInline: "auto",
        }}
      >
        {facts.map(({ tag, text }) => (
          <div
            key={tag}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              alignItems: "center",
              gap: "32px",
            }}
          >
            {/* left pill */}
            <div
              style={{
                background: factBg,
                padding: "22px 12px",
                textAlign: "center",
                borderRadius: "8px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "28px",
                color: headingColour,
                lineHeight: 1.2,
              }}
            >
              {tag}
            </div>

            {/* right explanatory text */}
            <p
              style={{
                margin: 0,
                fontSize: "22px",
                lineHeight: 1.45,
                color: "#38445b",
              }}
            >
              {text}
            </p>
          </div>
        ))}

        {/* small accent line */}
        <div
          style={{
            height: "4px",
            width: "140px",
            background: accentColour,
            margin: "64px auto 0",
            borderRadius: "4px",
          }}
        />
      </div>
    </section>
  );
}
