import React from 'react';
import { Flex,Button, ButtonGroup } from '@chakra-ui/react';
 const SponsorList = () => {
    return ( 
        <Flex alignItems={'center'} mt={"10px"} justifyContent={'space-between'} flexDirection={'row'} padding={'10px'} bgColor={'gray.50'} width={'100%'} color={'purple.700'} > 
            <Button color={'blueviolet'} fontSize={'xl'} >Polygon</Button>
            <ButtonGroup>

            <Button variant={'solid'} colorScheme={'purple'} >View Proposal</Button>
            <Button variant={'solid'} colorScheme={'purple'} >Accept Proposal</Button>
            </ButtonGroup>
        </Flex>
     );
 }
  
 export default SponsorList;