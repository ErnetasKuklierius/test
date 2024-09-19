import React, {useState} from 'react';
import './App.css';

function App() {

  const [Tasks, setTasks] = useState([]);
  const [Value, setValue] = useState('');

  const addTask = () => {
    {Value.trim() ? setTasks([...Tasks, Value]) : setValue('')};
  };


  const removeTask = (index) => {
    const newTasks = Tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  

  

  return (
    <div>
      <input placeholder='Task name' value={Value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={addTask}>Add</button>
      <h1>Tasks</h1>

      <ul>
        {Tasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox"/>
            {task}
            <button type='button' onClick={() => removeTask(index)}>Remove</button>
          </li>
        ) 
      
      )}
      </ul>
    </div>
    
  );
}

export default App;
