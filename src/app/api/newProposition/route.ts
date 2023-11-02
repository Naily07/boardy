import getBoardModel from "@/models/boardModel";
import { getPropositionModel } from "@/models/propositionModel";

export async function POST(req : Request){
    console.log("POSTEKO");
    try {
        const propo = await getPropositionModel() 
        const request = await req.json()
        console.log("request sur Post ", request);
    
        const board = await getBoardModel()
        const author = await board.find({slug : request.slug})
        const data = new propo({
            title : request.title,
            note : 0,
            board : author
        })
        await data.save()   
    } catch (error) {
        console.log("Errorou");
        
    }
    
    return Response.json({status : 201})
}