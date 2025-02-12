const Booking = require("../models/Booking");

const resolvers = {
  Query: {
    // Get all bookings
    getBookings: async () => {
      try {
        const bookings = await Booking.find(); 
        return bookings.map((booking) => ({
          id: booking._id.toString(), 
          name: booking.name,
          from: booking.from,
          to: booking.to,
        }));
      } catch (err) {
        throw new Error("Error fetching bookings: " + err.message);
      }
    },

    // Get a single booking by ID
    getBooking: async (parent, { id }) => {
      try {
        const booking = await Booking.findById(id);
        if (!booking) throw new Error("Booking not found");

       
        return {
          id: booking._id.toString(), 
          name: booking.name,
          from: booking.from,
          to: booking.to,
        };
      } catch (err) {
        throw new Error("Error fetching booking: " + err.message);
      }
    },
  },

  Mutation: {
    // Add a new booking
    addBooking: async (parent, { name, email, from, to, adults, children }) => {
      try {
        const newBooking = new Booking({
          name,
          email,
          from,
          to,
          adults,
          children,
        });

        await newBooking.save();

        
        return {
          id: newBooking._id.toString(), 
          name: newBooking.name,
          from: newBooking.from,
          to: newBooking.to,
        };
      } catch (err) {
        throw new Error("Error adding booking: " + err.message);
      }
    },
  },
};

module.exports = resolvers;
