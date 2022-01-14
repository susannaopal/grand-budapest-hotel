/* eslint-disable max-len */

import Customer from "./Customer"

class Hotel {

  //NEED TO FIX THE CONSTRUCTOR FOR STUFF THAT IS 
  // ROOM OR BOOKING DATA BASED ON HOW IT IS BEING IMPORTED VIA THE FETCH CALLS (0-customerData, 2-roomData, 3-bookingData)
  constructor(currentCustomerData, roomData, bookingData) {  
    // this.hotels = hotelData;
    this.rooms = roomData;
    this.bookings = bookingData;
    this.currentCustomer = currentCustomerData;
    this.id = bookingData.id;
    this.userID = bookingData.userID
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumer;
    this.roomServiceCharges = [];
    this.number = roomData.number;
    this.roomType = roomData.roomType;
    this.bidet = roomData.bidet;
    this.bedSize = roomData.bedSize;
    this.numBeds = roomData.numBeds;
    this.costPerNight = 0;
    this.currentCustomerBookings;
  }

  findCurrentCustomerBookings() {
    //SORT BY DATE AND DAYJS write a helper function
    let filteredBookings = this.bookings.filter((booking) => {
      return booking.userID === this.currentCustomer.id;
    });
    //sorrt below by date using .sort and dayjs
    this.currentCustomerBookings = filteredBookings;
  }

  //FUNCTION KEEPS BREAKING RE-DO AND ASK KATIE ABOUT 
  // findTotalSpentOnRooms() {
  //   let totalAmtSpent = this.bookings((acc, booking) => {
    //need to match the customer id to the current bookings id and the room id
    //above that functionality has the bookings already sorted to match
    // the bookingID to the current customer id
    //SO this functionality needs to take the bookings and * by room?
      

  // })
  
      
}

export default Hotel;

