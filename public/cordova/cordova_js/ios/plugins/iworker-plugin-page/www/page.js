cordova.define("iworker-plugin-page", function(require, exports, module) {

var exec = require('cordova/exec');

    function Page() {
    }
    Page.prototype = {
		
		//关闭当前页面
        finish: function (successCallback, errorCallback) {
            // 第三个参数是插件的名称，必须与config.xml文件中的feature.name保持一致
            exec(successCallback, errorCallback, "Page", "finish", []);
        },

    }


module.exports = new Page();

});