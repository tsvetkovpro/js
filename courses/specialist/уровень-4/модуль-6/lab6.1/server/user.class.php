<?php
// Класс пользователя
class User
{
	public $name;				// Имя пользователя
	public $email;				// E-mail/логин пользователя
	public $password;			// Хеш пароля пользователя
	public $dbEntropy;			// Соль хранения пароля в БД
	public $transferEntropy;	// Соль используемая при передаче пароля в сети
	
	// Конструктор класса
	public function __construct($name = '', $email = '', $password = '')
	{
		$this->name = $name;
		$this->email = $email;
		$this->password = $password;
		$this->dbEntropy = new Entropy();
		$this->transferEntropy = new Entropy();		
	}
	
	// Заполняет данные из ассоциативного массива (при чтении данных из БД)
	public function fillFromArray($array)
	{
		$this->name = $array['name'];
		$this->email = $array['email'];
		$this->password = $array['password'];
		$this->dbEntropy = new Entropy($array['salt'], $array['iterationCount']);
	}

	// Устанавливает новый пароль для хранения в БД
	public function setPassword($password)
	{
		$this->password = $this->dbEntropy->getSaltedHash($password);
	}
	
	// Функция проверяет пароль
	public function isValidPassword($saltedPassword)
	{
		return $saltedPassword == $this->transferEntropy->getSaltedHash($this->password);
	}
}

?>