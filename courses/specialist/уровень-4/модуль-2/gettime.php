<?php
/*
** Сценарий возвращает текущее время
*/
header('Content-type: text/plain; charset=utf-8');
//header('Cache-Control: no-store; no-cache');
//header('Expires: ' , date('r'));
echo date('H:i:s');
?>