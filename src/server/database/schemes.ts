import mongoose from "mongoose";

const { Schema } = mongoose;

declare global {
    export interface UserInfo {
        money:  number
    }
}



const AccountSchema = new Schema<UserInfo>({
    money: {type: Number, default: 0}
})

export const Account = mongoose.model('Account', AccountSchema);