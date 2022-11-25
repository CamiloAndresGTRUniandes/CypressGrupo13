/// <reference types="cypress" />
require('cypress-xpath')
const {Steps}= require('../Steps');
let steps=new Steps();
describe('Ajustes con errores de validacion', () => {
  beforeEach(() => {
    steps.dataTesting.typeData="aleatorio-wrong";
  });

  it('Como usuario deseo modificar el titulo de la aplicacion', ()=>
  {
 
    steps.login();
    steps.waiting(5000);
    steps.I_click_button_settings();
    steps.waiting(5000);
    steps.I_click_button_general();
    steps.waiting(2500);
    steps.I_click_button_expand_title();
    steps.waiting(1000);
    steps.I_enter_title_app();
    steps.waiting(1000);
    steps.I_enter_description_app();
    steps.waiting(1000);
    steps.I_click_button_save_title();
    steps.title_appMsgErr();
    steps.waiting(1000);
    steps.description_appMsgErr();
    steps.waiting(1000);
 })

})