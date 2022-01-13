const domUpdates = {

  greetCustomerByName(customer) {
    let greetCustomer = document.querySelector('#firstName');
    greetCustomer.innerText = `Welcome, ${customer.getCustomerName()}!`
  },
    
};
    
    
export default domUpdates;