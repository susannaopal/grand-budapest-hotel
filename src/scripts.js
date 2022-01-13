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
import './images/hotel-background.png'


//GLOBAL VARIABLES
let hotel;
let customer;


//FUNCTIONS
function loadApiData() {
//ASK ANNA: When calling fetchAllTravelers ---> it was breaking the promise, but if I hard code to call a single user, this works? Am I missing something? Do I not need to import all via promise?
  Promise.all([fetchSingleCustomer(1), fetchAllRooms(), fetchAllBookings()])
    .then(data => {
      customer = new Customer(data[0]);
      hotel = new Hotel(data[0], data[1], data[2])
      loadCustomer(customer);
      hotel.findCurrentCustomerBookings();
    });
}

function loadCustomer(customer) {
  domUpdates.greetCustomerByName(customer);
  domUpdates.displayCurrentCustomerBookings(hotel.currentCustomerBookings);
}

//EVENT LISTENERS 
window.addEventListener('load', loadApiData);



console.log('This is the JavaScript entry file - your code begins here.');
