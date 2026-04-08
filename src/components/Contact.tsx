"use client";
import React from "react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    // Construct mailto link
    const mailtoUrl = `mailto:singhamanbrh98@gmail.com?subject=${encodeURIComponent(subject as string || "Contact from Portfolio")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-padding" style={{ padding: "100px 0" }}>
      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        @media (max-width: 991px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title reveal">Contact <span className="pink-accent">Me</span></h2>
        
        <div className="contact-grid reveal">
          <div className="contact-info neu-flat" style={{ padding: "3rem" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Get in Touch</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "5px" }}>Email</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>singhamanbrh98@gmail.com</p>
              </div>
              <div>
                <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "5px" }}>Phone</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>+91-7084306559</p>
              </div>
              <div>
                <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", marginBottom: "5px" }}>Location</p>
                <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>Lucknow, India</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="neu-flat" style={{ padding: "3rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="form-row">
               <input name="name" type="text" placeholder="YOUR NAME" className="neu-inset" required style={{
                 padding: "1.2rem",
                 border: "none",
                 outline: "none",
                 color: "var(--text-primary)",
                 fontWeight: 500,
                 fontSize: "0.9rem"
               }} />
               <input name="email" type="email" placeholder="YOUR EMAIL" className="neu-inset" required style={{
                 padding: "1.2rem",
                 border: "none",
                 outline: "none",
                 color: "var(--text-primary)",
                 fontWeight: 500,
                 fontSize: "0.9rem"
               }} />
            </div>
            <input name="subject" type="text" placeholder="SUBJECT" className="neu-inset" required style={{
              padding: "1.2rem",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
              fontWeight: 500,
              fontSize: "0.9rem"
            }} />
            <textarea name="message" placeholder="YOUR MESSAGE" rows={6} className="neu-inset" required style={{
              padding: "1.2rem",
              border: "none",
              outline: "none",
              color: "var(--text-primary)",
              fontWeight: 500,
              fontSize: "0.9rem",
              resize: "none"
            }}></textarea>
            <button type="submit" className="neu-flat neu-button" style={{
              padding: "1.2rem",
              background: "var(--background)",
              color: "var(--accent)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginTop: "1rem"
            }}>
              Direct Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
