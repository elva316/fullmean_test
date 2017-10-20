// require mongoose
var mongoose = require('mongoose');                       //*****     1     //    connect DB

// create the schema
var SubjectSchema = new mongoose.Schema({                //*****     2     //
 note: {type: String, required: true, minlength: 4},

},{timestamps: true })


// register the schema as a model

var Subject = mongoose.model('Subject', SubjectSchema) // We are retrieving    //*****     3     //
