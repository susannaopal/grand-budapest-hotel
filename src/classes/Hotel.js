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
    this.newBooking;
  }

  findCurrentCustomerBookings() {
    let filteredBookings = this.bookings.filter((booking) => {
      return booking.userID === this.currentCustomer.id;
    }).sort((a, b) => {
      if (b.date < a.date) { 
        return - 1 
      } if (b.date > a.date) { 
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

  filterSelectedRoomTypeOnly(tag) {
    this.roomsByTag = [];
    const filteredRoomByTag = this.availableRooms.filter((room) => {
      if (room.roomType === tag) {
        this.roomsByTag.push(room)
      }
    });
  }

//   //TO POST//issues with function below:
// 1)NEEDS AN EVENT TARGET CONNECTED TO THE POSTING FUNCTION (WHICH IS INSIDE OF THE API CALL)
// //SHOULD IT BE BROUGHT OUT?
// 2)THE BUTTON IS NOW TECHNICALLY CONNECTED TO THE ROOM.NUMBER ID --> NEEDS A QUERYSELECTOR FOR A CLICK EVENT
// 3) IN TURN ONCE POSTED THEN ALL OF THE BOOKINGS RETURN UPDATED (IS THIS ENOUGH?)
// 4) THE POST NEEDS TO MATCH THE USERS ID TO THE BOOKINGS USER ID AND THEN THE BOOKING ROOM NUMBER TO THE ROOM NUMBER (I THINK BUT BELOW ISN'T WORKING)


  // makeNewBooking(booking) {
  //   this.newBooking = [];
  //   console.log("new", this.newBooking)
  //   const makeBooking = this.availableRooms.forEach((room) => {
  //     const roomToBook = this.bookings.find((booking) => {
  //       if (booking.roomNumber === room.number) {
  //         if (!roomToBook) {
  //           this.newBooking.push({   
  //             userID: booking.userID,
  //             date: booking.date,
  //             roomNumber: booking.roomNumber,
              
  //           });
  //         }
  //       }
  //     });
  //   })
  //   console.log("is there a booking?")
  //   return makeBooking;
  // }
}



//figure out how to handle the all situation with a conditional 
//maube run avail rooms again




//USING DAYJS FOR ADDING A BOOKING (same set up as in scripts to take in date selection and format it same way)



export default Hotel;

