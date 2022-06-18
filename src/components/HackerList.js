import React from 'react';
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

const HackerList = () => {
    return ( 
        <Flex width={'100%'} color={'blackAlpha.700'} mt={'20px'} >
            <TableContainer width={'100vw'} borderColor={'blackAlpha.200'} rounded={'2xl'} borderWidth={'1px'} >
                <Table variant={'simple'} textAlign={'center'} >
                    <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Wallet Address</Th>
                        <Th>Status</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>millimetres (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
     );
}
 
export default HackerList;