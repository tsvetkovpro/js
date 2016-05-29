<?php
// Авторизация пользователя
require('user.class.php');

// Читаем данные, переданные в POST
$rawPost = file_get_contents('php://input');

// Если данные были переданы...
if ($rawPost)
{
	// Разбор пакета JSON
	$userInfo = json_decode($rawPost);
	
	// Объект пользователя
	$user = new User();
	$ticket = $user->validate($userInfo);
}
else
{
	$ticket = new Ticket();
}
// Заголовки ответа
header('Content-type: text/plain; charset=utf-8');
header('Cache-Control: no-store, no-cache');
header('Expires: ' . date('r'));
// Возвращаем билет
echo json_encode($ticket);
?>