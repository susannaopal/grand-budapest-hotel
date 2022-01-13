// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
  // eslint-disable-next-line max-len

// An example of how you tell webpack to use a CSS (SCSS) file
//IMPORTED FILES
import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
import domUpdates from './domUpdates';
import { fetchAllCustomers, fetchSingleCustomer, fetchAllRooms, fetchAllBookings } from './apiCalls';
import './images/hotel-img.png'

//GLOBAL VARIABLES
let hotel;
let customer;


//FUNCTIONS
function loadApiData() {
  Promise.all([fetchAllCustomers(), fetchSingleCustomer(48), fetchAllRooms(), fetchAllBookings()])
    .then(data => {
      customer = new Customer(data[0]);
      hotel = new Hotel(data[0], data[1], data[2])
    })
}


//EVENT LISTENERS 
window.addEventListener('load', loadApiData);



console.log('This is the JavaScript entry file - your code begins here.');
