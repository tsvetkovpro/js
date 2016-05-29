<?php
// Создание и инициирование базы данных пользователей
require('user.class.php');

$user = new User();
$user->add(new UserInfo('Вася Пупкин', 'vasyap', 'password'));
$user->add(new UserInfo('Федя Сумкин', 'fedias', 'password'));
$user->add(new UserInfo('Вова Морковкин', 'vovam', 'password'));
$user->add(new UserInfo('Галя Пипеточкина', 'galp', 'password'));
$user->add(new UserInfo('Света Офигенова', 'svetao', 'password'));
?>