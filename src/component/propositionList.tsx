import {Box} from '../assets/chakra'
// import { useState } from "react";
// import datasProposition from "public/dataProp.json"
// import {getProposition} from '@/app/api/proposition/getProposition'
import SingleProposition from './singleProposition'

const proposition = [
    {title : "Comment nommez un slug ?", note: 5},
    {title : "Comment nommez un slug ?", note: 5},
    {title : "Comment nommez un slug ?", note: 5},
    {title : "Comment nommez un slug ?", note: 5},
]

export default async function Proposition({params} : {params : {slug : string}}){
    // const datas = await getProposition(params)
    const datas = proposition
    // let resultat
    // let datas
    // try {
    //     resultat = await fetch(`http://localhost:3000/api/proposition/`, {
    //         method : "GET",
    //         headers : {
    //             "content-type":"application/json"
    //         },
    //         body : JSON.stringify(params)
    //     })
    //     datas = await datas.json()
    // } catch (error) {
    //     console.log("Error fetching list proposition", error.message);
    // } 
    // console.log("Obtain", datas);
    return(
        <Box >
            {/* {datas} */}
            {datas && datas.map((data)=>{
                return(<SingleProposition propo={{title : data.title, note : data.note}} key={data.title} />)
            })}
        </Box>
    )
}   


