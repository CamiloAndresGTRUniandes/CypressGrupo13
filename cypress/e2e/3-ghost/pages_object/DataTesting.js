const { faker } = require("@faker-js/faker");
// <reference types="cypress" / > require("cypress-xpath");
class modelData {
  constructor() {
    this.name = "";
    this.email = "";
    this.note = "";
    this.tag = "";
    this.description = "";
    this.title = "";
    this.url = "";
    this.slug = "";
    this.location = "";
    this.facebook = "";
    this.twiter = "";
    this.bio = "";
    this.titleApp = "";
    this.postTitle = "";
    this.postBody = "";
    this.nameWrong = "";
    this.emailWrong = "";
    this.noteWrong = "";
    this.tagWrong = "";
    this.descriptionWrong = "";
    this.titleWrong = "";
    this.urlWrong = "";
    this.slugWrong = "";
    this.locationWrong = "";
    this.facebookWrong = "";
    this.twiterWrong = "";
    this.bioWrong = "";
    this.titleAppWrong = "";
    this.postTitleWrong = "";
    this.postBodyWrong = "";
  }
}

class DataTesting {
  constructor() {
    this.seed = "123";
    this.typeData = "aleatorio";
    this.modelData = new modelData();
  }

  setTypeData(type) {
    this.typeData = type;
  }
  setSeed(seed) {
    this.seed = seed;
  }

  getDataPoolGenerico() {
    cy.request({
      method: "GET",
      url: "https://my.api.mockaroo.com/data_ghost.json?key=d6f77020",
    }).then((data) => {
      this.modelData.name = data.body[0].name;
      this.modelData.email = data.body[0].email;
      this.modelData.note = data.body[0].note;
      this.modelData.tag = data.body[0].tag;
      this.modelData.description = data.body[0].description;
      this.modelData.title = data.body[0].title;
      this.modelData.url = data.body[0].url;
      this.modelData.slug = data.body[0].slug;
      this.modelData.location = data.body[0].location;
      this.modelData.facebook = data.body[0].facebook;
      this.modelData.twiter = data.body[0].twiter;
      this.modelData.bio = data.body[0].bio;
      this.modelData.titleApp = data.body[0].titleApp;
      this.modelData.postTitle = data.body[0].postTitle;
      this.modelData.postBody = data.body[0].postBody;
      this.modelData.nameWrong = data.body[0].nameWrong;
      this.modelData.emailWrong = data.body[0].emailWrong;
      this.modelData.noteWrong = data.body[0].noteWrong;
      this.modelData.tagWrong = data.body[0].tagWrong;
      this.modelData.descriptionWrong = data.body[0].descriptionWrong;
      this.modelData.titleWrong = data.body[0].titleWrong;
      this.modelData.urlWrong = data.body[0].urlWrong;
      this.modelData.slugWrong = data.body[0].slugWrong;
      this.modelData.locationWrong = data.body[0].locationWrong;
      this.modelData.facebookWrong = data.body[0].facebookWrong;
      this.modelData.twiterWrong = data.body[0].twiterWrong;
      this.modelData.bioWrong = data.body[0].bioWrong;
      this.modelData.titleAppWrong = data.body[0].titleAppWrong;
      this.modelData.postTitleWrong = data.body[0].postTitleWrong;
      this.modelData.postBodyWrong = data.body[0].postBodyWrong;
      console.log("my model from mockaro", this.modelData);
    });
  }

  getName() {
    console.log("this.typeData", this.typeData);
    switch (this.typeData) {
      case "aleatorio":
        return faker.name.fullName();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        let name = faker.name.fullName();
        return name;
      case "data-pooling":
        return this.modelData.name;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        let nameWrong = faker.lorem.paragraphs();
        return nameWrong;
      case "data-pooling-wrong":
        return this.modelData.nameWrong;
    }
  }
  getEmail() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.internet.exampleEmail();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        let email = faker.internet.exampleEmail();
        return email;
      case "data-pooling":
        return this.modelData.email;
      case "aleatorio-wrong":
        return faker.internet.url();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        let emailWrong = faker.internet.url();
        return emailWrong;
      case "data-pooling-wrong":
        return this.modelData.emailWrong;
    }
  }
  getNote() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.lorem.paragraph();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.lorem.paragraph();
      case "data-pooling":
        return this.modelData.note;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling":
        return this.modelData.noteWrong;
    }
  }
  getTag() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.music.songName();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.music.songName();
      case "data-pooling":
        return this.modelData.tag;

      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.tagWrong;
    }
  }
  getDescription() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.lorem.sentence();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.lorem.sentence();
      case "data-pooling":
        return this.modelData.description;

      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.descriptionWrong;
    }
  }

  getTitle() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.company.name();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.company.name();
      case "data-pooling":
        return this.modelData.title;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.titleAppWrong;
    }
  }
  getPostTitle() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.company.name();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.company.name();
      case "data-pooling":
        return this.modelData.postTitle;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.postTitleWrong;
    }
  }
  
  getBody() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.lorem.sentence()
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.lorem.sentence()
      case "data-pooling":
        return this.modelData.postBody;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.postBodyWrong;
    }
  }
  
  getUrl() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.internet.url();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.internet.url();
      case "data-pooling":
        return this.modelData.url;
      case "aleatorio-wrong":
        return faker.lorem.sentence();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.sentence();
      case "data-pooling-wrong":
        return this.modelData.urlWrong;
    }
  }
  getSlug() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.music.songName();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.music.songName();
      case "data-pooling":
        return this.modelData.slug;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.slugWrong;
    }
  }
  getLocation() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.address.cityName();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.address.cityName();
      case "data-pooling":
        return this.modelData.location;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.locationWrong;
    }
  }
  getFacebook() {
    switch (this.typeData) {
      case "aleatorio":
        return "https://www.facebook.com/" + faker.name.firstName();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return "https://www.facebook.com/" + faker.name.firstName();
      case "data-pooling":
        return "https://www.facebook.com/" + this.modelData.facebook;

      case "aleatorio-wrong":
        return faker.internet.avatar();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.internet.avatar();
      case "data-pooling-wrong":
        return this.modelData.facebookWrong;
    }
  }

  getTwiter() {
    switch (this.typeData) {
      case "aleatorio":
        return "https://www.twitter.com/" + faker.name.firstName();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return "https://www.twitter.com/" + faker.name.firstName();
      case "data-pooling":
        return "https://www.twitter.com/" + this.modelData.twiter;

      case "aleatorio-wrong":
        return faker.internet.avatar();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.internet.avatar();
      case "data-pooling-wrong":
        return this.modelData.twiterWrong;
    }
  }
  getBio() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.lorem.sentence();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.lorem.sentence();
      case "data-pooling":
        return this.modelData.bio;

      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.bioWrong;
    }
  }

  getTitleApp() {
    switch (this.typeData) {
      case "aleatorio":
        return faker.name.jobTitle();
      case "pseudo-aletaorio":
        faker.seed(this.seed);
        return faker.name.jobTitle();
      case "data-pooling":
        return this.modelData.titleApp;
      case "aleatorio-wrong":
        return faker.lorem.paragraphs();
      case "pseudo-aletaorio-wrong":
        faker.seed(this.seed);
        return faker.lorem.paragraphs();
      case "data-pooling-wrong":
        return this.modelData.titleAppWrong;
    }
  }
}

module.exports = {
  DataTesting,
};
