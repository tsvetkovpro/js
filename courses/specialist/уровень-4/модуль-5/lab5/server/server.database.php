<?php
/*
** Класс работы с базой данных
*/
class ServerDatabase
{
	private $db;		// База данных
	private $params;	// Массив параметров
	private $sql;		// Текст запроса

	// Констуктор класса
	public function __construct($databaseFile='books.db')
	{
		$this->db = new SQLiteDatabase($databaseFile);
	}
	
	// Подготовка нового запроса к выполнению
	public function newQuery($sql)
	{
		$this->sql = $sql;
		$this->params = array();
	}
	
	// Добавление параметра в запрос
	public function addParameter($parameter)
	{
		$this->params[] = sqlite_escape_string($parameter);
	}
	
	// Добавление нескольких параметров
	public function addParameters($parameters)
	{
		foreach ($parameters as $parameter)
			$this->addParameter($parameter);
	}
	
	// Выполняет запрос
	public function execute()
	{
		// Подготовка запроса
		for ($i = 0; $i < count($this->params); $i++)
		{
			$patten = '%' . ($i + 1);
			$this->sql = str_replace($patten, $this->params[$i], $this->sql);
		}
		//file_put_contents(time() . '.sql', $this->sql);
		return $this->db->arrayQuery($this->sql, SQLITE_ASSOC);
	}
	
	// Последний добавленный ID
	public function getLastInsertId()
	{
		return $this->db->lastInsertRowid();
	}
	
	// Число обработанных записей
	public function getRowsAffected()
	{
		return $this->db->changes();
	}
}
?>