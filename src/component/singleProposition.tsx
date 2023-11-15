"use client"
import { useState } from 'react'
import {Flex, Text, SimpleGrid, Button} from '../assets/chakra'
import { useRouter } from 'next/navigation'
// import {setNote} from "@/app/api/proposition/setNote"



type PropoType = {
    propo : {
        title : string,
        note : number    
    }
}

export default function SingleProposition({propo}:PropoType){
    const router = useRouter()
    const [note, setNote] = useState(propo.note)

    const handleClick = ()=>{
        setNote(note => note + 1)
        try {
            fetch(`http://localhost:3000/api/propositions/`, {
                method:'PUT',
                headers : {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({title : propo.title, note : note + 1})
            })
            .then(()=>{
                router.refresh()
            })
            .catch(err=>console.log("Errooor", err))   
        } catch (error) {
            console.log("Error fetch", error);
        }
    }

    return(
        <SimpleGrid gridTemplateColumns={"90% 10%"}
            alignItems={"center"}  bg={"blackAlpha.700"} 
            m={"20px 0px 20px 0px"}
            p={"10px"} 
            color={"white"}
            borderRadius={"10px"}>
            <Text fontSize={"1.5rem"} > {propo.title} </Text>
            <Flex justifyContent="center" alignItems="center" border={"1px solid green"} >
                <Button 
                    variant={"unstyled"} 
                    onClick={handleClick} bg={"blackAlpha.700"} 
                    color={"white"}
                    p="10px"
                >
                    {note}
                </Button>
            </Flex>
        </SimpleGrid >
    )
}