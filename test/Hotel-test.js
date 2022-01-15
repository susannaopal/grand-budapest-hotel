 /* eslint-disable max-len */

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
    roomData = [{
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
      'costPerNight': 491.00
    }];
    bookingData = [{
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
    }];

    hotel = new Hotel(currentCustomerData, roomData, bookingData);
//params have to be in order of the class constructor

  });
  

  it('Should be a function', () => {
    expect(Hotel).to.be.a('function');
  });
    
  it('Should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('Should have a rooms property', () => {
    expect(hotel.rooms).to.be.equal(roomData)
  });

  it('Should have an array of bookings', () => {
    expect(hotel.bookings).to.be.deep.equal(bookingData)
  });

  it('Should have a customer property', () => {
    expect(hotel.currentCustomer).to.be.deep.equal(currentCustomerData)
  });

  it('Should find current customer booking', () => {
    expect(hotel.currentCustomerBookings).to.be.equal(undefined)
    hotel.findCurrentCustomerBookings()
    expect(hotel.currentCustomerBookings).to.deep.equal([{
      'id': "5fwrgu4i7k55hl6sz",
      'userID': 9,
      'date': "2020/04/22",
      'roomNumber': 15,
      'roomServiceCharges': [ ]
    }]);
  });
  
  it('Should be able to calculate the total cost of a customer booking', function() {
    hotel.findCurrentCustomerBookings(9);
    hotel.findTotalSpentOnRooms();
    expect(hotel.findTotalSpentOnRooms()).to.equal(491.00);
  });

  //NEED TO FIX THIS BROKEN TEST!
  // it('Should be able to find available rooms for a customer', function() {
  //   hotel.findAvailableRooms();
  //   console.log("are you working")
  //   expect(hotel.findAvailableRooms()).to.equal('2022/04/22');
  // });
});

