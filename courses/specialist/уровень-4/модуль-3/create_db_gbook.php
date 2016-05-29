<?php
$db = new SQLiteDatabase("gbook.db");

$db->query(
		"CREATE TABLE gbook
		(
			id INTEGER PRIMARY KEY, -- Код записи
			author TEXT,            -- Автор записи 
			email TEXT,             -- E-mail автора
			message TEXT,           -- Текст сообщения
			date NUMERIC            -- Дата и время создания записи
		)"
	);

$db->query(
		"CREATE INDEX gbook_date ON gbook(date ASC)"
	);
?>