<?php
// XML-PRC сервер
require('xmlrpc.php');

// Декларация методов
$xmlrpc_methods = array
(
	'simpleServer.sayHello' => 'sayHello'
);

// Обработка запроса
$xmlrpc_request = XMLRPC_parse($HTTP_RAW_POST_DATA);
$methodName = XMLRPC_getMethodName($xmlrpc_request);
$params = XMLRPC_getParams($xmlrpc_request);
if(isset($xmlrpc_methods[$methodName]))
{
    // Вызов метода
    $xmlrpc_methods[$methodName]($params);    
}
else
{
	// Ошибка: Нет такого метода
	XMLRPC_error('2', "Метод , '$methodName' не найден.", WEBLOG_XMLRPC_USERAGENT);
}

// ----------------------- Методы -------------------------
function sayHello($params)
{
	$result = 'Привет, ' . $params[0] . '!';
	XMLRPC_response(XMLRPC_prepare($result), WEBLOG_XMLRPC_USERAGENT);
}


?>