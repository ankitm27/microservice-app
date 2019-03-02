const  mongoose = require('mongoose');
const mailSchema = new mongoose.Schema({
    subject:String,
    receiver:String,
    content:String
});

const MailModel = mongoose.model('Mail', mailSchema);

module.exports = MailModel;