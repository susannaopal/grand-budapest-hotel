class Customer {
  constructor(customerData, bookings) {
    this.id = customerData.id;
    this.name = customerData.name;
    this.bookings = bookings;
  }
  getCustomerName() {
    console.log("what?")
    const firstName = this.name.split(" ");
    return firstName[0];
  }
}

export default Customer;

