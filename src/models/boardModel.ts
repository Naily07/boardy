import connectDb from "@/libs/connetDb"
import mongoose from "mongoose"

const boardModel = new mongoose.Schema({
    name  : {
        type : String,
        require : true,
        maxLenght : 255
    },
    slug : {
        type : String,
        require : true
    },
    propositions : [{type : mongoose.Schema.Types.ObjectId, ref : "proposition"}] //des propositions pour chaque
})

async function getBoardModel() {
    await connectDb()
    const board = mongoose.models.boards || mongoose.model("boards", boardModel)
    return board
}

export default getBoardModel