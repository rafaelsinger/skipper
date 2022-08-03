import mongoose from 'mongoose';
const { Schema, model, models } = mongoose;

const UserSchema = new mongoose.Schema({
    email: {    
        type: String,
        required: [true, 'Please enter a valid email.']
    },
    uid: {
        type: String,
        required: [true]
    }
})

const User = models.User || model('User', UserSchema);

export default User;