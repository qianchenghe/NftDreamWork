cordova.define("iworker-plugin-authorization", function(require, exports, module) {

var exec = require('cordova/exec');

    function Authorization() {
    }

    Authorization.prototype = {
        getToken: function (successCallback, errorCallback) {
            // 第三个参数是插件的名称，必须与config.xml文件中的feature.name保持一致
            exec(successCallback, errorCallback, "Authorization", "getToken", null);
        },
        logout: function (textTip,successCallback, errorCallback) {
            // 第三个参数是插件的名称，必须与config.xml文件中的feature.name保持一致
            exec(successCallback, errorCallback, "Authorization", "logout", [textTip]);
        },
        getUserInfo: function (successCallback, errorCallback) {
            // 第三个参数是插件的名称，必须与config.xml文件中的feature.name保持一致
            exec(successCallback, errorCallback, "Authorization", "getUserInfo", null);
        }
    }


module.exports = new Authorization();

});
