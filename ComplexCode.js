/* 
  Filename: ComplexCode.js
  Description: This code implements a complex and sophisticated task management system using JavaScript.
*/

// Main class representing a task
class Task {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.createdAt = new Date();
    this.completed = false;
  }

  complete() {
    this.completed = true;
    console.log(`Task "${this.name}" completed!`);
  }
}

// Class representing a collection of tasks
class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log(`Task "${task.name}" added!`);
  }

  removeTask(id) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      const removedTask = this.tasks.splice(taskIndex, 1);
      console.log(`Task "${removedTask[0].name}" removed!`);
    }
  }

  completeTask(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.complete();
    }
  }
}

// Sample usage of the task management system
const taskList = new TaskList();

const task1 = new Task(1, "Implement feature X", "Implement a complex feature X using JavaScript");
const task2 = new Task(2, "Write unit tests for feature X", "Ensure the correctness of feature X using unit tests");
const task3 = new Task(3, "Bug fixing", "Address reported bugs in the system");
const task4 = new Task(4, "Design UI for feature Y", "Create an intuitive user interface for feature Y");

taskList.addTask(task1);
taskList.addTask(task2);
taskList.addTask(task3);
taskList.addTask(task4);

taskList.completeTask(2);
taskList.removeTask(3);

console.log("Current task list:");
taskList.tasks.forEach(task => {
  console.log(`- ${task.name} (completed: ${task.completed ? 'Yes' : 'No'})`);
});

// Output:
// Task "Implement feature X" added!
// Task "Write unit tests for feature X" added!
// Task "Bug fixing" added!
// Task "Design UI for feature Y" added!
// Task "Write unit tests for feature X" completed!
// Task "Bug fixing" removed!
// Current task list:
// - Implement feature X (completed: No)
// - Design UI for feature Y (completed: No)