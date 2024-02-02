const mongoose = require("mongoose")

require("dotenv").config();

const db = async () => {
    try {  
        await  mongoose.connect(process.env.MONGODB_URI, { 
            // useNewUrlParser: true,
            // useUnifiedTopology: true 
        });
        console.log("DB connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = db;