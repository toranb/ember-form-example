document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

startApp = require('js/helpers/start-app')['default'];

QUnit.assert.contains = function(needle, haystack, message) {
    var actual = haystack.indexOf(needle) > -1;
    QUnit.push(actual, actual, needle, message);
};

QUnit.assert.notContains = function(needle, haystack, message) {
    var actual = haystack.indexOf(needle) > -1;
    QUnit.push(actual, actual, needle, message);
};

require('js/helpers/start-app');
require('js/integration/integration_tests');
