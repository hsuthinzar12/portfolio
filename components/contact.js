"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { ArrowUpRight, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const sendEmail = async (event) => {
    event.preventDefault();
    setStatus("Sending your message…");
    try {
      await emailjs.send("service_f6t4fad", "template_7cvbhyo", formData, "J3Oq7QiK_PMXkGVNG");
      setStatus("Thanks — your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Sorry, your message could not be sent. Please email me directly.");
    }
  };

  return <section className="section contact-section" id="contact">
    <div className="section-shell contact-shell">
      <div className="contact-intro"><span className="section-kicker">Have something in mind?</span><h2>Let&apos;s make something<br /><span>meaningful.</span></h2><p>I&apos;m always glad to hear about thoughtful projects, collaborations, or new ideas.</p><a className="direct-email" href="https://www.linkedin.com/in/hsu-thinzar-72a9b023b/" target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={16} /></a></div>
      <div className="glass-card contact-card"><span className="card-index">A NOTE TO ME</span><form onSubmit={sendEmail}>
        <label htmlFor="contact-name">Your name</label><input id="contact-name" type="text" name="name" placeholder="How should I address you?" required value={formData.name} onChange={handleChange} />
        <label htmlFor="contact-email">Email address</label><input id="contact-email" type="email" name="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} />
        <label htmlFor="contact-message">What would you like to talk about?</label><textarea id="contact-message" name="message" placeholder="Tell me a little about it…" required value={formData.message} onChange={handleChange} />
        <button className="button button-primary submit-button" type="submit">Send message <Send size={16} /></button>
        <p className="form-status" role="status" aria-live="polite">{status}</p>
      </form></div>
    </div>
  </section>;
}
