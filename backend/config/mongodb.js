import dns from "node:dns";

import mongoose from "mongoose";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/MedicoCare`)

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.