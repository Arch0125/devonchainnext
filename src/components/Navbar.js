import { Flex, Text } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const Navbar = () => {
    return ( 
        <Flex direction={"row"} bgColor={"gray.200"} alignItems={"center"} justifyContent={"space-between"} width={"100vw"} height={"fit-content"} padding={"10px"} >
            <Text color={"purple.700"} fontWeight={'extrabold'} fontSize={"2xl"} >DevOnChain</Text>
            <ConnectButton/>
        </Flex>
     );
}
 
export default Navbar;