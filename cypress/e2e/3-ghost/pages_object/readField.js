class ReadFile {
    constructor() {
        const {Posts} = require('./Posts');
        const {Published} = require('./Published');
        const {Scheduled} = require('./scheduled');
        const {Pages} = require('./pages');

        const posts = new Posts();
        const published = new Published();
        const scheduled = new Scheduled();
        const pages = new Pages();

        this.getElement = (item) => {
            if (item != null || item != "") {
                item = item.toLowerCase();
                switch (true) {
                    case item.includes('posts'):
                        return posts.getElementPath(item);
                    case item.includes('published'):
                        return published.getElementPath(item);
                    case item.includes('scheduled'):
                        return scheduled.getElementPath(item);
                    case item.includes('pages'):
                        return pages.getElementPath(item);
                    default:
                        return null;
                }
            } 
            else {
                return null;
            }
        };
    }
}
module.exports = {
    ReadFile
};