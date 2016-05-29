<?php
require('userinfo.class.php');
require('ticket.class.php');

/*
** Класс Пользователь сайта
*/
class User
{
	// База данных пользователей
	private $dbName = 'users.db';
	private $db;
	
	// Время жизни сессии в секундах
	const SESS_TIMEOUT = 120;
	
	// Констуктуор класса
	public function __construct()
	{
		// Открываем базу данных
		$this->db = new SQLiteDatabase($this->dbName);
		// Проверим и при необходимости создадим таблицу user
		if (! @$this->db->singleQuery('SELECT COUNT(*) + 1 FROM user'))
		{
			$this->db->query('CREATE TABLE user
				(
					id INTEGER PRIMARY KEY, -- Код записи пользователя
					name TEXT,              -- Имя пользователя 
					login TEXT,             -- Логин пользователя
					password TEXT           -- MD5 хеш (логин + пароль)
				)');
			$this->db->query('CREATE UNIQUE INDEX user_login ON user(login)');
			$this->db->query('CREATE INDEX user_password ON user(password ASC)');
		}

		
		// Проверим и при необходимости создадим таблицу session
		if (! @$this->db->singleQuery('SELECT COUNT(*) + 1 FROM session'))
		{
			$this->db->query('CREATE TABLE session
				(
					sess_id TEXT,           -- ID сессии
					user_id NUMERIC,        -- id пользователя 
					last_request NUMERIC    -- Время последнего обращения к сессии
				)');
			$this->db->query('CREATE UNIQUE INDEX session_id ON session(sess_id)');
			$this->db->query('CREATE INDEX session_user ON session(user_id ASC)');
			$this->db->query('CREATE INDEX session_lr ON session(last_request ASC)');
		}
	}
	
	// Добваление нового пользователя или изменение существующего
	public function add($userInfo)
	{
		$name = sqlite_escape_string($userInfo->name);
		$login = sqlite_escape_string(strtolower($userInfo->login));
		$hash = md5($login . $userInfo->password);
		// Если такого пользователя нет...
		if (! $this->db->singleQuery("SELECT COUNT(id) FROM user WHERE login='$login'"))
			// Добавляем пользователя
			$this->db->query("INSERT INTO user (name, login, password) 
				VALUES ('$name', '$login', '$hash')");
		else
			// Меняем ифнормацию о пользователе
			$this->db->query("UPDATE user SET name = '$name', password = '$hash'
				WHERE login = '$login'");
	}
	
	// Проверка данных пользователя и возврат нового билета
	public function validate($userInfo)
	{
		$login = sqlite_escape_string(strtolower($userInfo->login));
		$hash = md5($login . $userInfo->password);
		// Если такой пользователь есть, получим его ID
		$userId = $this->db->singleQuery("SELECT id FROM user 
				WHERE login='$login' AND password = '$hash'");
		if ($userId)
		{
			// Формируем новый билет
			$time = time();
			$ticket = new Ticket(md5($hash . $time), true);
			$ticketId = $ticket->id;
			$this->db->query("INSERT INTO session (sess_id, user_id, last_request) 
				VALUES ('$ticketId', $userId, $time)");
			return $ticket;
		}	
		else
		{
			// Пользователь не найдент - возвращаем пустой билет
			return new Ticket();
		}
	}
	
	// Обновление информации о сессии пользователя
	public function refreshSession($ticket)
	{
		$time = time();
		$ticketId = $ticket->id;
		// Обновление сессии
		$this->db->query("UPDATE session SET last_request = $time 
				WHERE sess_id = '$ticketId'");
		$rowsChanged = $this->db->changes();
		// Очистка старых сессий
		$deadTime = $time - User::SESS_TIMEOUT;
		$this->db->query("DELETE FROM session WHERE last_request < $deadTime");
		return $rowsChanged;
	}
	
	// Возвращает список пользователей ONLINE в виде массива объектов UserInfo
	public function getOnlineUsers()
	{
		$res = $this->db->query("SELECT name, login 
				FROM user, session
				WHERE user.id = session.user_id");
		$users = array();
		while ($row = $res->fetch(SQLITE_NUM))
			$users[] = new UserInfo($row[0], $row[1]);
		return $users;
	}
}
?>