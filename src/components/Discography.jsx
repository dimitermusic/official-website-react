import { sections, spotify, appleMusic, amazonMusic } from "../utils/constants";
import "../styles/GlobalStyles.css";
import "../styles/Discography.css";

export default function Discography() {
  const { elementId, title, subtitle } = sections.discography;
  const albums = require("../lib/albums.json");
  return (
    <section id={elementId} className="global-section">
      <div className="global-container">
        <header className="global-section-header">
          <h2 className="global-title">{title}</h2>
          <p className="global-subtitle">{subtitle}</p>
        </header>
        <div className="albums-container">
          {albums.map((album) => (
            <div className="album-block" key={album.id}>
              <div className="spotify-embed">
                <iframe
                  src={album.spotifyEmbed}
                  width="100%"
                  height="500"
                  allow="encrypted-media"
                  allowtransparency="true"
                  title={`${album.title} Spotify Player`}
                ></iframe>
              </div>
              <div className="streaming-buttons">
                <a
                  className="btn streaming-btn"
                  href={album.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {spotify}
                </a>
                <a
                  className="btn streaming-btn"
                  href={album.links.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {appleMusic}
                </a>
                <a
                  className="btn streaming-btn"
                  href={album.links.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {amazonMusic}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
