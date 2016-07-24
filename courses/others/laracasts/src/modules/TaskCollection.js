class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.dir(this.tasks);
  }
}

export default TaskCollection;