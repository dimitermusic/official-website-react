import '../styles/style.css'
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaImdb } from "react-icons/fa";


export default function Footer() {

    let thisYear = new Date().toDateString().slice(11);
    let gitHubLink = 'https://www.github.com/dimitermusic'

    return (
        <>
            <div className='nav-icons'>
                <a target='_blank' rel='noreferrer'
                    href='https://open.spotify.com/artist/6QfYumUXMvevU1TR729Jrr?si=hddGb2pdSfqz42rIsveMmg'>
                    <FaSpotify className='bottom-icon' /></a>
                <a target='_blank' rel='noreferrer' href='https://itunes.apple.com/us/artist/dimiter-yordanov/1212694927'>
                    <FaApple className='bottom-icon' /></a>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCfu37nGmXSfgaMsUS5yO85g'>
                    <FaYoutube className='bottom-icon' /></a>
                <a target='_blank' rel='noreferrer' href='http://instagram.com/dimitermusic'>
                    <FaInstagram className='bottom-icon' /></a>
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/dimiteryordanovmusic'>
                    <FaFacebook className='bottom-icon' /></a>
                <a target='_blank' rel='noreferrer' href='http://www.twitter.com/dimitermusic'>
                    <FaTwitter className='bottom-icon' /></a>
                <a target='_blank' rel='noreferrer' href='https://www.imdb.com/name/nm1812085/'>
                    <FaImdb className='bottom-icon' /></a>
            </div>
            <p id='copyright-text'>© {thisYear} Dimiter Yordanov. All Rights Reserved. Powered by <a className='github-link' href={gitHubLink} target='_blank' rel='noreferrer'>Dimiter Yordanov</a>.</p>
        </>
    )
}