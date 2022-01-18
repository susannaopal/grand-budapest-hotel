/* eslint-disable max-len */

class Hotel {
  constructor(currentCustomerData, roomData, bookingData) {  
    this.rooms = roomData;
    this.bookings = bookingData;
    this.currentCustomer = currentCustomerData;
    this.currentCustomerBookings;
    this.customerAmountSpent;
    this.unavailableRooms;
    this.availableRooms;
    this.roomsByTag;
  }

  findCurrentCustomerBookings() {
    let filteredBookings = this.bookings.filter((booking) => {
      return booking.userID === this.currentCustomer.id;
    }).sort((a, b) => {
      if (b.date < a.date) { 
        return - 1; 
      } if (b.date > a.date) { 
        return 1;
      } else { 
        return 0; 
      }
    });
    this.currentCustomerBookings = filteredBookings; 
  }

  findTotalSpentOnRooms() {
    this.findCurrentCustomerBookings();
    let totalSpent = this.currentCustomerBookings.reduce((acc, booking) => {
      let hotelRoom = this.rooms.find((room) => {
        return room.number === booking.roomNumber;
      });
      acc += hotelRoom.costPerNight;
      return acc;
    }, 0);
    return totalSpent = Number(totalSpent.toFixed(2));
  }

  findAvailableRooms(formattedDate) {
    this.unavailableRooms = [];
    this.availableRooms = [];
    this.bookings.filter((booking) => {
      if (booking.date === formattedDate) {
        this.unavailableRooms.push(booking.roomNumber);
      }
    });    
    this.rooms.forEach((room) => {
      if (this.unavailableRooms.includes(room.number)) {
        return; 
      } else {
        this.availableRooms.push(room);
      }
    });
  }

  filterSelectedRoomTypeOnly(tag) {
    this.roomsByTag = [];
    this.availableRooms.filter((room) => {
      if (room.roomType === tag) {
        this.roomsByTag.push(room);
      }
    });
  }
}

export default Hotel;

