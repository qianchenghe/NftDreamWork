
// 动态加载js
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  if(typeof(callback) != "undefined"){
	if (script.readyState) {
	  script.onreadystatechange = function () {
		if (script.readyState == "loaded" || script.readyState == "complete") {
		  script.onreadystatechange = null;
		  callback();
		}
	  };
	} else {
	  script.onload = function () {
		callback();
	  };
	}
  }
  script.src = url;
  document.body.appendChild(script);

}

// 判断android 还是 ios 加载不同目录的cordova js框架
var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
if(isAndroid){
	loadScript("./cordova/cordova_js/android/cordova.js");
}else{
	loadScript("./cordova/cordova_js/ios/cordova.js");
}

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // console.log('Received Event: ' + id);
    }
};
app.initialize();
