
const mongoose = require('mongoose');




    module.exports = async () => {
      const mongoString = process.env.Mongo;
      mongoose.connect(mongoString);
      const database = mongoose.connection;
    
      // You can add event listeners to handle connection events here if needed
      // For example:
      database.on('connected', () => {
        console.log('MongoDB connected');
      });
    
      // Return the Mongoose connection object
      return database;
    };
    


