import { useState } from "react";

function Header() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // You can add real language switching here if needed
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

const styles = {
  header: {
    width: "100%",
    height: "70px",
    position: "fixed",        // 👈 change to fixed!
    top: 0,
    left: 0,
    zIndex: 9999,             // very high to stay on top
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 90px",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "100px",
    objectFit: "contain",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  select: {
    padding: "6px 10px",
    fontSize: "16px",
    backgroundColor: '#ffffff00',
    color: '#000000',
    border: "none"
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    backgroundColor: "#565fb0",
    color: "#fff",
    border: "none",
    borderRadius: "120px",
    cursor: "pointer",
  },
};

export default Header;
