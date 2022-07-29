const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "Email should be unique"],
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    mobNo: {
        type: Number,
        requires: true,
        unique: true,
        min: 5,
    },
    address: String,
});

const studentModalVal = new mongoose.model('Student', StudentSchema);
module.exports = studentModalVal;
