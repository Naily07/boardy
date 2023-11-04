import connectDb from "@/libs/connetDb"
import getBoardModel from "@/models/boardModel"
import { getPropositionModel } from "@/models/propositionModel"
import { NextResponse } from "next/server"

export async function GET(req : Request, {params} : {params : {slug : string}}){
    await connectDb()
    const board = await getBoardModel()
    const idBoard = await board
    .findOne({slug : params.slug})
    .select("_id")
    console.log("IDD = ", idBoard);

    const proposition = await getPropositionModel()
    const listPropo = await proposition
    .find({board : idBoard})
    // .populate("board")
    .select("title note")
    console.log(listPropo)    
    return NextResponse.json(listPropo, {status : 201})
}