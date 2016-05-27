<?php
/*
** Скрипт возварщает список категорий книг
*/

// Передаем заголовки
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));

// Открытие БД
$db = new SQLiteDatabase("books.db");

// Вывод категорий
echo getChildCategories($db);

// Закрытие БД
unset($db);

// =============================================================================

// Рекурсивная функция, возвращает строку с категориями, входящими в указанную
// Параметры:
//     $db     - открытавя база данных
//     $parent - код родительской категории
//     $indent - строка, формирующая смещение символов
function getChildCategories($db, $parent=0, $indent="")
{
	$result = '';
	$sql = 'SELECT * FROM category WHERE parent=' . $parent;
	$res = $db->query($sql);
	while ($row = $res->fetch(SQLITE_ASSOC))
	{
		$result .= $row['id'] . ':' . $indent . $row['title'] . "\n";
		$result .= getChildCategories($db, $row['id'], $indent . '...');
	}
	return $result;
}
?>