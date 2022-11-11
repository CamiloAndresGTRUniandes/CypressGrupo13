class Login {
constructor(msg) {
this.msg= msg;
this.txtEmail='input[name="identification"]';
this.txtPassword='input[name="password"]';
this.btnLogin='/html/body/div[2]/div/main/div/div/section/form/button';
this.msgError=".main-error";
}

}
module.exports = {
  Login,
};
