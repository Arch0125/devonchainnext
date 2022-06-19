import React, { useState } from 'react';
import { Divider, Flex,Text,Stack,Input,InputGroup,InputLeftAddon,Textarea, Button } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useProvider,useContract,useSigner } from 'wagmi';
import DevOnChainABI from '../src/contracts/ABI/DevOnChainABI.json'
import UseContract from '../src/hooks/UseContract';
const AddHack = () => {
    const[name,setName]=useState('');
    const[date,setDate]=useState('');
    const[mode,setMode]=useState('');
    const[address,setAddress]=useState('');
    const[desc,setDesc]=useState('');

    const contract = UseContract();

    const addHackathon=()=>{
        contract.addHackathon(name,date,mode,address,desc);
    }

    return ( 
        <Flex alignItems={'center'} flexDirection={"column"}  width={"100vw"} height={"100vh"} bgColor={"gray.100"} >
            <Flex flexDirection={"column"} pb={"50px"} alignItems={'center'} pt={"50px"} bgColor={'white'} mt={"50px"} width={'70vw'} height={"fit-content"} border={"2px"} borderColor={"gray.200"} borderRadius={"40px"} shadow={"xl"} >
                <Text color={'purple.600'} fontSize={"3xl"} fontWeight={"bold"} >✨ Enter Hackathon Details ✨</Text>
                <Divider colorScheme={'black'} />
                <Stack mt={"20px"} spacing={4}>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} color={'white'} >Name</InputLeftAddon>
                        <Input onChange={e=>setName(e.target.value)} color={'blackAlpha.600'} borderColor={'purple.400'} width={"100%"} />
                    </InputGroup>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} color={'white'} >Date</InputLeftAddon>
                        <Input onChange={e=>setDate(e.target.value)} color={'blackAlpha.600'} borderColor={'purple.400'} width={"100%"} />
                    </InputGroup>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} color={'white'} >Mode</InputLeftAddon>
                        <Input  onChange={e=>setMode(e.target.value)} color={'blackAlpha.600'} borderColor={'purple.400'} width={"100%"} />
                    </InputGroup>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} color={'white'} >Prize Pool Wallet</InputLeftAddon>
                        <Input  onChange={e=>setAddress(e.target.value)} color={'blackAlpha.600'} borderColor={'purple.400'} width={"100%"} />
                    </InputGroup>
                    <Text color={'blackAlpha.800'} >Details about Hackathon : <Textarea onChange={e=>setDesc(e.target.value)} borderColor={'purple.400'} color={'black'}/></Text>
                    <Button onClick={addHackathon} bgColor={"purple.600"} color={'white'} variant={"solid"} colorScheme={"purple"} >Launch &nbsp; 🚀</Button>
                </Stack>
            </Flex>
        </Flex> 
     );
}
 
export default AddHack;