class Hotel {
  constructor(roomData, bookingData, customerData) {  
    this.roomsData = roomData;
    this.bookingData = bookingData;
    //AM I IMPORTING CUSTOMER CORRECTLY BELOW
    this.customersData = customerData;
    this.id = bookingData.id;
    this.userID = bookingData.userID
    this.roomType = bookingData.roomType;
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumer;
    //BELOW is technically an empty array in the data set ??? 
    this.roomServiceCharges = bookingData.roomServiceCharges;
    this.number = roomData.number;
    this.roomType = roomData.roomType;
    //SINCE below is a boolean, can I just assign it as such? DBL check on 
    this.bidet = roomData.bidet;
    this.bedSize = roomData.bedSize;
    this.numBeds = roomData.numBeds
    this.costPerNight = 0;
  }
}

export default Hotel;

