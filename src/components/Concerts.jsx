import { useState, useEffect } from "react";
import { moreInfo, noConcerts, tickets, sections } from "../utils/constants";
import "../styles/GlobalStyles.css";

export default function Concerts() {
  const { elementId, title, subtitle } = sections.concerts;
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
            {tickets}
          </a>
        ) : (
          <a className="btn" href={concert.infoLink}>
            {moreInfo}
          </a>
        )}
      </div>
    );
  };

  return (
    <section id={elementId} className="awal-credits-section">
      <div className="awal-container">
        <header className="awal-section-header">
          <h2 className="awal-title">{title}</h2>
          <p className="awal-subtitle">{subtitle}</p>
        </header>

        {error || concerts.length === 0 ? (
          <p id="coming-soon">{noConcerts}</p>
        ) : (
          <div id="concert-table">
            {concerts.map((concert) => (
              <ConcertRow concert={concert} key={concert.date} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
