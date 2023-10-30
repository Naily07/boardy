
import { color } from "framer-motion"
import { Box, Flex, Text, Button, SimpleGrid, Grid} from "../assets/chakra"
import { Link } from "../assets/Linknext-js"
import { theme } from "@/app/providers"

const resultats = [
    {slug : "slug", name :"Nom"},
    {slug : "slug", name :"Nom"}
]


async function getList(){
    try {
        const res = await fetch("http://127.0.0.1:3000/api/board", {cache:"no-store"})
        const results = await res.json()
        return results
    } catch (error) {
       console.log("Erreur cacth : ", error);
    }
}

export default async function ListBoard(){
    const results = await getList()
    
    return(
        <SimpleGrid gridTemplateColumns={"1fr 1fr"}> 
            <Flex flexDirection="column" alignItems={"center"} mt={"50px"} >
                <Flex justifyContent={"left"} flexDir={"column"}>
                <Text as="h2" fontWeight={"800"} fontSize={"2rem"} mb={"20px"}> The Board List</Text>
                    {results && results.map((data : {name : string, slug : string})=>{
                        return (
                        <Link href={`/boards/${data.slug}`}  key={data.name}>
                            <Button 
                                colorScheme="light"
                                mt="20px" variant={'outline'} size={"lg"} borderRadius={"5px"} p="1em 2em 1em 2em"
                            >
                                {data.name}?
                            </Button>
                        </Link>)
                    })}     
                </Flex>
            </Flex >
            <Flex justifyContent="center" h="100%" alignItems="center">
                <Link href={"/boards"}>
                    <Button fontWeight={"800"} variant={'solid'} fontSize={"1.5rem"}>Create Board</Button>
                </Link>
            </Flex >
        </SimpleGrid >
    )
}