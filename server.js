const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // Replaces body-parser for parsing JSON
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/eventDashboard')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Mongoose Schema and Model
const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
});

const Event = require('./models/Event');


// Routes
app.post('/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event); // Status 201 for resource creation
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events); // Status 200 for successful fetch
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5000; // Use environment variable for flexibility
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
