"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer style={{
        padding: "60px 0",
        textAlign: "center",
        borderTop: "1px solid rgba(0,0,0,0.05)",
        color: "var(--text-secondary)",
        fontSize: "0.9rem",
        background: "var(--background)"
      }}>
        <div className="container">
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
             <a href="https://www.linkedin.com/in/aman-singh-96b343221?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>LinkedIn</a>
             <a href="https://github.com/amansingh98-glitch" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>GitHub</a>
             <a href="https://wa.me/919336639607" target="_blank" rel="noopener noreferrer" style={{ transition: "color 0.3s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>WhatsApp</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Aman Singh. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
