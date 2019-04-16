var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    phone: String,
    questions: [{
        q: String,
        a: String,
        refId: Number //auto increment? 
    }]
});

module.exports = {
    User: mongoose.model("User", UserSchema),
    UserSchema: UserSchema
};
