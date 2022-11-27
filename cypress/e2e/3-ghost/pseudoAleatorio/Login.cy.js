/// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('../Steps');
const { faker } = require("@faker-js/faker");
let steps = new Steps();
describe('Login', () => {
    beforeEach(() => {
        steps.dataTesting.typeData = "pseudo-aletaorio";
        steps.dataTesting.seed = faker.datatype.number({ min: 100, max: 9999 });
      });
    it('Como usuario deseo hacer login en la aplicación ghost email incorrecto', () => {
    
        //LoginStart
        steps.login("email");
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        steps.validateLogin();
        ///MyMethodEnd

    }
    );
    it('Como usuario deseo hacer login en la aplicación ghost password incorrecto', () => {
    
        //LoginStart
        steps.login("password");
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        steps.validateLogin();
        ///MyMethodEnd

    }
    );
    it('Como usuario deseo hacer login en la aplicación ghost Varios intentos (Menos de 100)', () => {
    
        //LoginStart
        steps.login("someAttempts");
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        steps.validateLogin();
        ///MyMethodEnd

    }
    );
    it('Como usuario deseo hacer login en la aplicación ghost Muchos intentos (Mas de 100)', () => {
    
        //LoginStart
        steps.login("manyWrong");
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        steps.validateLogin();
        ///MyMethodEnd
    }
    );
  
    
});