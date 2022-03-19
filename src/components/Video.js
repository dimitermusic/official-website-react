import '../styles/style.css'

export default function Video() {

    return (
        <div className='videoContainer' >
            <div className='videoWrapper'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4RqEv8Y1CgA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}