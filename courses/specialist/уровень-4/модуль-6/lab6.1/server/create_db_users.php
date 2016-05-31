<?php
/*
** Создание БД
*/
require("server.classes.php");

define("USER_DB", "users.db");

if (file_exists(USER_DB)) unlink(USER_DB);

$db = new ServerDatabase(USER_DB);
$db->newQuery(
		"CREATE TABLE user
		(
			name 			TEXT,		-- Имя пользователя
			email 			TEXT,		-- E-mail/логин пользователя
			password 		TEXT, 		-- Хеш пароля пользователя
			salt 			TEXT,		-- Соль (энтропия) хеширования пароля
			iterationCount	NUMERIC, 	-- Число итераций засоливания
			PRIMARY KEY (email)			-- Первичный ключ - это E-mail пользователя
		)"
	);
$db->execute();

$db->newQuery("CREATE INDEX ixUserName ON user (name)");
$db->execute();

// Создание пользователей
createUser(new User("Вася Пупкин", "vasyap@mail.ru", "password"));
createUser(new User("Федя Сумкин", "fedyas@mail.ru", "password"));
createUser(new User("Маша Морковкина", "masha@mail.ru", "password"));


echo "<h2>База данных создана!</h2>";

// Функция добавления пользователя в БД
function createUser($user)
{
	global $db;
	$user->setPassword($user->password);
	$db->newQuery("INSERT INTO user (name, email, password, salt, iterationCount) VALUES ('%1', '%2', '%3', '%4', %5)");
	$db->addParameter($user->name);
	$db->addParameter($user->email);
	$db->addParameter($user->password);
	$db->addParameter($user->dbEntropy->salt);
	$db->addParameter($user->dbEntropy->iterationCount);
	$db->execute();
}
?>