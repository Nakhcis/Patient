 const jwt= require('jsonwebtoken')

 const asyncHandler = require('express-async-handler')
 const User = require('../models/userModel')

 const loginUser = asyncHandler((req,res) => {
    const {username,password}=req.body;
    try{
      const foundUser= User.findOne({ username}).exec();
      
    if (!foundUser || !foundUser.comparePassword(password, foundUser.password)) {
      res.status(401).json({ error: 'Identifiants invalides.' });
    } else {
      const token = jwt.sign({ userId: foundUser._id }, 'secret', {
        expiresIn: '1h',
      });
      res.status(200).json({ token });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Une erreur s'est produite lors de la connexion." });
  }
    
   })



 const registerUser = asyncHandler(async(req,res) => {
    const {name, email, password}= req.body

    if (!name || !email || !password) {
        res.status(404)

        throw new Error('Please add all fields')
    }

    res.json({ message: 'Register User'})
    const newUser= new User({name,email,password})
    newUser.password = newUser.hashPassword(newUser.password);
    const savedUser =await newUser.save();
    return res.status(201).send(savedUser);
 })

 const deleteUser = asyncHandler(async(req,res) => {
   try {
      const {id}= req.params
   const removeUser= await User.findByIdAndDelete(id);
   if (removeUser){
      return res.status(200).send({message:'user deleted successfuly'});
      } else {
         return res.status(401).send({message:"Error deleting the user"});}
   } catch(error) {
      console.log(error)
      res.status(500).send({message: error.message})
   }
 });

 const updateUser = asyncHandler(async(req,res)=>{
   try{ 
      const {id}= req.params
      const updateUser= await User.findByIdAndUpdate(id, req.body);
      if (updateUser){
         return  res.status(200).send({message:'user updated successfully'});
      } else {
         return res.status(401).send({message:"Error updating the user"});
      } 
   } catch (error){
      console.log(error)
      res.status(500).send({message: error.message})
   }
 })
   
 module.exports = {
    registerUser,
    loginUser,
    deleteUser,
    updateUser
    
 }
