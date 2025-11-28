import "../styles/Awal.css";
import "../styles/style.css";
import React, { useState, useEffect } from "react";

export default function Concerts() {
  const [concerts, setConcerts] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    getConcerts();
  }, []);

  const getConcerts = () => {
    // GET concerts from custom JSON file. API is currently under maintenance.
    const concertJson = require("../lib/concerts.json");
    try {
      const upcomingAndSortedConcerts = concertJson
        ?.filter((concert) => {
          let yesterday = new Date().valueOf() - 90000000;
          let currentConcert = new Date(concert.date).valueOf();
          return currentConcert >= yesterday;
        })
        .sort((a, b) => {
          const da = new Date(a.date);
          const db = new Date(b.date);
          return da - db;
        });
      setConcerts(upcomingAndSortedConcerts);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const ConcertRow = ({ concert }) => {
    return (
      <div className="table-row">
        <p>{concert.date}</p>
        <p>{concert.eventName}</p>
        <p>{concert.city}</p>
        {concert.ticketLink ? (
          <a className="btn" href={concert.ticketLink}>
            TICKETS
          </a>
        ) : (
          <a className="btn" href={concert.infoLink}>
            MORE INFO
          </a>
        )}
      </div>
    );
  };

  return (
    <section id="tour" className="awal-credits-section">
      <div className="awal-container">
        <header className="awal-section-header">
          <h2 className="awal-title">Concerts</h2>
          <p className="awal-subtitle">
            Upcoming live performances and events.
          </p>
        </header>

        {error || concerts.length === 0 ? (
          <p id="coming-soon">COMING SOON!</p>
        ) : (
          <div id="concert-table">
            {concerts.map((concert) => (
              <ConcertRow concert={concert} key={concert.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
