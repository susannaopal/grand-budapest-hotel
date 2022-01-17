/* eslint-disable max-len */

//IMPORTED FILES
import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
import domUpdates from './domUpdates';
import { fetchAllCustomers, fetchSingleCustomer, fetchAllRooms, fetchAllBookings, postNewBooking } from './apiCalls';
import './images/hotel-img.png'
import dayjs from "dayjs";

//QUERY SELECTORS
const submitBtn = document.querySelector('.submission-btn');
const customerBookingsView = document.querySelector('.customer-bookings-section');
const availRoomsViews = document.querySelector('.available-rooms-section');
const tagSubmitBtn = document.querySelector('.submit-tag-view-btn');
const returnHomeBtn = document.querySelector('.return-bookings-view');
const bookAvailRoomCard = document.querySelector('.available-rooms-card')
const loginSubmissionBtn = document.querySelector('#logInButton');
const logoutBtn = document.querySelector('#logoutBtn');
const loginError = document.querySelector('.login-error-msg');
const loginView = document.querySelector('.user-login-section');
const dashboardView = document.querySelector('.dashboard-view-section')

//GLOBAL VARIABLES
let hotel;
let customer;
let today = dayjs().format('YYYY-MM-DD');



//FUNCTIONS
const loadApiData = (id) => {
  //skipping over allcustomers for now
  //FETCH ALL CUST FOR USER LOGIN section (iteration3)
  Promise.all([fetchSingleCustomer(id), fetchAllCustomers(), fetchAllRooms(), fetchAllBookings()])
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
  domUpdates.addHidden(loginView);
  domUpdates.removeHidden(dashboardView);
};

const findVacantRooms = (event) => {
  event.preventDefault();
  let selectedDate = document.getElementById("calendar").value;
  let formattedDate = dayjs(selectedDate).format('YYYY/MM/DD');
  hotel.findAvailableRooms(formattedDate);
  domUpdates.displayAllAvailableRooms(hotel.availableRooms);
  domUpdates.addHidden(customerBookingsView);
  domUpdates.removeHidden(availRoomsViews);
};

const findFilteredByTagsRooms = (event) => {
  event.preventDefault();
  let selectedTag = document.getElementById("roomTags-type-search").value;
  hotel.filterSelectedRoomTypeOnly(selectedTag);
  domUpdates.displayAllAvailableRooms(hotel.roomsByTag);
};

const returnToHomePage = (event) => {
  event.preventDefault;
  domUpdates.removeHidden(customerBookingsView);
  domUpdates.addHidden(availRoomsViews);
};

const addNewBooking = () => {
  let selectedDate = document.getElementById("calendar").value;
  let formattedDate = dayjs(selectedDate).format('YYYY/MM/DD');
  let roomNumber = parseInt(event.target.closest("article").id);
  postNewBooking(customer, formattedDate, roomNumber);
};



const logIntoDashboard = (event) => {
  event.preventDefault();
  let usernameInput = document.getElementById('usernameInput').value;
  let passwordInput = document.getElementById('passwordInput').value;
  let  charNine = [usernameInput.charAt(8)];
  let charTen = [usernameInput.charAt(9)]; 
  let loginNumber = `${charNine}${charTen}`;
  if (parseInt(loginNumber) > 0 && parseInt(loginNumber) <= 50 && passwordInput === "overlook2021") {
    loadApiData(loginNumber);
  } else {
    return domUpdates.removeHidden(loginError);
  }
};

const logoutFromDashboard = () => {
  window.location.reload();
};



//NEED TO FIGURE OUT:
// --HOW TO UPDATE THE DOM WITH $ ONCE A BOOK IS POSTED
// --HOW TO REFRESH THE PAGE SO A USER KNOWS A BOOKING IS CREATED
// -- HOW does the password connect to the api object of users array?


//EVENT LISTENERS 
// window.addEventListener('load', loadApiData);
submitBtn.addEventListener('click', findVacantRooms);
tagSubmitBtn.addEventListener('click', findFilteredByTagsRooms);
returnHomeBtn.addEventListener('click', returnToHomePage);
bookAvailRoomCard.addEventListener('click', addNewBooking);
loginSubmissionBtn.addEventListener('click', logIntoDashboard)
logoutBtn.addEventListener('click', logoutFromDashboard)



