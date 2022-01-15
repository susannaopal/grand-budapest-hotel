/* eslint-disable max-len */

import Hotel from "./classes/Hotel";
import Customer from "./classes/Customer";

// const calendarClick = document.querySelector('.available-rooms-input');
// calendarClick.addEventListener('change', () => {
//   console.log("change event")
// })

//mske a change event for drop down rooms for select a room (like above & see below)
//To Do for bullet2: console log the date inside the addeventlistener (get specific date, whatever is being clicked on and comes from the event)
//make a new function in the hotel class to filter by date and then hook that up to this


const domUpdates = {

  hide(...views) {
    views.forEach(view => {
      view.classList.add("hidden")
    })
  },

  show(...views) {
    views.forEach(view => {
    view.classList.remove("hidden");
    })
  },

  greetCustomerByName(customer) {
    let greetCustomer = document.querySelector('#firstName');
    greetCustomer.innerText = `Welcome, ${customer.getCustomerName()}!`;
  },
  
  displayCurrentCustomerBookings(currentCustomerBookings) {
    let bookingsSection = document.querySelector('.bookings-card');
    bookingsSection.innerHTML = '';
    currentCustomerBookings.forEach((booking) => {
      const newBookingCard =
      `<article class= 'book ${booking.id}>'
      <h3>Booking Details</h3>
      <p>Trip Date ${booking.date}</p>
      <p>Room Number ${booking.roomNumber}</p>
      </article>`;
      bookingsSection.innerHTML += newBookingCard;
    });
  },

  displayTotalSpent(hotel) {
    let amount = hotel.findTotalSpentOnRooms();
    let totalMoneySpent = document.querySelector('.money-spent');
    totalMoneySpent.innerText += `You have spent $${amount} 💵`;
  },

  displayAllAvailableRooms(allAvailableRooms) {
    let availableRoomsSection = document.querySelector('.available-rooms-card');
    availableRoomsSection.innerHTML = '';
    console.log("are you working this far?")
    allAvailableRooms.forEach((room) => {
      const availRoomsCard =
      `<article class= 'number ${room.number}>'
      <h3>Room Details</h3>
      <p>Room Type ${room.roomType}</p>
      <p>Bed Size ${room.bedSize}</p>
      <p>Number of Beds ${room.numBeds}</p>
      <p>Bed Size ${room.bedSize}</p>
      <p>Cost Per Night ${room.costPerNight}</p>
      <button class="book-btn">Book Room</button>
      </article>`;
      availableRoomsSection.innerHTML += availRoomsCard;
    });
    console.log("anything working down here?")
  },

 //event.target for the button to book the room (so it can know which room to book [every room needs to have ID aka room.number in domupdates const room card = article class / id (room.number) and event.target closest id])

};
    
export default domUpdates;