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
import dayjs from "dayjs";

//will need functionality to not let anyone select a date in the past 


//FETCH ALL CUST FOR USER LOGIN section

//GLOBAL VARIABLES
let hotel;
let customer;
let today = dayjs().format('YYYY-MM-DD');



//FUNCTIONS
const loadApiData = () => {
  //skipping over allcustomers for now
  Promise.all([fetchSingleCustomer(16), fetchAllCustomers(), fetchAllRooms(), fetchAllBookings()])
    .then(data => {
      customer = new Customer(data[0]);
      hotel = new Hotel(data[0], data[2], data[3]);
      loadCustomer(customer);
      document.getElementById("calendar").setAttribute("min", today);
      document.getElementById("calendar").setAttribute("value", today);
    });
};

const loadCustomer = (customer) => {
  domUpdates.greetCustomerByName(customer);
  hotel.findCurrentCustomerBookings();
  domUpdates.displayCurrentCustomerBookings(hotel.currentCustomerBookings);
  domUpdates.displayTotalSpent(hotel);
};

//SAT AM: NEXT STEP --> get the VACANT ROOMS displaying next on the dom (do first thing Sat am)
const findVacantRooms = (event) => {
  event.preventDefault()
  let selectedDate = document.getElementById("calendar").value;
  let formattedDate = dayjs(selectedDate).format('YYYY/MM/DD');
  hotel.findAvailableRooms(formattedDate);
  console.log("are you working", hotel.availableRooms);
};

 

//EVENT LISTENERS 
window.addEventListener('load', loadApiData);
const submitBtn = document.querySelector('.submission-btn');
submitBtn.addEventListener('click', findVacantRooms);



//NOTE FOR ME FOR THE FUTURE: use on change for a search ==> instead of hitting search as someone actively then fire change event listener everytime that change input changes



