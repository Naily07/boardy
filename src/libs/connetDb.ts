import mongoose from "mongoose";

async function connectDb(){
    try {
        mongoose.set("strictQuery", false)
        if(typeof process.env.MONGO_URI === "string")
            await mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("MongoDataBase connectée"))
        .catch((err)=>console.log("Error de connexion", err.message))    
    } catch (error) {
        console.log("Catcheer Failed BaseData", error);
    }
}

export default connectDb