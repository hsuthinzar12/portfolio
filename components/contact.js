"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f6t4fad",
        "template_7cvbhyo",
        formData,
        "J3Oq7QiK_PMXkGVNG"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => alert("Error: " + err.text));
  };

  return (
    <section className="sec-contact scroll-mt-30" id="contact">
      <div className="inner">
        <h2 className="cmn-ttl">
          <span>Contact</span>
        </h2>
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
