import { Button, Divider, Flex ,Text} from '@chakra-ui/react';
import React from 'react';
import HackerList from '../src/components/HackerList';

const HackathonDetail = () => {
    return ( 
        <Flex flexDirection={'row'} width={'100vw'} height={'100vh'} bgColor={'gray.200'} wrap={'wrap'} >
            <Flex alignItems={'center'} width={'70%'} flexDirection={'column'} height={'100vh'} >
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >🤝 Available Sponsors 🤝</Text>
                    <Divider/>
                    <Flex alignItems={'center'} mt={"10px"} justifyContent={'space-between'} flexDirection={'row'} padding={'10px'} bgColor={'gray.50'} width={'100%'} color={'purple.700'} > 
                    <Button color={'blueviolet'} fontSize={'xl'} ><img src='https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022' width={'20px'} /> &nbsp; Polygon</Button>
                    <Button variant={'solid'} colorScheme={'purple'} >Submit Proposal</Button>
                    </Flex>
                </Flex>
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'start'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} alignSelf={'center'} fontSize={'xl'} fontWeight={'bold'} >📄 Wallet Details 📄</Text>
                    <Divider/>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} >Prize Pool Wallet : </Text>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} >Current Balance : </Text>
                    <Divider/>
                    <Text color={'blackAlpha.700'} mt={'2'} fontSize={'18px'} fontWeight={'bold'} >Recent Transactions </Text>
                </Flex>
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'start'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} alignSelf={'center'} fontSize={'xl'} fontWeight={'bold'} >👩‍💻 Hackers List 👨‍💻</Text>
                    <Divider/>
                    <HackerList/>
                </Flex>
            </Flex>
            <Flex width={'30%'} flexDirection={'column'} height={'100vh'} >

            </Flex>
        </Flex>
     );
}
 
export default HackathonDetail;