import '../styles/style.css'
import lieToMe from '../images/lie-to-me.webp'
import spotify from '../images/Y-Spotify.png'
import apple from '../images/Y-AppleMusic.png'
import itunes from '../images/itunes-logo.png'
import amazon from '../images/amazon-music-logo.png'
import pandora from '../images/pandora.png'

export default function Landing() {
    return (
        <div id="landing">
            <nav>
                <div className="nav-icons">
                    <a target="_blank" rel="noreferrer"
                        href="https://open.spotify.com/artist/6QfYumUXMvevU1TR729Jrr?si=hddGb2pdSfqz42rIsveMmg">
                        <i className="fab icon fa-spotify"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://itunes.apple.com/us/artist/dimiter-yordanov/1212694927">
                        <i className="fab icon fa-itunes-note"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCfu37nGmXSfgaMsUS5yO85g">
                        <i className="fab icon fa-youtube"></i></a>
                    <a target="_blank" rel="noreferrer" href="http://instagram.com/dimitermusic">
                        <i className="fab icon fa-instagram"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/dimiteryordanovmusic">
                        <i className="fab icon fa-facebook"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://soundcloud.com/dimitermusic">
                        <i className="fab icon fa-soundcloud"></i></a>
                    <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm1812085/">
                        <i className="fab icon fa-imdb"></i></a>
                </div>
                <h1>Dimiter Yordanov</h1>
            </nav>
            <div>
                <div id="release-section">
                    <div className="column">
                        <a target="_blank" rel="noreferrer"
                            href="https://open.spotify.com/album/2tqOIJ7JQGANnCAE25bsyx?si=2S13s8dgTL-IUj2e9A7jJQ">
                            {<img id="album-cover" src={lieToMe}
                                alt="dimiter lie to me trees lake fence sky" />}
                        </a>
                    </div>
                    <div className="column">
                        <p id="release-text"><span id="bold">LIE TO ME</span> EP OUT NOW</p>
                        <div className="release-btn-group">
                            <a target="_blank" rel="noreferrer"
                                href="https://open.spotify.com/album/2tqOIJ7JQGANnCAE25bsyx?si=2S13s8dgTL-IUj2e9A7jJQ">
                                <div className="release-btn">
                                    <img className="release-logo" src={spotify} alt="spotify music" />
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/album/lie-to-me-ep/1603910239">
                                <div className="release-btn">
                                    <img className="release-logo" src={apple} alt="apple music" />
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer"
                                href="https://music.apple.com/us/album/lie-to-me-ep/1603910239?ign-itscg=30440&ign-itsct=catchall_p2">
                                <div className="release-btn">
                                    <img className="release-logo" src={itunes} alt="itunes music" />
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://music.amazon.com/albums/B09Q112YV6">
                                <div className="release-btn">
                                    <img className="release-logo" src={amazon}
                                        alt="amazon music" />
                                </div>
                            </a>
                            <a target="_blank" rel="noreferrer"
                                href="https://www.pandora.com/artist/dimiter-yordanov/lie-to-me-single/ALh7qfx2gl7ch3c">
                                <div className="release-btn">
                                    <img className="release-logo" src={pandora} alt="pandora music" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}