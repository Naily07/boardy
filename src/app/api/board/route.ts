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
    let request = await req.json() 
    let slug : string[] | string = (request.name).split(" ").join("-")
   
    let name : string[]  = (request.name).split("")
    if(name.indexOf("?") > -1){
        let newRequest  = {name : ""}
        let index : number = name.indexOf("?")
        newRequest.name = request.name.slice(0, index)
        request.name = newRequest.name
        slug = (request.name).split(" ").join("-")
    }

    const newBoard = new board({
        name : request.name,
        slug : slug
    })
    await newBoard.save()
    return NextResponse.json({status : 201})
}