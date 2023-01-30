const mongoose = require("mongoose");

mongoose.set('strictQuery',false);
const connection = mongoose.connect("mongodb+srv://lovoda_clone:oSZsE2XPOb8NTSkG@cluster0.txulumb.mongodb.net/lovoda_clone?retryWrites=true&w=majority",{
    useNewUrlParser: true
    // useUnifiedTopology: true,
});

module.exports = connection;