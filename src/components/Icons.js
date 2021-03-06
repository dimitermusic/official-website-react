import '../styles/style.css';
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaFacebook, FaTwitter, FaImdb } from 'react-icons/fa';

export default function Icons() {

    return (
        <div className='nav-icons'>
            <a href='https://open.spotify.com/artist/6QfYumUXMvevU1TR729Jrr?si=hddGb2pdSfqz42rIsveMmg'>
                <FaSpotify className='icon' />
            </a>
            <a href='https://itunes.apple.com/us/artist/dimiter-yordanov/1212694927'>
                <FaApple className='icon' />
            </a>
            <a href='https://www.youtube.com/channel/UCfu37nGmXSfgaMsUS5yO85g'>
                <FaYoutube className='icon' />
            </a>
            <a href='http://instagram.com/dimitermusic'>
                <FaInstagram className='icon' />
            </a>
            <a href='https://www.facebook.com/dimiteryordanovmusic'>
                <FaFacebook className='icon' />
            </a>
            <a href='http://www.twitter.com/dimitermusic'>
                <FaTwitter className='icon' />
            </a>
            <a href='https://www.imdb.com/name/nm1812085/'>
                <FaImdb className='icon' />
            </a>
        </div>
    )
}