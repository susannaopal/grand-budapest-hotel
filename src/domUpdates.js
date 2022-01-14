/* eslint-disable max-len */

import Hotel from "./classes/Hotel";

const domUpdates = {

  greetCustomerByName(customer) {
    let greetCustomer = document.querySelector('#firstName');
    greetCustomer.innerText = `Welcome, ${customer.getCustomerName()}!`;
  },
  
  displayCurrentCustomerBookings(currentCustomerBookings) {
    let bookingsSection = document.querySelector('.all-hotel-bookings');
    bookingsSection.innerHTML = '';
    currentCustomerBookings.forEach((booking) => {
      const newBookingCard =
      `<article class= 'book ${booking.id}>'
      <h3>Booking Details</h3>
      <p>Trip Date ${booking.date}</p>
      <p>Room Number ${booking.roomNumber}</p>
      </article>`;
      bookingsSection.innerHTML += newBookingCard;
    })
  },

  displayTotalSpent(hotel) {
    let amount = hotel.findTotalSpentOnRooms()
    let totalMoneySpent = document.querySelector('#money-spent')
    totalMoneySpent.innerText += `💵 You have spent $${amount} 💵`
  },

};
    
export default domUpdates;
