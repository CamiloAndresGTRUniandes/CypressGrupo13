/// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('../Steps');
const { CreateReport } = require("../Utilities/createReport");
const { Home } = require("../pages_object/Home");
let createReport = new CreateReport(0);
let home = new Home();
let folderBefore = "createPageBefore";
let folderAfter = "createPageAfter";
let steps = new Steps();
describe('Posts', () => {
    it('Como usuario deseo crear una nueva pagina - App Nueva', () => {
        //LoginStart
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport(folderAfter);
        steps.setURLGhost(home.URLGhost);
        steps.login();
        steps.TakePicture(); //1
        //LoginEnd
        ///MyMethodStart
        steps.I_click("pages link");
        steps.waiting(1500);
        steps.TakePicture(); //2
        steps.I_click("New Page button inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //3
        steps.I_enter_text_in("page title field inside pages editor");
        steps.waiting(1500);
        steps.TakePicture(); //4
        steps.I_enter_text_in("page body field inside pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //5
        steps.I_click("Publish button inside pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //6
        steps.I_click("Continue button after pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //7
        steps.I_click("Publish page button after pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //8
        steps.I_click("Back to Editor button inside pages publish");
        steps.waiting(1500);
        steps.TakePicture(); //9
        steps.I_click("Back to pages button inside pages editor");
        ///MyMethodEnd


    }
    );
    it('Como usuario deseo crear una nueva pagina - App Antigua', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport(folderBefore);
        steps.setURLGhost(home.URLGhostOld);
        steps.login();
        steps.TakePicture();//1
        ///
        ///MyMethodStart
        steps.I_click("pages link old version");
        steps.waiting(1500);
        steps.TakePicture(); //2
        steps.I_click("New Page old version button inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //3
        steps.I_enter_text_in("page title old version field inside pages editor");
        steps.waiting(1500);
        steps.TakePicture(); //4
        steps.I_enter_text_in("page body old version field inside pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //5
        steps.I_click("Publish old version button inside pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //6
        steps.I_click("Publish page old version button after pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //7
        steps.I_click("Back to pages old version button inside pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //8
        steps.I_click("pages link old version");
        steps.waiting(1500);
        steps.TakePicture(); //9
        ///MyMethodEnd


    }
    );
    it("Construir reporte", () => {
        let moduleTest = "Create page";
        createReport.executeTest(9, folderAfter, folderBefore, moduleTest);
        cy.task("createMyReport", "\\cypress\\screenshots\\report1.html").then(
            (p) => {
                alert(`The reports for ${moduleTest} is in ${p} `);
            }
        );
    });
});