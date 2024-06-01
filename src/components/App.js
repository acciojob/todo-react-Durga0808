
import React,{ useState } from "react";
import './../styles/App.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className="container">
        {/* Do not remove the main div */}
        <h1>To-Do List</h1>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Enter a new task" 
      />
      <button onClick={addTask}>Add Todo</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="deleteButton" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
