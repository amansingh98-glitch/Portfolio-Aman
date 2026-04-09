import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ProjectCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "250px",
      overflow: "hidden",
      borderRadius: "12px",
      boxShadow: "var(--inner-shadow)",
      background: "var(--background)"
    }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectCover: "cover" as any
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=Project+Screenshot+${index + 1}`;
          }}
        />
      </AnimatePresence>

      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "between",
        padding: "0 10px",
        pointerEvents: "none"
      }}>
        <button onClick={prev} style={{
          pointerEvents: "auto",
          padding: "8px",
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "50%",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <ChevronLeft size={20} />
        </button>
        <div style={{ flex: 1 }} />
        <button onClick={next} style={{
          pointerEvents: "auto",
          padding: "8px",
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "50%",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div style={{
        position: "absolute",
        bottom: "15px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "6px"
      }}>
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              height: "6px",
              width: i === index ? "16px" : "6px",
              borderRadius: "10px",
              background: i === index ? "var(--accent)" : "rgba(255,255,255,0.5)",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "MiniGram",
      category: "Social Media Ecosystem",
      description: "A comprehensive social media platform with real-time chat, WhatsApp-style notifications, and secure OTP authentication. Engineered for scale with a decoupled architecture.",
      tech: ["Spring Boot", "Neon DB", "Cloudinary", "Render", "Vercel"],
      features: [
        "Real-time messaging with reactions & replies",
        "Secure OTP Auth using SendGrid",
        "Cloudinary integration for 4K media",
        "Neon DB (PostgreSQL) for cloud storage"
      ],
      link: "https://minigram-frontend.vercel.app",
      images: [
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png",
        "/6.png",
        "/7.png"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ padding: "100px 0", background: "var(--background)" }}>
      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
        }
        @media (max-width: 500px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title reveal">My <span className="pink-accent">Projects</span></h2>
        
        <div className="projects-grid reveal">
          {projects.map((project, i) => (
            <div key={i} className="neu-flat" style={{
              padding: "2rem",
              transition: "transform 0.4s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden"
            }} onClick={(e) => {
              if (project.link) {
                window.open(project.link, "_blank", "noopener,noreferrer");
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.background = "linear-gradient(145deg, var(--background), var(--accent))";
              e.currentTarget.querySelectorAll("h3, p, span").forEach(el => (el as HTMLElement).style.color = "white");
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "var(--background)";
               e.currentTarget.querySelectorAll("h3").forEach(el => (el as HTMLElement).style.color = "var(--text-primary)");
               e.currentTarget.querySelectorAll("p, span").forEach(el => (el as HTMLElement).style.color = "var(--text-secondary)");
            }}>
              {project.images ? (
                <ProjectCarousel images={project.images} />
              ) : (
                <div style={{
                  width: "100%",
                  height: "250px",
                  boxShadow: "var(--inner-shadow)",
                  borderRadius: "10px",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem"
                }}>
                  {project.title === "MiniGram" ? "📸" : "🌌"}
                </div>
              )}
              <p className="pink-accent" style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>
                {project.category}
              </p>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1rem" }}>
                {project.description}
              </p>
              
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                marginBottom: "2rem",
                color: "var(--text-secondary)",
                fontSize: "0.85rem"
              }}>
                {project.features.map((feat, idx) => (
                  <li key={idx} style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "var(--accent)" }}>✔</span> {feat}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    fontSize: "0.75rem",
                    padding: "4px 12px",
                    background: "rgba(0,0,0,0.05)",
                    borderRadius: "20px",
                    color: "var(--text-secondary)"
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
