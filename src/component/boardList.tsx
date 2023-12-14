
import { color } from "framer-motion"
import { Box, Flex, Text, Button, SimpleGrid, Grid} from "../assets/chakra"
import { Link } from "../assets/Linknext-js"
import { theme } from "@/app/(site)/providers"

const resultats = [
    {slug : "slug", name :"Nom"},
    {slug : "slug", name :"Nom"}
]


async function getList(){
    try {
        const res = await fetch(`${process.env.localhost}/api/board/`, {cache:"no-store"})
        const results = await res.json()
        return results
    } catch (error) {
       console.log("Erreur cacth : ", error);
    }
}

export default async function ListBoard(){
    const results = await getList()
    return(
        <Flex  
            justifyContent={ "center"}
            alignItems={{md : "center", base : "center"}}
            flexDir={{md:"row-reverse", base : "column" }}
            // flexDirection={"row"}
        > 
            <Flex 
                justifyContent={"center"}
                h={{md : "100%"}}
                w={{md : "50%"}}
                alignItems={{md:"center", base:"left"}}
                mt={{base : "20px"}}
            >
                <Link href={"/boards/newBoard"}>
                    <Button fontWeight={"800"} variant={'solid'} fontSize={"1.5rem"}>Create Board</Button>
                </Link>
            </Flex >
            <Flex
                w={{md : "50%"}}
                mt={"50px"}
                pl={{md : "100px"}}
                justifyContent={"left"}
                alignItems={"left"}
            >
                <Flex justifyContent={"left"} flexDir={"column"}>
                <Text as="h2" fontWeight={"800"} fontSize={"2rem"} mb={"20px"}> The Board List</Text>
                    {results && results.map((data : {name : string, slug : string})=>{
                        return (
                        <Link href={`/boards/${decodeURIComponent(data.slug)}`}  key={data.name}>
                            <Button 
                                colorScheme="light"
                                mt="20px" variant={'outline'} size={"lg"} borderRadius={"5px"} p="1em 2em 1em 2em"
                            >
                                {data.name} ?
                            </Button>
                        </Link>)
                    })}     
                </Flex>
            </Flex >
            
        </Flex >
    )
}