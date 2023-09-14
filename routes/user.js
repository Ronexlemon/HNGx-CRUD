const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const mongoose = require('mongoose');


function isLastCharacterSemicolon(inputString) {
    if (typeof inputString === 'string' && inputString.length > 0) {
      // Get the last character of the input string
      const lastCharacter = inputString.charAt(inputString.length - 1);
       if (lastCharacter ===";" || "-"|| "/" || "*"){
        return false
       }
      // Check if it's a semicolon
      return true
    }
    
  }

function isValidString(input) {
    // Check if the input is a string and not empty after trimming whitespace
    if (typeof input === 'string' && input.trim() !== '') {
      return true; // It's a valid non-empty string
    } else {
      return false; // It's not a valid string or it's empty/whitespace
    }
  }
router.post('/',async (req, res) => {
    const userName = req.body.username;
    if(isValidString(userName)){

        const data = new User({
            _id:new mongoose.Types.ObjectId(),
            username: userName
        
        })
        
        try{
            const dataToSave =await  data.save();
            console.log('Saved data:', dataToSave); // Add this line for logging
            res.status(200).json(dataToSave)
        }catch(error){
            console.log('Save error:', error); 
            res.status(400).json({message: error.message})
        }
       // res.send('Post API')
    }else{
        res.send("Wrong data input");
    }
    
})

//Get all Method
router.get('/getAll',async (req, res) => {
    try{
 const data = await User.find().exec()
 .then(user =>{
    res.json(user);

 });
 
    }catch(error){
        res.status(500).json({message: error.message})
    }
   
})

//Get by ID Method
router.get('/:user_id', async(req, res) => {
    try{
        const data = await User.findById(req.params.user_id);
        res.json(data);
           }catch(error){
               res.status(500).json({message: error.message})
           }
})

//Update by ID Method
router.patch('/:user_id',async (req, res) => {
    try{
        let id = req.params.user_id;
        const upDateData = req.body;
        const options = {new:true};
        const results = await User.findByIdAndUpdate(id,upDateData,options);
        res.send(results);

    }catch(error){
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/:user_id',async (req, res) => {
    try{
let id = req.params.user_id;
const data = await User.findByIdAndDelete(id);
res.send(`Deleted the ${data.username} and ${data._id} successfull`)
    }catch(error){
res.status(400).json({message:error.message});
    }
    
})

module.exports=router;