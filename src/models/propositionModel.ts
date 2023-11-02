import connectDb from "@/libs/connetDb"
import mongoose, { Mongoose } from "mongoose"

const propositionSchema = new mongoose.Schema ({
    title : String,
    note : Number,
    board : {type :  mongoose.Schema.Types.ObjectId, ref : "board"} //un board pour chaque
})

export async function getPropositionModel(){
    await connectDb()
    const proposition =  mongoose.models.proposition || mongoose.model("Proposition", propositionSchema)
    const create = new proposition({
        title : "Nommer",
        note : 5,
    }) 
    await create.save()
    return proposition
}