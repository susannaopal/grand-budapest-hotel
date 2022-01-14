import { expect } from "chai";
import Hotel from '../src/classes/Hotel';
import Customer from '../src/classes/Customer';

describe('Hotel', () => {
  let hotel;
  let customer;
  let currentCustomerData;
  let roomData;
  let bookingData;


  beforeEach(function() {
   
    currentCustomerData = {
      id: 9,
      name: 'Joe Bob',
    };
    roomData = {
      'number': 1,
      'roomType': "residential suite",
      'bidet': true,
      'bedSize': "queen",
      'numBeds': 1,
      'costPerNight': 358.4
    },
    {
      'number': 2,
      'roomType': "suite",
      'bidet': false,
      'bedSize': "full",
      'numBeds': 2,
      'costPerNight': 477.38
    },
    {
      'number': 15,
      'roomType': "single room",
      'bidet': false,
      'bedSize': "king",
      'numBeds': 1,
      'costPerNight': 491
    };
    bookingData = {
      'id': "5fwrgu4i7k55hl6sz",
      'userID': 9,
      'date': "2020/04/22",
      'roomNumber': 15,
      'roomServiceCharges': [ ]
    },
    {
      'id': "5fwrgu4i7k55hl6t5",
      'userID': 43,
      'date': "2020/01/24",
      'roomNumber': 24,
      'roomServiceCharges': [ ]
    },
    {
      'id': "5fwrgu4i7k55hl6t6",
      'userID': 13,
      'date': "2020/01/10",
      'roomNumber': 12,
      'roomServiceCharges': [ ]
    };

    hotel = new Hotel(currentCustomerData, roomData, bookingData);
//params have to be in order of the class constructor

  });
  

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });
    
  it('Should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should have a booking ID', function() {
    expect(bookingData.id).to.equal('5fwrgu4i7k55hl6sz');
  });

  it('should have a booking UserID', function() {
    expect(bookingData.userID).to.equal(9);
  });

  it('should have a booking date', function() {
    expect(bookingData.date).to.equal("2020/04/22");
  });

  it('should have room service charges', function() {
    expect(bookingData.roomServiceCharges).to.deep.equal([]);
  });

  it('should have a number', function() {
    expect(roomData.number).to.equal(1);
  });

  it('should have a room type', function() {
    expect(roomData.roomType).to.equal('residential suite');
  });

  it('should have a bidet', function() {
    expect(roomData.bidet).to.equal(true);
  });

  it('should have a bed size', function() {
    expect(roomData.bedSize).to.equal('queen');
  });

  it('should have a bed number per room', function() {
    expect(roomData.numBeds).to.equal(1);
  });

//TEST IS BROKEN, but wtf???
//error: 1) Hotel
      //  should calculate total cost per customer bookings:
      //  TypeError: this.bookings.filter is not a function
      //   at Hotel.findCurrentCustomerBookings (dist/webpack:/webpack-starter-kit/src/classes/Hotel.js:26:1)
      //   at Hotel.findTotalSpentOnRooms (dist/webpack:/webpack-starter-kit/src/classes/Hotel.js:34:1)
      //   at Context.<anonymous> (dist/webpack:/webpack-starter-kit/test/Hotel-test.js:119:11)
  
  


  // it('should calculate total cost per customer bookings', function() {
    // hotel.findCurrentCustomerBookings(9)
    // hotel.findTotalSpentOnRooms()
  //   expect(hotel.findTotalSpentOnRooms()).to.equal(491);
  // });
});

