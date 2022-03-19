import '../styles/style.css'
import React from 'react'
import ReleaseInfo from './ReleaseInfo'
import Video from './Video'
import lieToMe from '../images/lie-to-me.webp'

export default function Landing() {

    return (
        <>
            <div id='landing'>
                <div id='release-section'>
                    <div className='column'>
                        <img id='album-cover' src={lieToMe}
                            alt='dimiter lie to me trees lake fence sky' />
                    </div>
                    <ReleaseInfo />
                </div>
            </div>
            <Video />
        </>
    );
}