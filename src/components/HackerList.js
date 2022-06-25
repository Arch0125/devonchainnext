import React, { useEffect } from 'react';
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
  import { useState } from 'react';
  import { Button } from '@chakra-ui/react';


const HackerList = () => {

    const[parts,setParts]=useState([]);

    const contract = UseContract();

    useEffect(()=>{
        getHackDetails();
    },[])

    const getHackDetails=async()=>{
        var details = await contract.getHackathon(1);
        var participants =  await contract.getParticipants(1);
        setParts(participants);
        console.log(parts)
    }

    return ( 
        <Flex width={'100%'} flexDirection={'column'} color={'blackAlpha.700'} mt={'20px'} >
            <Button onClick={getHackDetails} variant={"solid"} colorScheme={'purple'} width={'fit-content'} textColor={'white'} mb={'10px'} height={'fit-content'} p={'5px'} fontSize={'sm'} >Refresh List</Button>
            <TableContainer width={'100vw'} borderColor={'blackAlpha.200'} rounded={'2xl'} borderWidth={'1px'} >
                <Table variant={'simple'} textAlign={'center'} >
                    <Thead>
                    <Tr>
                        <Th>Wallet Address</Th>
                        <Th>Status</Th>
                        <Th>Action</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>{parts[0]}</Td>
                        <Td>{parts[2]}</Td>
                        <Td>
                            {
                                (parts[2]==='Accepted')?<Button variant={"solid"} colorScheme={'purple'} >Accept</Button>:<div>✅</div>
                            }
                        </Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
     );
}
 
export default HackerList;