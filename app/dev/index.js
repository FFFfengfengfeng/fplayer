'use strict';

let a = document.getElementsByTagName('a');

for (let item of a) {
    item.onclick = (e) => {
        e.preventDefault();
        let url = item.getAttribute('href');
        history.pushState({
            'id': 1
        }, '测试页', url);
    };
}

window.addEventListener("popstate", function() {
    var currentState = history.state;
    console.log(currentState);
});