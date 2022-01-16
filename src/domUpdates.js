/* eslint-disable max-len */

import Hotel from "./classes/Hotel";
import Customer from "./classes/Customer";
let hotel;
let customer;



//mske a change event for drop down rooms for select a room (like above & see below)
//To Do for bullet2: console log the date inside the addeventlistener (get specific date, whatever is being clicked on and comes from the event)
//make a new function in the hotel class to filter by date and then hook that up to this
//QUERY SELECTORS: 
// const bookingBtnToPost = document.querySelector('.book-btn');
// const calendarSubmissioBtn = document.querySelector('.submission-btn');
// const roomTypeByTagBtn = document.querySelector('.submit-tag-view-btn');






const domUpdates = {

  addHidden(elements) {
    elements.forEach(item => {
      item.classList.add("hidden");
    });
  },
  removeHidden(elements) {
    elements.forEach(item => {
      item.classList.remove("hidden");
    });
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
    allAvailableRooms.forEach((room) => {
      const availRoomsCard =
      `<article class="number ${room.number}" id="${room.number}">
      <h3>Room Details</h3>
      <p>Room Type: ${room.roomType}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Number of Beds: ${room.numBeds}</p>
      <p>Bed Size: ${room.bedSize}</p>
      <p>Bidet: ${room.bidet}</p>
      <p>Room Number: ${room.number}</p>
      <p>Cost Per Night: $${room.costPerNight}</p>
      <button id=${room.number} class="book-btn">Book This Room</button>
      </article>`;
      availableRoomsSection.innerHTML += availRoomsCard;
    });
  }

};

//NEED TO CREATE TROUBLE SHOOTING MESSAGE HERE TO APOLOGIZE FOR NO ROOMS BEING AVAILABLE
  //ALSO NEED SOME SORT OF TROUBLESHOOTING IF THE POSTING ISN'T WORKING
  //AND NEED SOME SORT OF TROUBLESHOOTING TO ENSURE THAT THE VALUE IS FILLED OUT



    
export default domUpdates;
// export { bookingBtnToPost }
  //  query selector for button above BUT exporting below and importing into scripts (posting function needs to be tied this)
