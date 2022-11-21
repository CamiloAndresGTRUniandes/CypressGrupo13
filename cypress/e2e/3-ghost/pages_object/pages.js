class Pages {

    constructor() {
        const pagesJson = require('./pages.json');
        const stringData = JSON.stringify(pagesJson);
        const jsonData = JSON.parse(stringData);

        this.getElementPath = (item) => {
            switch (true) {
                case item.includes('pages link old version'):
                    return jsonData['pages']['pagesLinkOld'];
                case item.includes('pages link'):
                    return jsonData['pages']['pagesLink'];
                case item.includes('new page old version'):
                    return jsonData['pages']['newPageOld'];
                case item.includes('new page'):
                    return jsonData['pages']['newPage'];
                case item.includes('title old version'):
                    return jsonData['pages']['pageTitleOld'];
                case item.includes('title'):
                    return jsonData['pages']['pageTitle'];
                case item.includes('body old version'):
                    return jsonData['pages']['pageBodyOld'];
                case item.includes('body'):
                    return jsonData['pages']['pageBody'];
                case item.includes('published pages'):
                    return jsonData['pages']['publishedPages'];
                case item.includes('unpublish button'):
                    return jsonData['pages']['unPublishButton'];
                case item.includes('publish old version'):
                    return jsonData['pages']['pagePublishOld'];
                case item.includes('publish button'):
                    return jsonData['pages']['pagePublish'];
                case item.includes('continue'):
                    return jsonData['pages']['continuePublish'];
                case item.includes('publish page old version'):
                    return jsonData['pages']['publishButtonOld'];
                case item.includes('publish page'):
                    return jsonData['pages']['publishButton'];
                case item.includes('back to editor'):
                    return jsonData['pages']['backToEditor'];
                case item.includes('back to pages old version'):
                    return jsonData['pages']['backToPagesOld'];
                case item.includes('back to pages'):
                    return jsonData['pages']['backToPages'];
                case item.includes('right now'):
                    return jsonData['pages']['scheduledTime'];
                case item.includes('unschedule button'):
                    return jsonData['pages']['unschedule'];
                case item.includes('schedule button'):
                    return jsonData['pages']['scheduleButton'];
                case item.includes('filter dropdown'):
                    return jsonData['pages']['filterDropdown'];
                case item.includes('scheduled pages'):
                    return jsonData['pages']['scheduledPages'];
                case item.includes('first page'):
                    return jsonData['pages']['selectScheduled'];
                case item.includes('convert to draft'):
                    return jsonData['pages']['convertToDraft'];
                case item.includes('search button old version'):
                    return jsonData['pages']['searchOld'];
                case item.includes('search button'):
                    return jsonData['pages']['search'];
                case item.includes('input old version'):
                    return jsonData['pages']['inputSearchOld'];
                case item.includes('input'):
                    return jsonData['pages']['inputSearch'];
                case item.includes('select option old version'):
                    return jsonData['pages']['selectOptionOld'];
                case item.includes('select option'):
                    return jsonData['pages']['selectOption'];
                case item.includes('side menu button old version'):
                    return jsonData['pages']['sideMenuOld'];
                case item.includes('side menu button'):
                    return jsonData['pages']['sideMenu'];
                case item.includes('delete post button old version'):
                    return jsonData['pages']['deletePostOld'];
                case item.includes('delete post button'):
                    return jsonData['pages']['deletePost'];
                case item.includes('delete confirmation button old version'):
                    return jsonData['pages']['deleteConfirmationOld'];
                case item.includes('delete confirmation button'):
                    return jsonData['pages']['deleteConfirmation'];
                case item.includes('delete modal'):
                    return jsonData['pages']['modalDelete'];
            }
        };
    };

}
module.exports = {
    Pages
};