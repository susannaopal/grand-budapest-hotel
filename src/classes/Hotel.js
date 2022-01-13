
class Hotel {
  constructor(hotelData, roomData, bookingData, customerData) {  
    this.hotels = hotelData;
    this.rooms = roomData;
    this.bookings = bookingData;
    //AM I IMPORTING CUSTOMER CORRECTLY BELOW
    this.customersData = customerData;
    this.id = hotelData.id;
    this.userID = hotelData.userID
    this.roomType = hotelData.roomType;
    this.date = hotelData.date;
    this.roomNumber = hotelData.roomNumer;
    //BELOW is technically an empty array in the data set ??? 
    this.roomServiceCharges = hotelData.roomServiceCharges;
    this.number = hotelData.number;
    this.roomType = hotelData.roomType;
    //SINCE below is a boolean, can I just assign it as such? DBL check on 
    this.bidet = hotelData.bidet;
    this.bedSize = hotelData.bedSize;
    this.numBeds = hotelData.numBeds
    this.costPerNight = 0;
    this.currentCustomerBookings;
  }
  findCurrentCustomerBookings() {
    this.currentCustomerBookings = this.bookings.filter((hotel) => {
      return hotel.userID === this.customersData.id;
    });
  }
}

export default Hotel;

