
// import { useState } from "react";
// import datasProposition from "public/dataProp.json"
// import {getProposition} from '@/app/api/proposition/getProposition'
import SingleProposition from './singleProposition'
import { Box } from '@chakra-ui/react'
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
    const slug =  decodeURIComponent(params.slug)
    try {
        resultat = await fetch(`http://localhost:3000/api/board/${slug}`, {cache:"no-store"})
            .then(res=> res.json())
        datas = await resultat
    } catch (error) {
        console.log("Error fetching list proposition", error);
    } 
    console.log("Obtain", datas);
    return(
        <>
            {/* {datas} */}
            {datas && datas.map((data : {title : string, note : number})=>{
                return(<SingleProposition key={data.title} propo={{title : data.title, note : data.note}} />)
            })}
        </>
    )
}   


