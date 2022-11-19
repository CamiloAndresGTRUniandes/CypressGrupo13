/// <reference types="cypress" />
require("cypress-xpath");
const { Steps } = require("./Steps");
const {CreateReport} =require("./Utilities/createReport");
let steps = new Steps();
let createReport= new CreateReport(0);

describe("Ajustes", () => {


  it("Como usuario deseo modificar mi datos de perfil", () => {
    steps.setIdScreenImage("a");
    steps.setDirrectoryReport("after");
    steps.setURLGhost("http://localhost:2368/ghost");
    steps.login();
    steps.TakePicture();
    steps.I_click_perfil();
    steps.TakePicture();
    steps.waiting(1500);
    steps.I_click_your_profile();
    steps.TakePicture();
    steps.waiting(1500);
    steps.I_enter_name_profile();
    steps.TakePicture();
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
    steps.TakePicture();
    steps.I_click_perfil();
    steps.TakePicture();
    steps.waiting(1500);
    steps.I_close_my_session();
    steps.waiting(1500);
    steps.TakePicture();
  });

  it("Como usuario deseo modificar mi contraseña de perfil", () => {
   steps.login();
    steps.I_click_perfil();
    steps.waiting(1000);
    steps.I_click_your_profile();
    steps.waiting(1000);
    steps.I_enter_old_password();
    steps.I_enter_new_password();
    steps.I_enter_verify_password();
    steps.I_click_change_password();
    steps.waiting(1000);
    steps.I_click_save_your_profile();
    steps.waiting(10000);
    steps.waiting(3000);
    steps.I_click_perfil();
    steps.waiting(2000);
    steps.I_close_my_session();
    steps.waiting(3000);
    steps.I_enter_email_sign_in();
    steps.waiting(2000);
    steps.I_enter_new_password_sign_in();
    steps.I_click_next();
    steps.waiting(3000);
    steps.I_click_perfil();
    steps.waiting(2000);
    steps.I_click_your_profile();
    steps.waiting(1500);
    steps.I_enter_old_password_return();
    steps.I_enter_new_password_return();
    steps.I_enter_verify_password_return();
    steps.I_click_change_password();
    steps.waiting(10000);
    steps.I_click_perfil();
    steps.waiting(2000);
    steps.I_close_my_session();
    steps.waiting(2000);

  });
});
