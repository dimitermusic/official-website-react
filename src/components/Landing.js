import '../styles/style.css'
import React from 'react'
import lieToMe from '../images/lie-to-me.webp'
import lieToMeText from '../images/lie-to-me-text.png'
import spotify from '../images/Y-Spotify.png'
import apple from '../images/Y-AppleMusic.png'
import itunes from '../images/itunes-logo.png'
import amazon from '../images/amazon-music-logo.png'
import pandora from '../images/pandora.png'

export default function Landing() {

    return (
        <>
            <div id='landing'>
                <div id='release-section'>
                    <div className='column'>
                        <img id='album-cover' src={lieToMe}
                            alt='dimiter lie to me trees lake fence sky' />
                    </div>
                    <div className='column'>
                        <img id='lie-to-me-text' src={lieToMeText} alt='dimiter lie to me text' />
                        <p id='release-text'>OUT NOW</p>
                        <div className='release-btn-group'>
                            <a href='https://open.spotify.com/album/2tqOIJ7JQGANnCAE25bsyx?si=2S13s8dgTL-IUj2e9A7jJQ'>
                                <div className='release-btn'>
                                    <img className='release-logo' src={spotify} alt='spotify music' />
                                </div>
                            </a>
                            <a href='https://music.apple.com/us/album/lie-to-me-ep/1603910239'>
                                <div className='release-btn'>
                                    <img className='release-logo' src={apple} alt='apple music' />
                                </div>
                            </a>
                            <a href='https://music.apple.com/us/album/lie-to-me-ep/1603910239?ign-itscg=30440&ign-itsct=catchall_p2'>
                                <div className='release-btn'>
                                    <img className='release-logo' src={itunes} alt='itunes music' />
                                </div>
                            </a>
                            <a href='https://music.amazon.com/albums/B09Q112YV6'>
                                <div className='release-btn'>
                                    <img className='release-logo' src={amazon}
                                        alt='amazon music' />
                                </div>
                            </a>
                            <a href='https://www.pandora.com/artist/dimiter-yordanov/lie-to-me-single/ALh7qfx2gl7ch3c' id='watch'>
                                <div className='release-btn'>
                                    <img className='release-logo' src={pandora} alt='pandora music' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}