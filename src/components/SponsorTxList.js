import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex
  } from '@chakra-ui/react'
import UseContract from '../hooks/UseContract';
const SponsorTxList = () => {
    const[reqs,setReqs]=useState([])

    const getReqList=async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        setHacks([]);
        for(let i =1;i<=parselist;i++){
            var hack = await contract.getHackList(i);
           {
                setHacks((hacks)=>[...hacks,hack])
            }
        }
    }

    return ( 
        <Flex width={'100%'} color={'blackAlpha.700'} mt={'20px'} >
            <TableContainer width={'100vw'} borderColor={'blackAlpha.200'} rounded={'2xl'} borderWidth={'1px'} >
                <Table variant={'simple'} textAlign={'center'} >
                    <Thead>
                    <Tr>
                        <Th>Hackathon</Th>
                        <Th>Wallet Address</Th>
                        <Th>Amount</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>inche</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>25.4</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
     );
}
 
export default SponsorTxList;