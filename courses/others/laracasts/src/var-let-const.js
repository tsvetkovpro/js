// hoisted
// если указать var будет undefined -> неочевидно
function fire(bool) {
    if (bool) {
    	let foo = 'bar';

        console.log(foo);
    }/* else {
        console.log(foo);  // ReferenceError: foo is not defined
    }*/
}

fire(false);


// let
// const
const names = ["Иван", "Ярослав"];
// names = ["123", "345"]; не работает
names.push('3333');
console.log(names);
