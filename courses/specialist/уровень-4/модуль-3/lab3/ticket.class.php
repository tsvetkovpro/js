<?php
/*
** Класс Билет сессии
*/
class Ticket
{
	public $id;			// Идентификатор сессии
	public $valid;		// Правильность билета
	
	public function __construct($id='', $valid=false)
	{
		$this->id = $id;
		$this->valid = $valid;
	}
}
?>