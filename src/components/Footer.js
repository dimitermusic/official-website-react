import '../styles/style.css'
import Icons from '../components/Icons';

export default function Footer() {

    let thisYear = new Date().toDateString().slice(11);
    let gitHubLink = 'https://www.github.com/dimitermusic'

    return (
        <footer>
            <Icons />
            <p id='copyright-text'>© {thisYear} Dimiter Yordanov. All Rights Reserved. Powered by <a className='github-link' href={gitHubLink} target='_blank' rel='noreferrer'>Dimiter Yordanov</a>.</p>
        </footer>
    )
}