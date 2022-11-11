/// <reference types="cypress" />
const {faker}= require("@faker-js/faker");  
const {Member} = require('./pages_object/Member');
const  {Home} = require('./pages_object/Home');
const {UserData} = require('./pages_object/userData');
const {Tags} = require('./pages_object/Tags');
const {YourProfile} = require('./pages_object/YourProfile'); 
const {ChangeTitleApp}= require('./pages_object/ChangeTitleApp'); 
const {Login}  = require('./pages_object/login');
const memberFrm= new Member(faker.internet.exampleEmail() );
const  homeFrm= new Home();
const loginFrm= new Login("Incio");
const userData = new UserData();
const tags = new Tags();
const yourProfileFRM= new YourProfile();
const changeTitleApp= new ChangeTitleApp();

class Steps {
constructor() {}

login()
{
cy.visit(homeFrm.URLGhost); 
cy.get(loginFrm.txtEmail).type(userData.emailAdmin);
cy.get(loginFrm.txtPassword).type(userData.passwordAdmin);
cy.xpath(loginFrm.btnLogin).click();
this.waiting(1000);                        
}

waiting(time)
{
 cy.wait(time);   
}
I_click_member()
{
 cy.xpath(homeFrm.member).click();                      
}
I_click_new_member()
{
cy.get("a[href='#/members/new/']").click();                          
}
I_enter_name_member(){
memberFrm.setNewName(faker.name.fullName());
cy.xpath(loginFrm.btnLogin).clear();
cy.xpath(loginFrm.btnLogin).type(memberFrm.txtName);
}
///member
I_enter_email_member()
{
this.email=faker.internet.exampleEmail();
cy.xpath(memberFrm.txtEmail).clear();
cy.xpath(memberFrm.txtEmail).type(memberFrm.email);
}

I_enter_note_member()
{
cy.xpath(memberFrm.txtMemberNote).clear();  
cy.xpath(memberFrm.txtMemberNote).type(faker.lorem.paragraph());                      
}

I_save_new_member()
{
cy.xpath(memberFrm.btnSave).click();                      
}

I_save_member(){
cy.xpath(memberFrm.btnSave).click();    
}
I_selected_first_member()
{
cy.get("table").click();                           
}

I_search_by_email_member()
{
cy.xpath(memberFrm.txtSearch).clear();    
cy.xpath(memberFrm.txtSearch).type(memberFrm.email);    
}

I_search_by_name_member()
{
cy.xpath(memberFrm.txtSearch).clear();    
cy.xpath(memberFrm.txtSearch).type(memberFrm.email);    
}

I_select_setting()
{
cy.xpath(memberFrm.iconSettings).click();                         
}


I_select_button_delete()
{
cy.xpath(memberFrm.btnDelete).click();      
}
I_Click_btn_ConfirmDelete()
{
cy.xpath(memberFrm.btnConfirmDelete).click();
}


///Tags
I_click_new_tag()
{
cy.xpath(tags.btnNewTag).click();
}

I_enter_name_tag()
{
tags.setNewNameTag(faker.music.songName());
cy.xpath(tags.txtNameTag).clear();  
cy.xpath(tags.txtNameTag).type(tags.nameTag);
}
I_enter_color_tag()
{
tags.color="FF1347";
cy.xpath(tags.txtColor).clear();  
cy.xpath(tags.txtColor).type(tags.color);
}

I_enter_description_tag()
{
tags.description=faker.lorem.paragraph(); 
cy.xpath(tags.description).clear();  
cy.xpath(tags.txtDescription).type(tags.description);                        
}

I_click_btnMetada_tag()
{
cy.xpath(tags.btnMetada).click();
}

I_enter_metadata_title_tag()
{
tags.metadataTitle=faker.company.name();
cy.xpath(tags.txtMetadataTitle).clear(); 
cy.xpath(tags.txtMetadataTitle).type(tags.metadataTitle);    
}

I_enter_description_metadata_tag()
{
tags.metaDataDescription=faker.lorem.sentence();
cy.xpath(tags.txtMetaDataDescription).clear()
cy.xpath(tags.txtMetaDataDescription).type(tags.metaDataDescription);                         
}

I_enter_url_metadata_tag()
{
tags.metaDataURL=faker.internet.url();
cy.xpath(tags.txtMetaDataURL).clear();
cy.xpath(tags.txtMetaDataURL).type(tags.metaDataURL);                           
}

I_click_btnSaveTag_tag()
{
cy.xpath(tags.btnSaveTag).click();                           
}

I_select_the_fist_tag()
{
cy.xpath(tags.selectFirstTag).click();                       
}

I_delete_the_tag()
{
cy.xpath(tags.btnDeleteTag).click();                          
}


I_click_confirm_delete_the_tag()
{
cy.xpath(tags.btnConfirmDeleteTag).click();                          
}

///End-Tags

//Init-Profile

I_enter_name_profile()
{
cy.xpath(yourProfileFRM.txtNameYourProfile).clear();
cy.xpath(yourProfileFRM.txtNameYourProfile).type(faker.name.fullName());                      
}

I_enter_slug_profile()
{
cy.xpath(yourProfileFRM.txtSlug).clear();                        
cy.xpath(yourProfileFRM.txtSlug).type(faker.music.songName());                         
}

I_enter_location_profile()
{
cy.xpath(yourProfileFRM.txtLocation).clear();     
cy.xpath(yourProfileFRM.txtLocation).type(faker.address.cityName());                     
}

I_enter_web_site_profile()
{
cy.xpath(yourProfileFRM.txtWebSite).clear();     
cy.xpath(yourProfileFRM.txtWebSite).type(faker.internet.url());                         
}
I_enter_facebook_profile()
{
let facebook="https://www.facebook.com/"+faker.name.firstName();
cy.xpath(yourProfileFRM.txtFacebook).clear();     
cy.xpath(yourProfileFRM.txtFacebook).type(facebook);                           
}

I_enter_twiter_profile()
{
cy.xpath(yourProfileFRM.txtTwitter).clear();  
let twitter="https://www.twitter.com/"+faker.name.firstName();
cy.xpath(yourProfileFRM.txtTwitter).type(twitter);      
}


I_enter_bio_profile()
{
cy.xpath(yourProfileFRM.txtArea).clear();  
cy.xpath(yourProfileFRM.txtArea).type(faker.lorem.sentence());      
}

I_click_save_your_profile()
{
cy.xpath(yourProfileFRM.btnSaveYourProfile).click();                           
}
I_enter_old_password()
{
cy.xpath(yourProfileFRM.txtOldPassword).type(userData.passwordAdmin);      
}

I_enter_new_password()
{
cy.xpath(yourProfileFRM.txtNewPasword).type(userData.passwordChange);                          
}

I_enter_verify_password()
{
cy.xpath(yourProfileFRM.txtVerifyPassword).type(userData.passwordChange);           
}

I_click_change_password(){
cy.xpath(yourProfileFRM.btnChangePassword).click();                      
}

I_enter_new_password_sign_in()
{
cy.xpath(yourProfileFRM.txtVerifyPassword).type(userData.passwordChange);      
}

I_enter_new_password_sign_in()
{
cy.get(loginFrm.txtPassword).type(userData.passwordChange);      
}
/// For return  old password
I_enter_old_password_return()
{
cy.xpath(yourProfileFRM.txtOldPassword).type(userData.passwordChange);                     
}


/// For return  old password
I_enter_new_password_return()
{
cy.xpath(yourProfileFRM.txtNewPasword).type(userData.passwordAdmin);                     
}



I_enter_verify_password_return()
{
cy.xpath(yourProfileFRM.txtVerifyPassword).type(userData.passwordAdmin);                     
}


I_enter_email_sign_in()
{
 cy.get(loginFrm.txtEmail).type(userData.emailAdmin);    
}
I_click_next()
{
cy.xpath(loginFrm.btnLogin).click();
}



//End-Profile
// Home-Dashboard
//Init Skin App

I_change_skin_app()
{
cy.xpath(homeFrm.btnChangeSkin).click();                         
}

//End Skin App
///

//Init change Title app

I_click_button_settings()
{
cy.xpath(homeFrm.btnSettings).click();    
}

I_click_button_general()
{
cy.xpath(changeTitleApp.btnGeneral).click();                        
}

I_click_button_expand_title()
{
cy.xpath(changeTitleApp.btnExpand).click();                                   
}

I_enter_title_app()
{
cy.xpath(changeTitleApp.txtTitle).clear();;                            
cy.xpath(changeTitleApp.txtTitle).type(faker.name.jobTitle());           
}
I_enter_description_app()
{
cy.xpath(changeTitleApp.txtDescription).clear();      
cy.xpath(changeTitleApp.txtDescription).type(faker.lorem.sentence());                         
}

I_click_button_save_title()
{
cy.xpath(changeTitleApp.btnSave).click();                          
}

//End change Title app

I_click_tags()
{
cy.xpath(homeFrm.tag).click();     
}

I_click_perfil()
{
cy.get('.gh-user-avatar.relative').click();     

}

I_click_your_profile()
{
cy.xpath(homeFrm.aYourProfile).click();     
}

I_close_my_session()
{
cy.xpath('/html/body/div[1]/div/ul/li[9]/a').click();     
}

I_say_hello_world()
{
console.log( "Hello");

}

//Other function 


}

module.exports = {
Steps
};
