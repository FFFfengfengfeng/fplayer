'use strict';

var a = document.getElementsByTagName('a');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    var _loop = function _loop() {
        var item = _step.value;

        item.onclick = function (e) {
            e.preventDefault();
            var url = item.getAttribute('href');
            history.pushState({
                'id': 1
            }, '测试页', url);
        };
    };

    for (var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

window.addEventListener("popstate", function () {
    var currentState = history.state;
    console.log(currentState);
});