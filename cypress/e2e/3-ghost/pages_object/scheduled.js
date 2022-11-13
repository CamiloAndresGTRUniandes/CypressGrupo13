class Scheduled {

    constructor() {
        const scheduledJson = require('./scheduled.json');
        const stringData = JSON.stringify(scheduledJson);
        const jsonData = JSON.parse(stringData);
        this.getElementPath = (item) => {
            switch (true) {
                case item.includes('scheduled link'):
                    return jsonData['scheduled']['scheduledLink'];
                case item.includes('first post'):
                    return jsonData['scheduled']['selectScheduled'];
                case item.includes('unschedule button'):
                    return jsonData['scheduled']['unSchedule'];
                case item.includes('convert to draft'):
                    return jsonData['scheduled']['convertToDraft'];    
            }
        };
    };

}
module.exports = {
    Scheduled
};