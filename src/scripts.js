// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
import domUpdates from './domUpdates';
import { fetchAllCustomers, fetchSingleCustomer, fetchHotelRooms, fetchAllBookings, PostNewBooking } from './apiCalls';

// import './images/turing-logo.png'
import './images/hotel-img.png'
// import './images/keys-icon.png'

//GLOBAL VARIABLES
let hotel;
let roomsData;
let customer;
let customerData;
let bookingsData;
let booking;

//FUNCTIONS

// function fetchApiData() {
//     Promise.all([fetchSingleCustomer(48), fetchHotelRoooms(), fetchAllBookings()]);
//   .then(data => {
//       customerData = new Customer(data[0]);
//       hotelData = new Hotel (data[1], data[2])
//   });
// };




//EVENT LISTENERS 
// window.addEventListener('load', fetchApiData);



console.log('This is the JavaScript entry file - your code begins here.');
