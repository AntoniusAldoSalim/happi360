/* ───────── Section 10 – 4-Day Kids Experience (optional) ───────── */
import { FiClock, FiTarget, FiActivity, FiGift, FiUser } from "react-icons/fi";

/* brand palette (or import your central tokens) */
const headingClr  = "#7e2c21";
const bodyClr     = "#1d2556";
const creamBg     = "#fffaf4";
const cardBg      = "#ffffff";
const chipBg      = "#fdeedd";
const borderLight = "#eee";

const points = [
  {
    icon: FiClock,
    title: "Full-Day Format",
    desc: "8 hours of action-packed engagement",
  },
  {
    icon: FiTarget,
    title: "Focus & Mindfulness",
    desc: "Mindfulness and focus-building games",
  },
  {
    icon: FiActivity,
    title: "High-Tech Tools",
    desc: "Exploration with brainwave reader tools",
  },
  {
    icon: FiGift,
    title: "Reward System",
    desc: "Tangible rewards for positive behavior",
  },
  {
    icon: FiUser,
    title: "Parent Involvement",
    desc: "A final parent-child debrief session to continue the momentum at home",
  },
];

export default function Section10() {
  return (
    <section style={{ padding: "96px 0 120px", background: creamBg }}>
      {/* Heading & intro */}
      <h2
        style={{
          textAlign: "center",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "38px",
          color: headingClr,
          margin: 0,
        }}
      >
        Try the 1-Day Kids Experience&nbsp;
      </h2>

      <p
        style={{
          maxWidth: "750px",
          margin: "24px auto 72px",
          textAlign: "center",
          fontSize: "18px",
          lineHeight: 1.6,
          color: bodyClr,
        }}
      >
        For parents who are curious to see the method in action, we're offering a special
        1-day mini experience focused on reducing excessive screen time. It's designed to be
        fun, eye-opening, and practical — using our Happi360 approach.
      </p>

      {/* Grid of cards */}
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(3, 1fr)",   // 👈 force 3 cards per row
          width: "90%",
          maxWidth: "750px",
          marginInline: "auto",
        }}
      >
        {points.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            style={{
              background: cardBg,
              borderRadius: "16px",
              padding: "38px 30px",
              border: `1px solid ${borderLight}`,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: chipBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                color: headingClr,
              }}
            >
              <Icon />
            </div>

            <h4
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "14px",
                color: headingClr,
                margin: 0,
              }}
            >
              {title}
            </h4>

            <p style={{ fontSize: "14px", lineHeight: 1.5, color: bodyClr, margin: 0 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Note banner */}
      <div
        style={{
          marginTop: "40px",
          background: cardBg,
          borderRadius: "16px",
          padding: "36px 32px",
          maxWidth: "600px",
          marginInline: "auto",
          textAlign: "center",
          boxShadow: "0 6px 14px rgba(0,0,0,.05)",
          fontSize: "16px",
          lineHeight: 1.6,
          color: headingClr,
        }}
      >
        This optional program is open only to event attendees. Limited slots available —
        more details will be shared during the session.
      </div>
    </section>
  );
}
