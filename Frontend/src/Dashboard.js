import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get('/api/tasks/my', {
      headers: { Authorization: localStorage.getItem('token') }
    });
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post('/api/tasks', { title }, {
      headers: { Authorization: localStorage.getItem('token') }
    });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <input placeholder="New Task" onChange={e => setTitle(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(t => <li key={t._id}>{t.title}</li>)}
      </ul>
    </div>
  );
}
export default Dashboard;
