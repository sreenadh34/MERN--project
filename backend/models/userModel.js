import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      required: [true, 'Please add a text name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;