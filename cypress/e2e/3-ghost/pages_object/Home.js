class Home {
constructor() {
this.apost='.gh-nav-list-new.relative > a[href="#/posts/"]';
this.apages='a[href="#/pages/"]';
this.atags='a[href="#/tags/"]';
this.asite='a[href="#/site/"]';
this.perfil=".gh-user-avatar relative";
this.member="/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a";
this.tag="/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[3]/a";
this.tagOld="/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a";
this.aYourProfile='/html/body/div[1]/div/ul/li[4]/a';
this.aYourProfileOld='/html/body/div[1]/div/ul/li[4]';
this.btnChangeSkin="/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/div";
this.btnSettings= "/html/body/div[2]/div/nav[1]/div/section/div[2]/div/div/div[2]/a";

this.URLGhost="http://localhost:2368/ghost";
this.URLGhostOld="http://localhost:3001/ghost";
}

}
module.exports = {
Home,
};
