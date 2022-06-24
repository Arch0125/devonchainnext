import React, { useEffect, useState } from 'react';
import { Flex,Button, ButtonGroup } from '@chakra-ui/react';
import UseContract from '../hooks/UseContract';
 const HackathonList = () => {

    const contract = UseContract();
    const[hacks,setHacks]=useState([]);
    const[ind,setIndex]=useState('');

    useEffect(()=>{
        getList();
    },[])

    const getList=async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        setHacks([]);
        for(let i =1;i<=parselist;i++){
            var hack = await contract.getHackList(i);
           {
                setHacks((hacks)=>[...hacks,hack])
            }
        }
    }

    const apply=async()=>{
        await contract.applyHackathon('0xD4Ab9d0cf7242B7E14df24B1b0F6C10eCc05fF72',1)
    }

    return (
        <>
        <Button onClick={getList} colorScheme={'blackAlpha'} mt={'10px'} >Refresh</Button> 
        <Flex alignItems={'center'} mt={"10px"} justifyContent={'space-between'} flexDirection={'row'} padding={'10px'} bgColor={'gray.50'} width={'100%'} color={'purple.700'} > 
            
            {
                Object.keys(hacks).map((hack,index)=>(
                    <>
                    <Button color={'blueviolet'} fontSize={'xl'} >{hacks[index].name}</Button>
                        <ButtonGroup>
                        <Button onClickCapture={apply} variant={'solid'} colorScheme={'purple'} >Participate 🚀</Button>
                    </ButtonGroup>
                    </>
                ))
            }
            
        </Flex>
        </>
     );
 }
  
 export default HackathonList;