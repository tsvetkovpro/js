// проверка на число:

// my solution
function isAN(value) {
	if(value instanceof Number)
		value = value.valueOf(); // Если это объект числа, то берём значение, которое и будет числом

	return  isFinite(value) && value === parseInt(value, 10);
}
// Best Practices
function isAN2(value) {
	return (value instanceof Number||typeof value === 'number') && !isNaN(value);
}
console.info(isAN(1));
console.info(isAN(new Number(1)));
console.info(isAN(null));
console.info(isAN("1"));
console.info(isAN(true));

