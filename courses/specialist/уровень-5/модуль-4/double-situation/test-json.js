var my = require("./courses");
/*
1. ищет файл
2. если не нашёл ищет с расширением json
3. если не находит его --> то возможно это папка --> заходит в папку и ищет index.js
* */

console.log(my.node);
console.log(my.pr);