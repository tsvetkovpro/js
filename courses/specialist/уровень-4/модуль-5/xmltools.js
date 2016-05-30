// Функция преобразует xml DOM документ в строку
function showXML(xml)
{
	if (window.XMLSerializer)
	{
		// Это Mozilla
		var serializer = new XMLSerializer();
		return serializer.serializeToString(xml);
	}
	else if (window.ActiveXObject)
	{
		// Это Internet Explorer
		return xml.xml;
	}
	else
	{
		return "Сериализация в строку не поддерживается!";
	}
}

// Функция загружает требуемый XML файл в синхронном режиме
function loadXML(url)
{
	var reqMessage = getXmlHttpRequest();
	reqMessage.open("GET", url, false);
	reqMessage.send(null);
	return reqMessage.responseXML;
}

// Функция модифицирует SOAP сообщение
function setParameter(tagName, value, message)
{
	var el = message.getElementsByTagName(tagName)[0];
	el.firstChild.nodeValue = value;
}

// Функция отправляет сообщение на сервер
function sendMessage(message, action, async, callback)
{
	var req = getXmlHttpRequest();
	// Если это асинхронный режим и указана функция callback, ставим обработчик
	if (async && callback)
		req.onreadystatechange = function()
		{
			// Если данные получены, вызываем callback функцию
			if(req.readyState == 4)
				callback(req);
		}
	req.open("POST", server, async);
	req.setRequestHeader("SOAPAction", action);
	req.send(message);
	if (!async)
		return req.responseXML; // Синхронный вызов
}