// logic fromm coonect with the database
// drive link     mongodb+srv://food:food2207@foodcluster.puqha.mongodb.net/? 

import mongoose from 'mongoose';

export const connectDB = async ()=>{
    await mongoose.connect('Add Your Mongodb link').then(()=>console.log('db connected'));

} 
