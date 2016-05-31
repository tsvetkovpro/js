<?php
/*
** Автозагрузчик классов
*/
function __autoload($className) 
{
	// Определяем имя класса
	$fileName = strtolower($className) . '.class.php';
	// Загрузка класса
	require_once($fileName);
}
?>