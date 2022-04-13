const mongoose = require('mongoose');


var tasksSchema = mongoose.Schema({
    name: String,
    category: String,
    owner: String,
    dateInsert: Date,
    dateDue: Date,
    dateCloture: Date,
})

var messagesSchema = mongoose.Schema({
    title: String,
    content: String,
    dateExp: Date,
    read: Boolean,
    sender: String,
})



var usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    dateInsert: Date,
    messages: [messagesSchema],
    tasks: [tasksSchema],
})


    const userModel = mongoose.model('users', usersSchema);

    
    module.exports = userModel;

  