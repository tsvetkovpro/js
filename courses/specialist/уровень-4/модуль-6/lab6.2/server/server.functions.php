<?php
/*
** Библиотека фукнций сервера
*/
define('BOOK', 'book.fb2');

/*
** Загружает XML файл в объект
*/
function loadDocument($fileName)
{
	$doc = simplexml_load_file($fileName);
	return $doc;
}

/*
** Выбирает узлы по XPath выражению
*/
function selectNodes($document, $xpath, $nsPrifix='', $nsURI='')
{
	if ($nsPrifix) $document->registerXPathNamespace($nsPrifix, $nsURI);
	$entries = $document->xpath($xpath);
	if (count($entries) == 0) return null;
	return $entries;
}

/*
** Выбирает первый узел по XPath выражению
*/
function selectSingleNode($document, $xpath, $nsPrifix='', $nsURI='')
{
	$nodes = selectNodes($document, $xpath, $nsPrifix, $nsURI);
	if (! $nodes) return null;
	return $nodes[0];
}

/*
** Создаем XML строку с данными указанной главы книги
*/
function getSectionXml($sectionNo)
{
	$section = null;
	$book = loadDocument(BOOK);
	$sections = selectNodes($book, 
		'/fb2:FictionBook/fb2:body/fb2:section/fb2:section', 
		'fb2', 'http://www.gribuser.ru/xml/fictionbook/2.0');
	$secCount = count($sections);
	if ($sectionNo <= $secCount && $sectionNo > 0) $section = $sections[$sectionNo - 1];
	$xml = '<?xml version="1.0" encoding="utf-8"?>' . 
		'<my:data xmlns="http://www.gribuser.ru/xml/fictionbook/2.0" xmlns:l="http://www.w3.org/1999/xlink" xmlns:my="http://www.specialist.ru/ns/courses/ajax/lab6.2">' . 
		'<my:sections count="' . $secCount . '" />';
	if ($section) $xml .= $section->asXML();
	$xml .= '</my:data>';
	return $xml;
}

?>