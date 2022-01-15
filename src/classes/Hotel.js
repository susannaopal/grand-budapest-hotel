/* eslint-disable max-len */
import dayjs from "dayjs";
//^^^^any file to use on this needs to be imported

class Hotel {

  //NEED TO FIX THE CONSTRUCTOR FOR STUFF THAT IS 
  // ROOM OR BOOKING DATA BASED ON HOW IT IS BEING IMPORTED VIA THE FETCH CALLS (0-customerData, 2-roomData, 3-bookingData)
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
      if (a.date < b.date) { 
        return - 1 
      } if (a.date > b.date) { 
        return 1 
      } else { 
        return 0 };
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
    const allFilteredBookings = this.bookings.filter((booking) => {
      if (booking.date === formattedDate) {
        this.unavailableRooms.push(booking.roomNumber)
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
//make sure value of tags match room type
  filterSelectedRoomTypeOnly(tag) {
    // console.log("selected room tag", tag)
    this.roomsByTag = [];
    const filteredRoomByTag = this.availableRooms.filter((room) => {
      if (room.roomType === tag) {
        this.roomsByTag.push(room)
      }
    });
  }
}
//figure out how to handle the all situation with a conditional 
//maube run avail rooms again




//USING DAYJS FOR ADDING A BOOKING (same set up as in scripts to take in date selection and format it same way)



export default Hotel;

