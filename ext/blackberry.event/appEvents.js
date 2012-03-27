var _framework = require("lib/framework");

module.exports = {
    addEventListener: function (event, trigger) {
        if (event) {
            switch (event) {
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
    removeEventListener: function (event) {
        if (event) {
            switch (event) {
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