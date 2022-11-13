// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('./Steps');
let steps = new Steps();
describe('Pages', () => {
    it('Como usuario deseo crear una nueva pagina', () => {

        //LoginStart
        steps.login();
        steps.waiting(1500);
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
        steps.I_click("Back to pages button inside pages editor");

        ///MyMethodEnd

        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);

    }
    );
    it('Como usuario deseo agendar la creación de una nueva pagina', () => {

        //LoginStart
        steps.login();
        steps.waiting(1500);
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
        steps.I_click("Right now dropdown inside pages publish");
        steps.waiting(1500);
        steps.I_click("Schedule button inside pages publish");
        steps.waiting(3500);
        steps.I_click("Continue button after pages editor");
        steps.waiting(3500);
        steps.I_click("Publish page button after pages editor");
        steps.waiting(1500);
        steps.I_click("Back to pages button inside pages editor");

        ///MyMethodEnd

        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);

    }
    );
    it('Como usuario deseo hacer unschedule de una pagina agendada', () => {

        //LoginStart
        steps.login();
        steps.waiting(1500);
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
        steps.I_click("Right now dropdown inside pages publish");
        steps.waiting(1500);
        steps.I_click("Schedule button inside pages publish");
        steps.waiting(3500);
        steps.I_click("Continue button after pages editor");
        steps.waiting(3500);
        steps.I_click("Publish page button after pages editor");
        steps.waiting(1500);
        steps.I_click("Back to pages button inside pages editor");
        steps.waiting(1500);
        steps.I_click("First page inside pages module");
        steps.waiting(1500);
        steps.I_click("Unschedule button inside pages module");
        steps.waiting(1500);
        steps.I_click("Convert to Draft button inside pages module");
        steps.waiting(1500);
        steps.I_click("Back to pages button inside pages editor");

        ///MyMethodEnd

        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);

    }
    );
    it('Como usuario deseo hacer unpublish de una pagina publicada', () => {

        //LoginStart
        steps.login();
        steps.waiting(1500);
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
        steps.I_click("Back to pages button inside pages editor");
        steps.waiting(1500);
        steps.I_click("Search button inside pages module");
        steps.waiting(1500);
        steps.I_search_for_results("entering text in input field inside pages module");
        steps.waiting(1500);
        steps.I_click("on Select option found inside pages module");
        steps.waiting(1500);
        steps.I_click("Unpublish button inside pages editor");
        steps.waiting(1500);
        steps.I_click("Convert to Draft button inside pages module");
        steps.waiting(1500);
        steps.I_click("Back to pages button inside pages editor");

        ///MyMethodEnd

        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);

    }
    );
    it('Como usuario deseo eliminar una pagina', () => {

        //LoginStart
        steps.login();
        steps.waiting(1500);
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
        steps.I_click("Back to pages button inside pages editor");
        steps.waiting(1500);
        steps.I_click("Search button inside pages module");
        steps.waiting(1500);
        steps.I_search_for_results("entering text in input field inside pages module");
        steps.waiting(1500);
        steps.I_click("on Select option found inside pages module");
        steps.waiting(1500);
        // steps.I_click("Unpublish button inside pages editor");
        // steps.waiting(1500);
        // steps.I_click("Convert to Draft button inside pages module");
        // steps.waiting(1500);
        // steps.I_click("Back to pages button inside pages editor");
        steps.I_click("Side menu button inside posts editor");
        steps.waiting(1500);
        steps.I_click("Delete post button inside posts editor");
        steps.waiting(1500);
        steps.I_click("Delete confirmation button inside posts editor");

        ///MyMethodEnd

        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);

    }
    );
});