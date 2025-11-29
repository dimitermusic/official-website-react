import { useState } from "react";
import {
  sections,
  PLAYLIST_ID,
  PLAYLIST_COVER_IMAGE_VIDEO_ID,
} from "../utils/constants";
import "../styles/GlobalStyles.css";
import "../styles/Video.css";

export default function Video() {
  const { elementId, title, subtitle } = sections.video;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id={elementId} className="global-section">
      <div className="global-container">
        <header className="global-section-header">
          <h2 className="global-title">{title}</h2>
          <p className="global-subtitle">{subtitle}</p>
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
                  backgroundImage: `url('https://i.ytimg.com/vi/${PLAYLIST_COVER_IMAGE_VIDEO_ID}/sddefault.jpg')`,
                }}
              />

              {/* The Play Button Overlay (Styled Red in CSS now) */}
              <div className="lite-video-overlay">
                <svg
                  viewBox="0 0 24 24"
                  width="100%"
                  height="100%"
                  fill="white"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
