/// <reference types="cypress" />
require("cypress-xpath");
const { Steps } = require("../steps");
const { Home } = require("../pages_object/Home");
const {CreateReport} =require("../Utilities/createReport");
let steps = new Steps();
let createReport= new CreateReport(0);
let home = new Home();
describe("Ajustes", () => {


  it("Como usuario deseo modificar mi datos de perfil", () => {
    steps.setIdScreenImage("a");
    steps.setDirrectoryReport("after");
    steps.setURLGhost(home.URLGhost);
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
  it("Como usuario deseo modificar mi datos de perfil antigua", () => {
    steps.setIdScreenImage("a");
    steps.setDirrectoryReport("before");
    steps.setURLGhost(home.URLGhostOld);
    steps.login();
    steps.TakePicture();
    steps.I_click_perfilOld();
    steps.TakePicture();
    steps.waiting(1500);
    steps.I_click_your_profile();
    steps.TakePicture();
    steps.waiting(1500);
    steps.I_enter_name_profileOld();
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
    steps.I_click_save_your_profileOld();
    steps.waiting(1500);
    steps.TakePicture();
    steps.I_click_perfil();
    steps.TakePicture();
    steps.waiting(1500);
    steps.I_close_my_session();
    steps.waiting(1500);
    steps.TakePicture();
  });

  it("Create report", ()=>{
    let  moduleTest ="Perfil";
    createReport.executeTest(7, "after", "before",moduleTest );
    cy.task("createMyReport", "\\cypress\\screenshots\\report1.html").then(p=>{alert(`The reports for ${moduleTest} is in ${p} ` )});

  });

});
