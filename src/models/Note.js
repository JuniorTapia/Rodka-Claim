const mongoose=require('mongoose');

const {Schema}= mongoose;

const NoteSchema = new Schema({
    title:{type: String, required:true},
    description: {type:String, required:true},
    priority: {type:String, default: "Low"},
    status: {type:String, default: "Sent"},
    solution: {type:String, default: "Pending solution"},
    date:{type:Date, default:Date.now()},
    user:{type: String}
});

module.exports = mongoose.model('Note',NoteSchema)