import React from "react";
import "../styles/Awal.css";

import kindnessDiariesPoster from "../images/film_and_tv/the_kindness_diaries.jpg";
import arquettePoster from "../images/film_and_tv/yckda.jpg";
import badCountryPoster from "../images/film_and_tv/bad_country.jpg";
import kindnessWithinPoster from "../images/film_and_tv/the_kindness_within.jpg";

const credits = [
  {
    id: 1,
    title: "The Kindness Diaries",
    role: "Complete Original Score",
    network: "Netflix / Discovery+",
    description:
      "Writer, singer, and performer for the entire score and soundtrack across both seasons, including the critically acclaimed single 'Rain.'",
    image: kindnessDiariesPoster,
    link: "https://www.imdb.com/title/tt6786518/",
    highlight: true,
  },
  {
    id: 2,
    title: "You Cannot Kill David Arquette",
    role: "Lead Composer",
    network: "Hulu / Super Ltd / Neon",
    description:
      "Lead composer for the critically acclaimed wrestling documentary starring David Arquette, Patricia Arquette, and Courteney Cox.",
    image: arquettePoster,
    link: "https://www.imdb.com/title/tt11454066/",
    award:
      "Adobe Editing Award (SXSW), Best Documentary (Charlotte Film Festival)",
  },
  {
    id: 3,
    title: "Bad Country",
    role: "Original Songs",
    network: "Sony Pictures / Prime Video",
    description:
      "Wrote and performed original blues tracks for the action thriller starring Willem Dafoe, Matt Dillon, and Amy Smart.",
    image: badCountryPoster,
    link: "https://www.imdb.com/title/tt2350892/",
  },
  {
    id: 4,
    title: "The Kindness Within",
    role: "Complete Original Score",
    network: "Prime Video",
    description:
      "Composed the entire original epic orchestral score for the Best Picture winner (Beverly Hills Film Fest) starring Leon Logothetis.",
    image: kindnessWithinPoster,
    award: "Best Picture & Best Documentary (Beverly Hills Film Festival)",
    link: "https://www.imdb.com/title/tt14926940/",
  },
];

const FilmCredits = () => {
  return (
    <section
      id="film-tv"
      className="awal-credits-section"
      aria-label="Film and TV Credits"
    >
      <div className="awal-container">
        <header className="awal-section-header">
          <h2 className="awal-title">Film & Television</h2>
          <p className="awal-subtitle">
            Original scores and songs for cinema and television.
          </p>
        </header>

        <div className="awal-grid">
          {credits.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              className={`awal-card ${project.highlight ? "highlight" : ""}`}
            >
              <div className="awal-card-image-wrapper">
                <img
                  src={project.image}
                  alt={`Poster for ${project.title}`}
                  className="awal-card-image"
                  loading="lazy"
                />
                {project.award && (
                  <div className="awal-award-badge">{project.award}</div>
                )}
              </div>
              <div className="awal-card-content">
                <h3 className="awal-card-title">{project.title}</h3>
                <span className="awal-network-tag">{project.network}</span>
                <p className="awal-role">{project.role}</p>
                {project.description && (
                  <p className="awal-description">{project.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmCredits;
