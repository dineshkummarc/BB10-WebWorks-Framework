var _self = {}, 
    _ID = "blackberry.event";

_self.addEventListener = function(eventType, cb) {
    if(cb) {
        window.webworks.event.on(_ID, eventType, cb);
    } else {
        window.webworks.event.remove(_ID, eventType, cb);
    }
};

module.exports = _self;
