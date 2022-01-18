import { expect } from "chai";
import Customer from '../src/classes/Customer';

describe('Customer', () => {
  let customer;
  let customer2;
  let customer3;

  beforeEach(function () {
    customer = new Customer({
      id: 1,
      name: 'Leatha Ullrich',
    });
    customer2 = new Customer ({
      'id': 2,
      'name': ''
    });
    customer3 = new Customer ({
      'id': '',
      'name': 'Kelvin Schiller'
    });
  });
    
  it('Should be a function', () => {
    expect(Customer).to.be.a('function');
  });
    
  it('Should be an instance of Customer', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });
    
  it('Should have an ID', () => {
    expect(customer.id).to.equal(1);
    expect(customer3.id).to.equal('');
  });

  it('Should have a name', () => {
    expect(customer.name).to.equal('Leatha Ullrich');
    expect(customer2.name).to.equal('');
    expect(customer3.name).to.equal('Kelvin Schiller');
  });
});


