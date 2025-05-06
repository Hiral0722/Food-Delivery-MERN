// logic fromm coonect with the database
// drive link     mongodb+srv://food:food2207@foodcluster.puqha.mongodb.net/? 

import mongoose from 'mongoose';

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://food:food2207@foodcluster.puqha.mongodb.net/food-del').then(()=>console.log('db connected'));

} 