/*
**	‘ункци€ выводит таблицу шахматного пол€
**		nRows		- число строк
*/
function drawTable(nRows)
{
	var currentColor = "#000000";
	document.write("<table>");
	for (var i = 1; i <= nRows; i++) 
	{
		currentColor = drawRow(nRows, currentColor);
		currentColor = nextColor(currentColor);
	}
	document.write("</table>");
}

/*
**	‘ункци€ выводит один р€д таблицы шахматного пол€
**		nCells		- число €чеек в строке
**		startColor	- цвет, с которого начинаетс€ отрисовка
**	функци€ возвращает последний цвет в р€ду
*/
function drawRow(nCells, startColor)
{
	document.write("<tr>");
	var currentColor = startColor;
	for (var i = 1; i <= nCells; i++)
	{
		drawCell(currentColor);
		currentColor = nextColor(currentColor);
	}
	document.write("</tr>");
	return currentColor;
}

/*
**	‘ункци€ выводит одну €чейку шахматного пол€
**		color	 - цвет €чейки
*/
function drawCell(color)
{
	 document.write('<td style="background-color:' + color + '">&nbsp</td>');
}

/*
**	‘ункци€ возвращает следующий цвет
**		color	 - цвет €чейки
*/
function nextColor(color)
{
	return (color == "#000000") ? "#FFFFFF" : "#000000";
}
