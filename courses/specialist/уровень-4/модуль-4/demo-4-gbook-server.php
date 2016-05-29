<?php
// XML-PRC сервер
require('xmlrpc.php');
require('gbook.class.php');

// Декларация методов
$xmlrpc_methods = array
(
	'gbook.getLastMessages' => 'getLastMessages',
	'gbook.getMessage' => 'getMessage',
	'gbook.addMessage' => 'addMessage',
	'gbook.replaceMessage' => 'replaceMessage',	
	'gbook.deleteMessage' => 'deleteMessage'
);

// Обработка запроса
$xmlrpc_request = XMLRPC_parse($HTTP_RAW_POST_DATA);
$methodName = XMLRPC_getMethodName($xmlrpc_request);
$params = XMLRPC_getParams($xmlrpc_request);
if(isset($xmlrpc_methods[$methodName]))
{
    // Вызов метода
    $result = $xmlrpc_methods[$methodName]($params); 
	XMLRPC_response(XMLRPC_prepare($result), WEBLOG_XMLRPC_USERAGENT);
}
else
{
	// Ошибка: Нет такого метода
	XMLRPC_error('2', "Метод '$methodName' не найден.", WEBLOG_XMLRPC_USERAGENT);
}

// ----------------------- Методы -------------------------
function getLastMessages($params)
{
	$messagesCount = (int) $params[0];
	
	$gbook = new GBook();
	return $gbook->getLastMessages($messagesCount);
}

function getMessage($params)
{
	$id = (int) $params[0];
	
	$gbook = new GBook();
	return $gbook->getMessage($id);
}

function addMessage($params)
{
	$message = new Message($params[0]);
	
	$gbook = new GBook();
	return $gbook->addMessage($message);
}

function replaceMessage($params)
{
	$message = new Message($params[0], $params[1], $params[2], $params[3]);
	
	$gbook = new GBook();
	return $gbook->replaceMessage($message);
}

function deleteMessage($params)
{
	$message = new Message($params[0], $params[1], $params[2], $params[3]);
	
	$gbook = new GBook();
	return $gbook->deleteMessage($message);
}
?>