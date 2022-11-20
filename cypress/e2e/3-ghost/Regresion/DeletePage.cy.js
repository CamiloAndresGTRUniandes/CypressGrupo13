/// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('../Steps');
const { CreateReport } = require("../Utilities/createReport");
const { Home } = require("../pages_object/Home");
let createReport = new CreateReport(0);
let home = new Home();
let folderBefore = "deletePageBefore";
let folderAfter = "deletePageAfter";
let steps = new Steps();
describe('Posts', () => {
    it('Como usuario deseo eliminar una pagina - App Nueva', () => {
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
        steps.I_click("New Page button inside pages module");
        steps.waiting(1500);
        steps.I_enter_text_in("page title field inside pages editor");
        steps.waiting(1500);
        steps.I_enter_text_in("page body field inside pages editor");
        steps.waiting(3500);
        steps.I_click("Publish button inside pages editor");
        steps.waiting(3500);
        steps.I_click("Continue button after pages editor");
        steps.waiting(3500);
        steps.I_click("Publish page button after pages editor");
        steps.waiting(3500);
        steps.I_click("Back to Editor button inside pages publish");
        steps.waiting(1500);
        steps.TakePicture(); //2
        steps.I_click("Back to pages button inside pages editor");
        steps.waiting(1500);
        steps.TakePicture(); //3
        steps.I_click("Search button inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //4
        steps.I_search_for_results("entering text in input field inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //5
        steps.I_click("on Select option found inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //6
        // steps.I_click("Unpublish button inside pages editor");
        // steps.waiting(1500);
        // steps.I_click("Convert to Draft button inside pages module");
        // steps.waiting(1500);
        // steps.I_click("Back to pages button inside pages editor");
        steps.I_click("Side menu button inside posts editor");
        steps.waiting(1500);
        steps.TakePicture(); //7
        steps.I_click("Delete post button inside posts editor");
        steps.waiting(2500);
        steps.TakePicture(); //8
        steps.I_click("Delete confirmation button inside posts editor");
        steps.waiting(2500);
        steps.TakePicture(); //9

        ///MyMethodEnd


    }
    );
    it('Como usuario deseo eliminar una pagina - App Antigua', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport(folderBefore);
        steps.setURLGhost(home.URLGhostOld);
        steps.login();
        steps.TakePicture();//1
        ///
        ///MyMethodStart
        steps.I_click("pages link old version");
        steps.waiting(1500);
        steps.I_click("New Page old version button inside pages module");
        steps.waiting(1500);
        steps.I_enter_text_in("page title old version field inside pages editor");
        steps.waiting(1500);
        steps.I_enter_text_in("page body old version field inside pages editor");
        steps.waiting(3500);
        steps.I_click("Publish old version button inside pages editor");
        steps.waiting(3500);
        steps.I_click("Publish page old version button after pages editor");
        steps.waiting(3500);
        steps.I_click("Back to pages old version button inside pages editor");
        steps.waiting(3500);
        steps.TakePicture(); //2
        steps.I_click("pages link old version");
        steps.waiting(1500);
        steps.TakePicture(); //3
        steps.I_click("Search button old version inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //4
        steps.I_search_for_results("entering text in input old version field inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //5
        steps.I_click("on Select option old version found inside pages module");
        steps.waiting(1500);
        steps.TakePicture(); //6
        steps.I_click("Side menu button old version inside pages editor");
        steps.waiting(1500);
        steps.TakePicture(); //7
        steps.I_click("Delete post button old version inside pages editor");
        steps.waiting(1500);
        steps.TakePicture(); //8
        steps.I_click("Delete confirmation button old version inside pages editor");
        steps.waiting(1500);
        steps.TakePicture(); //9



        ///MyMethodEnd


    }
    );
    it("Construir reporte", () => {
        let moduleTest = "Create tag";
        createReport.executeTest(9, folderAfter, folderBefore, moduleTest);
        cy.task("createMyReport", "\\cypress\\screenshots\\report1.html").then(
            (p) => {
                alert(`The reports for ${moduleTest} is in ${p} `);
            }
        );
    });
});