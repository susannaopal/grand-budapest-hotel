const domUpdates = {

  greetCustomerByName(customer) {
    let greetCustomer = document.querySelector('#firstName');
    greetCustomer.innerText = `Welcome, ${customer.getCustomerName()}!`;
  },
  
  displayCurrentCustomerBookings(currentCustomerBookings) {
    let bookingsSection = document.querySelector('.all-hotel-bookings');
    currentCustomerBookings.forEach((booking) => {
      const bookingCard =
      `<article class= 'book ${booking.id}>'
      <h3>Booking Details</h3>
      <p>Trip Date ${booking.date}</p>
      <p>Room Number ${booking.roomNumber}</p>`
      bookingsSection.innerHTML += bookingCard
    })
  }
};
    
export default domUpdates;
