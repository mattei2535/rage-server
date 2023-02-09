import mongoose from "mongoose";

const { Schema } = mongoose;

const AccountSchema = new Schema({
    username: String,
    money: Number
})

export const Account = mongoose.model('Account', AccountSchema);