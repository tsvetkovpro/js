"use strict";

/**
 * Created by user on 08.07.2016.
 */

// hoisted
// если указать var будет undefined -> неочевидно
function fire(bool) {
    if (bool) {
        var foo = 'bar';

        console.log(foo);
    } /* else {
         console.log(foo);  // ReferenceError: foo is not defined
      }*/
}

fire(false);

var names = ["Иван", "Ярослав"];
// names = ["123", "345"]; не работает
names.push('3333');
console.log(names);