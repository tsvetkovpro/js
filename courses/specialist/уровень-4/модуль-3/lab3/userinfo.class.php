<?php
/*
** Класс Информация о пользователе
*/
class UserInfo
{
	public $name;		// Имя пользователя
	public $login;		// Логин пользователя
	public $password;   // Пароль пользователя
	
	public function __construct($name='', $login='', $password='')
	{
		$this->name = $name;
		$this->login = $login;
		$this->password = $password;
	}
}
?>