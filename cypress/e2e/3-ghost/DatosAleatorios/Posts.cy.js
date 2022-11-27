/// <reference types="cypress" />
require('cypress-xpath')
const { Steps } = require('../Steps');
let steps = new Steps();
describe('Posts', () => {
    beforeEach(()=>{
        steps.dataTesting.typeData="aleatorio";
       });
    
    it(' Como usuario deseo crear un nuevo post', () => {
        
        //LoginStart
        steps.login();
        steps.waiting(1500);
        //LoginEnd
        ///MyMethodStart
        steps.I_click("posts link");
        steps.waiting(1500);
        steps.I_click("New Post button inside posts module");
        steps.waiting(1500);
        steps.I_enter_text_in("post title field inside posts editor");
        steps.waiting(1500);
        steps.I_enter_text_in("post body field inside posts editor");
        steps.waiting(3500);
        steps.I_click("Publish button inside posts editor");
        steps.waiting(2500);
        steps.I_click("Continue button after posts editor");
        steps.waiting(2500);
        steps.I_click("Publish Post button after posts editor");
        steps.waiting(2500);
        steps.I_click("Back to Editor button inside posts publish");
        steps.waiting(1500);
        steps.I_click("Back to Posts button inside posts editor");
        ///MyMethodEnd


        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);
    }
    );
    it(' Como usuario deseo editar un post publicado previamente', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport("posts_update__folder");
        //LoginStart
        steps.login();
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        ///MyMethodEnd
        steps.I_click("Published link");
        steps.waiting(1500);
        
        steps.I_click("First published post inside published module");
        steps.waiting(1500);
        
        steps.I_click("Edit post button inside published module");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post title field inside published editor");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post body field inside published editor");
        steps.waiting(1500);
        
        steps.I_click("Update post button inside published module");
        steps.waiting(1500);
        
        steps.I_click("Back to post button inside published module");


        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);
    }
    );
    it(' Como usuario deseo crear un post agendado para ser publicado en el futuro', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport("posts_schedule__folder");
        //LoginStart
        steps.login();
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        ///MyMethodEnd
        steps.I_click("posts link");
        steps.waiting(1500);
        
        steps.I_click("New Post button inside posts module");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post title field inside posts editor");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post body field inside posts editor");
        steps.waiting(3500);
        
        steps.I_click("Publish button inside posts editor");
        steps.waiting(1500);
        
        steps.I_click("Right now dropdown inside posts publish");
        steps.waiting(1500);
        
        steps.I_click("Schedule button inside posts publish");
        steps.waiting(3500);
        
        steps.I_click("Continue button after posts editor");
        steps.waiting(3500);
        
        steps.I_click("Publish Post button after posts editor");
        steps.waiting(3500);
        
        steps.I_click("Back to Posts button inside posts publish");


        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);
    }
    );

    it(' Como usuario deseo hacer unpublish de un post agendado', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport("posts_unpublish__folder");
        //LoginStart
        steps.login();
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        ///MyMethodEnd
        steps.I_click("posts link");
        steps.waiting(1500);
        
        steps.I_click("New Post button inside posts module");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post title field inside posts editor");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post body field inside posts editor");
        steps.waiting(3500);
        
        steps.I_click("Publish button inside posts editor");
        steps.waiting(1500);
        
        steps.I_click("Right now dropdown inside posts publish");
        steps.waiting(1500);
        
        steps.I_click("Schedule button inside posts publish");
        steps.waiting(3500);
        
        steps.I_click("Continue button after posts editor");
        steps.waiting(3500);
        
        steps.I_click("Publish Post button after posts editor");
        steps.waiting(3500);
        
        steps.I_click("Back to Posts button inside posts publish");
        // steps.waiting(1500);
        
        // steps.I_click("Back to Posts button inside posts editor");
        steps.waiting(1500);
        
        steps.I_click("Scheduled link in dashboard");
        steps.waiting(1500);
        
        steps.I_click("First post inside Scheduled module");
        steps.waiting(1500);
        
        steps.I_click("Unschedule button inside Scheduled module");
        steps.waiting(1500);
        
        steps.I_click("Convert to Draft button inside Scheduled module");
        steps.waiting(1500);
        
        steps.I_click("Back to Posts button inside posts editor");


        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);
    }
    );
    it('Como usuario deseo eliminar un post publicado', () => {
        steps.setIdScreenImage("a");
        steps.setDirrectoryReport("posts_delete__folder");
        //LoginStart
        steps.login();
        steps.waiting(1500);
        
        //LoginEnd
        ///MyMethodStart
        ///MyMethodEnd
        steps.I_click("posts link");
        steps.waiting(1500);
        
        steps.I_click("New Post button inside posts module");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post title field inside posts editor");
        steps.waiting(1500);
        
        steps.I_enter_text_in("post body field inside posts editor");
        steps.waiting(3500);
        
        steps.I_click("Publish button inside posts editor");
        steps.waiting(3500);
        
        steps.I_click("Continue button after posts editor");
        steps.waiting(3500);
        
        steps.I_click("Publish Post button after posts editor");
        steps.waiting(3500);
        
        steps.I_click("Back to Editor button inside posts publish");
        steps.waiting(1500);
        
        steps.I_click("Back to Posts button inside posts editor");
        steps.waiting(1500);
        
        steps.I_click("Published link");
        steps.waiting(1500);
        
        steps.I_click("First published post inside published module");
        steps.waiting(1500);
        
        steps.I_click("Edit post button inside published module");
        steps.waiting(1500);
        
        steps.I_click("Side menu button inside posts editor");
        steps.waiting(1500);
        
        steps.I_click("Delete post button inside posts editor");
        steps.waiting(1500);
        
        steps.I_click("Delete confirmation button inside posts editor");

        //Close Session
        steps.waiting(1500);
        steps.I_click_perfil();
        steps.waiting(1500);
        steps.I_close_my_session();
        steps.waiting(1500);
    }
    );
});