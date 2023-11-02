"use client"

import { Flex, Box, Button, SimpleGrid } from "@/assets/chakra"
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Container
  } from '@chakra-ui/react'
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";



export default function CreateBoard(){
    const ref = useRef<HTMLInputElement>(null)
    const route = useRouter()
    const handleSubmit = (e : FormEvent<HTMLFormElement>)=>{
        if(ref.current){
            try {
                fetch(`${process.env.localhost}/api/board/`,{
                    method : 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify({name : ref.current.value})
                })
                .then(_=>{
                    route.push("/")
                })
            } catch (error) {
                console.log("post Erreur : ", error);
            }
        }
        e.preventDefault()                      
    }
    return (
        <Flex justifyContent={"center"} alignItems={"center"} >
            <Container p={"20px"} justifyItems={"center"} 
            border={"1px solid white"}
            w={"500px"} h={"600"}
            >
                <form onSubmit={handleSubmit}>
                <FormControl >
                    <FormLabel as='label' 
                        border={"1px solid white"} 
                        bgGradient={"Linear(to-l, green.200, pink.500)"}
                        bgClip={"text"} 
                        p={"10px 20px 10px 20px"} 
                        textAlign={"center"} 
                        fontSize={"1.5em"} fontWeight={"800"}
                        >
                            Créer une Board
                    </FormLabel>
                    <SimpleGrid spacing={"20px"} mt={"40px"} >
                        <Input type="text" border={"1px solid gray"} 
                            _focus={{borderColor:"pink"}}
                            ref={ref}
                            required
                        />
                        <FormHelperText color="White">Faites une proposition pour vos amis</FormHelperText>
                        <Button type="submit" color="pink" variant={"outline"} fontSize={"0.5 rem"}
                            _hover={{bgColor : "none"}}
                        >Envoyer</Button>
                    </SimpleGrid>
                    </FormControl>
                </form>
            </Container>    
        </Flex>
    )
}