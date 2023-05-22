function Task({ task, deleteTask, completeTask }) {
  return (
    <li className="task">
      <input type="checkbox" onChange={() => completeTask(task.id)} />
      <p className={task.completed ? 'complete-task' : ''}>{task.taskName}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </li>
  );
}

export default Task;
