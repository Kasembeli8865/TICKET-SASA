function bookNow(){
    fetch('http://localhost:3000/Routes')
    .then( response => response.json())
    .then(data => displayTickets(data))
}

function displayTickets(ticket){
    const listings = document.querySelector("#listings")
     ticket.forEach(element => {
        let div = createElement ("div")
        let availableTicket = document.createElement("h2")
        availableTicket.innerText = element.destination
        div.appendChild(availableTicket);

        let departureTime = document.createElement("h3")
        departureTime.innerHTML = "Departure Time :" + element.time
        div.appendChild(departureTime);

        let busCompany = document.createElement("h3")
        busCompany.innerText = element.company
        div.appendChild(busCompany);

        let availableSeats = document.createElement("h3")
        availableSeats.innerText = "Available Seats :" + element.seats
        div.appendChild(availableSeats);

        let ticketPrice = document.createElement("button")
        ticketPrice.innerText = element.price
        div.appendChild(ticketPrice)

        ticketPrice.addEventListener("click", alert('TICKET PURCHASED'))
    });
}