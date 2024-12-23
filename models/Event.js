const mongoose = require('mongoose');

// Define the Event Schema
const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
});

// Export the Event Model
module.exports = mongoose.model('Event', EventSchema);
