import { useState } from 'react';

import './App.css';
import Task from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setNewTask('');
  };

  const deleteTask = (taskId) => {
    setTodoList(todoList?.filter((task) => task.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTodoList(
      todoList?.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: task.completed ? false : true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="list">
        {todoList?.map((task) => {
          return (
            <Task
              task={task}
              deleteTask={deleteTask}
              completeTask={completeTask}
              key={task.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
