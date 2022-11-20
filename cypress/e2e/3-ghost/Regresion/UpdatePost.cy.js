/// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('../Steps');
const { CreateReport } = require("../Utilities/createReport");
const { Home } = require("../pages_object/Home");
let createReport = new CreateReport(0);
let home = new Home();
let folderBefore = "updatePostBefore";
let folderAfter = "updatePostAfter";
let steps = new Steps();
describe('Posts', () => {
    it('Como usuario deseo editar un post publicado previamente - App Nueva', () => {
        //LoginStart
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport(folderAfter);
        steps.setURLGhost(home.URLGhost);
        steps.login();
        steps.TakePicture(); //1
        //LoginEnd
        ///MyMethodStart
        steps.I_click("published link");
        steps.waiting(1500);
        steps.TakePicture();//2
        steps.I_click("First published post inside published module");
        steps.waiting(1500);
        steps.TakePicture();//3
        steps.I_click("Edit post button inside published module");
        steps.waiting(1500);
        steps.TakePicture();//4
        steps.I_enter_text_in("post title field inside published editor");
        steps.waiting(1500);
        steps.TakePicture();//5
        steps.I_enter_text_in("post body field inside published editor");
        steps.waiting(1500);
        steps.TakePicture();//6
        steps.I_click("Update post button inside published module");
        steps.waiting(1500);
        steps.TakePicture();//7
        steps.I_click("Back to post button inside published module");
        steps.waiting(1500);
        steps.TakePicture();//8
       
        ///MyMethodEnd
        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);
    }
    );
    it('Como usuario deseo editar un post publicado previamente- App Antigua', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport(folderBefore);
        steps.setURLGhost(home.URLGhostOld);
        steps.login();
        steps.TakePicture();//1
        ///
        ///MyMethodStart
        steps.I_click("published link old version");
        steps.waiting(1500);
        steps.TakePicture();//2
        steps.I_click("First published old version post inside published module");
        steps.waiting(1500);
        steps.TakePicture();//3
        steps.I_enter_text_in("post title old version field inside published editor");
        steps.waiting(1500);
        steps.TakePicture();//4
        steps.I_enter_text_in("post body old version field inside published editor");
        steps.waiting(1500);
        steps.TakePicture();//5
        // steps.I_click("Close button old version inside published module");
        // steps.waiting(1500);
        // steps.TakePicture();//6
        steps.I_click("Update post button old version inside published module");
        steps.waiting(1500);
        steps.TakePicture();//6
        steps.I_click("publish button old version inside published module");
        steps.waiting(1500);
        steps.TakePicture();//7
        steps.I_click("Back to post old version button inside published module");
        steps.waiting(1500);
        steps.TakePicture();//8
        // steps.I_click("Back to Posts button inside posts editor");
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