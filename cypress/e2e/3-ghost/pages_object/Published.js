class Published {

    constructor() {
        const publishedJson = require('./published.json');
        const stringData = JSON.stringify(publishedJson);
        const jsonData = JSON.parse(stringData);

        this.getElementPath = (item) => {
            switch (true) {
                case item.includes('published link old version'):
                    return jsonData['published']['publishedLinkOld'];
                case item.includes('published link'):
                    return jsonData['published']['publishedLink'];
                case item.includes('first published old version'):
                    return jsonData['published']['selectedPostOld'];
                case item.includes('first published'):
                    return jsonData['published']['selectedPost'];
                case item.includes('edit post'):
                    return jsonData['published']['editPost'];
                case item.includes('post title old version'):
                    return jsonData['published']['postTitleOld'];
                case item.includes('post title'):
                    return jsonData['published']['postTitle'];
                case item.includes('post body old version'):
                    return jsonData['published']['postBodyOld'];
                case item.includes('post body'):
                    return jsonData['published']['postBody'];
                case item.includes('update post button old version'):
                    return jsonData['published']['updateButtonOld'];
                case item.includes('update post'):
                    return jsonData['published']['updateButton'];
                case item.includes('publish button old version'):
                    return jsonData['published']['publishButtonOld'];
                case item.includes('back to post old version'):
                    return jsonData['published']['backToPostOld'];
                case item.includes('back to post'):
                    return jsonData['published']['backToPost'];
                case item.includes('close button old version'):
                    return jsonData['published']['closeButtonOld'];
            }
        };
    };

}
module.exports = {
    Published
};