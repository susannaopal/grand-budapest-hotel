/* eslint-disable max-len */

const domUpdates = {

  addHidden(...elements) {
    elements.forEach(item => {
      item.classList.add("hidden");
    });
  },
  removeHidden(...elements) {
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
    if (allAvailableRooms.length) {
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
      })
    } if (!allAvailableRooms.length) {
      let availableRoomsSection = document.querySelector('.available-rooms-card');
      availableRoomsSection.innerHTML = '';
      const availRoomsCard =
    `<p>We are so sorry, but we do not have any availablity for that room type on that date. Please make another selection!</p>` ;
      availableRoomsSection.innerHTML += availRoomsCard;
    }
  }

};

    
export default domUpdates;