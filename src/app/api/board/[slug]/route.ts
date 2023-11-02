import getBoardModel from "@/models/boardModel";
import { getPropositionModel } from "@/models/propositionModel";
import { NextResponse } from "next/server";

export async function GET(req : Request, res : Response){
    const request = await req.json()
    const board = await getBoardModel()
    const boardId = await board
    .findOne({slug : request.params.slug})
    .select("id")

    const propo = await getPropositionModel()
    const listPropo = await propo
    .find({author : boardId})
    // .populate("board", "id")
    .select("title note")

    return NextResponse.json(listPropo, {status : 201})
}