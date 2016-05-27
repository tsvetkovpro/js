<?php
/*
** Скрипт возварщает список книг указанной категории
**    cat - параметр - код категории
*/

// Передаем заголовки
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));

// Каким образом запрашивались данные? 
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	// Переменные параметы
	$title = ''; $author = '';
	
	if (isset($_POST['title'])) 
		$title = trim($_POST['title']);
	if (isset($_POST['author'])) 
		$author = trim($_POST['author']);
	
	// Открытие БД
	$db = new SQLiteDatabase("books.db");
	
	// Создание и выполнение запроса
	$sql = 'SELECT * FROM book ' .
		"WHERE title LIKE '%" . sqlite_escape_string($title) . "%' " . 
		"AND author LIKE '%" . sqlite_escape_string($author) . "%'";
	$result = $db->query($sql);

	// Вывод результата запроса
	while ($row = $result->fetch(SQLITE_ASSOC))
		echo $row['author'], '. ', $row['title'],  "\n";
	
	// Закрытие БД
	unset($db);
}
else
{
	// Параметр не указан
	echo 'Запрос должен быть методом POST';
}


?>