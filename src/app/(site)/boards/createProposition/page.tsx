"use client"
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Box,
    Button,
    useBoolean,
    Flex,
    Container
} from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef, useState, FormEvent } from 'react'



export default function FormProposition({query} : {query : string}){
    const ref = useRef<HTMLInputElement>(null)
    const router = useRouter()
    const params = useSearchParams()
    const [activeBouton, setActiveBouton] = useBoolean(false)
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        if(ref.current)
        try {
            fetch(`http://localhost:3000/api/newProposition/`, {
                method:'post',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({title : ref.current.value, slug : params.get("demande")})
                
            })
            .then(_=>router.push(`/boards/${params.get("demande")}`))
        } catch (error) {   
            console.log("Erreur de fetch : ", error); 
        }
        e.preventDefault()
    }
    // const handleChange = ()=>{
    //     if(ref.current){
    //         const tab = (ref.current?.value).split('')
    //         // let isLetter:boolean = false
    //         // isLetter = tab.find((el:string)=>{
    //         //     if(el !== " "){
    //         //         return true    
    //         //     }
    //         //     else return false
    //         // })
    //         // if (isLetter) {
    //         //     setActiveBouton.off()
    //         // }else setActiveBouton.on()
    // }
    // }
    return(
        <Flex justifyContent={"center"}  >
           
            <Container  border={"1px solid gray"} w="auto" p={"60px 40px 80px 40px"}>
                <form onSubmit={handleSubmit}>
                    <FormControl >
                        <FormLabel as='label' 
                        bgGradient={"Linear(to-l, green.200, pink.500)"}
                        bgClip={"text"} 
                        p={"20px 20px 20px 0px"} 
                        fontSize={"1.5em"} fontWeight={"800"}
                        >
                            Donnez votre proposition
                        </FormLabel>
                        <Box >
                            <Input  type="text" ref={ref} required/>
                            <FormHelperText color={"White"}>Voter pour la meilleur proposition  </FormHelperText>
                            <Button type={"submit"} isDisabled={activeBouton} variant="solid" mt={"20px"} bgColor={"cyan.500"} color={"white"}> Envoyer</Button>        
                        </Box>
                    </FormControl>
                </form>
            </Container>
        </Flex>
    )
}