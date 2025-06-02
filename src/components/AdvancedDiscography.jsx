import "../styles/style.css";
import "../styles/advancedDiscography.css";

const albums = [
  {
    id: 1,
    title: "Lie to Me",
    releaseDate: "December 24, 2021",
    tracks: [
      "Dangerous Man",
      "Cedar Street",
      "Lie to Me",
      "I Cried in New York",
      "Your Record Is Gone",
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/2tqOIJ7JQGANnCAE25bsyx?utm_source=generator",
    links: {
      spotify: "https://open.spotify.com/album/2tqOIJ7JQGANnCAE25bsyx",
      apple: "https://music.apple.com/us/album/lie-to-me-ep/1603910239",
      amazon: "https://music.amazon.com/albums/B09Q112YV6",
    },
  },
  {
    id: 2,
    title: "Wonder",
    releaseDate: "May 8, 2020",
    tracks: [
      "Meteorites",
      "Letting Go",
      "Holiday From My Mind",
      "Wonder",
      "By You",
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/album/4FcgE6Ug6xrxf1QjBHAf3G?utm_source=generator",
    links: {
      spotify: "https://open.spotify.com/album/4FcgE6Ug6xrxf1QjBHAf3G",
      apple: "https://music.apple.com/album/wonder/1512294895",
      amazon: "https://music.amazon.com/albums/B088QHM758",
    },
  },
];

export default function AdvancedDiscography() {
  return (
    <section id="listen" className="advanced-discography-section">
      <h1 className="section-title">LISTEN</h1>
      {albums.map((album) => (
        <div className="album-block" key={album.id}>
          <div className="spotify-embed">
            <iframe
              src={album.spotifyEmbed}
              width="100%"
              height="500"
              frameBorder="0"
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
              Spotify
            </a>
            <a
              className="streaming-btn"
              href={album.links.apple}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Music
            </a>
            <a
              className="streaming-btn"
              href={album.links.amazon}
              target="_blank"
              rel="noopener noreferrer"
            >
              Amazon Music
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
