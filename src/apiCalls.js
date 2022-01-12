// FETCH CALLS

export const fetchAllCustomers = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(data => data.customers)
    .catch(error => console.log('Houston, we have a problem!'))
};

export const fetchSingleCustomer = (id) => {
  return fetch('http://localhost:3001/api/v1/customers/${id}')
    .then(response => response.json())
    .then(data => data)
    .error(error => console.log('Houston, we have a problem!'))
};

export const fetchHotelRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(error => console.log('Houston, we have a problem!'))
};

export const fetchAllBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log('Houston, we have a problem!'))
};



// POST REQUEST
// export const PostNewBooking = (
//   userID,
//   date,
//   roomNumber
// ) => {
//   return fetch("http://localhost:3001/api/v1/users", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ 
//       "userID": 48, 
//       "date": "2019/09/23", 
//       "roomNumber": 4 }),
//   })
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };

//WILL NEED WITH SUCCESSFUL POSTING: { message: 'Booking with id <id> successfully posted', newBooking: <Object with trip info just posted> }