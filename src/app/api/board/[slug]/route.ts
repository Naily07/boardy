import connectDb from "@/libs/connetDb";
import getBoardModel from "@/models/boardModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest, {params} : {params : {slug : string}}){
    await connectDb()
    const board = await getBoardModel()
    const oneBoard = await board
    .findOne({slug : params.slug})
    console.log("One", oneBoard);
    
    return NextResponse.json(oneBoard, {status : 200})
}