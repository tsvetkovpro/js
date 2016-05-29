<?php
// Сообщение готевой книги
class Message
{
	// Свойства
	public $id;			// ID записи
	public $author;		// Автор записи
	public $email;		// Е-mail автора
	public $body;		// Тело ообщения
	
	// Констуктор
	public function __construct($param='', $author='', $email='', $body='')
	{
		if (is_array($param))
		{
			// Если первый параметр массив - читаем из него
			$this->id = $param['id'];
			$this->author = $param['author'];
			$this->email = $param['email'];
			$this->body = $param['body'];		
		}
		else
		{
			// Иначе - это ID
			$this->id = $param;
			$this->author = $author;
			$this->email = $email;
			$this->body = $body;
		}
		
		// Если ID не задан, генерирум новый ID
		if (empty($this->id)) $this->id = Message::newId();
	}
	
	// Функция генерации ID
	static function newId()
	{
		$someEntropy = microtime() . $_SERVER['REQUEST_ADDR'];
		return md5($someEntropy);
	}
}
?>