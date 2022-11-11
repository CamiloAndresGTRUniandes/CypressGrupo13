class Member {
constructor(email) {
this.txtName='/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input';
this.txtEmail='input[name="email"]';
this.txtMemberNote='#member-note';
this.btnSave='/html/body/div[2]/div/main/section/div[1]/header/section/button';
this.txtSearch='input[placeholder="Search members..."]';
this.aYourProfile='/html/body/div[1]/div/ul/li[4]/a';

this.iconSettings="/html/body/div[2]/div/main/section/div[1]/header/section/span/button";
this.btnDelete="/html/body/div[2]/div/main/section/div[1]/header/section/span/ul/li[2]/button";
this.btnConfirmDelete="/html/body/div[5]/div/div/div[2]/button[2]/span";

this.email=email;
this.name="";
}

setNewName(name)
{
this.name=name;                  
}

setNewEmail(email)
{
this.email=email;
}



}
module.exports = {
Member
};
