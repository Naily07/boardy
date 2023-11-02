import {Box} from '../assets/chakra'
// import { useState } from "react";
// import datasProposition from "public/dataProp.json"
// import {getProposition} from '@/app/api/proposition/getProposition'
import SingleProposition from './singleProposition'

// const proposition = [
//     {title : "Comment nommez un slug ?", note: 5},
//     {title : "Comment nommez un slug ?", note: 5},
//     {title : "Comment nommez un slug ?", note: 5},
//     {title : "Comment nommez un slug ?", note: 5},
// ]

export default async function Proposition({params} : {params : {slug : string}}){
    // const datas = proposition
    let resultat
    let datas
    try {
        resultat = await fetch(`${process.env.localhost}/api/board/:slug`,{cache : "no-store"})
        datas = await resultat.json()
    } catch (error) {
        console.log("Error fetching list proposition", error);
    } 
    console.log("Obtain", datas);
    return(
        <Box >
            {/* {datas} */}
            {datas && datas.map((data : {title : string, note : number})=>{
                return(<SingleProposition propo={{title : data.title, note : data.note}} key={data.title} />)
            })}
        </Box>
    )
}   


