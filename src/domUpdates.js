const domUpdates = {

  greetCustomerByName(customer) {
    console.log("anyone?")
    let greetCustomer = document.querySelector('#firstName');
    greetCustomer.innerText = `Welcome, ${customer.getCustomerName()}!`
  }
    
};
    
    
export default domUpdates;