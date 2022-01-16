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
export const postNewBooking = (
  user,
  date,
  roomNumber
) => {
  return fetch("http://localhost:3001/api/v1/bookings", {
    method: "POST",
    body: JSON.stringify({
      userID: user.id,
      date: date,
      roomNumber: roomNumber
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    }
  })
    .then((response) => response.json())
    .then((response) => console.log("Posting Response:", response))
    .catch((error) => console.log(error))
};


