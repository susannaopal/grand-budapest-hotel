import Customer from "./Customer"

class Hotel {

  //NEED TO FIX THE CONSTRUCTOR FOR STUFF THAT IS 
  // ROOM OR BOOKING DATA BASED ON HOW IT IS BEING IMPORTED VIA THE FETCH CALLS (0-customerData, 2-roomData, 3-bookingData)
  constructor(currentCustomerData, roomData, bookingData) {  
    // this.hotels = hotelData;
    this.rooms = roomData;
    this.bookings = bookingData;
    //AM I IMPORTING CUSTOMER CORRECTLY BELOW
    this.currentCustomer = currentCustomerData;
    // this.id = hotelData.id;
    // this.userID = hotelData.userID
    // this.roomType = hotelData.roomType;
    // this.date = hotelData.date;
    // this.roomNumber = hotelData.roomNumer;
    // //BELOW is technically an empty array in the data set ??? 
    // this.roomServiceCharges = hotelData.roomServiceCharges;
    // this.number = hotelData.number;
    // this.roomType = hotelData.roomType;
    // //SINCE below is a boolean, can I just assign it as such? DBL check on 
    // this.bidet = hotelData.bidet;
    // this.bedSize = hotelData.bedSize;
    // this.numBeds = hotelData.numBeds;
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
}

export default Hotel;

