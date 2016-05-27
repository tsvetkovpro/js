<?php
/*
** Сценарий возвращает число книг, найденных в списке или название указанной книги
** Параметр num - номер книги
*/

// Имя файла со списком книг
define('BOOKS_FILE', 'books.txt');
// Название параметра GET
define('NUM', 'num');

// Передача текса в кодировке UTF-8
header('Content-type: text/plain; charset=utf-8');
// Запрет кеширования
header('Cache-COntrol: no-store, no-cache');
header('Expires: ' . date('r'));

// Чтение файла
$books = file(BOOKS_FILE);

// Проверка параметра num
if (!empty($_GET[NUM]))
{
	// Парметр указан
	$num = (int) $_GET[NUM];
	if ($num < count($books) && $num >= 0)
		echo $books[$num];
	else
		echo 'Книга не найдена';
}
else
{
	// Парметр не указан, возвращаем число книг
	echo count($books);
}
?>