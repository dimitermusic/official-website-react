import React from "react";
import { sections } from "../utils/constants";
import { pressFeatures, awards } from "../lib/pressItems";
import "../styles/GlobalStyles.css";
import "../styles/Press.css";

const { elementId, title } = sections.press;

const Press = () => {
  return (
    <section
      id={elementId}
      className="global-section"
      aria-label="Press and Awards"
    >
      <div className="global-container">
        <header className="global-section-header">
          <h2 className="global-title">{title}</h2>
        </header>

        {/* Pull Quote */}
        {pressFeatures.map((pressFeature) => (
          <a
            href={pressFeature.link}
            target="_blank"
            rel="noopener noreferrer"
            className="press-quote-block"
            key={pressFeature.link}
          >
            <blockquote className="press-quote-text">
              &ldquo;{pressFeature.excerpt}&rdquo;
            </blockquote>
            <div className="press-quote-footer">
              <span className="press-quote-publication">
                {pressFeature.publication}
              </span>
              <span className="press-quote-headline">
                {pressFeature.headline}
              </span>
            </div>
          </a>
        ))}

        {/* Awards */}
        <div className="press-awards-grid">
          {awards.map(({ accolade, detail, festival, project }, index) => (
            <div key={index} className="press-award-card">
              <span className="press-award-accolade">{accolade}</span>
              <span className="press-award-festival">{festival}</span>
              <span className="press-award-project">{project}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
