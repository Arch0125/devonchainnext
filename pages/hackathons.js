import { Divider, Flex,Text,Box } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import UseContract from '../src/hooks/UseContract';

const Hackathons = () => {


    return ( 
        <Flex flexDirection={"column"} height={"100vh"} width={"100vw"} bgColor={"white"} padding={'40px'} >
            <Text color={"purple.700"} fontSize={"4xl"} fontFamily={"heading"} fontWeight={"bold"} >
                Hackathons Organized
            </Text>
            <Box width={"90vw"} height={"1px"} bgColor={"purple"} />
            <Flex flexDirection={"row"} width={"100vw"} height={"fit-content"} wrap={"wrap"} padding={'30px'} >
            <Link href='./HackathonDetail' >
                <Flex flexDirection={"column"} textAlign={"center"} mx={"10px"} my={"10px"} justifyContent={'center'} width={"200px"} height={"200px"} border={"2px"} borderColor={"gray.200"} rounded={'2xl'} >
                    <Text color={"blackAlpha.700"} >Web3hack</Text>
                </Flex>
                </Link>
                <Link href='./AddHack' >
                <Flex flexDirection={"column"} textAlign={"center"} mx={"10px"} my={"10px"} justifyContent={'center'} width={"200px"} height={"200px"} border={"2px"} borderColor={"gray.200"} rounded={'2xl'} >
                    <Text color={"blackAlpha.700"} >Organize new <br/> Hackathon</Text>
                </Flex>
                </Link>
            </Flex>
        </Flex>
     );
}
 
export default Hackathons;