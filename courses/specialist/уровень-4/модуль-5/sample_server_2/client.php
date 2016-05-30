<?php
/*
** клиент работы с БД книги
*/
header('Content-type: text/plain; charset=utf-8');
ini_set("soap_wsdl_cache_enabled", "0");
$client = new SOAPClient('bookservice.wsdl');
// print_r($client->__getFunctions());
$result = $client->getCategories();
print_r($result);
?>