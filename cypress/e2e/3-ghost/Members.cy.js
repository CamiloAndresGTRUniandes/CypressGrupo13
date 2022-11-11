/// <reference types="cypress" />
require('cypress-xpath')
const {Steps}= require('./Steps');
let steps=new Steps();
describe('Member', () => {
it(' Como usuario deseo actualizar a  un member', () => {
steps.login();
steps.waiting(1500);
///
steps.I_click_member();
steps.waiting(3000);
steps.I_click_new_member();
steps.waiting(3000);
steps.I_enter_name_member();;
steps.I_enter_email_member();
steps.waiting(1000);
steps.I_enter_note_member()
steps.I_save_new_member();
steps.waiting(2000);
steps.I_click_member();
steps.waiting(2000);
steps.I_search_by_email_member();
steps.waiting(2000);
steps.I_selected_first_member(); 
/// update
steps.waiting(3000);
steps.I_enter_name_member();
steps.waiting(1000);
steps.I_enter_note_member();
steps.I_save_member();
steps.waiting(2000);
steps.I_click_member();
steps.waiting(3000);
steps.I_search_by_name_member();
steps.waiting(3000);
steps.I_selected_first_member();
/// log off
steps.waiting(1500);
steps.I_click_perfil();
steps.waiting(1500);
steps.I_close_my_session();
steps.waiting(1500);
}
);
it(' Como usuario deseo crear a  un member', () => {
steps.login();
steps.waiting(1500);
///
steps.I_click_member();
steps.waiting(3000);
steps.I_click_new_member();
steps.waiting(3000);
steps.I_enter_name_member();;
steps.I_enter_email_member();
steps.waiting(1000);
steps.I_enter_note_member()
steps.I_save_new_member();
steps.waiting(2000);
steps.I_click_member();
steps.waiting(2000);
steps.I_search_by_email_member();
steps.waiting(2000);
steps.I_selected_first_member(); 

steps.waiting(1500);
steps.I_click_perfil();
steps.waiting(1500);
steps.I_close_my_session();
steps.waiting(1500);
}
);

it(' Como usuario deseo borrar a  un member', () => {
steps.login();
steps.waiting(1500);
///
steps.I_click_member();
steps.waiting(3000);
steps.I_click_new_member();
steps.waiting(3000);
steps.I_enter_name_member();;
steps.I_enter_email_member();
steps.waiting(1000);
steps.I_enter_note_member()
steps.I_save_new_member();
steps.waiting(2000);
steps.I_click_member();
steps.waiting(2000);
steps.I_search_by_email_member();
steps.waiting(2000);
steps.I_selected_first_member(); 

steps.waiting(2000);
steps.I_select_setting();
steps.waiting(2000);
steps.I_select_button_delete();
steps.waiting(2000);
steps.I_Click_btn_ConfirmDelete();
steps.waiting(1500);
steps.I_click_perfil();
steps.waiting(1500);
steps.I_close_my_session();
steps.waiting(1500);
}
);


});