import React from 'react';
import { Divider, Flex,Text,Stack,Input,InputGroup,InputLeftAddon,Textarea, Button } from '@chakra-ui/react';
const AddHack = () => {
    return ( 
        <Flex alignItems={'center'} flexDirection={"column"}  width={"100vw"} height={"100vh"} bgColor={"gray.100"} >
            <Flex flexDirection={"column"} pb={"50px"} alignItems={'center'} pt={"50px"} bgColor={'white'} mt={"50px"} width={'70vw'} height={"fit-content"} border={"2px"} borderColor={"gray.200"} borderRadius={"40px"} shadow={"xl"} >
                <Text color={'purple.600'} fontSize={"3xl"} fontWeight={"bold"} >✨ Enter Hackathon Details ✨</Text>
                <Divider colorScheme={'black'} />
                <Stack mt={"20px"} spacing={4}>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} children='Hackathon Name' />
                        <Input color={'blackAlpha.600'} placeholder='phone number' borderColor={'purple.400'} width={"300px"} />
                    </InputGroup>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} children='Location' />
                        <Input color={'blackAlpha.600'} placeholder='phone number' borderColor={'purple.400'} width={"360px"} />
                    </InputGroup>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} children='Mode' />
                        <Input color={'blackAlpha.600'} placeholder='phone number' borderColor={'purple.400'} width={"380px"} />
                    </InputGroup>
                    <InputGroup mt={'2'} >
                        <InputLeftAddon bgColor={'purple.600'} children='Prize Pool Wallet' />
                        <Input color={'blackAlpha.600'} placeholder='phone number' borderColor={'purple.400'} width={"300px"} />
                    </InputGroup>
                    <Text color={'blackAlpha.800'} >Details about Hackathon : <Textarea borderColor={'purple.400'} color={'black'}/></Text>
                    <Button bgColor={"purple.600"} color={'white'} variant={"solid"} colorScheme={"purple"} >Launch &nbsp; 🚀</Button>
                </Stack>
            </Flex>
        </Flex> 
     );
}
 
export default AddHack;