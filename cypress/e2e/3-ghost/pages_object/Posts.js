class Posts {
    constructor() {
        const postJson = require('./posts.json');
        const stringData = JSON.stringify(postJson);
        const jsonData = JSON.parse(stringData);

        this.getElementPath = (item) => {
            switch (true) {
                case item.includes('posts link'):
                    return jsonData['posts']['postLink'];  
                case item.includes('new post'):
                    return jsonData['posts']['newPost']; 
                case item.includes('title'):
                    return jsonData['posts']['postTitle'];
                case item.includes('body'):
                    return jsonData['posts']['postBody'];
                case item.includes('publish button'):
                    return jsonData['posts']['postPublish'];
                case item.includes('continue'):
                    return jsonData['posts']['continuePublish'];
                case item.includes('publish post'):
                    return jsonData['posts']['publishButton'];
                case item.includes('back to editor'):
                    return jsonData['posts']['backToEditor'];
                case item.includes('back to posts'):
                    return jsonData['posts']['backToPosts'];
                case item.includes('right now'):
                    return jsonData['posts']['scheduledTime'];
                case item.includes('schedule button'):
                    return jsonData['posts']['scheduleButton'];
                case item.includes('side menu button'):
                    return jsonData['posts']['sideMenu'];   
                case item.includes('delete post button'):
                    return jsonData['posts']['deletePost'];  
                case item.includes('delete confirmation button'):
                    return jsonData['posts']['deleteConfirmation'];      
            }
        }
    }
}
module.exports = {
    Posts
};