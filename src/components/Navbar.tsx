"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDark(true);
      document.body.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <nav className="neu-flat" style={{
      position: "fixed",
      top: 0,
      width: "100%",
      minHeight: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 4rem",
      zIndex: 1000,
      borderRadius: 0,
      borderBottom: "1px solid rgba(0,0,0,0.05)"
    }}>
      <style jsx>{`
        .nav-links {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .menu-btn {
          display: none;
        }
        @media (max-width: 991px) {
          nav {
            padding: 0 2rem !important;
          }
          .nav-links {
            display: ${isMenuOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            background: var(--background);
            padding: 2rem;
            gap: 2rem;
            box-shadow: 0 10px 10px rgba(0,0,0,0.05);
          }
          .menu-btn {
            display: block;
          }
        }
      `}</style>
      <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--accent)" }}>
        AMAN<span style={{ color: "var(--text-primary)" }}>.</span>
      </div>
      
      <div className="nav-links">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)} style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            textTransform: "uppercase",
            transition: "color 0.3s",
            color: "var(--text-secondary)"
          }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-secondary)"}>
            {item}
          </a>
        ))}
        <button onClick={toggleTheme} className="neu-flat neu-button" style={{
          width: "45px",
          height: "45px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem"
        }}>
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="neu-flat neu-button menu-btn" style={{
        width: "45px",
        height: "45px",
        borderRadius: "8px",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
