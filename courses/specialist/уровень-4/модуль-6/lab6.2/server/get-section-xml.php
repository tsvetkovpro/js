<?php
/*
** XML сервер книг
*/
require('server.functions.php');
$sectionNo = (int) $_GET['no'];
header('Content-type: text/xml; charset=utf-8');
echo getSectionXml($sectionNo);
?>