import getBoardModel from "@/models/boardModel"
import { NextResponse } from "next/server"

export async function GET(req : Request){
    // await connectDb()
    const board = await getBoardModel()
    const boardList = await board.find()
    return Response.json(boardList)
}

