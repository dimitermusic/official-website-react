import '../styles/style.css';
import React, { useState, useEffect } from 'react';

export default function Concerts() {

    const [sortedConcerts, setSortedConcerts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        const API = 'https://api.dimitermusic.com/concerts';

        fetch(API)
            .then(res => res.json())
            .then(data => {

                setSortedConcerts(data.sort((a, b) => {

                    let da = new Date(a.date),
                        db = new Date(b.date);

                    return da - db;

                }))

            },
                (error) => {
                    setError(error)
                }
            )

    }, [])

    useEffect(() => {
        if (sortedConcerts.length > 0) {
            setIsLoaded(true)
        }
    }, [sortedConcerts])

    if (error || !isLoaded) {
        return (
            <div className="concerts">
                <h1>UPCOMING CONCERTS</h1>
                <p id="coming-soon">COMING SOON!</p>
            </div>
        )
    } else {
        return (
            <div className="concerts">
                <h1>UPCOMING CONCERTS</h1>
                <p id="concert-disclaimer">Please note, concert listings include both Dimiter Yordanov and Ariana Deboo
                    (Dimiter
                    on guitar and backup vocals).</p>
                <div id="concert-table">
                    {sortedConcerts.map(concert => (
                        <a key={concert.id} className="table-row" target="_blank" rel="noreferrer" href={concert.bandsInTownLink || null}
                        >
                            <p>{concert.date}</p>
                            <p>{concert.eventName}</p>
                            <p>{concert.city}</p>
                            {concert.ticketLink && <a className="btn" target="_blank" rel="noreferrer" href={concert.ticketLink}>TICKETS</a>}

                        </a>
                    ))}

                </div>
            </div >
        )
    }

}