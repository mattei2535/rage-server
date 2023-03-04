import "./schemes"
import mongoose from "mongoose";

mongoose.set('strictQuery', true);

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/ragemp');
}

main().catch(err => console.log(err));

main().then(() => {
    console.log('[!] Database loaded succesfully');
	}).catch((err) => console.error(err));
