import { Button, Divider, Flex ,Text} from '@chakra-ui/react';
import React from 'react';
import SponsorList from '../src/components/SponsorList';
import SponsorTxList from '../src/components/SponsorTxList';

const Sponsorship = () => {
    return ( 
        <Flex flexDirection={'row'} width={'100vw'} height={'100vh'} bgColor={'gray.200'} wrap={'wrap'} >
            <Flex alignItems={'center'} width={'70%'} flexDirection={'column'} height={'100vh'} >
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >🤝 Sponsorship Requests 🤝</Text>
                    <Divider/>
                    <SponsorList/>
                </Flex>
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'start'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} alignSelf={'center'} fontSize={'xl'} fontWeight={'bold'} >📄 Wallet Details 📄</Text>
                    <Divider/>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} >Address : </Text>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} >Current Balance : </Text>
                    <Divider/>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} fontWeight={'bold'} >Recent Transactions </Text>
                    <SponsorTxList/>
                </Flex>
            </Flex>
            <Flex width={'30%'} flexDirection={'column'} height={'100vh'} >

            </Flex>
        </Flex>
     );
}
 
export default Sponsorship;