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
    }
})

async function getBoardModel() {
    await connectDb()
    const board = mongoose.models.boards || mongoose.model("boards", boardModel)
    console.log("Model okk"); 
    return board
}

export default getBoardModel