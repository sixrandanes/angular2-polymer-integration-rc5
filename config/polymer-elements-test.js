var scriptName = 'config/polymer-elements-test.js';
var distName = 'dist/';
var basePath = document.querySelector('script[src*="' + scriptName + '"]')
   .src.replace(new RegExp('^(.*/)' + scriptName + '.*$'), '$1' + distName);

// Using document.write to load synchronously
// webcomponents.js is not necessary if testing only in Chrome
document.write('<script src="' + basePath + 'bower_components/webcomponentsjs/webcomponents-lite.js"></script>');
// elements.html should be shared with the app
document.write('<link rel="import" href="' + basePath + 'elements.html"></script>');
