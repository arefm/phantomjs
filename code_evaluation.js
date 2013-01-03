var page = require('webpage').create();
page.onConsoleMessage = function (msg) {
    console.log(msg);
};
page.open('http://google.com', function (status) {
    page.evaluate(function () {
    	var logo = "http://google.com" + document.getElementById('hplogo').attributes['src'].nodeValue;
        console.log(logo);
    });
});