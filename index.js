function bookNow() {
  fetch('https://routes-jl23.onrender.com/Routes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => displayTickets(data))
    .catch(error => {
      console.error('Error fetching routes:', error);
    });
}


  // Function to display tickets
  function displayTickets(ticket) {
      const listings = document.getElementById("listings"); // Get the listings container element from the DOM
  
      // Iterate over each ticket
      ticket.forEach(element => {
          let div = document.createElement("div"); // Create a new div element for each ticket
          div.classList.add("ticket-item")
          let availableTicket = document.createElement("h2"); // Create a new h2 element for the ticket destination
          availableTicket.innerText = element.destination; // Set the text of the h2 element to the ticket destination
          div.appendChild(availableTicket); // Append the h2 element to the ticket div
  
          let departureTime = document.createElement("h3"); // Create a new h3 element for the departure time
          departureTime.innerHTML = "Departure Time: " + element.time; // Set the innerHTML of the h3 element to the departure time
          div.appendChild(departureTime); // Append the h3 element to the ticket div

          let busCompany = document.createElement("h4"); // Create a new h3 element for the bus company
          busCompany.innerText = element.company; // Set the text of the h3 element to the bus company
          div.appendChild(busCompany); // Append the h3 element to the ticket div
  
          let availableSeats = document.createElement("h5"); // Create a new h3 element for the available seats
          availableSeats.tickets = element.seats - element.ticketsSold; // Calculate the number of available seats
          availableSeats.innerText = "Available Seats: " + availableSeats.tickets; // Set the text of the h3 element to the number of available seats
          div.appendChild(availableSeats); // Append the h3 element to the ticket div
  
          let ticketPrice = document.createElement("button"); // Create a new button element for the ticket price
          ticketPrice.innerText = element.price; // Set the text of the button element to the ticket price
          div.appendChild(ticketPrice); // Append the button element to the ticket div
  
          // Add event listener to purchase ticket on button click
          ticketPrice.addEventListener("click", function () {
              purchaseTicket(element, availableSeats); // Call the purchaseTicket function with the ticket and available seats as arguments
          });
  
          // Append the ticket div to the listings container
          listings.appendChild(div);
      });
  }
  
 // This function is responsible for purchasing a ticket
 function purchaseTicket(ticket, availableSeats) {
    // Check if there are available tickets
    if (availableSeats.tickets > 0) {
      // Decrease the number of available tickets by 1
      availableSeats.tickets--;
  
      // Update the text content of the availableSeats element with the new count
      availableSeats.innerText = "Available Seats: " + availableSeats.tickets;
  
      // Display a SweetAlert success message with the details of the purchased ticket
      swal({
        icon: 'success',
        title: 'TICKET PURCHASED',
        text: 'Destination: ' + ticket.destination + '\nPrice: ' + ticket.price,
      });
    } else {
      // Display a SweetAlert error message indicating that no tickets are available
       swal({
        icon: 'error',
        title: 'No Tickets Available!',
        text: 'Sorry, all tickets have been sold.',
      });
    }
  }
  
  
        //   let departureDate = document.createElement("h4");
        //   departureDate.innerHTML = "Depature Date:" + element.date;
        //   div.appendChild(departureDate)


    // function addDestination(){
    //     fetch("http://localhost:3000/Routes",{
    //         method: "PUT"
    //     })
    // }