<?php
/*
** Скрипт возварщает список книг указанной категории
**    cat - параметр - код категории
*/

// Передаем заголовки
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));

// Читаем GET параметр
if (isset($_GET['cat']))
{
	$cat = (int) $_GET['cat'];
	
	// Открытие БД
	$db = new SQLiteDatabase("books.db");
	
	// Создание и выполнение запроса
	$sql = 'SELECT * FROM book WHERE category IN (' . 
		getChildCategoryList($cat, $db) . $cat . ')';
	$result = $db->query($sql);

	// Вывод результата запроса
	while ($row = $result->fetch(SQLITE_ASSOC))
		echo $row['title'], "\n";
	
	// Закрытие БД
	unset($db);
}
else
{
	// Параметр не указан
	echo 'Необходимо указать категорию';
}

// Рекурсивная функция возвращает строку кодов подкатегории разделенных запятой
function getChildCategoryList($categoryId, $database)
{
	$result = '';
	$sql = 'SELECT id, parent FROM category WHERE parent = ' . $categoryId;
	$res = $database->query($sql);
	while ($row = $res->fetch(SQLITE_ASSOC))
		$result = $result . $row['id'] . ', ' . getChildCategoryList($row['id'], $database);
	return $result;
}

?>