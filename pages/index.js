import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Flex flexDirection={"column"} alignItems={"center"} textAlign={"center"} bgColor={"white"} width={'100vw'} height={'100vh'} > 
    <img src="https://svgshare.com/i/iRv.svg" width={"80%"} alt="Purple-Modern-Cryptocurrency-Banner"/>
    <ButtonGroup spacing={"14"} >
    <Button colorScheme={"purple"} width={"fit-content"} color={"white"} bgColor={"purple.600"} >
        Attend Hackathon
    </Button>
    <Button variant={"solid"} colorScheme={"purple"} width={'fit-content'} bgColor={"purple.600"} color={"white"} >
      Organize Hackathon
    </Button>
    </ButtonGroup>
    </Flex>
  )
}
