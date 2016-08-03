# ES6 по-человечески
<br>

### 1. let, const и блочная область видимости

Ключевое слово <code>let</code> позволяет объявлять переменные с ограниченной областью видимости — только для блока {...}, в котором происходит объявление. Это называется блочной областью видимости. Вместо ключевого слова <code>var</code>, которое обеспечивает область видимости внутри функции, стандарт ES6 рекомендует использовать <code>let</code>.

```javascript
var a = 2;
{
	let a = 3;
	console.log(a); // 3
}
console.log(a); // 2
```


Другой формой объявления переменной с блочной областью видимости является ключевое слово <code>const</code>. Оно предназначено для объявления переменных (констант), значения которых доступны только для чтения. Это означает не то, что значение константы неизменно, а то, что идентификатор переменной не может быть переприсвоен.
Вот простой пример:

```javascript
{
	const ARR = [5,6];
	ARR.push(7);
	console.log(ARR); // [5,6,7]
	ARR = 10; // TypeError
}
```

О чём стоит помнить:

* Когда дело касается поднятия переменных (hoisting) let и const, их поведение отличается от традиционного поведения var и function. И let и const не существуют до своего объявления (от переводчика: для подробностей автор оригинального руководства отсылает к статье Temporal Dead Zone)
* Областью видимости let и const является ближайший блок.
* При использовании const рекомендуется использовать ПРОПИСНЫЕ_БУКВЫ.
* В const одновременно с объявлением переменной должно быть присвоено значение.

<br>

### 2. Стрелочные функции

Стрелочные функции представляют собой сокращённую запись функций в ES6. Стрелочная функция состоит из списка параметров <code>( ... )</code>, за которым следует знак <code>=></code> и тело функции.

```javascript
var getPrice = function() {
	return 4.55;
};

// Implementation with Arrow Function
var getPrice = () => 4.55;
```
Заметим, что в примере выше, тело функции представляет собой краткую запись, в которой не требуется явного указания на то, что мы хотим вернуть результат.

А вот пример с использованием блока из фигурных скобок:

```javascript
let arr = ['apple', 'banana', 'orange'];

let breakfast = arr.map(fruit => {
	return fruit + 's';
});

console.log(breakfast); // apples bananas oranges
```

**Это ещё не всё!...**

Стрелочные функции не просто делают код короче. Они тесно связаны с ключевым словом <code>this</code> и привязкой контекста.

Поведение стрелочных функций с ключевым словом <code>this</code> отличается от поведения обычных функций с <code>this</code>. Каждая функция в JavaScript определяет свой собственный контекст <code>this</code>, но внутри стрелочных функций значение <code>this</code> то же самое, что и снаружи (стрелочные функции не имеют своего <code>this</code>). Посмотрим на следующий код:

```javascript
function Person() {
	// The Person() constructor defines `this` as an instance of itself.
  	this.age = 0;

  	setInterval(function growUp() {
    	// In non-strict mode, the growUp() function defines `this`
    	// as the global object, which is different from the `this`
    	// defined by the Person() constructor.
    	this.age++;
  	}, 1000);
}
var p = new Person();
```

В ECMAScript 3/5 это поведение стало возможным изменить, присвоив значение <code>this</code> другой переменной.

```javascript
function Person() {
	var self = this;
	self.age = 0;

	setInterval(function growUp() {
    	// The callback refers to the `self` variable of which
    	// the value is the expected object.
    	self.age++;
  	}, 1000);
}
```

Как сказано выше, внутри стрелочных функций значение <code>this</code> то же самое, что и снаружи, поэтому следующий код работает так, как от него и ожидается: 

[Узнать больше о 'Лексическом this' в стрелочных функциях на сайте MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Lexical_this)

```javascript
function Person(){
	this.age = 0;

	setInterval(() => {
    	this.age++; // |this| properly refers to the person object
  	}, 1000);
}

var p = new Person();
```

<br>

### 3. Параметры по умолчанию

ES6 позволяет установить параметры по умолчанию при объявлении функции. Вот простой пример:

```javascript
let getFinalPrice = (price, tax=0.7) => price + price * tax;
getFinalPrice(500); // 850
```

<br>

### 4. Spread / Rest оператор

<code>...</code> оператор называют как spread или rest, в зависимости от того, как и где он используется.

При использовании в любом итерируемом объекте (iterable), данный оператор "разбивает" ("spread") его на индивидуальные элементы:

```javascript
function foo(x,y,z) {
	console.log(x,y,z);
}

let arr = [1,2,3];
foo(...arr); // 1 2 3
```

Другим распространённым использованием оператора <code>...</code> является объединение набора значений в один массив. В данном случае оператор работает как "rest"

```javascript
function foo(...args) {
	console.log(args);
}
foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
```

<br>

### 5. Расширение возможностей литералов объекта

ES6 позволяет объявить литералы объекта с помощью короткого синтаксиса для инициализации свойств из переменных и определения функциональных методов. Также, стандарт обеспечивает возможность вычисления свойств непосредственно в литерале объекта.

```javascript
function getCar(make, model, value) {
	return {
		// с синтаксисом короткой записи можно
        // пропускать значение свойства, если оно
        // совпадает с именем переменной, значение
        // которой мы хотим использовать
		make,  // same as make: make
		model, // same as model: model
		value, // same as value: value

		// вычисляемые свойства теперь работают в
        // литералах объекта
		['make' + make]: true,

		// Короткая запись метода объекта пропускает
        // ключевое слово `function` и двоеточие. Вместо
        // "depreciate: function() {}" можно написать:
		depreciate() {
			this.value -= 2500;
		}
	};
}

let car = getCar('Kia', 'Sorento', 40000);

// output: {
//     make: 'Kia',
//     model:'Sorento',
//     value: 40000,
//     makeKia: true,
//     depreciate: function()
// }
```

<br>

### 6. Восьмеричный и двоичный литералы

В ES6 появилась новая поддержка для восьмеричных и двоичных литералов.
Добавление к началу числа <code>0o</code> или <code>0O</code> преобразует его в восьмеричную систему счисления (аналогично, 0b или 0B преобразует в двоичную систему счисления). Посмотрим на следующий код:

```javascript
let oValue = 0o10;
console.log(oValue); // 8

let bValue = 0b10; // 0b or 0B for binary
console.log(bValue); // 2
```

<br>

### 7. Деструктуризация массивов и объектов

Деструктуризация помогает избежать использования вспомогательных переменных при взаимодействии с объектами и массивами.

```javascript
function foo() {
	return [1,2,3];
}
let arr = foo(); // [1,2,3]

let [a, b, c] = foo();
console.log(a, b, c); // 1 2 3

function bar() {
	return {
		x: 4,
		y: 5,
		z: 6
	};
}
let {x: x, y: y, z: z} = bar();
console.log(x, y, z); // 4 5 6
```

<br>

### 8. Ключевое слово super для объектов

ES6 позволяет использовать метод <code>super</code> в (безклассовых) объектах с прототипами. Вот простой пример:


```javascript
var parent = {
	foo() {
		console.log("Hello from the Parent");
	}
}

var child = {
	foo() {
		super.foo();
		console.log("Hello from the Child");
	}
}

Object.setPrototypeOf(child, parent);
child.foo(); // Hello from the Parent
			 // Hello from the Child
```

<br>

### 9. Строковые шаблоны и разделители

ES6 предоставяляет более простой способ вставки значения переменной или результата выражения (т.н. "интерполяцию"), которые рассчитываются автоматически.

* <code>\`${ ... }\`</code> is used for rendering the variables.
* <code>\`</code> Backtick is used as delimiter.

```javascript
let user = 'Kevin';
console.log(`Hi ${user}!`); // Hi Kevin!
```

<br>

### 10. for...of против for...in
* <code>for...of</code> используется для перебора в цикле итерируемых объектов, например, массивов.

```javascript
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname of nicknames) {
	console.log(nickname);
}
Result: di, boo, punkeye
```

* <code>for...in</code> используется для перебора в цикле всех доступных для перебора (enumerable) свойств объекта.

```javascript
let nicknames = ['di', 'boo', 'punkeye'];
nicknames.size = 3;
for (let nickname in nicknames) {
	console.log(nickname);
}
Result: 0, 1, 2, size
```

<br>

### 11. Map и WeakMap

ES6 представляет новые структуры данных — <code>Map</code> и <code>WeakMap</code>. На самом деле, мы используем "Map" в JavaScript всё время. Каждый объект можно представить как частный случай <code>Map</code>.

Классический объект состоит из ключей (всегда в строковом виде) и значений, тогда как в <code>Map</code> для ключа и значения можно использовать любое значение (и объекты, и примитивы). Посмотрим на этот код:

```javascript
var myMap = new Map();

var keyString = "строка",
    keyObj = {},
    keyFunc = function() {};

// устанавливаем значения
myMap.set(keyString, "значение, связанное со 'строка'");
myMap.set(keyObj, "значение, связанное с keyObj");
myMap.set(keyFunc, "значение, связанное с keyFunc");

myMap.size; // 3

// получаем значения
myMap.get(keyString);    // "значение, связанное со 'строка'"
myMap.get(keyObj);       // "значение, связанное с keyObj"
myMap.get(keyFunc);      // "значение, связанное с keyFunc"
```

**WeakMap**

<code>WeakMap</code> это Map, в котором ключи обладают неустойчивыми связями, что позволяет не мешать сборщику мусора удалять элементы WeakMap. Это означает, что можно не беспокоиться об утечках памяти.

Стоить отметить, что в <code>WeakMap</code>, в отличие от <code>Map</code>, *каждый ключ должен быть объектом*.

Для <code>WeakMap</code> есть только четыре метода: <code>delete(ключ)</code>, <code>has(ключ)</code>, <code>get(ключ)</code> и <code>set(ключ, значение)</code>.

```javascript
let w = new WeakMap();
w.set('a', 'b'); 
// Uncaught TypeError: Invalid value used as weak map key

var o1 = {},
    o2 = function(){},
    o3 = window;

w.set(o1, 37);
w.set(o2, "azerty");
w.set(o3, undefined);

w.get(o3); // undefined, потому что это заданное значение

w.has(o1); // true
w.delete(o1);
w.has(o1); // false
```

<br>

### 12. Set и WeakSet

Объекты Set это коллекции уникальных значений. Дублированные значения игнорируются, т.к. коллекция должна содержать только уникальные значения. Значения могут быть примитивами или ссылками на объекты.

```javascript
let mySet = new Set([1, 1, 2, 2, 3, 3]);
mySet.size; // 3
mySet.has(1); // true
mySet.add('strings');
mySet.add({ a: 1, b:2 });
```

You can iterate over a set by insertion order using either the `forEach` method or the `for...in` loop.

Вы можете перебирать <code>Set</code> в цикле с помощью <code>forEach</code> или <code>for...of</code>. Перебор происходит в том же порядке, что и вставка.


```javascript
mySet.forEach((item) => {
    console.log(item);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
});

for (let value of mySet) {
    console.log(value);
    // 1
    // 2
    // 3
    // 'строки'
    // Object { a: 1, b: 2 }
}
```

У Set также есть методы ` delete()` и ` clear()` .

**WeakSet**

Аналогично <code>WeakMap</code>, объект <code>WeakSet</code> позволяет хранить *объекты* с неустойчивыми связями в коллекции. Объект в <code>WeakSet</code> уникален.

```javascript
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, foo не был добавлен к коллекции

ws.delete(window); // удаляет window из коллекции
ws.has(window);    // false, window был удалён
```

<br>

### 13. Классы в ES6

В ES6 представили новый синтаксис для классов. Здесь стоит отметить, что класс ES6 не представляет собой новую объектно-ориентированную модель наследования. Это просто синтаксический сахар для существующего в JavaScript прототипного наследования.

Класс в ES6 представляет собой просто новый синтаксис для работы с прототипами и функциями-конструкторами, которые мы привыкли использовать в ES5.

Функции, записанные с помощью ключевого слова <code>static</code>, используются для объявления статических свойств класса.

```javascript
class Task {
    constructor() {
        console.log("Создан экземпляр task!");
    }

    showId() {
        console.log(23);
    }

    static loadAll() {
        console.log("Загружаем все tasks...");
    }
}

console.log(typeof Task); // function
let task = new Task(); // "Создан экземпляр task!"
task.showId(); // 23
Task.loadAll(); // "Загружаем все tasks..."
```

**extends и super в классах**

Посмотрим на следующий код:

```javascript
class Car {
    constructor() {
        console.log("Создаём новый автомобиль");
    }
}

class Porsche extends Car {
    constructor() {
        super();
        console.log("Создаём Porsche");
    }
}

let c = new Porsche();
// Создаём новый автомобиль
// Создаём Porsche
```

В ES6 ключевое слово <code>extends</code> позволяет классу-потомку наследовать от родительского класса. Важно отметить, что конструктор класса-потомка должен вызывать super().

Также, в классе-потомке можно вызвать метод родительского класса с помощью <code>super.имяМетодаРодителя()</code>.

[Узнать больше о классах на сайте MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)

О чём стоит помнить:

* Объявления классов не поднимаются наверх (not hoisted). Сначала нужно объявить класс и только после этого использовать его, иначе будет ошибка ReferenceError.
* Нет необходимости использовать ключевое слово ` function` во время задания функций внутри определения класса.

<br>

### 14. Тип данных Symbol

Symbol это уникальный и неизменяемый тип данных, представленный в ES6. Целью ` Symbol` является создание уникального идентификатора, к которому нельзя получить доступ.

Вот как можно создать ` Symbol`:

```javascript
var sym = Symbol("опциональное описание");
console.log(typeof sym); // symbol
```

Заметим, что использовать new вместе с ` Symbol (…)` нельзя.

Если ` Symbol` используется как свойство/ключ объекта, он сохраняется таким специальным образом, что свойство не будет показано при нормальном перечислении свойств объекта.

```javascript
var o = {
    val: 10,
    [Symbol("случайный")]: "Я - символ",
};

console.log(Object.getOwnPropertyNames(o)); // val
```

Чтобы извлечь символьные свойства объекта, нужно использовать <code>Object.getOwnPropertySymbols(o)</code>


<br>

### 15. Итераторы

Итератор обращается к элементам коллекции по одному, в то же время сохраняя память о своей текущей позиции в этой коллекции. У итератора есть метод ` next()`, который возвращает следующий элемент в последовательности. Этот метод возвращает объект с двумя свойствами: done (окончен ли перебор) и value (значение).

В ES6 есть метод ` Symbol.iterator`, который определяет итератор для объекта по-умолчанию. При каждой необходимости перебора в цикле для объекта (например, в начале цикла for..of), его метод итератора вызывается без аргументов, и возвращённый итератор используется для того, чтобы получить значения для перебора.

Посмотрим на массив, который является перебираемым (iterable), и на итератор, который есть у массива для обработки его значений:

```javascript
var arr = [11,12,13];
var itr = arr[Symbol.iterator]();

itr.next(); // { value: 11, done: false }
itr.next(); // { value: 12, done: false }
itr.next(); // { value: 13, done: false }

itr.next(); // { value: undefined, done: true }
```

Заметим, что можно написать собственный итератор через определение ` obj[Symbol.iterator]()` с описанием объекта.

[Подробнее про итераторы:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)

<br>

### 16. Генераторы

Функции-генераторы представляют собой новую особенность ES6, которая позволяет функции создавать много значений в течение некоторого периода времени, возвращая объект (называемый генератором), который может быть итерирован для выброса значений из функции по одному за раз.

Функция-генератор возвращает **итерируемый объект** при своём вызове.
Функция-генератор записывается с помощью знака * после ключевого слова ` function`, а в теле функции должно присутствовать ключевое слово ` yield`.

```javascript
function *infiniteNumbers() {
    var n = 1;
    while (true) {
        yield n++;
    }
}

var numbers = infiniteNumbers(); // возвращает перебираемый объект

numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }
numbers.next(); // { value: 3, done: false }
```

Каждый раз при вызове ` yield` возвращённое значение становится следующим значением в последовательности.

Также заметим, что генераторы вычисляют свои возвращённые значения по запросу, что позволяет им эффективно представлять последовательности, затратные с точки зрения вычислений, или даже бесконечные последовательности.

<br>

### 17. Промисы

В ES6 появилась встроенная поддержка промисов. Промис это объект, который ждёт выполнения асинхронной операции, после которого (т.е. после выполнения) промис принимает одно из двух состояний: fulfilled (resolved, успешное выполнение) или rejected (выполнено с ошибкой).

Стандартным способом создания промиса является конструктор ` new Promise()`, который принимает обработчик с двумя функциями как параметрами. Первый обработчик (обычно именуемый ` resolve`) представляет собой функцию для вызова вместе с будущим значением, когда оно будет готово; второй обработчик (обычно именуемый ` reject`) является функцией, которая вызывается для отказа от выполнения промиса, если он не может определить будущее значение.

```javascript
var p = new Promise(function(resolve, reject) {  
    if (/* условие */) {
        resolve(/* значение */);  // fulfilled successfully (успешный результат)
    } else {
        reject(/* reason */);  // rejected (ошибка)
    }
});
```

Каждый промис обладает методом ` then`, в котором есть два коллбэка. Первый коллбэк вызывается, если промис успешно выполнен (resolved), тогда как второй коллбэк вызывается, если промис выполнен с ошибкой (rejected).

```javascript
p.then((val) => console.log("Промис успешно выполнен", val),
       (err) => console.log("Промис выполнен с ошибкой", err));
```

При возвращении значения от ` then` коллбэки передадут значение следующему коллбэку ` then`.

```javascript
var hello = new Promise(function(resolve, reject) {  
    resolve("Привет");
});

hello.then((str) => `${str} Мир`)
     .then((str) => `${str}!`)
     .then((str) => console.log(str)) // Привет Мир!
```

При возвращении промиса, успешно обработанное значение промиса пройдёт к следующему коллбэку, для того, чтобы эффективно соединить их вместе.
Эта простая техника помогает избежать ада с коллбэками ("callback hell").


```javascript
var p = new Promise(function(resolve, reject) {  
    resolve(1);
});

var eventuallyAdd1 = (val) => {
    return new Promise(function(resolve, reject){
        resolve(val + 1);
    });
}

p.then(eventuallyAdd1)
 .then(eventuallyAdd1)
 .then((val) => console.log(val)) // 3
```





















