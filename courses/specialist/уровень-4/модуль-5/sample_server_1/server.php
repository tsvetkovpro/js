<?php
/*
** Пример простого сервера SOAP
*/

// Текущее время на сервере
function getTime()
{
	return date('H:i:s');
}

// Привествие пользователя
function sayHello($userName)
{
	return 'Привет, ' . $userName . '!';
}

// SOAP Server
ini_set("soap_wsdl_cache_enabled", "0");
$server = new SOAPServer('server.wsdl');
$server->addFunction(array('getTime', 'sayHello'));

// Обработка запроса
$server->handle();
?>