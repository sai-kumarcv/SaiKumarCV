import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AttendeeManagement() {
  const [attendees, setAttendees] = useState([]);
  const [newAttendee, setNewAttendee] = useState({ name: '', email: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/attendees').then((res) => setAttendees(res.data));
  }, []);

  const handleAddAttendee = () => {
    axios.post('http://localhost:5000/attendees', newAttendee).then((res) => {
      setAttendees([...attendees, res.data]);
    });
  };

  return (
    <div>
      <h1>Attendee Management</h1>
      <input
        type="text"
        placeholder="Attendee Name"
        onChange={(e) => setNewAttendee({ ...newAttendee, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setNewAttendee({ ...newAttendee, email: e.target.value })}
      />
      <button onClick={handleAddAttendee}>Add Attendee</button>

      <ul>
        {attendees.map((attendee) => (
          <li key={attendee._id}>{attendee.name} - {attendee.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default AttendeeManagement;