const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  from: String,
  to: String,
  adults: Number,
  children: Number,
 
});

module.exports = mongoose.model("Booking", BookingSchema);
