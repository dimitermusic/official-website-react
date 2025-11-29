import { outNow, landingAltTags } from "../utils/constants";
import lieToMe from "../images/lie-to-me.webp";
import lieToMeText from "../images/lie-to-me-text.png";
import spotify from "../images/Y-Spotify.png";
import apple from "../images/Y-AppleMusic.png";
import amazon from "../images/amazon-music-logo.png";
import pandora from "../images/pandora.png";
import "../styles/GlobalStyles.css";
import "../styles/Landing.css";

export default function Landing() {
  // Function that handles dynamically rendering release buttons if album cover has loaded.
  function handleImageLoaded() {
    document.getElementById("col-2").style.display = "flex";
    return;
  }

  return (
    <div id="landing">
      <div id="release-section">
        <div className="column">
          <img
            onLoad={handleImageLoaded}
            id="album-cover"
            src={lieToMe}
            alt={landingAltTags.lieToMe}
          />
        </div>
        <div className="column" id="col-2">
          <img
            id="lie-to-me-text"
            src={lieToMeText}
            alt={landingAltTags.lieToMe}
          />
          <p id="release-text">{outNow}</p>
          <div className="release-btn-group">
            <a href="https://open.spotify.com/album/2tqOIJ7JQGANnCAE25bsyx">
              <div className="release-btn">
                <img
                  className="release-logo"
                  src={spotify}
                  alt={landingAltTags.spotify}
                />
              </div>
            </a>
            <a href="https://music.apple.com/us/album/lie-to-me-ep/1603910239">
              <div className="release-btn">
                <img
                  className="release-logo"
                  src={apple}
                  alt={landingAltTags.apple}
                />
              </div>
            </a>
            <a href="https://music.amazon.com/albums/B09Q112YV6">
              <div className="release-btn">
                <img
                  className="release-logo"
                  src={amazon}
                  alt={landingAltTags.amazon}
                />
              </div>
            </a>
            <a href="https://www.pandora.com/artist/dimiter-yordanov/lie-to-me-single/ALh7qfx2gl7ch3c">
              <div className="release-btn">
                <img
                  className="release-logo"
                  src={pandora}
                  alt={landingAltTags.pandora}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
