import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', deadline: '', status: 'Pending', assignedAttendeeId: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/tasks').then((res) => setTasks(res.data));
  }, []);

  const handleAddTask = () => {
    axios.post('http://localhost:5000/tasks', newTask).then((res) => {
      setTasks([...tasks, res.data]);
    });
  };

  const updateTaskStatus = (id, status) => {
    axios.put(`http://localhost:5000/tasks/${id}`, { status }).then((res) => {
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
    });
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <input
        type="text"
        placeholder="Task Name"
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
      />
      <input
        type="date"
        placeholder="Deadline"
        onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
      />
      <input
        type="text"
        placeholder="Assigned Attendee ID"
        onChange={(e) => setNewTask({ ...newTask, assignedAttendeeId: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.name} - {task.deadline} - {task.status}
            <button onClick={() => updateTaskStatus(task._id, 'Completed')}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskTracker;