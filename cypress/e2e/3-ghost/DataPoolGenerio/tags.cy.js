/// <reference types="cypress" />
require("cypress-xpath");
const { Steps } = require("../Steps");
let steps = new Steps();
describe("Tags", () => {
  beforeEach(() => {
    steps.dataTesting.getDataPoolGenerico();
    steps.dataTesting.typeData = "data-pooling";
  });

  it("Como usuario deseo crear un tag", () => {
    steps.login();
    steps.waiting(1500);
    steps.I_click_tags();
    steps.waiting(2500);
    steps.I_click_new_tag();
    steps.waiting(2500);
    steps.I_enter_name_tag();
    steps.waiting(1000);
    steps.I_enter_color_tag();
    steps.waiting(1000);
    steps.I_enter_description_tag();
    steps.waiting(1000);
    steps.I_click_btnMetada_tag();
    steps.waiting(1000);
    steps.I_enter_url_metadata_tag();
    steps.I_enter_description_metadata_tag();
    steps.waiting(1800);
    steps.I_click_btnSaveTag_tag();
    steps.waiting(2222);
    steps.I_click_tags();
    /// log off
    steps.waiting(1500);
    steps.I_click_perfil();
    steps.waiting(1500);
    steps.I_close_my_session();
    steps.waiting(1500);
  });

  it("Como usuario deseo actualizar un tag", () => {
    steps.setIdScreenImage("a");
    steps.setDirrectoryReport("update_your_Tags");
    steps.login();
    steps.waiting(1500);
    steps.I_click_tags();
    steps.waiting(2500);
    steps.I_select_the_fist_tag();
    steps.waiting(2500);
    steps.I_enter_name_tag();
    steps.waiting(1000);
    steps.I_enter_color_tag();
    steps.waiting(1000);
    steps.I_enter_description_tag();
    steps.waiting(1000);
    steps.I_click_btnMetada_tag();
    steps.waiting(1000);
    steps.I_enter_url_metadata_tag();
    steps.I_enter_description_metadata_tag();
    steps.waiting(1800);
    steps.I_click_btnSaveTag_tag();
    steps.waiting(2222);
    steps.I_click_tags();
    steps.waiting(1500);
    steps.I_click_perfil();
    steps.waiting(1500);
    steps.I_close_my_session();
    steps.waiting(1500);
  });

  it("Como usuario deseo eliminar un tag", () => {
    steps.login();
    steps.waiting(1500);
    steps.I_click_tags();
    steps.waiting(2500);
    steps.TakePicture();
    steps.I_select_the_fist_tag();
    steps.waiting(2500);
    steps.I_delete_the_tag();
    steps.waiting(1500);
    steps.TakePicture();
    steps.I_click_confirm_delete_the_tag();
    steps.waiting(2500);
    steps.TakePicture();
    steps.I_click_tags();
    steps.waiting(1500);
    steps.TakePicture();
    steps.I_click_perfil();
    steps.waiting(1500);
    steps.TakePicture();
    steps.I_close_my_session();
    steps.waiting(1500);
    steps.TakePicture();
  });
});
