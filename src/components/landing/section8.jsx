/* ───────── Section 8 – What you’ll experience ───────── */
import {
    FiMessageSquare,
    FiUsers,
    FiStar,
    FiBookOpen,
    FiCheck,
    FiGift,
  } from "react-icons/fi";
  
  /* palette (or import from your tokens) */
  const navy         = "#1d2556";
  const paleCreamBg  = "#fdf7ef";
  const cardBg       = "#ffffff";
  const lilacBg      = "#e7e9ff";
  const accentBeige  = "#f1f3fd";
  
  const items = [
    {
      icon: FiMessageSquare,
      text:
        "Learn from experts in child development from Singapore (Mildred and Rachel Yong), as they share modern strategies to help your child grow with confidence and happiness in today’s world.",
    },
    {
      icon: FiUsers,
      text:
        "Dive into real parenting challenges and explore practical solutions with a diverse panel of experts, including child-development specialists, technology experts (Neeuro), educators, and parents.",
    },
    {
      icon: FiStar,
      text:
        "Hear real-life stories from former students who grew up with the Michel approach.",
    },
    {
      icon: FiBookOpen,
      text:
        "Engage in open conversations and exchange insights with experts. You’ll leave with simple, practical strategies you can apply immediately.",
    },
  ];
  
  
  export default function Section8() {
    return (
      <section
        style={{
          width: "100%",
          padding: "96px 0 120px",
          background: paleCreamBg,
        }}
      >
        {/* heading */}
        <h2
          style={{
            textAlign: "center",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "38px",
            color: navy,
            margin: '0px 40px',
          }}
        >
          What You'll Gain From This Seminar
        </h2>
  
        {/* bullet card */}
        <div
          style={{
            width: "90%",
            maxWidth: "1000px",
            marginInline: "auto",
            background: cardBg,
            borderRadius: "16px",
            padding: "56px 48px",
            marginTop:'80px',
            boxShadow: "0 8px 18px rgba(0,0,0,.05)",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          {items.map(({ icon: Icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                fontSize: "20px",
                lineHeight: 1.5,
                color: navy,
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: lilacBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  flexShrink: 0,
                  color: navy,
                }}
              >
                <Icon />
              </span>
              {text}

            
            </div>

          ))}

            <p
            style={{
                maxWidth: "820px",
                margin: "24px auto 0px",
                textAlign: "center",
                fontSize: "20px",
                lineHeight: 1.6,
                color: navy,
                marginTop: '20px'
            }}
            >
            This seminar is <strong>not</strong> a product pitch or sales event. It's a space
            for connection, sharing, and exploring modern parenting approaches that empower your
            children to grow up happy and prepared for today's world.
            </p>
        </div>

      </section>
    );
  }
  