let tasks = require('../data/tasks.json')

const PENDING = 'Pending';
const COMPLETED = 'Completed';

function tasksCtrl(ctx) {
  ctx.ok([...tasks])
}

function saveTasks(ctx) {
  const view = ctx.request.body;
  view["id"] = tasks.length + 1;
  view["name"] = `Task ${tasks.length + 1}`;
  tasks.push(view);
  let task = tasks[tasks.length - 1]
  ctx.ok({ ...task })
}

function toggleTask(ctx) {
  const id = parseInt(ctx.params.id);
  const newTasks = tasks.map(taskItem => {
    return taskItem.id === id ? { ...taskItem, status: changeStatus(taskItem) } : taskItem;
  })
  tasks = [...newTasks];
  ctx.ok([...tasks])
}

function changeStatus(item) {
  return item.status === PENDING ? COMPLETED : PENDING;
}

module.exports = {
  tasksCtrl, saveTasks, toggleTask
}
