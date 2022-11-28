/// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('../Steps');
let steps = new Steps();
describe('Posts', () => {
    beforeEach(()=>{
        steps.dataTesting.typeData="aleatorio-wrong";
       });
    
    it(' Como usuario deseo crear un nuevo post - Title Wrong', () => {
        
        //LoginStart
        steps.login();
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        steps.I_click("posts link");
        steps.waiting(1500);
        steps.I_click("New Post button inside posts module");
        steps.waiting(1500);
        steps.I_enter_text_in("post title field inside posts editor title wrong");
        steps.waiting(1500);
        steps.I_enter_text_in("post body field inside posts editor body wrong");

    }  
    );
   
});