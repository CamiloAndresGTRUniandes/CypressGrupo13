/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");
require("cypress-xpath");
const { Steps } = require("../Steps");
let steps = new Steps();
describe("Ajustes", () => {
  beforeEach(() => {
    steps.dataTesting.typeData = "pseudo-aletaorio-wrong";
    steps.dataTesting.seed = faker.datatype.number({ min: 100, max: 9999 });
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
    steps.I_enter_location_profile();
    steps.waiting(1000);
    steps.waiting(1000);
    steps.I_enter_facebook_profile();
    steps.waiting(1000);
    steps.I_enter_twiter_profile();
    steps.waiting(1000);
    steps.I_enter_bio_profile();
    steps.waiting(1000);
    steps.I_enter_old_password();
    steps.waiting(1000);
    steps.containNameErrorIsLong();
    steps.waiting(1000);
    steps.containBioErrorIsLong();
    steps.waiting(1000);
    steps.containLocationIsLong();
    steps.waiting(1000);
  });
});
