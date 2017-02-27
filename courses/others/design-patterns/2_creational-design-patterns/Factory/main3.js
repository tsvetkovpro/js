var Task = require('./task');
var repoFactory = require('./repoFactory2');

var task1 = new Task(repoFactory.task.get(11));
var task2 = new Task(repoFactory.task.get(22));

var user = repoFactory.user.get(11);
var project = repoFactory.project.get(11);

task1.user = user;
task1.project = project;

//console.log(task1);
task1.save();
