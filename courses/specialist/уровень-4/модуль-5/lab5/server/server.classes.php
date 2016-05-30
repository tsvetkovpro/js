<?php
/*
** Классы сервера
*/
// Класс категорий
class Category
{
	public $id = 0;			// Код категории
	public $title = '';		// Название категории
	public $parent = 0;		// Ссылка на родилеьскую категорию
	
	// Заполняет поля из массива
	function fillFromArray($array)
	{
		$this->id = $array['id'];
		$this->title = $array['title'];
		$this->parent = $array['parent'];
	}
}

// Класс книг
class Book
{
	public $id = 0;			// Код книги
	public $author = '';	// Автор книги
	public $title = '';		// Название книги
	public $image = '';		// Ссылка на изображение
	public $category = 0;	// Код категории
	
	// Заполняет поля из массива
	function fillFromArray($array)
	{
		$this->id = $array['id'];
		$this->author = $array['author'];
		$this->title = $array['title'];
		$this->image = $array['image'];
		$this->category = $array['category'];
	}	
}
?>