import { useState, useEffect, useRef } from "react";
import { FiAward, FiCheckCircle, FiLayers, FiChevronDown } from "react-icons/fi";
import mentorsImg from "../../assets/landing/G3.jpg";

/* colours */
const navy      = "#1d2556";
const paleLilac = "#e7e9ff";
const accent    = "#d4d9f2";

/* pillar data */
const pillars = [
  {
    icon : FiAward,
    title: "7 Core Values",
    items: [
      "Magnanimous", "Integrity", "Loving-kindness",
      "Compassionate", "Holistic living", "Effort", "Leadership",
    ],
  },
  {
    icon : FiCheckCircle,
    title: "5 Key Traits",
    items: ["Awareness", "Discipline", "Responsibility", "Perseverance", "Confidence"],
  },
  {
    icon : FiLayers,
    title: "3-Level Character Care",
    items: [
      "Level 1 - Conduct & Character",
      "Level 2 - Leadership",
      "Level 3 - Philanthropy & Humanitarian",
    ],
  },
];

export default function Section5() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openIdx,  setOpenIdx ] = useState(null);       // which pillar is expanded
  const [heights,  setHeights ] = useState([]);         // real scrollHeights
  const refArray                   = useRef([]);        // refs for each <ul>


  /* watch width */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* measure each list once after first render */
  useEffect(() => {
    const h = refArray.current.map((el) => (el ? el.scrollHeight : 0));
    setHeights(h);
  }, []); // run once

  /* helper that returns style for the animated box */
  const slide = (idx, show) => ({
    overflow  : "hidden",
    maxHeight : show ? `${heights[idx] || 0}px` : 0,
    opacity   : show ? 1 : 0,
    transition: "max-height .45s cubic-bezier(.25,.8,.25,1), opacity .45s",
  });

  return (
    <section style={{padding:isMobile?"64px 16px":"96px 0 120px",background:"#f7f8fc"}}>
      {/* hero image (unchanged) */}
      <div style={{
        position:"relative",width:"90%",maxWidth:1100,margin:"0 auto",
        borderRadius:12,overflow:"hidden",boxShadow:"0 10px 22px rgba(0,0,0,.08)"
      }}>
        <img src={mentorsImg} alt="Milchel mentors" style={{display:"block",width:"100%",objectFit:"cover"}}/>
      </div>

      {/* accent line */}
      <div style={{
        margin:isMobile?"48px auto 0":"72px auto 0",
        width:120,height:4,background:accent,borderRadius:4
      }}/>


      {/* ------ accordion ------ */}
      <div
        style={{
          marginTop : isMobile ? 48 : 72,
          width     : "90%",
          maxWidth  : 680,
          marginInline:"auto",
          display   : "flex",
          flexDirection: "column",
        }}
      >
        {pillars.map(({ icon:Icon, title, items }, idx) => {
          const expanded = openIdx === idx;
          return (
            <div key={title} style={{ borderBottom: "1px solid #e5e5e5" }}>
              {/* clickable header */}
              <button
                onClick={() => setOpenIdx(expanded ? null : idx)}
                style={{
                  width:"100%", padding: isMobile ? 20 : 28,
                  background:"none", border:"none", cursor:"pointer",
                  display:"flex", alignItems:"center", gap:18, outline:"none"
                }}
              >
                <div style={{
                  width:54, height:54, borderRadius:"50%", background:paleLilac,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:30, color:navy, flexShrink:0
                }}>
                  <Icon/>
                </div>

                <h4 style={{
                  flex:1, margin:0, textAlign:"left",
                  fontFamily:"'Playfair Display',serif",
                  fontWeight:700, fontSize:isMobile?20:22, color:navy
                }}>
                  {title}
                </h4>

                <FiChevronDown
                  style={{
                    fontSize:24,
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition:"transform .3s", color:navy
                  }}
                />
              </button>

              {/* expanding list with smooth height */}
              <div style={slide(idx, expanded)}>
                <ul
                ref={(el) => (refArray.current[idx] = el)}
                style={{
                  margin: 0,
                  padding: isMobile ? "18px 36px 24px" : "0 54px 32px",
                  listStyle: "none",              // remove default bullets
                  color: "#38445b",
                  fontFamily: "Georgia, serif",
                  fontSize: isMobile ? 16 : 18,
                  lineHeight: 1.55,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
                >
                {items.map((li) => (
                  <li key={li} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    {/* custom bullet */}
                    <span
                      style={{
                        flexShrink: 0,
                        width: 8,
                        height: 8,
                        marginTop: 6,             // vertically centre with first text line
                        borderRadius: "50%",
                        background: accent,       // uses the same accent colour
                      }}
                    />
                    <span style={{ flex: 1 }}>{li}</span>
                  </li>
                  ))}
                </ul> 
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
