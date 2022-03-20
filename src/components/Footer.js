import '../styles/style.css'
import Icons from '../components/Icons';

export default function Footer() {

    // Get and dynamically render current year
    let thisYear = new Date().toDateString().slice(11);
    let gitHubLink = 'https://www.github.com/dimitermusic'

    return (
        <footer>
            <Icons />
            <p id='copyright-text'>© {thisYear} Dimiter Yordanov. All Rights Reserved. Powered by <a className='github-link' href={gitHubLink}>Dimiter Yordanov</a>.</p>
        </footer>
    )
}