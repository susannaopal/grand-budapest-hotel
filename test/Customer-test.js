import { assert, expect } from "chai";
import Customer from '../src/classes/Customer';


describe('Customer', () => {
  let customerData;
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
      'name': 'Rocio Schuster'
    });
    customer3 = new Customer ({
      'id': 3,
      'name': 'Kelvin Schiller'
        });
      });
    
      it('Should be a function', () => {
        expect(Customer).to.be.a('function');
    });
    
      it('Should be an instance of customer', () => {
        expect(customer).to.be.an.instanceOf(Customer);
      });
    
      it('Should have an ID', () => {
        expect(customer.id).to.equal(1);
    });
    
      it('Should have a name', () => {
        expect(customer.name).to.equal('Leatha Ullrich');
    });

    function newFunction() {
        let customer2;
        return customer2;
    }
    });


