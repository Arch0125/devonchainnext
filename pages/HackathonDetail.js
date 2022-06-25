import { Button, Divider, Flex ,Input,Text} from '@chakra-ui/react';
import React, { useState } from 'react';
import HackerList from '../src/components/HackerList';
import UseContract from '../src/hooks/UseContract';
import { useEffect } from 'react';

const HackathonDetail = () => {
    const[detlist,setDetlist]=useState([]);
    const[parts,setParts]=useState([]);

    const contract = UseContract();

    const getHackDetails=async()=>{
        var details = await contract.getHackathon(1);
        var participants =  await contract.getParticipants(1);
        setDetlist(details)
        setParts(participants);
        console.log(parts)
    }

    return ( 
        <Flex flexDirection={'row'} width={'100vw'} height={'100vh'} bgColor={'gray.200'} wrap={'wrap'} >
            <Flex alignItems={'center'} width={'70%'} flexDirection={'column'} height={'100vh'} >
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >🤝 Available Sponsors 🤝</Text>
                    <Divider/>
                    <Flex alignItems={'center'} mt={"10px"} justifyContent={'space-between'} flexDirection={'row'} padding={'10px'} bgColor={'gray.50'} width={'100%'} color={'purple.700'} > 
                    <Button color={'blueviolet'} fontSize={'xl'} ><img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' width={'20px'} /> &nbsp; Polygon</Button>
                    <Button variant={'solid'} colorScheme={'purple'} >Submit Proposal</Button>
                    </Flex>
                </Flex>
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'start'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} alignSelf={'center'} fontSize={'xl'} fontWeight={'bold'} >📄 Wallet Details 📄</Text>
                    <Divider/>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} >Prize Pool Wallet : </Text>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} >Current Balance : </Text>
                    <Divider/>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} fontWeight={'bold'} >Recent Transactions </Text>
                </Flex>
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'start'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} alignSelf={'center'} fontSize={'xl'} fontWeight={'bold'} >👩‍💻 Hackers List 👨‍💻</Text>
                    <Divider/>
                    <HackerList/>
                </Flex>
            </Flex>
            <Flex width={'30%'} flexDirection={'column'} height={'100vh'} >
            <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >Declare Winners</Text>
                    <Divider/>
                    <Text mt={"20px"} width={'90%'} color={'blackAlpha.700'} >Address : <Input placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                    <Text mt={"10px"} width={'90%'} color={'blackAlpha.700'} >Amount in MATIC : <Input placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                    <Text mt={"10px"} width={'90%'} color={'blackAlpha.700'} >IPFS Hash : <Input placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                    <Button variant={'solid'} colorScheme={'purple'} mt={'20px'} color={'white'} >Send Prize</Button>
                </Flex>
            

            </Flex>
        </Flex>
     );
}
 
export default HackathonDetail;