const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    codigo_do_prato: {
    type: Number,
    required: true
},
    NomedoPrato: {
    type: String,
    required: true
},
    CategoriadoPrato: {
    type: String,
    required: true
}, 
    Tipo: {
    type: String,
    required: true
}},
{
    timestamps: true
})

    module.exports = mongoose.model("Comments", commentSchema);