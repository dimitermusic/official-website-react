import { sections, spotify, appleMusic, amazonMusic } from "../utils/constants";
import "../styles/Discography.css";
import "../styles/Concerts.css";

export default function Discography() {
  const { elementId, title, subtitle } = sections.discography;
  const albums = require("../lib/albums.json");
  return (
    <section id={elementId} className="awal-credits-section">
      <div className="awal-container">
        <header className="awal-section-header">
          <h2 className="awal-title">{title}</h2>
          <p className="awal-subtitle">{subtitle}</p>
        </header>
        <div className="awal-list">
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
                  className="streaming-btn"
                  href={album.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {spotify}
                </a>
                <a
                  className="streaming-btn"
                  href={album.links.apple}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {appleMusic}
                </a>
                <a
                  className="streaming-btn"
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
