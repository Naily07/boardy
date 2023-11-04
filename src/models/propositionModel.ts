import connectDb from "@/libs/connetDb"
import mongoose, { Mongoose } from "mongoose"

const propositionSchema = new mongoose.Schema ({
    title : String,
    note : Number,
    board : {type :  mongoose.Schema.Types.ObjectId, ref : "boards", required : true} //un board pour chaque
})

export async function getPropositionModel(){
    await connectDb()
    const proposition =  mongoose.models.propositions || mongoose.model("propositions", propositionSchema)
    return proposition
}

