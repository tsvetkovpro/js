<?php
/*
** Класс случайной энтропии
*/
class Entropy
{
	public $salt;				// Соль хеширования пароля
	public $iterationCount;		// Число итераций засоливания
	
	// Конструктор класса
	public function __construct($salt='', $iterationCount=0)
	{
		// Инициализация генератора случайных чисел миллисекундами текущего времени
		list($usec, $sec) = explode(' ', microtime());
		$seed = (float) $sec + ((float) $usec * 100000);
		mt_srand($seed);
	
		// Инициализация свойств
		$this->salt = $salt ? $salt : $this->generateRandomString();
		$this->iterationCount = $iterationCount ? $iterationCount : mt_rand(20, 100);
	}

	// Формирует строку со случайными символами
	private function generateRandomString()
	{
		// Генерация случайнос строки
		$salt = base64_encode(md5(mt_rand()));
		return substr($salt, 0, strlen($salt)-2);
	}
	
	 // "Засоливание" пароля RFC2898
	public function getSaltedHash($password)
	{
		$saltedHash = $password;
		if ($this->iterationCount < 1) $this->iterationCount = 1;
		for ($i = 0; $i < $this->iterationCount; $i++)
			$saltedHash = md5($this->salt . $saltedHash);
		return $saltedHash;
	}
}

?>