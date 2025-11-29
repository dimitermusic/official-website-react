import { sections } from "../utils/constants";
import { credits } from "../lib/filmCredits";
import "../styles/GlobalStyles.css";

const { elementId, title, subtitle } = sections.filmCredits;

const FilmCredits = () => {
  return (
    <section
      id={elementId}
      className="awal-credits-section"
      aria-label="Film and TV Credits"
    >
      <div className="awal-container">
        <header className="awal-section-header">
          <h2 className="awal-title">{title}</h2>
          <p className="awal-subtitle">{subtitle}</p>
        </header>

        <div className="awal-grid">
          {credits.map(
            ({
              link,
              id,
              highlight,
              image,
              title,
              award,
              network,
              role,
              description,
            }) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
                className={`awal-card ${highlight ? "highlight" : ""}`}
              >
                <div className="awal-card-image-wrapper">
                  <img
                    src={image}
                    alt={`Poster for ${title}`}
                    className="awal-card-image"
                    loading="lazy"
                  />
                  {award && <div className="awal-award-badge">{award}</div>}
                </div>
                <div className="awal-card-content">
                  <h3 className="awal-card-title">{title}</h3>
                  <span className="awal-network-tag">{network}</span>
                  <p className="awal-role">{role}</p>
                  {description && (
                    <p className="awal-description">{description}</p>
                  )}
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FilmCredits;
