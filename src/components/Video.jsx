import "../styles/style.css";
import { useState } from "react";

const PLAYLIST_ID = "PLvxyuU_-aPZek3ndePaqvKI6sYmpwKpt_";

// The "Last Train Home" video ID you shared
const COVER_VIDEO_ID = "5KcIniasjZU";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="watch" className="awal-credits-section">
      <div className="awal-container">
        <header className="awal-section-header">
          <h2 className="awal-title">Watch</h2>
          <p className="awal-subtitle">
            The latest music videos and live performances.
          </p>
        </header>

        {/* The Wrapper handles the 16:9 Aspect Ratio via CSS */}
        <div className="videoWrapper">
          {isPlaying ? (
            <iframe
              // rel=0 ensures suggested videos are YOURS, not competitors
              // autoplay=1 is required so it plays immediately after clicking the facade
              src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}&autoplay=1&rel=0`}
              title="Dimiter YouTube Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <button
              type="button"
              className="lite-video"
              onClick={() => setIsPlaying(true)}
              aria-label="Play popular videos"
            >
              {/* Background Image: Using 'sddefault' because 'maxres' is missing for this video */}
              <div
                className="lite-video-thumb"
                style={{
                  backgroundImage: `url('https://i.ytimg.com/vi/${COVER_VIDEO_ID}/sddefault.jpg')`,
                }}
              />

              {/* The Play Button Overlay (Styled Red in CSS now) */}
              <div className="lite-video-overlay">
                <span className="lite-video-play-icon">▶</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
