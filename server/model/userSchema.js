import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 50
    },
    // lastname: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     min: 5,
    //     max: 20
    // },
    // username: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true,
    //     index: true,
    //     lowercase: true
    // },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    cartItems:{
        type:Array,
        default:[]
    }
});

const member = mongoose.model('member', userSchema);

export default member;