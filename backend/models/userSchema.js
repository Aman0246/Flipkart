const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
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
    }
});

const user = mongoose.model('user', userSchema);

module.exports={user};


   // username: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true,
    //     index: true,
    //     lowercase: true
    // },