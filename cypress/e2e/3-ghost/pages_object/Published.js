class Published {

    constructor() {
        const publishedJson = require('./published.json');
        const stringData = JSON.stringify(publishedJson);
        const jsonData = JSON.parse(stringData);

        this.getElementPath = (item) => {
            switch (true) {
                case item.includes('published link'):
                    return jsonData['published']['publishedLink'];
                case item.includes('first published'):
                    return jsonData['published']['selectedPost'];
                case item.includes('edit post'):
                    return jsonData['published']['editPost'];
                case item.includes('post title'):
                    return jsonData['published']['postTitle'];
                case item.includes('post body'):
                    return jsonData['published']['postBody'];
                case item.includes('update post'):
                    return jsonData['published']['updateButton'];
                case item.includes('back to post'):
                    return jsonData['published']['backToPost'];
            }
        };
    };

}
module.exports = {
    Published
};