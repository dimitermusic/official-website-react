import { sections } from "../utils/constants";
import { credits } from "../lib/filmCredits";
import "../styles/GlobalStyles.css";
import "../styles/FilmCredits.css";

const { elementId, title, subtitle } = sections.filmCredits;

const FilmCredits = () => {
  return (
    <section
      id={elementId}
      className="global-section"
      aria-label="Film and TV Credits"
    >
      <div className="global-container">
        <header className="global-section-header">
          <h2 className="global-title">{title}</h2>
          <p className="global-subtitle">{subtitle}</p>
        </header>

        <div className="film-credit-grid">
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
                className={`film-credit-card ${highlight ? "highlight" : ""}`}
              >
                <div className="film-credit-card-image-wrapper">
                  <img
                    src={image}
                    alt={`Poster for ${title}`}
                    className="film-credit-card-image"
                    loading="lazy"
                  />
                  {award && (
                    <div className="film-credit-award-badge">{award}</div>
                  )}
                </div>
                <div className="film-credit-card-content">
                  <h3 className="film-credit-card-title">{title}</h3>
                  <span className="film-credit-network-tag">{network}</span>
                  <p className="film-credit-role">{role}</p>
                  {description && (
                    <p className="film-credit-description">{description}</p>
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
