import React from 'react';
import { Flex,Button, ButtonGroup } from '@chakra-ui/react';
 const HackathonList = () => {
    return ( 
        <Flex alignItems={'center'} mt={"10px"} justifyContent={'space-between'} flexDirection={'row'} padding={'10px'} bgColor={'gray.50'} width={'100%'} color={'purple.700'} > 
            <Button color={'blueviolet'} fontSize={'xl'} >Web3Hacks</Button>
            <ButtonGroup>
            <Button variant={'solid'} colorScheme={'purple'} >Participate 🚀</Button>
            </ButtonGroup>
        </Flex>
     );
 }
  
 export default HackathonList;