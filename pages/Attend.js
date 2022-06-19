import React, { useState } from 'react';
import { Flex,Text,Divider,Button, Avatar } from '@chakra-ui/react';
import HackathonList from '../src/components/HackathonList';
import CertificateList from '../src/components/CertificateList';
import GetAccount from '../src/hooks/GetAccount';
import GetBalance from '../src/hooks/GetBalance';

const Attend = () => {

    return ( 
        <Flex flexDirection={'row'} width={'100vw'} height={'100vh'} bgColor={'gray.200'} wrap={'wrap'}>
            <Flex alignItems={'center'} width={'70%'} flexDirection={'column'} height={'100vh'} >
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >🤝 Upcoming Hackathons 🤝</Text>
                    <Divider/>
                    <HackathonList/>
                </Flex>
                <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'start'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} alignSelf={'center'} fontSize={'xl'} fontWeight={'bold'} >📄 Certificate and Awards 📄</Text>
                    <Divider/>
                    <CertificateList/>
                </Flex>
            </Flex>
            <Flex width={'30%'} flexDirection={'column'} height={'100vh'} >
            <Flex flexDirection={'column'} padding={'20px'} mt={'30px'} justifyContent={'center'} alignItems={'center'} width={'80%'} borderColor={'gray.200'} borderWidth={'2px'} rounded={'2xl'} shadow={'xl'} height={'fit-content'} bgColor={'white'} >
                    <Text color={'purple.700'} fontSize={'xl'} fontWeight={'bold'} >My Profile</Text>
                    <Divider/>
                    <Avatar mt={'20px'} />
                    <Text textAlign={'center'} mt={'10px'} color={'blackAlpha.800'}>Address : {GetAccount()}</Text>
                    <Text mt={'10px'} color={'blackAlpha.800'} >Balance : {GetBalance()}</Text>
                </Flex>
            </Flex>
        </Flex>
     );
}
 
export default Attend;