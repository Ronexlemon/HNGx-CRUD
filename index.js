const express = require("express");
const connectToDatabase = require("./database/mongo");
const userRoute = require("./routes/user");
require('dotenv').config();
const bodyParser = require("body-parser");
const App =  express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
// Configure bodyparser to handle post requests
App.use(bodyParser.urlencoded({extended: false}));
App.use(bodyParser.json());
// const mongoString = process.env.Mongo;
// mongoose.connect(mongoString);
// const database =  mongoose.connection;
// database.on('error',(error)=>{
//     console.log(error);
// });
// database.once('connected',()=>{
//     console.log("Database connected");
// })
(async () => {
    try {
      const db = await connectToDatabase();
      
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  })();

App.use(express.json());
App.use(cors());

App.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
App.use("/api",userRoute);
App.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})