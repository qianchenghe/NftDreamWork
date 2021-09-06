cordova.define("iworker-plugin-kvstorage", function(require, exports, module) {

var exec = require('cordova/exec');

    function KVStorage() {
    }

    KVStorage.prototype = {
		
		//新增一条记录
        add: function (key,val,successCallback, errorCallback) {
            // 第三个参数是插件的名称，必须与config.xml文件中的feature.name保持一致
            exec(successCallback, errorCallback, "KVStorage", "add", [{"key":key,"val":val}]);
        },
		//删除一条记录
        remove: function (key,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "KVStorage", "remove", [{"key":key}]);
        },
		
		//更新一条记录
        update: function (key,val,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "KVStorage", "update", [{"key":key,"val":val}]);
        },
		
		//清空所有记录
        clearAll: function (successCallback, errorCallback) {
            exec(successCallback, errorCallback, "KVStorage", "truncate", []);
        },
		
		// 获取一条记录
        get: function (key,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "KVStorage", "get", [{"key":key}]);
        },
		// 获取所有记录
        getAll: function (successCallback, errorCallback) {
            exec(successCallback, errorCallback, "KVStorage", "getAll", []);
        }
    }


module.exports = new KVStorage();

});