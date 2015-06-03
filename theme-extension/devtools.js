var xhr = new XMLHttpRequest(),
	stylesheet = 'stable.css';

if (/Chrome\/(\d\d)/.exec(navigator.userAgent)[1] > 43) {
	stylesheet = 'canary.css';
}

xhr.open("GET", "/" + stylesheet, false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
