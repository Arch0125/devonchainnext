import { Flex, Text } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return ( 
        <Flex direction={"row"} bgColor={"white"} shadow={"2xl"} zIndex={"2"} alignItems={"center"} justifyContent={"space-between"} width={"100vw"} height={"fit-content"} padding={"10px"} >
            <Link href='./' ><Text cursor={'pointer'} color={"purple.700"} fontWeight={'extrabold'} fontSize={"2xl"} >👨‍💻 DevOnChain</Text></Link>
            <ConnectButton/>
        </Flex>
     );
}
 
export default Navbar;