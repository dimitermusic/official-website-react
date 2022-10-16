import "../styles/style.css";
import React, { useState, useEffect } from "react";
const axios = require("axios");

export default function Concerts() {
  const [concerts, setConcerts] = useState([]);
  const [error, setError] = useState(null);
  const [concertsPresent, setConcertsPresent] = useState(false);

  useEffect(() => {
    // GET concerts from custom API.
    const API = `https://api.dimitermusic.com/APIKEY=${process.env.REACT_APP_API_KEY}/concerts`;
    axios
      .get(API)
      .then(({ concerts }) => {
        const upcomingConcerts = concerts.filter((concert) => {
          let yesterday = new Date().valueOf() - 90000000;
          let currentConcert = new Date(concert.date).valueOf();
          return currentConcert >= yesterday;
        })

        setConcerts(upcomingConcerts);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);

  // If concert data is present, set state to true.
  useEffect(() => {
    if (concerts.length > 0) {
      setConcertsPresent(true);
    }
  }, [concerts]);

  // If error with API call or no concerts present, display message to DOM.
  if (error || !concertsPresent) {
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
            .sort((a, b) => {
              const da = new Date(a.date);
              const db = new Date(b.date);
              return da - db;
            })
            .map((concert) => (
              // If concert Bandsintown link available, add click event to go to link.
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
                {/* If concert ticket link available, dynamically render button and set link to ticket link */}
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
            ))}
        </div>
      </div>
    );
  }
}
