<?php
/*
** Сервер авторизации пользователя
*/
require('server.classes.php');

// Объект пользователя
$user = new User();

// Читаем данные, переданные в POST
$rawPost = file_get_contents('php://input');

// Если данные были переданы...
if ($rawPost)
{
	// Десериализация пакета JSON
	$userInfo = json_decode($rawPost);
	
	// Если email указан - находим пользователя в БД
	if ($userInfo->email)
	{
		$db = new ServerDatabase();
		$db->newQuery("SELECT name, email, password, salt, iterationCount FROM user WHERE email = '%1'");
		$db->addParameter($userInfo->email);
		$result = $db->execute();
		
		// Если пользователь найден - заполним его данные...
		if (count($result) > 0)
			$user->fillFromArray($result[0]);
		
		// Если пароль указан - проверяем его
		if ($userInfo->password)	
		{
			// Восстанавливаем энтропию, которая использовалась при передаче
			$user->transferEntropy = new Entropy($userInfo->transferEntropy->salt, $userInfo->transferEntropy->iterationCount);	
			// Если пароль указан неверно - стираем данные
			if (! $user->isValidPassword($userInfo->password))
			{
				$user->name = "";
			}
		}
		else
		{
			// Стираем данные о имени
			$user->name = "";
		}
	}
}

// Заголовки ответа
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));
// Хэш пароля ни в коем случае передавать не следует!
$user->password = "";
// Возвращаем объект
echo json_encode($user);
?>