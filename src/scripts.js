// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
  // eslint-disable-next-line max-len
  /* eslint-disable max-len */

// An example of how you tell webpack to use a CSS (SCSS) file
//IMPORTED FILES
import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
import domUpdates from './domUpdates';
import { fetchAllCustomers, fetchSingleCustomer, fetchAllRooms, fetchAllBookings } from './apiCalls';
import './images/hotel-img.png'
import './images/hotel-background.png'


//FETCH ALL CUST FOR USER LOGIN section

//GLOBAL VARIABLES
let hotel;
let customer;

// function displayElements(elementsToDisplay) {
//   domUpdates.show(...elementsToDisplay);
//   domUpdates.hide(...hidableElements.filter((element) => !elementsToDisplay.includes(element)))
// }

//FUNCTIONS
const loadApiData = () => {
  //skipping over allcustomers for now
  Promise.all([fetchSingleCustomer(16), fetchAllCustomers(), fetchAllRooms(), fetchAllBookings()])
    .then(data => {
      customer = new Customer(data[0]);
      hotel = new Hotel(data[0], data[2], data[3]);
      loadCustomer(customer);
    });
}

const loadCustomer = (customer) => {
  domUpdates.greetCustomerByName(customer);
  hotel.findCurrentCustomerBookings()
  domUpdates.displayCurrentCustomerBookings(hotel.currentCustomerBookings);
  domUpdates.displayTotalSpent(hotel)
}



//EVENT LISTENERS 
window.addEventListener('load', loadApiData);



console.log('This is the JavaScript entry file - your code begins here.');
