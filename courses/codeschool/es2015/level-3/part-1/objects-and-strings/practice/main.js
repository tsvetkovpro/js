let cssInConsole = '%c%s';
let style = ['padding: 0.5rem;',
    'font: 1.3rem/2 Georgia;',
    'color: green;'].join('');
let style2 = ['padding: 0.5rem;',
    'font: 1.3rem/2 Georgia;',
    'color: red;'].join('');

function buildUser(first, last) {
    let fullName = first + " " + last;
    return {first, last, fullName};
}

let user = buildUser("User1", "LN-User1");
console.log('%c%s ', style, user.first);
console.log('%c%s ', style, user.last);
console.log('%c%s ', style, user.fullName);

console.log('\n');

let user2 = buildUser("User2", "LN-User2");
console.log('%c%s ', style, user2.first);
console.log('%c%s ', style, user2.last);
console.log('%c%s ', style, user2.fullName);

console.log('\n');

let user3 = buildUser("Exp-User3", "LN-User3");

console.log('%c%s ', style2, user3.first);
console.log('%c%s ', style2, user3.last);
console.log('%c%s ', style2, user3.fullName);

console.log('\n');

let { first, last, fullName } = buildUser("Sam", "Williams");
console.log('%c%s ', style2, first);
console.log('%c%s ', style2, last);
console.log('%c%s ', style2, fullName);

console.log('\n');



function buildUser2(first1, last1, postCount) {
    let fullName1 = first1 + " " + last1;
    const ACTIVE_POST_COUNT = 10;

    return {
        first1,
        last1,
        fullName1,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    }
}

let myObj = buildUser2("test2", "test2");

console.log(myObj.first1);
console.log(myObj.last1);
console.log(myObj.fullName1);























