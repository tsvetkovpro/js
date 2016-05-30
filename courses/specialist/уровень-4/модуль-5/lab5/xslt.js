/*
** Функции XSLT преобразования
*/ 

// Функция выполняет XSLT преобразование в объект
function xsltTransform(domXML, domXSL)
{
	try
	{
		if (window.XSLTProcessor)
		{
			// Это Mozilla...
			var xsltProcessor = new XSLTProcessor(); 
			xsltProcessor.importStylesheet(domXSL); 
			var resultDOM = xsltProcessor.transformToDocument(domXML); 
			var serializer = new XMLSerializer();
			return serializer.serializeToString(resultDOM);
		}
		else if (window.ActiveXObject)
		{
			// Это Internet Explorer
			var result = new ActiveXObject("Msxml2.DOMDocument.3.0");
			return domXML.transformNode(domXSL);
		}
		else
		{
			// Преобразования не поддерживаются...
			alert("К сожалению, Ваш браузер не поддерживает XSLT преобразования!");
			return null;
		}
	}
	catch (ex)
	{
		alert("Ошика xsltTransform:\n" + ex);
	}
	
}