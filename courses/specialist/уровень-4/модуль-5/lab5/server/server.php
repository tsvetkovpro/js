<?php
/*
** Сервер работы с БД книги
*/
require('server.functions.php');
ini_set("soap_wsdl_cache_enabled", "0");
$server = new SOAPServer('bookservice.wsdl');
$server->addFunction($serverFunctions);
$server->handle();
?>