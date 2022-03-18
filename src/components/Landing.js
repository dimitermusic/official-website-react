import '../styles/style.css'
import React, { useState, Suspense, useEffect } from 'react'
import Spinner from './Spinner'
import ReleaseInfo from './ReleaseInfo'
import lieToMe from '../images/lie-to-me.webp'

export default function Landing() {

    const Video = React.lazy(() => import('./Video'))

    const [imageIsLoaded, setImageIsLoaded] = useState(false);

    return (
        <>
            <div id='landing'>
                <div id='release-section'>
                    <div className='column'>
                        <img onLoad={useEffect(() => { setImageIsLoaded(true) }, [imageIsLoaded])} id='album-cover' src={lieToMe}
                            alt='dimiter lie to me trees lake fence sky' />
                    </div>
                    {imageIsLoaded && <ReleaseInfo />}
                </div>
            </div>
            <Suspense fallback={<Spinner />}>
                <Video />
            </Suspense>
        </>
    );
}