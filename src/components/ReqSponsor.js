import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Divider,
    Textarea,
  } from '@chakra-ui/react'
import { useDisclosure,Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import UseContract from '../hooks/UseContract';

const ReqSponsor =()=>{

    const[hash,setHash]=useState(null);
    const[amt,setAmt]=useState('');

    const contract = UseContract();

    const reqSponsor=async()=>{
        await contract.applySponsor(1,amt,hash);
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button variant={"solid"} colorScheme={'purple'} onClick={onOpen}>Submit Proposal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor={'white'} >
            <ModalHeader textColor={'blueviolet'} >Sponsor Request</ModalHeader>
            <Divider/>
            <ModalCloseButton />
            <ModalBody>
                <Text mt={'5px'} textColor={'purple.800'} >Document Hash</Text>
                <Input onChange={e=>setHash(e.target.value)} border={'1px'} borderColor={'purple.300'} textColor={'blackAlpha.700'} placeholder='Hackathon name' />
                <Text mt={'5px'} textColor={'purple.800'} >Amount</Text>
                <Input onChange={e=>setAmt(e.target.value)} border={'1px'} borderColor={'purple.300'} textColor={'blackAlpha.700'} placeholder='Hackathon name' />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='purple' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='purple' mr={3} onClick={reqSponsor}>
                Apply
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ReqSponsor;

