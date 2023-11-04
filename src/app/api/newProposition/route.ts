import getBoardModel from "@/models/boardModel";
import { getPropositionModel } from "@/models/propositionModel";

export async function POST(req : Request){
    console.log("POSTEKO");
    
    try {
        const propo = await getPropositionModel() 
        const request = await req.json()
        const board = await getBoardModel()

        const authorId = await board
        .findOne({slug : request.slug})
        .select("id")
        const data = new propo({
            title : request.title,
            note : 0,
            board : authorId
        })
        await data.save()   
    } catch (error) {
        console.log("Errorou", error);
    }
    
    return Response.json({status : 201})
}