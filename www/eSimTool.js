cordova.define("cordova-plugin-esimtool.eSimTool", function(require, exports, module) {
    // Empty constructor
    function eSimTool() {}
    
    // The function that passes work along to native shells
    // Message is a string, duration may be 'long' or 'short'
    eSimTool.prototype.show = function(message, duration, successCallback, errorCallback) {
      var options = {};
      options.message = message;
      options.duration = duration;
      cordova.exec(successCallback, errorCallback, 'eSimTool', 'show', [options]);
    }
    
    // Installation constructor that binds eSimTool to window
    eSimTool.install = function() {
      if (!window.plugins) {
        window.plugins = {};
      }
      window.plugins.eSimTool = new eSimTool();
      return window.plugins.eSimTool;
    };
    cordova.addConstructor(eSimTool.install);
});
    