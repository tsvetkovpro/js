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
$cat = (int) $_GET['cat'];


// Открытие БД
$db = new SQLiteDatabase("books.db");

// Создание и выполнение запроса
$sql = 'SELECT * FROM book WHERE category IN (' . 
	getChildCategoryList($cat, $db) . $cat . ')';
$result = $db->query($sql);

// Формирование результата
$books = array();
while ($row = $result->fetch(SQLITE_ASSOC))
	$books[]= new Book($row['title'], $row['author'], $row['image']);
	
// Вывод результата
echo json_encode($books);

// Закрытие БД
unset($db);

// Класс книга
class Book
{
	public $author;
	public $title;
	public $image;

	public function __construct($title='', $author='', $image='')
	{
		$this->title = $title;
		$this->author = $author;
		$this->image = $image;
	}
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