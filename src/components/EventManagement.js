import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventManagement() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: '', description: '', location: '', date: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/events').then((res) => setEvents(res.data));
  }, []);

  const handleAddEvent = () => {
    axios.post('http://localhost:5000/events', newEvent).then((res) => {
      setEvents([...events, res.data]);
    });
  };

  return (
    <div>
      <h1>Event Management</h1>
      <input
        type="text"
        placeholder="Event Name"
        onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
      />
      <input
        type="date"
        onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
      />
      <button onClick={handleAddEvent}>Add Event</button>

      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.name} - {event.date}</li>
        ))}
      </ul>
    </div>
  );
}

export default EventManagement;