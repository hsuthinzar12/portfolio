"use client";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "pos",
      title: "POS System",
      desc: "Point of Sales System built with Java and MySQL, featuring item management, sales processing, and automatic price calculation.",
      detail: (
        <>
          <h2>
            POS System <br />
            Point Of Sales System
          </h2>
          <ul className="lug-list">
            <li>Java</li>
            <li>MySQL</li>
          </ul>
          <p>
            For our school project, my team of three developed a complete Sales
            & Admin Management System. I handled the system flow design, UI
            layout and architecture explanation.
          </p>
          <h3>Admin Features</h3>
          <p>
            CRUD operations for sale items <br />
            View today's income <br />
            View total income
          </p>
          <h3>Sales Features</h3>
          <p>
            Create orders by selecting cup size, ice level, sugar level, and
            quantity. <br />
            Automatic real-time price calculation. <br />
            After placing an order, a voucher is generated with options to:{" "}
            <br />
            . Print the receipt <br />. Save the order to the database
          </p>
        </>
      ),
    },

    {
      id: "movie",
      title: "Movie App",
      desc: "A movie browsing web app with API integration, search, favorites, and responsive UI built with NextJs.",
      detail: (
        <>
          <h2>
            Movie App <br />
            Film Browsing System
          </h2>
          <ul className="lug-list">
            <li>NextJs</li>
            <li>TMDB API</li>
          </ul>
          <p>
            I built this as a practice project to learn API fetching, routing,
            and reusable component patterns in React. Users can search movies,
            view details, and save favorites.
          </p>
          <h3>Features</h3>
          <p>
            Movie search <br />
            Trending movies <br />
            Casts list <br />
            Responsive UI
          </p>
        </>
      ),
    },

    {
      id: "hotel",
      title: "Hotel Self CICO System",
      desc: "Self Check-in/Check-out system for hotels, handling booking verification, room assignment and automated checkout.",
      detail: (
        <>
          <h2>
            Hotel Self CICO <br />
            Check-In/Check-Out System
          </h2>
          <ul className="lug-list">
            <li>C#</li>
            <li>MySQL</li>
          </ul>
          <p>
            A hotel management system where guests can self check-in, verify
            booking, and check out without staff involvement. I handled the
            system flow design, UI layout and architecture explanation.
          </p>
          <h3>Features</h3>
          <p>
            Booking verification <br />
            Auto-assign room <br />
            Self checkout <br />
            Admin room management
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="inner">
      <ul className="prj-list">
        {projects.map((prj) => (
          <li key={prj.id}>
            <h3>{prj.title}</h3>
            <p>{prj.desc}</p>
            <button
              className="readmore-btn"
              onClick={() => setSelectedProject(prj)}
            >
              Read More
            </button>
          </li>
        ))}
      </ul>

      {/* Popup Modal */}
      {selectedProject && (
        <div className="popup-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="prj-detail popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {selectedProject.detail}
          </div>
        </div>
      )}
    </div>
  );
}
