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
    Flex,
    Button,
    Link
  } from '@chakra-ui/react'
import UseContract from '../hooks/UseContract';

const CertificateList = () => {

    const contract = UseContract();

    const[certs,setCerts]=useState([]);

    const getList=async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        setCerts([]);
        for(let i =1;i<=parselist;i++){
            var cert = await contract.getMyCertificates(i);
           {
                setCerts((certs)=>[...certs,cert])
            }
        }
    }

    return ( 
        <>
        <Button mt={"10px"} onClick={getList} variant={"solid"} colorScheme={"purple"} >Refresh List</Button>
        <Flex width={'100%'} color={'blackAlpha.700'} mt={'20px'} >
            <TableContainer width={'100vw'} borderColor={'blackAlpha.200'} rounded={'2xl'} borderWidth={'1px'} >
                <Table variant={'simple'} textAlign={'center'} >
                    <Thead>
                    <Tr>
                        <Th>Hackathon Organizer</Th>
                        <Th>Certificate</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                    {
                       Object.keys(certs).map((cert,index)=>(
                        <>
                            <Td>{certs[index].org}</Td>
                            <Td>
                                <Link href={certs[index].hash} ><Button>View Certificate</Button></Link>
                            </Td>
                        </>
                        
                       ))
                    }
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
        </>
     );
}
 
export default CertificateList;