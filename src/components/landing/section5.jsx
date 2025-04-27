/* ───────── Section 5  –  Method pillars ───────── */
import { FiAward, FiCheckCircle, FiLayers } from "react-icons/fi";
import mentorsImg from "../../assets/landing/section5.jpg";

/* colour tokens (or import your central file) */
const navy         = "#1d2556";
const paleLilac    = "#e7e9ff";
const accentColour = "#d4d9f2";


/* data */
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
    return (
      <section style={{ padding: "96px 0 120px", background: "#f7f8fc" }}>
        {/* ────────── Hero image ────────── */}
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
          <div
            style={{
              position: "absolute",
              insetInlineStart: 0,
              insetBlockEnd: 0,
              width: "100%",
              background: "rgba(0,0,0,.55)",
              color: "#fff",
              fontSize: "14px",
              padding: "6px 12px",
            }}
          >
            [Placeholder: Milchel students engaging with mentors]
          </div>
        </div>
  
        {/* accent line */}
        <div
          style={{
            margin: "72px auto 0",
            width: "120px",
            height: "4px",
            background: accentColour,
            borderRadius: "4px",
          }}
        />
  
        {/* ────────── Pillar cards ────────── */}
        <div
          style={{
            marginTop: "72px",
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            width: "90%",
            maxWidth: "1100px",
            marginInline: "auto",
          }}
        >
          {pillars.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow: "0 8px 18px rgba(0,0,0,.05)",
                padding: "48px 40px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {/* icon */}
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
  
              {/* title */}
              <h4
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: navy,
                  margin: 0,
                }}
              >
                {title}
              </h4>
  
              {/* content lines (no numbering, no bullets) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "17px",
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
      </section>
    );
  }