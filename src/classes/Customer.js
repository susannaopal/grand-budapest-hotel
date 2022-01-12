class Customer {
  constructor(customerData, bookings) {
    this.id = customerData.id;
    this.name = customerData.name;
    this.bookings = bookings;
  }
}

export default Customer;

