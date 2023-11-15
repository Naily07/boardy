import connectDb from "@/libs/connetDb"
import getBoardModel from "@/models/boardModel"
import { getPropositionModel } from "@/models/propositionModel"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req : NextRequest, params : {slug : string}){
    await connectDb()
    const board = await getBoardModel()
    const slug = await req.nextUrl.searchParams.get("slug")
    const idBoard = await board
    .findOne({slug : slug})
    .select("_id")
    // console.log("IDD = ", idBoard);

    const proposition = await getPropositionModel()
    const listPropo = await proposition
    .find({board : idBoard})
    .sort({note : -1})
    // .populate("board")
    .select("title note")
    // console.log(listPropo)    
    return NextResponse.json(listPropo, {status : 201})
}


export async function PUT(req : Request, res : Response){
    await connectDb()
    const params = await req.json()
    const proposition = await getPropositionModel()
    console.log("Rams", params);
    const data = await proposition
    .findOne({title : params.title})
    if(data){
        data.note = params.note;
        await data.save()
    }
    else
        console.log("No update File");
        
    return NextResponse.json({status : 200})

}