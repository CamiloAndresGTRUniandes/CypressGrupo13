/// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('../Steps');
const { CreateReport } = require("../Utilities/createReport");
const { Home } = require("../pages_object/Home");
let createReport = new CreateReport(0);
let home = new Home();
let folderBefore = "schedulePostBefore";
let folderAfter = "schedulePostAfter";
let steps = new Steps();
describe('Posts', () => {
    it('Como usuario deseo crear un post agendado para ser publicado en el futuro - App Nueva', () => {
        //LoginStart
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport(folderAfter);
        steps.setURLGhost(home.URLGhost);
        steps.login();
        steps.TakePicture(); //1
        //LoginEnd
        ///MyMethodStart
        steps.I_click("posts link");
        steps.waiting(1500);
        // steps.TakePicture(); //2
        steps.I_click("New Post button inside posts module");
        steps.waiting(1500);
        steps.TakePicture(); //2
        steps.I_enter_text_in("post title field inside posts editor");
        steps.waiting(1500);
        steps.TakePicture(); //3
        steps.I_enter_text_in("post body field inside posts editor");
        steps.waiting(3500);
        steps.TakePicture(); //4
        steps.I_click("Publish button inside posts editor");
        steps.waiting(1500);
        steps.TakePicture(); //5
        steps.I_click("Right now dropdown inside posts publish");
        steps.waiting(1500);
        steps.TakePicture(); //6
        steps.I_click("Schedule button inside posts publish");
        steps.waiting(3500);
        steps.TakePicture(); //7
        steps.I_click("Continue button after posts editor");
        steps.waiting(3500);
        steps.TakePicture(); //8
        steps.I_click("Publish Post button after posts editor");
        steps.waiting(3500);
        steps.TakePicture(); //9
        steps.I_click("Back to Posts button inside posts publish");
       
        ///MyMethodEnd
        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);
    }
    );
    it('Como usuario deseo crear un post agendado para ser publicado en el futuro- App Antigua', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport(folderBefore);
        steps.setURLGhost(home.URLGhostOld);
        steps.login();
        steps.TakePicture();//1
        ///
        ///MyMethodStart
        steps.I_click("posts link Old Version");
        steps.waiting(1500);
        steps.TakePicture();//2
        steps.I_click("New Post Old Version button inside posts module");
        steps.waiting(1500);
        steps.TakePicture();//3
        steps.I_enter_text_in("post title Old Version field inside posts editor");
        steps.waiting(1500);
        steps.TakePicture();//4
        steps.I_enter_text_in("post body Old Version field inside posts editor");
        steps.waiting(3500);
        steps.TakePicture();//5
        steps.I_click("Publish button Old Version inside posts editor");
        steps.waiting(2500);
        steps.TakePicture();//6
        steps.I_click("Schedule it Old Version button after posts editor");
        steps.waiting(2500);
        steps.TakePicture();//7
        steps.I_click("Publish Post Old Version button after posts editor");
        steps.waiting(2500);
        steps.TakePicture();//7
        steps.I_click("Back to Editor Old Version button inside posts publish");
        steps.waiting(1500);
        steps.TakePicture();//8
        steps.TakePicture();//9
        ///MyMethodEnd


    }
    );
    it("Construir reporte", () => {
        let moduleTest = "Schedule post";
        createReport.executeTest(9, folderAfter, folderBefore, moduleTest);
        cy.task("createMyReport", "\\cypress\\screenshots\\report1.html").then(
            (p) => {
                alert(`The reports for ${moduleTest} is in ${p} `);
            }
        );
    });
});