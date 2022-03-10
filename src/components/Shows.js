import '../styles/style.css'

let tableBody = document.getElementById('concert-table');


export default function Shows() {
    return (
        <>
            <div className="shows">
                <h1>UPCOMING CONCERTS</h1>
                <p id="concert-disclaimer">Please note, concert listings include both Dimiter Yordanov and Ariana Deboo
                    (Dimiter
                    on guitar and backup vocals).</p>
                <div id="concert-table">
                </div>
            </div>
        </>
    )
}

// Print conditional message if no concert data
const handleNoConcertMessage = () => {

    let comingSoon = document.createElement('p');
    let disclaimer = document.getElementById('concert-disclaimer');

    disclaimer.textContent = ""
    comingSoon.textContent = 'COMING SOON!';
    tableBody.appendChild(comingSoon);
    comingSoon.style.textAlign = 'center'

}

// Fetch from custom concerts API and print to page
const handleFetchConcerts = () => {

    const API = 'https://api.dimitermusic.com/concerts';

    fetch(API)
        .then(res => res.json())
        .then(data => {

            if (data.length < 1 || (!data)) {

                handleNoConcertMessage();

            }


            // Sort concerts by date
            const handleSortConcerts = () => {

                data.sort((a, b) => {

                    let da = new Date(a.date),
                        db = new Date(b.date);

                    return da - db;

                });

            }

            // Dynamically create, style, and set content of html elements based on concert API data
            const handleDisplayConcerts = () => {

                for (let i = 0; i < data.length; i++) {

                    let tableRow = document.createElement('a');
                    let date = document.createElement('p')
                    let eventName = document.createElement('p')
                    let city = document.createElement('p')
                    let today = new Date().valueOf();
                    let currentConcert = new Date(data[i].date).valueOf();

                    if (currentConcert >= today) {

                        // Add CSS class to dynamically created row.
                        tableRow.classList.add('table-row')

                        // Set content of dynamically created elements based on API data.
                        tableRow.target = '_blank'
                        date.textContent = data[i].date;
                        eventName.textContent = data[i].eventName;
                        city.textContent = data[i].city;

                        // Print elements to page.
                        tableRow.appendChild(date);
                        tableRow.appendChild(eventName);
                        tableRow.appendChild(city);
                        tableBody.appendChild(tableRow);

                        // Add ticket link if present.
                        if (data[i].ticketLink) {

                            let ticketBtn = document.createElement('a');
                            ticketBtn.classList.add('btn')
                            ticketBtn.textContent = 'TICKETS';
                            ticketBtn.href = data[i].ticketLink;
                            ticketBtn.target = '_blank'
                            tableRow.appendChild(ticketBtn);

                        }

                        // Add Bandsintown link to table row if not null.
                        if (data[i].bandsInTownLink) {

                            tableRow.href = data[i].bandsInTownLink;

                        }

                    }

                }

            }

            handleSortConcerts();
            handleDisplayConcerts();

        })
        .catch(err => {
            console.log(err)
            handleNoConcertMessage();
            return err
        })

}

handleFetchConcerts();