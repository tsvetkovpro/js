/*
**	������� ������� ������� ���������� ����
**		nRows		- ����� �����
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
**	������� ������� ���� ��� ������� ���������� ����
**		nCells		- ����� ����� � ������
**		startColor	- ����, � �������� ���������� ���������
**	������� ���������� ��������� ���� � ����
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
**	������� ������� ���� ������ ���������� ����
**		color	 - ���� ������
*/
function drawCell(color)
{
	 document.write('<td style="background-color:' + color + '">&nbsp</td>');
}

/*
**	������� ���������� ��������� ����
**		color	 - ���� ������
*/
function nextColor(color)
{
	return (color == "#000000") ? "#FFFFFF" : "#000000";
}
