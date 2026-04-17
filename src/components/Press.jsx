import React from "react";
import "../styles/Press.css";

// -----------------------------------------------------------------------------
// UNBREAKABLE LOGO ASSETS (Inline SVGs)
// -----------------------------------------------------------------------------
const VarietyLogo = () => (
  <svg
    viewBox="0 0 100 30"
    className="press-logo variety-logo"
    aria-label="Variety"
  >
    <path
      fill="currentColor"
      d="M22.3,27.6L12.9,0h5.6l5.7,19.3L30.6,0h5.5L25.4,27.6H22.3z M43.4,27.6l-1.8-4.9H35l-1.8,4.9h-4.3l7-17.6h4.5l7,17.6 H43.4z M38.2,12.5l-2.1,6.5h4.3L38.2,12.5z M57.8,12.7c1.3-0.9,2.5-1.5,4.7-1.5c2.6,0,4.6,1.4,4.6,4.7c0,1.9-0.8,3.2-2.1,4l3.1,7.8 h-4.6l-2.5-6.8h-0.2v6.8H56V0h9.3c3.5,0,6.6,1.9,6.6,5.8c0,3.3-1.9,5.2-4.5,6.1L57.8,12.7z M60.8,4h-0.5v5.3h0.5 c0.9,0,2.1-0.4,2.1-2.5C62.9,4.4,61.7,4,60.8,4z M73.7,27.6V0h4.3v27.6H73.7z M83.4,27.6V0h11.8v4h-7.5v7.4h6.8v4h-6.8v8.2h8.2 v4H83.4z M100.9,4h-4.2v23.6h-4.3V4h-4.2V0h12.7V4z"
    />
  </svg>
);

const NetflixLogo = () => (
  <svg viewBox="0 0 111 30" className="network-logo" fill="currentColor">
    <path d="M105.06 14.1V.9h5.78v29.1h-5.67v-12.6l-8.6 12.6H90.8V.9h5.65v12.3l8.6-13.2zM80.6 12.2V.9h10.45v5h-4.76v5.8h4.5v5h-4.5v8.3H80.6V12.2zm-12.7 12.8h11.2v5h-17V.9h16.8v5h-11v7h9.8v5h-9.8v7.1zm-13.8-24.1h15.2v5h-4.7v20h-5.8v-20h-4.7V.9zm-15.5 0h5.8v25h-5.8V.9zm-13.9 0h11.7v5h-5.9v20h-5.8v-20h-5.8V.9zm-14 0h6.2l9.2 25h-6l-2-5.9h-8.6l-2 5.9h-6.1l9.3-25zm4.7 14.4h5.2l-2.6-8h-.1l-2.5 8zM.1 25.9V.9h5.9v25L.1 25.9z" />
  </svg>
);

const HuluLogo = () => (
  <svg viewBox="0 0 200 65" className="network-logo" fill="currentColor">
    <path d="M35.6 64.5H5.8V21.3h29.8v43.2zM21 16.5a8.3 8.3 0 1 1 0-16.6 8.3 8.3 0 0 1 0 16.6zm174.6 48h-29.8V42.8c0-5.8-1.5-10.4-8.8-10.4-7.2 0-9.2 5.2-9.2 10.4v21.7h-29.8V42.8c0-5.8-1.5-10.4-8.8-10.4-7.2 0-9.2 5.2-9.2 10.4v21.7H70.1V21.3h29.8v5c4.8-4.5 9.8-7.3 17.5-7.3 9.4 0 15.6 4.3 18 12.6 4.8-5.3 11-12.6 22-12.6 18.2 0 23.3 12.5 23.3 27.2v18.3h14.9V42.8c0-7.2 5.2-8.3 7.8-8.3 2.9 0 6.6 1.8 6.6 8.3v21.7h-14.4z" />
  </svg>
);

const PrimeLogo = () => (
  <svg viewBox="0 0 100 30" className="network-logo" fill="currentColor">
    <path d="M78.6 21.6c-1.3 2.5-4.2 4.1-6.9 4.1-5.1 0-7.8-3.4-7.8-8.3V6.2h-3.9v11.7c0 6.5 4.3 10.6 10.4 10.6 3.6 0 6.3-1.6 8.3-4.2V28H82V6.2h-3.4v15.4zM24.7 6.2H21v21.8h3.8V17.3c0-4.1 2.3-6.2 5.3-6.2.4 0 .9 0 1.2.1V7.1c-.5-.1-1-.1-1.3-.1-2.9 0-4.5 1.5-5.3 4V6.2zM98.6 24.3c-.6-.7-1.3-1-2.2-1-.9 0-1.6.3-2.1.8l-.9-1.2c.8-.8 2-1.2 3.2-1.2 1.5 0 2.5.5 3.3 1.4.6.9.9 2 .9 3.5v.3c-3 .1-5.6.7-7.4 1.7-.8.5-1.4 1.1-1.4 2 0 1 .7 1.8 2.1 1.8 1.6 0 3.3-1 4.5-2.7v2.4h1.7V25c0-1.2-.2-2.1-.6-2.7zm-2.9 6.2c-.6 0-1-.3-1-.8 0-.5.3-.8.9-1.2 1.3-.7 3.2-1.1 5.2-1.2v.3c0 1.9-2.2 2.9-5.1 2.9zM15.4 17.5c0-6.9-4-11.7-10.4-11.7S0 11.2 0 17.6c0 6.8 4 11.7 10.3 11.7 3.3 0 5.8-1.1 7.7-3.4l-2.3-2.2c-1.4 1.6-3 2.3-5.2 2.3-3.8 0-6.3-2.8-6.3-8.3H15c.3-4.5.4-4.5.4-6zm-11.3-.4c.2-3.3 2.3-5.5 6-5.5s5.7 2.1 5.8 5.5H4.1zM58.3 6.2h-3.7v21.8h3.7V17.3c0-4.1 2.3-6.2 5.2-6.2.4 0 .9 0 1.3.1V7.1c-.5-.1-1-.1-1.3-.1-2.9 0-4.5 1.5-5.3 4V6.2zM45.6 6.2h-3.7v21.8h3.7V17.1c0-3.9 2-6 5.1-6s5 2 5 6v10.9h3.7V16.8c0-5.8-3.2-8.9-8.3-8.9-3.2 0-5.4 1.6-6.4 4.1-1-2.6-3.2-4.1-6.1-4.1-3 0-4.7 1.5-5.7 3.7V6.2h-3.7v21.8h3.7V17.1c0-3.9 2-6 5.1-6s5.1 2 5.1 6v10.9h3.7V16.8c0-5.8-3.2-8.9-8.3-8.9-3.4 0-5.8 1.7-6.6 4.3V6.2z" />
  </svg>
);

const DiscoveryLogo = () => (
  <svg viewBox="0 0 100 30" className="network-logo" fill="currentColor">
    <path d="M35 25h-5V5h5c5 0 8 3 8 10s-3 10-8 10zm-1-16h-1v12h1c2.5 0 4-1.5 4-6s-1.5-6-4-6zM48 25h-4V5h4v20zM62 25h-4l-1-2h-5l-1 2h-4l5-13h6l5 13zm-5.6-5.5L55 15l-1.4 4.5h2.8z" />
    <circle cx="15" cy="15" r="12" />
  </svg>
);

const Press = () => {
  return (
    <section className="press-section">
      <div className="press-container">
        <header className="press-header">
          <h2>Press & Features</h2>
        </header>

        {/* 1. SEATTLE REFINED (The Feature) */}
        <div className="press-entry feature-layout">
          <div className="entry-content">
            <span className="entry-meta">Artist Profile</span>
            <h3 className="publication-name">Seattle Refined</h3>
            <h4 className="entry-headline">
              Artist of the Week: Dimiter Yordanov
            </h4>
            <p className="entry-excerpt">
              A feature interview discussing the intersection of music
              composition and the Pacific Northwest creative scene.
            </p>
            <a
              href="https://seattlerefined.com/features/artistoftheweek/artist-of-the-week-dimiter-yordanov"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
            >
              Read Full Feature
            </a>
          </div>
        </div>

        {/* 2. THE VARIETY / CRITICAL RECEPTION BLOCK */}
        <div className="press-entry highlight-layout">
          <div className="entry-content">
            <span className="entry-meta">Critical Reception</span>
            <div className="project-header">
              <h3 className="project-title">You Cannot Kill David Arquette</h3>
              <div className="accolade-badge">
                <span className="reviewed-in">Reviewed in</span>
                <VarietyLogo />
              </div>
            </div>

            {/* Real Quote from Austin B Media */}
            <blockquote className="highlight-quote">
              "Enhancing the film is an excellent electronic soundtrack from
              Dimiter Yordanov... The entire range of human emotion is on
              display."
            </blockquote>
            <div className="quote-attribution">— Austin B Media</div>

            <a
              href="https://austinb.media/latest/you-cannot-kill-david-arquette-review-stepping-into-the-ring-of-addiction-emotional-trauma-and-the-huge-world-of-wrestling"
              target="_blank"
              rel="noopener noreferrer"
              className="read-link"
            >
              Read Review
            </a>
          </div>
        </div>

        {/* 3. STREAMING PLATFORMS (The Logos) */}
        <div className="logo-strip">
          <p className="strip-title">Works Streaming On</p>
          <div className="logos-row">
            <a
              href="https://www.netflix.com/title/80108398"
              target="_blank"
              rel="noopener noreferrer"
              title="Netflix"
            >
              <NetflixLogo />
            </a>
            <a
              href="https://www.hulu.com/movie/you-cannot-kill-david-arquette-b124c55b-3d27-523d-8895-adef049c2454"
              target="_blank"
              rel="noopener noreferrer"
              title="Hulu"
            >
              <HuluLogo />
            </a>
            <a
              href="https://www.amazon.com/Kindness-Within-Journey-Freedom/dp/B0CT4C1K21"
              target="_blank"
              rel="noopener noreferrer"
              title="Prime Video"
            >
              <PrimeLogo />
            </a>
            <a
              href="https://www.discoveryplus.com/show/the-kindness-diaries"
              target="_blank"
              rel="noopener noreferrer"
              title="Discovery+"
            >
              <DiscoveryLogo />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
