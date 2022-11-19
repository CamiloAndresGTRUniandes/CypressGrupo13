class Tags {
constructor() {
this.btnNewTag="/html/body/div[2]/div/main/section/div/header/section/a";
this.btnNewTagOld="/html/body/div[2]/div/main/section/header/section/a";
this.txtNameTag='/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[1]/div[1]/input';
this.txtNameTagOld='/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[1]/input';
this.txtColor='/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[1]/div[2]/div/input'
this.txtColorOld="/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/div[2]/div/input";
this.txtDescription='/html/body/div[2]/div/main/section/form/div[2]/section/div/div[1]/div[3]/textarea';
this.txtDescriptionOld="/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea";
this.btnMetada='/html/body/div[2]/div/main/section/form/section/div[1]/div[1]/button';
this.btnMetadaOld="/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[1]/div[2]/button";
this.txtMetadataTitle="/html/body/div[2]/div/main/section/form/section/div[1]/div[2]/div/div/div/div/div[1]/div[1]/input";
this.txtMetadataTitleOld="/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[1]/input";
this.txtMetaDataDescription="/html/body/div[2]/div/main/section/form/section/div[1]/div[2]/div/div/div/div/div[1]/div[2]/textarea";
this.txtMetaDataDescriptionOld="/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[2]/textarea";
this.txtMetaDataURL="/html/body/div[2]/div/main/section/form/section/div[1]/div[2]/div/div/div/div/div[1]/div[3]/input";
this.txtMetaDataURLOld="/html/body/div[2]/div/main/section/form/div/div[2]/section[1]/div[2]/div/div/div[1]/div[1]/input";
this.btnSaveTag="/html/body/div[2]/div/main/section/form/div[1]/header/section/button";
this.btnSaveTagOld="/html/body/div[2]/div/main/section/form/header/section/button";

this.btnDeleteTag='/html/body/div[2]/div/main/section/div/button';
this.btnConfirmDeleteTag="/html/body/div[5]/div/div/div[2]/button[2]";
this.selectFirstTag="/html/body/div[2]/div/main/section/section/ol/li[2]/a[4]";
this.selectFirstTagOld="/html/body/div[2]/div/main/section/section/ol/li[2]/a[4]";
this.nameTag="";
this.color="";
this.description ='';
this.metadataTitle='';
this.metaDataDescription="";
this.metaDataURL="";

}

setNewNameTag(nameTag)
{
this.nameTag=nameTag;                   
}


}
module.exports = {
Tags,
};
