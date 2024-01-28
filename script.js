document.addEventListener('DOMContentLoaded', function() {
  const addTaskButton = document.getElementById('addTaskButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  let tasks = [];

  addTaskButton.addEventListener('click', function() {
      const taskName = taskInput.value.trim();
      if (taskName) {
          const newTask = {
              id: Date.now(),
              name: taskName,
              completed: false
          };
          tasks.push(newTask);
          addTaskToList(newTask);
          taskInput.value = '';
      }
  });

  function addTaskToList(task) {
      const listItem = document.createElement('li');
      
      const article = document.createElement('article');
      listItem.appendChild(article);

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.classList.add('task-checkbox');
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', function() {
          task.completed = this.checked;
      });
      article.appendChild(checkbox);

      const taskText = document.createElement('span');
      taskText.classList.add('task-text');
      taskText.textContent = task.name;
      article.appendChild(taskText);

      const trashIcon = document.createElement('i');
      trashIcon.classList.add('fa', 'fa-trash');
      trashIcon.addEventListener('click', function() {
          taskList.removeChild(listItem);
          tasks = tasks.filter(t => t.id !== task.id);
      });
      listItem.appendChild(trashIcon);

      taskList.appendChild(listItem);
  }
});
