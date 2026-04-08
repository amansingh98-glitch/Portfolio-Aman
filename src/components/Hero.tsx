"use client";
import React, { useState, useEffect } from "react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Java Developer", "Full Stack Developer", "Spring Boot Expert"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.body.getAttribute("data-theme") === "dark");

    // Observe theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.body.getAttribute("data-theme") === "dark");
    });
    
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      paddingTop: "80px"
    }}>
      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 991px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-content {
            order: 2;
          }
          .hero-img {
            order: 1;
          }
          h1 {
            font-size: 2.8rem !important;
          }
          .social-container {
             justify-content: center;
          }
        }
      `}</style>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <p style={{ letterSpacing: "3px", fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              WELCOME TO MY WORLD
            </p>
            <h1 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "1rem", lineHeight: 1.2 }}>
              Hi, I’m <span className="pink-accent">Aman Singh</span><br />
              a <span style={{ borderRight: "3px solid var(--accent)", paddingRight: "5px" }}>{displayText}</span>
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px", marginBottom: "3rem", lineHeight: 1.8, marginInline: "auto" }}>
              I am a motivated and passionate Java Developer with a solid academic background and hands-on experience through internships. Proficient in Java, Spring Boot, Hibernate, HTML, CSS, and JavaScript.
            </p>
            
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem" }} className="social-container">
              <div>
                <p style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "1.5rem", letterSpacing: "1px" }}>FIND WITH ME</p>
                <div style={{ display: "flex", gap: "1.5rem", justifyContent: "inherit" }}>
                  <a href="https://www.linkedin.com/in/aman-singh-96b343221?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="neu-flat neu-button" style={{
                    width: "55px",
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "var(--text-primary)"
                  }}>
                    in
                  </a>
                  <a href="https://github.com/amansingh98-glitch" target="_blank" rel="noopener noreferrer" className="neu-flat neu-button" style={{
                    width: "55px",
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "var(--text-primary)"
                  }}>
                    gh
                  </a>
                  <a href="https://wa.me/919336639607" target="_blank" rel="noopener noreferrer" className="neu-flat neu-button" style={{
                    width: "55px",
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "var(--text-primary)"
                  }}>
                    wa
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-img reveal" style={{ 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div className="neu-flat" style={{
              width: "100%",
              maxWidth: "550px",
              padding: "10px",
              overflow: "hidden",
              background: "var(--background)",
              transition: "all 0.4s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
               <img src="/avatar.png" alt="Aman Singh Avatar" style={{
                 width: "100%",
                 height: "auto",
                 maxHeight: "650px",
                 objectFit: "contain",
                 borderRadius: "10px"
               }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
