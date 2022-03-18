import '../styles/style.css'
import React, { Suspense } from 'react'
import Spinner from './Spinner'

export default function Video() {

    const Concerts = React.lazy(() => import('./Concerts'))

    return (
        <>
            <div className='videoContainer' >
                <div className='videoWrapper'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4RqEv8Y1CgA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <Suspense fallback={<Spinner />}>
                <Concerts />
            </Suspense>
        </>
    )
}