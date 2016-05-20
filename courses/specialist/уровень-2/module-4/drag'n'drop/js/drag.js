/*Устанавливаем обработчик на событие mousedown в документе*/
addHandler(document, 'mousedown', mouseDown);

/*Глобальная переменная для хранения ссылки на перемещаемый объект*/
var div;

/*А вот и обработчик нажатия на клавишу мыши*/
function mouseDown(e) {
	/*Нашли целевой объект*/
	var target = e.target || e.srcElement;
	
	/*Если у элемента есть top в значении class*/
	if (target.className == 'top') {
		/*Находим перемещаемый объект - родитель*/
		div = target.parentNode;
		
		/*Сохраняем координаты объекта и курсора перед началом движения*/
		div.mouseX = e.clientX;
		div.mouseY = e.clientY;
		div.startX = parseInt(getStyle(div, 'left'));
		div.startY = parseInt(getStyle(div, 'top'));
		
		/*Сохраняем расстояние от координат курсора до правой стороны объекта*/
		div.deltaX = div.offsetWidth + div.offsetLeft - e.clientX;
		div.deltaY = div.offsetHeight + div.offsetTop - e.clientY;
		
		/*И записываем размеры области просмотра*/
		div.winX = document.compatMode == 'BackCompat'? document.body.clientWidth: document.documentElement.clientWidth;
		div.winY = document.compatMode == 'BackCompat'? document.body.clientHeight: document.documentElement.clientHeight;
		
		/*Теперь нам интересны события mousemove и mouseup
		Пока клавиша мыши не отжата - объект двигается
		После того, как клавишу отпустили, передвижение не нужно*/
		/*Устанавливаем обработчики на mousemove и mouseup в документе*/
		addHandler(document, 'mousemove', mouseMove);
		addHandler(document, 'mouseup', mouseUp);
	}
}

function mouseMove(e) {
	/*Отменяем действия по умолчанию для предотвращения тормозов*/
	cancelEvent(e);
	
	/*Сначала двигаем элемент без проверок*/
	//div.style.left = div.startX + (e.clientX - div.mouseX) + 'px';
	//div.style.top = div.startY + (e.clientY - div.mouseY) + 'px';
	
	/*Если перемещения не вызовут выпадения блока за левый край области просмотра*/
	if (e.clientX > div.mouseX - div.startX) {
		/*И за правый край области просмотра*/
		if (e.clientX + div.deltaX < div.winX) {
			/*Двигаем блок в зависимости от координат курсора*/
			div.style.left = div.startX + (e.clientX - div.mouseX) + 'px';
		} else {
			/*Или устанавливаем блок в фиксированное положение*/
			div.style.left = div.winX - div.offsetWidth + 'px';
		}
	} else {
		/*Или устанавливаем блок в фиксированное положение*/
		div.style.left = '0';
	}
	/*Та же процедура для вертикальной оси*/
	if (e.clientY > div.mouseY - div.startY) {
		if (e.clientY + div.deltaY < div.winY) {
			div.style.top = div.startY + (e.clientY - div.mouseY) + 'px';
		} else {
			div.style.top = div.winY - div.offsetHeight + 'px';
		}
	} else {
		div.style.top = '0';
	}
}

function mouseUp(e) {
	/*Как только клавишу отпустили, отслеживать перемещения и отпускание неитересно*/
	/*Снимаем обработчики на mousemove и mouseup в документе*/
	removeHandler(document, 'mousemove', mouseMove);
	removeHandler(document, 'mouseup', mouseUp);
}