import Proposition from '../../../../component/propositionList'
// import FromProposition from './form'
// import React from "react"
import {Flex, Box, Text, Button} from '../../../../assets/chakra'
import {PropsWithChildren} from "react"
import Link from 'next/link'


type props = {
    params : {slug : string}
}

async function getOneBoard(params : {slug : string}){
    let board
    try {
        const res = await fetch(`${process.env.url}/api/board/${params.slug}`, {cache:"no-store"})
        board = await res.json()
    } catch (error) {
        console.log("error name : ", error);
    }
    console.log(board);
    
    return board
}


export default async function singleBoard({params}:props){
    const {name} = await getOneBoard(params)
    return(
    <Flex justifyContent={"center"} alignItems="center" 
        flexDirection={"column"} h={"100vh"}
    >
        <Box className="card" border={"1px solid gray"} minW    ="400px" p={"60px 40px 80px 40px"}>
            <Text fontSize={"2.5rem"} as={"h2"} textAlign={"center"} pb={"20px"}>
                {name.indexOf("?") == -1 ?<> {name} ? </> : <>{name}</>}
                {/* {name} ? */}
            </Text>
            {/* {board} */}
            <Flex >
                <Link href={{pathname : "/boards/createProposition/", query :{demande : (decodeURIComponent(params.slug))}}}
                >
                    <Button
                    variant={"unstyled"}
                    p={" 0px 5px 0px 5px"}
                    bgGradient={"Linear(to-l, green.200, pink.500)"}
                    bgClip={"text"}
                    border={"1px solid white"}
                    >
                        Créer une nouvelle proposition
                    </Button>
                </Link>
            </Flex >
            <Box>
                <Proposition params={params}/>
            </Box>
        </Box>
    </Flex>
    )
}