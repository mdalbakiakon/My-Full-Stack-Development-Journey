import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name : String,
  address: String,
  order_qt : Number
});

// Define and export the model
export default model('Users', userSchema);
