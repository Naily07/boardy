import getBoardModel from "@/models/boardModel"
import { NextResponse } from "next/server"

export async function GET(req : Request){
    // await connectDb()
    const board = await getBoardModel()
    const boardList = await board.find()
    return Response.json(boardList)
}

export async function POST(req : Request){
    const board = await getBoardModel()
    const request = await req.json() 
    console.log("reqq : ", request);
    let slug : string[] | string = (request.name).split(" ").join("-")

    const newBoard = new board({
        name : request.name,
        slug : slug
    })
    await newBoard.save()
    return NextResponse.json({status : 201})
}