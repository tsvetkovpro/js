var course = require('./course');

var node = new course.Course();
node.getTitle();


// способ без лишней переменной var node
/*
var course = require('./course').Course;
var node = new course;
node.getTitle();
*/

// второй вариант
// см. course-2 и test-2 js

