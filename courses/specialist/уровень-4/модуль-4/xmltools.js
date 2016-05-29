// Функция преобразует xml DOM документ в строку
function getXMLString(dom){
	if (window.XMLSerializer){
		// Это Mozilla
		var serializer = new XMLSerializer();
		return serializer.serializeToString(dom);
	}else if (window.ActiveXObject){
		// Это Internet Explorer
		return dom.xml;
	}else{
		return "Сериализация в строку не поддерживается!";
	}
}

// Функция загружает требуемый XML файл в синхронном режиме
var xmlCache = {};
function loadXML(url){
	if(xmlCache[url]) return xmlCache[url];
	var reqMessage = getXmlHttpRequest();
	reqMessage.open("GET", url, false);
	reqMessage.send(null);
	xmlCache[url] = reqMessage.responseXML;
	return xmlCache[url];
}