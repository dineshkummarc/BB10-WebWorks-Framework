var _framework = require("lib/framework");

module.exports = {
    addEventListener: function (action, trigger) {
        if (action) {
            switch (action.event) {
            case "pause":
                _framework.setOnPause(trigger);
                break;

            case "resume":
                _framework.setOnResume(trigger);
                break;

            default:
                console.log("Ignore registration for unknown event: " + action.event);
                break;
            }
        }
    },
    removeEventListener: function (action) {
        if (action) {
            switch (action.event) {
            case "pause":
                _framework.setOnPause(null);
                break;

            case "resume":
                _framework.setOnResume(null);
                break;

            default:
                console.log("Ignore un-registration for unknown event: " + action.event);
                break;
            }
        }
    }
};