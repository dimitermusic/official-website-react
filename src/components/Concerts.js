import '../styles/style.css';
import React, { useState, useEffect } from 'react';

export default function Concerts() {

    const [concerts, setConcerts] = useState([]);
    const [error, setError] = useState(null);
    const [concertsPresent, setConcertsPresent] = useState(false);

    useEffect(() => {

        // Fetch concerts from custom API.
        const API = 'https://api.dimitermusic.com/concerts';

        fetch(API)
            .then(res => res.json())
            // Sort array of concerts and set state to only future concerts.
            .then(data => {

                let sortedConcerts = data.sort((a, b) => {

                    let da = new Date(a.date),
                        db = new Date(b.date);

                    return da - db;

                })

                setConcerts(sortedConcerts)

            },
                (error) => {
                    setError(error)
                }
            )

    }, [])

    // If concert data is present, set state to true.
    useEffect(() => {
        if (concerts.length > 0) {
            setConcertsPresent(true)
        }
    }, [concerts])

    // If error with API call or n concerts present, display message to DOM.
    if (error || !concertsPresent) {
        return (
            <div className="concerts">
                <h1>UPCOMING CONCERTS</h1>
                <p id="coming-soon">COMING SOON!</p>
            </div>
        )
        // If no error and concerts present, map through array of concerts and dynamically render concert data.
    } else {
        return (
            <div className="concerts">
                <h1>UPCOMING CONCERTS</h1>
                <p id="concert-disclaimer">Please note, concert listings include both Dimiter Yordanov and Ariana Deboo
                    (Dimiter
                    on guitar and backup vocals).</p>
                <div id="concert-table">
                    {concerts.map(concert => {
                        let today = new Date().valueOf() - 90000000;
                        let currentConcert = new Date(concert.date).valueOf();
                        if (currentConcert >= today) {
                            return (
                                <a key={concert.id} className="table-row" target="_blank" rel="noreferrer" href={concert.bandsInTownLink || null}
                                >
                                    <p>{concert.date}</p>
                                    <p>{concert.eventName}</p>
                                    <p>{concert.city}</p>
                                    {concert.ticketLink && <a className="btn" target="_blank" rel="noreferrer" href={concert.ticketLink}>TICKETS</a>}

                                </a>
                            )
                        }

                    }
                    )}
                </div>
            </div >
        )
    }

}