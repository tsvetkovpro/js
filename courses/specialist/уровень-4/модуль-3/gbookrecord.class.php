<?php
// Класс записи гостевой книги
class GBookRecord
{
	public $id;       // Код записи
	public $author;   // Автор записи
	public $email;    // E-mail автора
	public $message;  // Сообщение автора
	public $date;     // Дата и время сообщения
	
	public function __construct($id=0, $author='', $email='', $message='', $date='')
	{
		$this->id = $id;
		$this->author = $author;
		$this->email = $email;
		$this->message = $message;
		$this->date = $this->convertDate2String($date);
	}
	
	// Преобразует дату в строковый вид
	public function convertDate2String($date)
	{
		if (is_numeric($date))
			return date('d.m.Y H:i:s', $date);
		else
			return $date;
	}
}
?>