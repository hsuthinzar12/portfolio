"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

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
    <div className="inner">
      <div className="contact-blk">
        <div className="contact-info">
          <h3>Contact Information</h3>

          <ul className="info-list">
            <li>
              <a href="tel:+959255561989">
                <svg className="icon" width="30" height="30" aria-hidden="true">
                  <use href="/icons.svg#icon-phone" />
                </svg>
                <span>Phone</span>
              </a>
            </li>

            <li>
              <a href="mailto:thinzarhsu12@gmail.com">
                <svg className="icon" width="30" height="30" aria-hidden="true">
                  <use href="/icons.svg#icon-mail" />
                </svg>
                <span>Gmail</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/hsuthinzar12" target="_blank">
                <svg className="icon" width="30" height="30" aria-hidden="true">
                  <use href="/icons.svg#icon-github" />
                </svg>
                <span>Github</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/hsu-thinzar-72a9b023b/"
                target="_blank"
              >
                <svg className="icon" width="30" height="30" aria-hidden="true">
                  <use href="/icons.svg#icon-linkedin" />
                </svg>
                <span>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-form">
          <h3>Just say Hello !</h3>

          <form onSubmit={sendEmail}>
            <div className="flex-box">
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
            </div>

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
    </div>
  );
}
