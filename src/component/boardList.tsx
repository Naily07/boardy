import { Box, Flex, Text, Button, SimpleGrid, Grid} from "../assets/chakra"
import { Link } from "../assets/Linknext-js"

const results = [
    {slug : "slug", name :"Nom"},
    {slug : "slug", name :"Nom"}
]

export default async function ListBoard(){
    // const results = await getList() 
    // console.log(results);
    return(
        <SimpleGrid gridTemplateColumns={"1fr 1fr"}>  
            <Flex flexDirection="column" alignItems={"center"} mt={"50px"} >
                <Flex justifyContent={"left"} flexDir={"column"}>
                <Text as="h2" fontWeight={"800"} fontSize={"2rem"} mb={"20px"}> The Board List</Text>
                    {results &&  results.map((data)=>{
                        return (
                        <Link href={`/boards/${data.slug}`}  key={data.name}>
                            <Button mt="20px" variant={'outline'} size={"lg"} borderRadius={"5px"} p="1em 2em 1em 2em">
                                {data.name}?
                            </Button>
                        </Link>)
                    })}     
                </Flex>
                           
            </Flex >
            <Flex justifyContent="center" h="100%" alignItems="center" >
                <Link href={"/boards"}>
                    <Button fontWeight={"800"} variant={'solid'} fontSize={"1.5rem"}>Create Board</Button>
                </Link>
            </Flex >
        </SimpleGrid >
    )
}