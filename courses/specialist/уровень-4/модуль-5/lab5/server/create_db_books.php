<?php
$db = new SQLiteDatabase("books.db");

/*
 ** ������� book � category - �� �������, ��� ��� ��� ��� ���� � ��������� �����������
 ** �� ����� �� ������� demo-5

$db->query(
		"CREATE TABLE book
		(
			id INTEGER PRIMARY KEY,
			author TEXT,
			title TEXT, 
			image TEXT,
			category NUMERIC
		)"
	);

$db->query(
		"CREATE INDEX book_category ON book(category ASC)"
	);


$db->query(
		"CREATE TABLE category
		(
			id INTEGER PRIMARY KEY,
			title TEXT,
			parent NUMERIC
		)"
	);

$db->query(
		"CREATE INDEX category_parent ON category(parent ASC)"
	);
*/

// ������� ������ � ������
$db->query(
		"CREATE TABLE basket
		(
			id INTEGER PRIMARY KEY,
			session TEXT,
			book NUMERIC, 
			time_stamp NUMERIC
		)"
	);
$db->query(
		"CREATE INDEX basket_session ON basket(session ASC)"
	);
$db->query(
		"CREATE INDEX basket_book ON basket(book ASC)"
	);
$db->query(
		"CREATE INDEX basket_time_stamp ON basket(time_stamp ASC)"
	);	

?>