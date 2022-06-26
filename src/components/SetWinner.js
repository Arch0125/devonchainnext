import React, { useState } from 'react';
import { Flex,Button,Text,Divider,Input } from '@chakra-ui/react';
import UseContract from '../hooks/UseContract';
import { useSigner } from 'wagmi';
import { ethers } from 'ethers';

const SetWinner = () => {
    const[addr,setAddr]=useState(null);
    const[amt,setAmt]=useState(null);
    const[hash,setHash]=useState(null);

    const contract = UseContract();
    const signer = useSigner();

    const setWin=async()=>{
        contract.setWinner(addr.toString(),1,hash);
        const tx={
            to: addr.toString(),
            value: ethers.utils.parseEther(amt)
        }
        await signer?.data.sendTransaction(tx);

    }

    return (
        <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
            <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >Declare Winners</Text>
                <Divider/>
                <Text mt={"20px"} width={'90%'} color={'blackAlpha.700'} >Address : <Input onChange={e=>setAddr(e.target.value)}  placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                <Text mt={"10px"} width={'90%'} color={'blackAlpha.700'} >Amount in MATIC : <Input onChange={e=>setAmt(e.target.value)}  placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
                <Text mt={"10px"} width={'90%'} color={'blackAlpha.700'} >IPFS Hash : <Input onChange={e=>setHash(e.target.value)}  placeholder='Address' borderColor={'blackAlpha.500'} /></Text>
            <Button onClick={setWin} variant={'solid'} colorScheme={'purple'} mt={'20px'} color={'white'} >Send Prize</Button>
        </Flex>
     );
}
 
export default SetWinner;