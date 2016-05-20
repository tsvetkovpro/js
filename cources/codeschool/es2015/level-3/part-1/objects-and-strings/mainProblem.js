
/*
 В функции buildUser возвращается объект

 return {first, last, fullName};
 это сокращенная форма объявления свойств объекта эквивалентная

 {
 "first": first,
 "last": last,
 "fullName": fullName,
 }
 В присваивании ожидается: first2, last2, fullName2 в возвращаемом объекте их нет. поэтому они принимают значение по умолчанию: undefined

 Проблем с именами свойств объектов можно избежать если возвращать из функции не объект а массив
* */



function buildUser(first, last) {
    let fullName = first + " " + last;
    return [first, last, fullName];
}

let [first, last, fullName] = buildUser("User1", "LastName");
console.log(first,last,fullName);

let [first2, last2, fullName2] = buildUser("test1", "test1");
console.log(first2, last2, fullName2);