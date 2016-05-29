<?php
require_once('message.class.php');

// Класс гостевой книги
class GBook
{
	// Свойства
	private $db;		// База данных
	
	// Констуктор
	public function __construct($fileName='gbook.db')
	{
		// Открытие базы данных
		$this->db = new SQLiteDatabase($fileName);
		if (! $a = $this->db->singleQuery('SELECT COUNT(*) + 1 FROM message'))
		{
			// Таблица записей гостевой книги
			$this->db->queryExec('CREATE TABLE message 
					(
						id TEXT PRIMARY KEY,	-- ID записи
						author TEXT,			-- Автор записи
						email TEXT,				-- Е-mail автора
						body TEXT,				-- Тело ообщения
						timestamp INT			-- Штамп времени
					)
				');
			$this->db->queryExec('CREATE INDEX message_id ON message(id)');
			$this->db->queryExec('CREATE INDEX message_timestamp ON message(timestamp DESC)');
		}
	}
	
	// Возвращает запись по указанному ID
	public function getMessage($id)
	{
		$res = $this->db->query('SELECT * FROM message WHERE id = \'' . 
			sqlite_escape_string($id) . '\'');
		if ($res->numRows())
		{
			$row = $res->fetch(SQLITE_ASSOC);
			return new Message($row['id'], $row['author'], $row['email'], $row['body']);
		}
		else
		{
			return null;
		}
	}
	
	// Возвращает сколько-то последних записей
	public function getLastMessages($count=10)
	{
		$count = (int) $count;
		$res = $this->db->query('SELECT id FROM message ORDER BY timestamp DESC LIMIT ' . $count);
		$messages = array();
		while ($row = $res->fetch(SQLITE_NUM))
			$messages[] = $this->getMessage($row[0]);
		return $messages;
	}
	
	// Добавляет новое сообщение
	public function addMessage($message)
	{
		$this->db->queryExec('INSERT INTO message (id, author, email, body, timestamp) VALUES (' .
			'\'' . sqlite_escape_string($message->id)  . '\', ' .
			'\'' . sqlite_escape_string($message->author)  . '\', ' .
			'\'' . sqlite_escape_string($message->email)  . '\', ' .
			'\'' . sqlite_escape_string($message->body)  . '\', ' .
			time() . ')');
	}	
	
	// Заменяет существующее сообщение
	public function replaceMessage($message)
	{
		$this->db->queryExec('UPDATE message SET ' .
			'author = \'' . sqlite_escape_string($message->author)  . '\', ' .
			'email = \'' . sqlite_escape_string($message->email)  . '\', ' .
			'body = \'' . sqlite_escape_string($message->body)  . '\' ' .
			'WHERE id = \'' . sqlite_escape_string($message->id)  . '\'');
	}
	
	// Удаляет существующее сообщение
	public function deleteMessage($message)
	{
		$this->db->queryExec('DELETE FROM message ' .
			'WHERE id = \'' . sqlite_escape_string($message->id)  . '\'');
	}	
}
?>