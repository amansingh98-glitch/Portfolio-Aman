"use client";
import React from "react";

export default function About() {
  const skills = [
    { name: "Java", per: "90%" },
    { name: "Spring Boot", per: "85%" },
    { name: "JDBC / Servlet / JSP", per: "80%" },
    { name: "MySQL / Oracle", per: "80%" },
    { name: "HTML / CSS / JavaScript", per: "75%" },
    { name: "Hibernate", per: "70%" },
  ];

  return (
    <section id="about" className="section-padding" style={{ padding: "100px 0" }}>
      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          alignItems: start;
        }
        @media (max-width: 991px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title reveal">About <span className="pink-accent">Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text reveal">
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>Professional Summary</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              I am a Bachelor of Technology graduate from Luckow (2020-2024). During my internship at Naresh I Technologies, I gained valuable experience in developing scalable and dynamic web applications using Java, Servlet, JSP, and JDBC. I have a solid understanding of the software development life cycle and strong problem-solving skills.
            </p>
            <div style={{ marginTop: "3rem" }}>
              <button className="neu-flat neu-button" style={{
                padding: "1rem 2.5rem",
                fontWeight: 600,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "1px"
              }}>
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="skills-content" id="skills">
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1.5rem" }}>My Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontWeight: 500, fontSize: "0.9rem" }}>
                  <span>{skill.name}</span>
                  <span className="pink-accent">{skill.per}</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-per" style={{ width: skill.per }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
