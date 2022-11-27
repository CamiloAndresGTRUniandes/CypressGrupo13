/// <reference types="cypress" />
const { faker } = require("@faker-js/faker");
const { Member } = require("./pages_object/Member");
const { Home } = require("./pages_object/Home");
const { UserData } = require("./pages_object/userData");
const { Tags } = require("./pages_object/Tags");
const { YourProfile } = require("./pages_object/YourProfile");
const { ChangeTitleApp } = require("./pages_object/ChangeTitleApp");
const { Login } = require("./pages_object/login");
const { ReadFile } = require("./pages_object/readField");
const { DataTesting } = require("./pages_object/DataTesting");

const memberFrm = new Member(faker.internet.exampleEmail());
const homeFrm = new Home();
const loginFrm = new Login("Incio");
const userData = new UserData();
const tags = new Tags();
const yourProfileFRM = new YourProfile();
const changeTitleApp = new ChangeTitleApp();
const readFile = new ReadFile();

var inputText = "";
var inputTitle = "";

class Steps {
  constructor() {
    this.DirrectoryReport = "";
    this.CountImage = 1;
    this.IdScreenImage = "";
    this.dataTesting = new DataTesting();
  }

  setIdScreenImage(IdScreenImage) {
    this.IdScreenImage = IdScreenImage;
  }
  setDirrectoryReport(url) {
    this.DirrectoryReport = url;
  }
  setURLGhost(url) {
    homeFrm.URLGhost = url;
  }
  TakePicture() {
    cy.screenshot(
      `${this.DirrectoryReport}/${this.CountImage}${this.IdScreenImage}`,
      { overwrite: true }
    );
    this.CountImage++;
  }

  login() {
    cy.visit(homeFrm.URLGhost);
    cy.get(loginFrm.txtEmail).type(userData.emailAdmin);
    cy.get(loginFrm.txtPassword).type(userData.passwordAdmin);
    cy.xpath(loginFrm.btnLogin).click();
    this.waiting(1000);
  }

  waiting(time) {
    cy.wait(time);
  }
  I_click_member() {
    cy.xpath(homeFrm.member).click();
  }
  I_click_new_member() {
    cy.get("a[href='#/members/new/']").click();
  }
  I_enter_name_member() {
    memberFrm.setNewName(this.dataTesting.getName());
    cy.xpath(memberFrm.txtName).clear();
    cy.xpath(memberFrm.txtName).type(memberFrm.name);
  }
  ///member
  I_enter_email_member() {
    this.email = this.dataTesting.getEmail();
    memberFrm.email = this.email;
    cy.xpath(memberFrm.txtEmail).clear();
    cy.xpath(memberFrm.txtEmail).type(memberFrm.email);
  }

  I_enter_note_member() {
    cy.xpath(memberFrm.txtMemberNote).clear();
    cy.xpath(memberFrm.txtMemberNote).type(this.dataTesting.getNote());
  }

  I_save_new_member() {
    cy.xpath(memberFrm.btnSave).click();
  }

  I_save_member() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.xpath(memberFrm.btnSave).click();
  }
  I_selected_first_member() {
    cy.get("table").click();
  }

  I_search_by_email_member() {
    cy.xpath(memberFrm.txtSearch).clear();
    cy.xpath(memberFrm.txtSearch).type(memberFrm.email);
  }

  I_search_by_name_member() {
    cy.xpath(memberFrm.txtSearch).clear();
    cy.xpath(memberFrm.txtSearch).type(memberFrm.email);
  }

  I_select_setting() {
    cy.xpath(memberFrm.iconSettings).click();
  }

  I_select_button_delete() {
    cy.xpath(memberFrm.btnDelete).click();
  }
  I_Click_btn_ConfirmDelete() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.xpath(memberFrm.btnConfirmDelete).click();
  }
  I_Click_btn_LeaveDelete() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.xpath(memberFrm.btnLeaveDelete).click();
  }

  ///Tags
  I_click_new_tag() {
    cy.xpath(tags.btnNewTag).click();
  }
  I_click_new_tagOld() {
    cy.xpath(tags.btnNewTagOld).click();
  }

  I_enter_name_tag() {
    tags.setNewNameTag(this.dataTesting.getTag());
    cy.xpath(tags.txtNameTag).clear();
    cy.xpath(tags.txtNameTag).type(tags.nameTag);
  }
  I_enter_name_tagOld() {
    tags.setNewNameTag(this.dataTesting.getTag());
    cy.xpath(tags.txtNameTagOld).clear();
    cy.xpath(tags.txtNameTagOld).type(tags.nameTag, { force: true });
  }

  I_enter_color_tag() {
    tags.color = "FF1347";
    cy.xpath(tags.txtColor).clear();
    cy.xpath(tags.txtColor).type(tags.color);
  }

  I_enter_color_tagOld() {
    tags.color = "FF1347";
    cy.xpath(tags.txtColorOld).clear();
    cy.xpath(tags.txtColorOld).type(tags.color, { force: true });
  }

  I_enter_description_tag() {
    tags.description = this.dataTesting.getDescription();
    cy.xpath(tags.txtDescription).clear();
    cy.xpath(tags.txtDescription).type(tags.description);
  }

  I_enter_description_tagOld() {
    tags.description = this.dataTesting.getDescription();
    cy.xpath(tags.txtDescriptionOld).clear();
    cy.xpath(tags.txtDescriptionOld).type(tags.description, { force: true });
  }

  I_click_btnMetada_tag() {
    cy.xpath(tags.btnMetada).click();
  }

  I_click_btnMetada_tagOld() {
    cy.xpath(tags.btnMetadaOld).click();
  }

  I_enter_metadata_title_tag() {
    tags.metadataTitle = this.dataTesting.getTitle();
    cy.xpath(tags.txtMetadataTitle).clear();
    cy.xpath(tags.txtMetadataTitle).type(tags.metadataTitle);
  }

  I_enter_metadata_title_tagOld() {
    tags.metadataTitle = this.dataTesting.getTitle();
    cy.xpath(tags.txtMetadataTitleOld).clear();
    cy.xpath(tags.txtMetadataTitleOld).type(tags.metadataTitle, {
      force: true,
    });
  }

  I_enter_description_metadata_tag() {
    tags.metaDataDescription = this.dataTesting.getDescription();
    cy.xpath(tags.txtMetaDataDescription).clear();
    cy.xpath(tags.txtMetaDataDescription).type(tags.metaDataDescription);
  }

  I_enter_description_metadata_tagold() {
    tags.metaDataDescription = this.dataTesting.getDescription();
    cy.xpath(tags.txtMetaDataDescriptionOld).clear();
    cy.xpath(tags.txtMetaDataDescriptionOld).type(tags.metaDataDescription, {
      force: true,
    });
  }

  I_enter_url_metadata_tag() {
    tags.metaDataURL = this.dataTesting.getUrl();
    cy.xpath(tags.txtMetaDataURL).clear();
    cy.xpath(tags.txtMetaDataURL).type(tags.metaDataURL);
  }

  I_enter_url_metadata_tagOld() {
    tags.metaDataURL = this.dataTesting.getUrl();
    cy.xpath(tags.txtMetaDataURLOld).clear();
    cy.xpath(tags.txtMetaDataURLOld).type(tags.metaDataURL, { force: true });
  }

  I_click_btnSaveTag_tag() {
    cy.xpath(tags.btnSaveTag).click();
  }

  I_click_btnSaveTag_tagOld() {
    cy.xpath(tags.btnSaveTagOld).click();
  }

  I_select_the_fist_tag() {
    cy.xpath(tags.selectFirstTag).click();
  }

  I_select_the_fist_tagOld() {
    cy.xpath(tags.selectFirstTagOld).click();
  }

  I_delete_the_tag() {
    cy.xpath(tags.btnDeleteTag).click();
  }
  I_click_confirm_delete_the_tag() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.xpath(tags.btnConfirmDeleteTag).click({ force: true });
  }

  ///End-Tags

  //Init-Profile

  I_enter_name_profile() {
    cy.xpath(yourProfileFRM.txtNameYourProfile).clear();
    cy.xpath(yourProfileFRM.txtNameYourProfile).type(
      this.dataTesting.getName()
    );
  }

  I_enter_name_profileOld() {
    cy.xpath(yourProfileFRM.txtNameYourProfile).clear();
    cy.xpath(yourProfileFRM.txtNameYourProfile).type(
      this.dataTesting.getName(),
      { force: true }
    );
  }

  I_enter_slug_profile() {
    cy.xpath(yourProfileFRM.txtSlug).clear();
    cy.xpath(yourProfileFRM.txtSlug).type(this.dataTesting.getSlug(), {
      force: true,
    });
  }

  I_enter_location_profile() {
    cy.xpath(yourProfileFRM.txtLocation).clear();
    cy.xpath(yourProfileFRM.txtLocation).type(this.dataTesting.getLocation(), {
      force: true,
    });
  }

  I_enter_web_site_profile() {
    cy.xpath(yourProfileFRM.txtWebSite).clear();
    cy.xpath(yourProfileFRM.txtWebSite).type(this.DataTesting.getUrl(), {
      force: true,
    });
  }
  I_enter_facebook_profile() {
    let facebook = this.dataTesting.getFacebook();
    cy.xpath(yourProfileFRM.txtFacebook).clear();
    cy.xpath(yourProfileFRM.txtFacebook).type(facebook, { force: true });
  }

  I_enter_twiter_profile() {
    cy.xpath(yourProfileFRM.txtTwitter).clear();
    let twitter = this.dataTesting.getTwiter();
    cy.xpath(yourProfileFRM.txtTwitter).type(twitter, { force: true });
  }

  I_enter_bio_profile() {
    cy.xpath(yourProfileFRM.txtArea).clear();
    cy.xpath(yourProfileFRM.txtArea).type(this.dataTesting.getBio(), {
      force: true,
    });
  }

  containNameErrorIsLong()
  {
    cy.contains(yourProfileFRM.nameMesaggeErrorIsLong);
  }
  containBioErrorIsLong()
  {
    cy.contains(yourProfileFRM.bioMesaggeErrorIsLong);
  }

  containLocationIsLong()
  {
    cy.contains(yourProfileFRM.locationErrorIsLong);
  }

  I_click_save_your_profile() {
    cy.xpath(yourProfileFRM.btnSaveYourProfile).click();
  }

  I_click_save_your_profileOld() {
    cy.xpath(yourProfileFRM.btnSaveYourProfileOld).click();
  }

  I_enter_old_password() {
    cy.xpath(yourProfileFRM.txtOldPassword).type(userData.passwordAdmin);
  }

  I_enter_new_password() {
    cy.xpath(yourProfileFRM.txtNewPasword).type(userData.passwordChange);
  }

  I_enter_verify_password() {
    cy.xpath(yourProfileFRM.txtVerifyPassword).type(userData.passwordChange);
  }

  I_click_change_password() {
    cy.xpath(yourProfileFRM.btnChangePassword).click();
  }

  I_enter_new_password_sign_in() {
    cy.xpath(yourProfileFRM.txtVerifyPassword).type(userData.passwordChange);
  }

  I_enter_new_password_sign_in() {
    cy.get(loginFrm.txtPassword).type(userData.passwordChange);
  }
  /// For return  old password
  I_enter_old_password_return() {
    cy.xpath(yourProfileFRM.txtOldPassword).type(userData.passwordChange);
  }

  /// For return  old password
  I_enter_new_password_return() {
    cy.xpath(yourProfileFRM.txtNewPasword).type(userData.passwordAdmin);
  }

  I_enter_verify_password_return() {
    cy.xpath(yourProfileFRM.txtVerifyPassword).type(userData.passwordAdmin);
  }

  I_enter_email_sign_in() {
    cy.get(loginFrm.txtEmail).type(userData.emailAdmin);
  }
  I_click_next() {
    cy.xpath(loginFrm.btnLogin).click();
  }

  //End-Profile
  // Home-Dashboard
  //Init Skin App

  I_change_skin_app() {
    cy.xpath(homeFrm.btnChangeSkin).click().screenshot();
  }

  //End Skin App
  ///

  //Init change Title app

  I_click_button_settings() {
    cy.xpath(homeFrm.btnSettings).click();
  }

  I_click_button_settingsOld() {
    cy.xpath(changeTitleApp.btnGeneralOld).click();
  }

  I_click_button_general() {
    cy.xpath(changeTitleApp.btnGeneral).click();
  }

  I_click_button_expand_title() {
    cy.xpath(changeTitleApp.btnExpand).click();
  }

  I_click_button_expand_titleOld() {
    cy.xpath(changeTitleApp.btnExpandOld).click();
  }

  I_enter_title_app() {
    cy.xpath(changeTitleApp.txtTitle).clear();
    cy.xpath(changeTitleApp.txtTitle).type(this.dataTesting.getTitleApp());
  }

  title_appMsgErr() {
    cy.contains(changeTitleApp.txtTitleMessageError);
  }

  I_enter_description_app() {
    cy.xpath(changeTitleApp.txtDescription).clear();
    cy.xpath(changeTitleApp.txtDescription).type(
      this.dataTesting.getDescription()
    );
  }

  description_appMsgErr() {
    cy.contains(changeTitleApp.txtDescriptionMessageError);
  }

  I_click_button_save_title() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.xpath(changeTitleApp.btnSave).click();
  }

  I_enter_title_appOld() {
    cy.xpath(changeTitleApp.txtTitleOld).clear();
    cy.xpath(changeTitleApp.txtTitleOld).type(this.dataTesting.getTitleApp(), {
      force: true,
    });
  }
  I_enter_description_appOld() {
    cy.xpath(changeTitleApp.txtDescriptionOld).clear();
    cy.xpath(changeTitleApp.txtDescriptionOld).type(
      this.dataTesting.getDescription(),
      { force: true }
    );
  }

  I_click_button_save_titleOld() {
    cy.xpath(changeTitleApp.btnSaveOld).click();
  }

  //End change Title app

  I_click_tags() {
    cy.xpath(homeFrm.tag).click();
  }
  I_click_tagsOld() {
    cy.xpath(homeFrm.tagOld).click();
  }

  I_click_perfil() {
    cy.get(".gh-user-avatar.relative").click();
  }
  I_click_perfilOld() {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.xpath(
      "/html/body/div[2]/div/nav[1]/section/div[2]/div[1]/div/div[1]"
    ).click();
  }

  I_click_your_profile() {
    cy.xpath(homeFrm.aYourProfile).click();
  }

  I_click_your_profileOld() {
    cy.xpath(homeFrm.aYourProfileOld).click();
  }

  I_close_my_session() {
    cy.xpath("/html/body/div[1]/div/ul/li[9]/a").click();
  }

  I_say_hello_world() {
    console.log("Hello");
  }

  //Other function
  //Click Generic Method start
  I_click(item) {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    let elementPath = readFile.getElement(item);
    cy.xpath(elementPath).click({ force: true });
  }
  I_enter_text_in(item) {
    item = item.toLowerCase();
    switch (true) {
      case item.includes("title"):
        inputText = this.dataTesting.getPostTitle();
        inputTitle = inputText;
        console.log("Titulo => ", inputText);
        break;
       case item.includes("body"):
        inputText = this.dataTesting.getBody();
        console.log("Body => ", inputText);
        break;
      default:
        inputText = faker.lorem.sentence();
        break;
    }
    let elementPath = readFile.getElement(item);
    cy.xpath(elementPath).clear();
    cy.xpath(elementPath).type(inputText);
  }
  //Click Generic Method end
  //Input text Generic Method start
  I_search_for_results(item) {
    let elementPath = readFile.getElement(item);
    cy.xpath(elementPath).clear();
    cy.xpath(elementPath).type(inputTitle);
  }
  //Input text Generic Method End
}

module.exports = {
  Steps,
};
