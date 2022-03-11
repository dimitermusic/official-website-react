import '../styles/style.css'

export default function Footer() {

    let thisYear = new Date().toDateString().slice(11);
    let gitHubLink = "https://www.github.com/dimitermusic'"

    return (
        <>
            <div className="nav-icons">
                <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/6QfYumUXMvevU1TR729Jrr?si=hddGb2pdSfqz42rIsveMmg">
                    <i className="fab bottom-icon fa-spotify"></i></a>
                <a target="_blank" rel="noreferrer" href="https://itunes.apple.com/us/artist/dimiter-yordanov/1212694927">
                    <i className="fab bottom-icon fa-itunes-note"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCfu37nGmXSfgaMsUS5yO85g">
                    <i className="fab bottom-icon fa-youtube"></i></a>
                <a target="_blank" rel="noreferrer" href="http://instagram.com/dimitermusic">
                    <i className="fab bottom-icon fa-instagram"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/dimiteryordanovmusic">
                    <i className="fab bottom-icon fa-facebook"></i></a>
                <a target="_blank" rel="noreferrer" href="https://soundcloud.com/dimitermusic">
                    <i className="fab bottom-icon fa-soundcloud"></i></a>
                <a target="_blank" rel="noreferrer" href="https://www.imdb.com/name/nm1812085/">
                    <i className="fab bottom-icon fa-imdb"></i></a>
            </div>
            <p id="copyright-text">© {thisYear} Dimiter Yordanov. All Rights Reserved. Powered by <a class="github-link" href={gitHubLink} target="_blank" rel="noreferrer">Dimiter Yordanov</a></p>
        </>
    )
}