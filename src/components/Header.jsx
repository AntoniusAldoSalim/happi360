import { useState, useEffect } from "react";

export default function Header() {
  const [language, setLanguage] = useState("en");
  const [open, setOpen]         = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* ---------- helpers ---------- */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const flag = {
    en: "https://flagcdn.com/w40/gb.png",
    th: "https://flagcdn.com/w40/th.png",
  };

  /* ---------- inline styles ---------- */
  const flagW  = isMobile ? 28 : 30;       // smaller width
  const flagH  = Math.round(flagW * 0.75); // most flag-cdn PNGs are 4 : 3 → 0.75 height
  const radius = 10;                        // softer corner

  
  const S = {
    header: {
      width: "100%", height: isMobile ? 60 : 70,
      position: "fixed", top: 0, left: 0, zIndex: 9999,
      background: "rgba(255,255,255,.6)",
      backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: isMobile ? "0 20px" : "0 90px", boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      boxSizing: "border-box",
    },
    logo: { height: isMobile ? 80 : 110, objectFit: "contain" },
    right: { display: "flex", alignItems: "center", gap: isMobile ? 8 : 12 },
    flagWrap: { position: "relative" },          // ← dropdown anchors here
    flagBox: {
      width: flagW, height: flagH, borderRadius: radius,
      overflow: "hidden", cursor: "pointer",
      background: "#ffffff00",
    },
    flagImg: { width: "100%", height: "100%", objectFit: "cover" },
    dropdown: {
      position: "absolute", top: flagH + 8, right: 0,
      background: "#fff", borderRadius: 8, padding: 6,
      boxShadow: "0 4px 10px rgba(0,0,0,.1)", display: "flex", flexDirection: "column", gap: 6,
    },
    option: {
      width: flagW, height: flagH, borderRadius: radius,
      objectFit: "cover", cursor: "pointer", border: "1px solid transparent",
    },
    btn: {
      padding: isMobile ? "6px 12px" : "8px 16px",
      fontSize: isMobile ? 14 : 16, background: "#565fb0",
      color: "#fff", border: "none", borderRadius: 120, cursor: "pointer",
    },
  };

  /* ---------- component ---------- */
  return (
    <header style={S.header}>
      <img src="/happi360.svg" alt="Happi360" style={S.logo} />

      <div style={S.right}>
        {/* flag selector */}
        <div style={S.flagWrap}>
          <div style={S.flagBox} onClick={() => setOpen(!open)}>
            <img src={flag[language]} alt={language} style={S.flagImg} />
          </div>

          {open && (
            <div style={S.dropdown}>
              {Object.entries(flag).map(([code, url]) => (
                <img
                  key={code}
                  src={url}
                  alt={code}
                  style={{
                    ...S.option,
                    borderColor: code === language ? "#565fb0" : "transparent",
                  }}
                  onClick={() => {
                    setLanguage(code);
                    setOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <button style={S.btn}>Register&nbsp;Now</button>
      </div>
    </header>
  );
}
