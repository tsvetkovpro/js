/*Служебные функции*/
function addHandler(element, event_name, handler) {
	if (element.addEventListener) {
		element.addEventListener(event_name, handler, false);
	} else {
		element.attachEvent('on' + event_name, handler);
	}
}

function removeHandler(element, event_name, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(event_name, handler, false);
	} else {
		element.detachEvent('on' + event_name, handler);
	}
}

function cancelEvent(e) {
	try {
		e.preventDefault();
	} catch(x) {
		e.returnValue = false;
	}
}

function stopEvent(e) {
	try {
		e.stopPropagation();
	} catch(x) {
		e.cancelBubble = true;
	}
}

function getStyle(element, style) {
	try {
		return element.ownerDocument.defaultView.getComputedStyle(element, null)[style];
	} catch (z) {
		return element.currentStyle[style];
	}
}

function getPosition(element) {
	var rect = element.getBoundingClientRect();
	return {
		left: rect.left
		+ (document.documentElement.scrollLeft || document.body.scrollLeft)
		- (document.documentElement.clientLeft || document.body.clientLeft),
		top: rect.top
		+ document.documentElement.scrollTop || document.body.scrollTop
		- document.documentElement.clientTop || document.body.clientTop,
		width: rect.width || rect.right - rect.left,
		height: rect.height || rect.bottom - rect.top
	};
}