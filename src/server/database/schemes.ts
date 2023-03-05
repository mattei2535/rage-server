import mongoose from "mongoose";

const { Schema } = mongoose;

declare global {
    export interface UserInfo {
        username: string
        email: string
        password: string
        money:  number
    }
}



const AccountSchema = new Schema<UserInfo>({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    money: {type: Number, default: 0, maxlength: 999999999}
})

export const Account = mongoose.model('Account', AccountSchema);