/// <reference types="cypress" />
require("cypress-xpath");
const { Steps } = require("../Steps");
const { Home } = require("../pages_object/Home");
const { CreateReport } = require("../Utilities/createReport");
let steps = new Steps();
let home = new Home();
let createReport = new CreateReport(0);
let folderBefore = "createTagBefore";
let folderAfter = "createTagAfter";
 
describe("Create Tag", () => {
it('Como usuario deseo crear un tag', () => {
steps.setIdScreenImage("a");
steps.setDirrectoryReport(folderAfter);
steps.setURLGhost(home.URLGhost);
steps.login();
steps.TakePicture(); //1
///
steps.I_click_tags();
steps.waiting(1500);
steps.TakePicture();//2
steps.I_click_new_tag();
steps.waiting(1500)
steps.TakePicture();;//3
steps.I_enter_name_tag();
steps.waiting(1000);
steps.TakePicture();//4
steps.I_enter_color_tag();
steps.waiting(1000);
steps.TakePicture();//5
steps.I_enter_description_tag();
steps.waiting(1000);
steps.TakePicture();//6
steps.I_click_btnMetada_tag();
steps.waiting(1000);
steps.TakePicture();//7
steps.I_enter_url_metadata_tag();
steps.I_enter_description_metadata_tag();
steps.waiting(1800);
steps.I_click_btnSaveTag_tag();
steps.waiting(1000);
steps.TakePicture();//8
steps.I_click_tags();
steps.waiting(1000);
steps.TakePicture();//9
/// log off


}
);
it('Como usuario deseo crear un tag aplicacion antigua', () => {
steps.setIdScreenImage("a");
steps.setDirrectoryReport(folderBefore);
steps.setURLGhost(home.URLGhostOld);
steps.login();
steps.TakePicture();//1
///
steps.I_click_tagsOld();
steps.waiting(1500);
steps.TakePicture();//2
steps.I_click_new_tagOld();
steps.waiting(1500)
steps.TakePicture();//3
steps.I_enter_name_tagOld();
steps.waiting(1000);
steps.TakePicture();//4
steps.I_enter_color_tagOld();
steps.waiting(1000);
steps.TakePicture();//5
steps.I_enter_description_tagOld();
steps.waiting(1000);
steps.TakePicture();//6
steps.I_click_btnMetada_tagOld();
steps.waiting(1000);
steps.TakePicture();//7
steps.I_enter_url_metadata_tagOld();
steps.I_enter_description_metadata_tagold();
steps.waiting(1800);
steps.I_click_btnSaveTag_tagOld();
steps.waiting(1000);
steps.TakePicture();//8
steps.waiting(1000);
steps.I_click_tagsOld();
steps.waiting(1000);
steps.TakePicture();//9


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