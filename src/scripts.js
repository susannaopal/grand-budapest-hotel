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



//FETCH ALL CUST FOR USER LOGIN section

//QUERY SELECTORS
const submitBtn = document.querySelector('.submission-btn');
const customerBookingsView = document.querySelector('.customer-bookings-section');
const availRoomsViews = document.querySelector('.available-rooms-section');
const tagSubmitBtn = document.querySelector('.submit-tag-view');
const returnHomeBtn = document.querySelector('.return-bookings-view');

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

const findVacantRooms = (event) => {
  event.preventDefault();
  let selectedDate = document.getElementById("calendar").value;
  let formattedDate = dayjs(selectedDate).format('YYYY/MM/DD');
  hotel.findAvailableRooms(formattedDate);
  domUpdates.displayAllAvailableRooms(hotel.availableRooms);
  domUpdates.addHidden([customerBookingsView]);
  domUpdates.removeHidden([availRoomsViews]);
};

const findFilteredByTagsRooms = (event) => {
  event.preventDefault();
  let selectedTag = document.getElementById("roomTags-type-search").value;
  hotel.filterSelectedRoomTypeOnly(selectedTag);
  domUpdates.displayAllAvailableRooms(hotel.roomsByTag);
};

const returnToHomePage = () => {
  domUpdates.removeHidden([customerBookingsView]);
  domUpdates.addHidden([availRoomsViews]);
};

//EVENT LISTENERS 
window.addEventListener('load', loadApiData);
submitBtn.addEventListener('click', findVacantRooms);
tagSubmitBtn.addEventListener('click', findFilteredByTagsRooms);
returnHomeBtn.addEventListener('click', returnToHomePage)

//NOTE FOR ME FOR THE FUTURE: use on change for a search ==> instead of hitting search as someone actively then fire change event listener everytime that change input changes



