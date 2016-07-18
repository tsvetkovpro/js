class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  log() {
    this.tasks.forEach( (task, index) => console.log(task, index) );      //this.tasks.forEach(function (task) {
  }
}

class Task  {}

new TaskCollection([
  new Task, new Task, new Task
]).log();





/**/

let names = ["Иван", "Пётр", "Василий", "Сергей"];

names = names.map(name => `${name} is cool`);

console.log(names);
