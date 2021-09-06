cordova.define("iworker-plugin-idcard", function(require, exports, module) {

var exec = require('cordova/exec');

    function IDCard() {

    }
    IDCard.prototype = {
		// 初始化
        init: function (successCallback, errorCallback,args) {
            // 第三个参数是插件的名称，必须与config.xml文件中的feature.name保持一致
            exec(successCallback, errorCallback, "IDCard", "init", args);
        },
		// 获取设备信息
        getCardInfo: function (successCallback, errorCallback) {
            exec(successCallback, errorCallback, "IDCard", "getCardInfo", []);
        },

		// 释放资源
        close: function (successCallback, errorCallback) {
            exec(successCallback, errorCallback, "IDCard", "close", []);
        },

		// 开启自动查询模式
        startPolling: function (successCallback, errorCallback) {
            exec(successCallback, errorCallback, "IDCard", "startPollingMode", []);
        },

		// 关闭自动查询模式
        stopPolling: function (successCallback, errorCallback) {
            exec(successCallback, errorCallback, "IDCard", "stopPollingMode", []);
        }

    }

module.exports = new IDCard();

});