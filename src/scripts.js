// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
import domUpdates from './domUpdates';
import { fetchAllCustomers, fetchSingleTraveler, fetchHotelRooms, fetchAllBookings, PostNewBooking } from './apiCalls';

// import './images/turing-logo.png'
import './images/hotel-img.png'
// import './images/keys-icon.png'

//GLOBAL VARIABLES
let hotel;
let rooms;
let customers;
let customer;
let bookings;
let booking;






console.log('This is the JavaScript entry file - your code begins here.');
