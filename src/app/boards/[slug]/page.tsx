import Proposition from '../../../component/propositionList'
// import FromProposition from './form'
// import React from "react"
import {Flex, Box, Text, Button} from '../../../assets/chakra'
import {PropsWithChildren} from "react"
import Link from 'next/link'


type props = PropsWithChildren<{
    params : {slug : string}
}>

export default async function singleBoard({params, children}:props){
    return(
    <Flex justifyContent={"center"} alignItems="center" 
        flexDirection={"column"} h={"100vh"}
    >
        <Box className="card" border={"1px solid gray"} w="auto" p={"60px 40px 80px 40px"}>
            <Text fontSize={"2.5rem"} as={"h2"} textAlign={"center"} pb={"20px"}>{(params.slug)}?</Text>
            {/* {board} */}
            <Flex >
                <Link href="/boards/createProposition"
                >
                    <Button
                    variant={"unstyled"}
                    p={"10px 5px 10px 5px"}
                    bgGradient={"Linear(to-l, green.200, pink.500)"}
                    bgClip={"text"}
                    border={"1px solid white"}
                    >
                        Créer une nouvelle proposition
                    </Button>
                </Link>
                {/* <FormProposition params={params}/>   */}
            </Flex >
            <Box>
                <Proposition params={params}/>
            </Box>
        </Box>
    </Flex>
    )
}