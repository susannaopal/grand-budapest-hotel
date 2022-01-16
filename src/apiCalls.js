// FETCH CALLS
export const fetchAllCustomers = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .then(data => data.customers)
    .catch(error => console.log(error))
};

export const fetchSingleCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error))
};

export const fetchAllRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => response.json())
    .then(data => data.rooms)
    .catch(error => console.log(error))
};

export const fetchAllBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => response.json())
    .then(data => data.bookings)
    .catch(error => console.log(error))
};



// POST REQUEST
export const PostNewBooking = (
  userID,
  date,
  roomNumber
) => {
  return fetch("http://localhost:3001/api/v1/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "userID": userID,
      "date": date,
      "roomNumber": roomNumber
    })
      .then((response) => response.json())
      .catch((error) => console.log(error)),
  });
};

//WILL NEED WITH SUCCESSFUL POSTING: { message: 'Booking with id <id> successfully posted', newBooking: <Object with trip info just posted> }