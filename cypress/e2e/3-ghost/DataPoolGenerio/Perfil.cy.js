/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");
require("cypress-xpath");
const { Steps } = require("../Steps");
let steps = new Steps();
describe("Ajustes", () => {
  beforeEach(() => {
    steps.dataTesting.getDataPoolGenerico();
    steps.dataTesting.typeData = "data-pooling";
  });
  it("Como usuario deseo modificar mi datos de perfil", () => {
    steps.setURLGhost("http://localhost:2368/ghost");
    steps.login();
    steps.I_click_perfil();
    steps.waiting(1500);
    steps.I_click_your_profile();
    steps.waiting(1500);
    steps.I_enter_name_profile();
    steps.waiting(1000);
    steps.I_enter_slug_profile();
    steps.waiting(1000);
    steps.I_enter_location_profile();
    steps.waiting(1000);
    steps.waiting(1000);
    steps.I_enter_facebook_profile();
    steps.waiting(1000);
    steps.I_enter_twiter_profile();
    steps.waiting(1000);
    steps.I_enter_bio_profile();
    steps.waiting(1000);
    steps.I_click_save_your_profile();
    steps.waiting(1500);
    steps.I_click_perfil();
    steps.waiting(1500);
    steps.I_close_my_session();
    steps.waiting(1500);
  });
});
