/// <reference types="cypress" />
require("cypress-xpath");
const { Steps } = require("../Steps");
const { Home } = require("../pages_object/Home");
const { CreateReport } = require("../Utilities/createReport");
let steps = new Steps();
let home = new Home();
let createReport = new CreateReport(0);
let folderBefore = "changueTitledBefore";
let folderAfter = "changueTitleddAfter";
describe("Cambio titulo aplicacion", () => {
  it("Como usuario deseo modificar el titulo de la aplicacion", () => {
    steps.setIdScreenImage("a");
    steps.setDirrectoryReport(folderAfter);
    steps.setURLGhost(home.URLGhost);
    steps.login();
    steps.TakePicture(); //1
    steps.I_click_button_settings();
    steps.waiting(2000);
    steps.TakePicture(); //2
    steps.I_click_button_general();
    steps.waiting(2000);
    steps.TakePicture(); //3
    steps.I_click_button_expand_title();
    steps.waiting(2000);
    steps.TakePicture(); //4
    steps.I_enter_title_app();
    steps.waiting(1000);
    steps.I_enter_description_app();
    steps.waiting(1000);
    steps.TakePicture(); //5
    steps.I_click_button_save_title();
    steps.waiting(1000);
    steps.TakePicture(); //6
  });
  it("Como usuario deseo modificar el titulo de la aplicacion antigua", () => {
    steps.setIdScreenImage("a");
    steps.setDirrectoryReport(folderBefore);
    steps.setURLGhost(home.URLGhostOld);
    steps.login();
    steps.TakePicture(); //1
    ///steps.I_click_button_settings(); // No existe
    steps.waiting(2000);
    steps.TakePicture(); //2
    steps.I_click_button_settingsOld();
    steps.waiting(2000);
    steps.TakePicture(); //3
    steps.I_click_button_expand_titleOld();
    steps.waiting(2000);
    steps.TakePicture(); //4
    steps.I_enter_title_appOld();
    steps.waiting(1000);
    steps.I_enter_description_appOld();
    steps.waiting(1000);
    steps.TakePicture(); //5
    steps.I_click_button_save_titleOld();
    steps.waiting(1000);
    steps.TakePicture(); //6
  });

  it("Construir reporte", () => {
    let moduleTest = "Change Title";
    createReport.executeTest(6, folderAfter, folderBefore, moduleTest);
    cy.task("createMyReport", "\\cypress\\screenshots\\report1.html").then(
      (p) => {
        alert(`The reports for ${moduleTest} is in ${p} `);
      }
    );
  });
});
