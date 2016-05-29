<?php
// Определение списка пользователей в режиме ONLINE
require('user.class.php');

// Читаем данные, переданные в POST
$rawPost = file_get_contents('php://input');

// Результат
$onlineUsers = array();

// Если данные были переданы...
if ($rawPost)
{
	// Разбор пакета JSON
	$ticket = json_decode($rawPost);
	
	// Объект пользователя
	$user = new User();
	$result = $user->refreshSession($ticket);
	
	// Если билет был правильным...
	if ($result > 0)
		$onlineUsers = $user->getOnlineUsers();
}

// Заголовки ответа
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));
// Возвращаем билет
echo json_encode($onlineUsers);
?>