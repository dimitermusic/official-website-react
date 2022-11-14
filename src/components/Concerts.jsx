import "../styles/style.css";
import React, { useState, useEffect } from "react";
// const axios = require("axios");

export default function Concerts() {
  const [concerts, setConcerts] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    getConcerts();
  }, []);

  const getConcerts = () => {
    // GET concerts from custom JSON file. API is currently under maintenance.
    const concertJson = require("../lib/concerts.json")
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
        })
      setConcerts(upcomingAndSortedConcerts);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  // const getConcerts = () => {
  //   // GET concerts from custom API. UNDER MAINTENANCE.
  //   const API = `https://api.dimitermusic.com/APIKEY=${process.env.REACT_APP_API_KEY}/concerts`;
  //   axios.get(API)
  //     .then(({ data }) => {
  //       const upcomingConcerts = data?.filter((concert) => {
  //         let yesterday = new Date().valueOf() - 90000000;
  //         let currentConcert = new Date(concert.date).valueOf();
  //         return currentConcert >= yesterday;
  //       })
  //       setConcerts(upcomingConcerts);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       console.log(error);
  //     });
  // };

  // Reusable concert row component
  const ConcertRow = ({ concert }) => {
    return (
      <div
        key={concert.id}
        className="table-row"
        onClick={() =>
          concert.infoLink &&
          (window.location.href = concert.infoLink)
        }
      >
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
    )
  }

  // If error with API call or no concerts present, display message to DOM.
  if (error || concerts.length === 0) {
    return (
      <div className="concerts" id="tour">
        <h1>TOUR</h1>
        <p id="coming-soon">COMING SOON!</p>
      </div>
    );
    // If no error and concerts present, map through array of concerts and dynamically render concert data.
  } else {
    return (
      <div className="concerts" id="tour">
        <h1>TOUR</h1>
        <div id="concert-table">
          {concerts
            .map((concert) => (
              <ConcertRow concert={concert} />
            ))}
        </div>
      </div>
    );
  }
}
