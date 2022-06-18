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
            <TableContainer width={'100vw'} >
                <Table variant='simple'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                    <Tr>
                        <Th>To convert</Th>
                        <Th>into</Th>
                        <Th isNumeric>multiply by</Th>
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