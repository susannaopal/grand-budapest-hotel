/* eslint-disable max-len */

//IMPORTED FILES
import './css/base.scss';
import Hotel from './classes/Hotel';
import Customer from './classes/Customer';
import domUpdates from './domUpdates';
import { fetchAllCustomers, fetchSingleCustomer, fetchAllRooms, fetchAllBookings, postNewBooking } from './apiCalls';
import './images/hotel-background.png';
import dayjs from "dayjs";

//QUERY SELECTORS
const submitBtn = document.querySelector('#submBtn');
const customerBookingsView = document.querySelector('#customerBkgSection');
const availRoomsViews = document.querySelector('#availRoomsSection');
const tagSubmitBtn = document.querySelector('#submitTagBtn');
const returnHomeBtn = document.querySelector('#returnBkgsView');
const bookAvailRoomCard = document.querySelector('#availRoomsCard');
const loginSubmissionBtn = document.querySelector('#logInButton');
const logoutBtn = document.querySelector('#logoutBtn');
const loginError = document.querySelector('#errorMsg');
const loginView = document.querySelector('#userLoginSection');
const dashboardView = document.querySelector('#dashboardViewSection');

//GLOBAL VARIABLES
let hotel;
let customer;
let today = dayjs().format('YYYY-MM-DD');


//FUNCTIONS
const loadApiData = (id) => {
  Promise.all([fetchSingleCustomer(id), fetchAllCustomers(), fetchAllRooms(), fetchAllBookings()])
    .then(data => {
      customer = new Customer(data[0]);
      hotel = new Hotel(data[0], data[2], data[3]);
      loadCustomer(customer);
      document.getElementById("calendar").setAttribute("min", today);
      document.getElementById("calendar").setAttribute("value", today);
    }).catch(error => console.log(error));
};

const loadCustomer = (customer) => {
  domUpdates.greetCustomerByName(customer.name);
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

const addNewBooking = (event) => {
  event.preventDefault();
  let selectedDate = document.getElementById("calendar").value;
  let formattedDate = dayjs(selectedDate).format('YYYY/MM/DD');
  let roomNumber = parseInt(event.target.closest("article").id);
  postNewBooking(customer, formattedDate, roomNumber);
  loadApiData(customer.id);
  domUpdates.removeHidden(customerBookingsView);
  domUpdates.addHidden(availRoomsViews);
};

const logoutFromDashboard = () => {
  window.location.reload();
}

//EVENT LISTENERS 
submitBtn.addEventListener('click', findVacantRooms);
tagSubmitBtn.addEventListener('click', findFilteredByTagsRooms);
returnHomeBtn.addEventListener('click', returnToHomePage);
bookAvailRoomCard.addEventListener('click', addNewBooking);
loginSubmissionBtn.addEventListener('click', logIntoDashboard)
logoutBtn.addEventListener('click', logoutFromDashboard)






