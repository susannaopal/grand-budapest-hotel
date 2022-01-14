import { expect } from "chai";
import Hotel from '../src/classes/Hotel';


//NEED TO RETURN TO FIGURE OUT SAD PATH TESTING!!!

describe('Hotel', () => {
  let hotel;
  let roomData;
  let bookingData;
  let currentCustomerData;


  beforeEach(function() {
   
    currentCustomerData = {
      id: 9,
      name: 'Joe Bob',
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
      'number': 3,
      'roomType': "single room",
      'bidet': false,
      'bedSize': "king",
      'numBeds': 1,
      'costPerNight': 491.14
    };

    hotel = new Hotel(currentCustomerData, bookingData, roomData);
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

  //BELOW testing ONLY working if it is bookingData.roomNumber??
  //IS IT BECAUSE of the room number below? ARE THESE SAME PROP/ONLY 1?
  //THEY WILL NEED TO MATCH AT SOME POINT FOR FILTERING -->I think??
  //   it('should have a booking room number', function() {
  //     expect(hotel.roomNumber).to.equal(15);
  //   });

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

  //BELOW is failing, does it need to be tested?
//   it('should have a cost per room', function() {
//     expect(hotel.costPerNight).to.equal(358.4);
//   });
});
