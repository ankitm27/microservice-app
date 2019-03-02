const  mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.promise = global.Promise;
    mongoose.connect(config.mongoURI)
    console.log(mongoose.connection);
}