import { useState, useEffect } from "react";

function Header() {
  const [language, setLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize(); // initialize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    header: {
      width: "100%",
      height: isMobile ? "60px" : "70px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile ? "0 20px" : "0 90px",
      boxSizing: "border-box",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    left: {
      display: "flex",
      alignItems: "center",
    },
    logo: {
      height: isMobile ? "50px" : "70px",
      objectFit: "contain",
    },
    right: {
      display: "flex",
      alignItems: "center",
      gap: isMobile ? "8px" : "12px",
    },
    select: {
      padding: isMobile ? "4px 8px" : "6px 10px",
      fontSize: isMobile ? "14px" : "16px",
      backgroundColor: '#ffffff00',
      color: '#000000',
      border: "none",
    },
    button: {
      padding: isMobile ? "6px 12px" : "8px 16px",
      fontSize: isMobile ? "14px" : "16px",
      backgroundColor: "#565fb0",
      color: "#fff",
      border: "none",
      borderRadius: "120px",
      cursor: "pointer",
    },
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header style={styles.header}>
      {/* Left side: Logo */}
      <div style={styles.left}>
        <img
          src="/happi360_no_bg.png"
          alt="Logo"
          style={styles.logo}
        />
      </div>

      {/* Right side: Dropdown + Button */}
      <div style={styles.right}>
        <select
          value={language}
          onChange={handleLanguageChange}
          style={styles.select}
        >
          <option value="en">English</option>
          <option value="th">ไทย (Thai)</option>
        </select>
        <button style={styles.button}>Register Now</button>
      </div>
    </header>
  );
}

export default Header;
