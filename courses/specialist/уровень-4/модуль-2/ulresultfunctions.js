// Очистка списка
function clearList()
{
	var ulResult = document.getElementById("ulResult");
	while (ulResult.hasChildNodes())
		ulResult.removeChild(ulResult.lastChild);
}

// Добавление нового элемента списка
function addListItem(text)
{
	if (text.length == 0) return;
	var ulResult = document.getElementById("ulResult");
	var li = document.createElement("li");
	ulResult.appendChild(li);
	var liText = document.createTextNode(text);
	li.appendChild(liText);
}