import React from 'react';
import { Flex,Button,Text,Divider,Input } from '@chakra-ui/react';

const SetWinner = () => {
    return ( 
        <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >Declare Winners</Text>
                    <Divider/>
                    <Text mt={"20px"} width={'90%'} color={'blackAlpha.700'} >Address : <Input placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                    <Text mt={"10px"} width={'90%'} color={'blackAlpha.700'} >Amount in MATIC : <Input placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                    <Text mt={"10px"} width={'90%'} color={'blackAlpha.700'} >IPFS Hash : <Input placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                    <Button variant={'solid'} colorScheme={'purple'} mt={'20px'} color={'white'} >Send Prize</Button>
                </Flex>
        
     );
}
 
export default SetWinner;