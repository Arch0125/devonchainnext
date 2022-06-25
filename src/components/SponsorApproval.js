import React from 'react';
import UseContract from '../hooks/UseContract';
import { useEffect,useState } from 'react';
import GetAccount from '../hooks/GetAccount';
import { Flex,Button,Text } from '@chakra-ui/react';
import { ButtonGroup } from '@chakra-ui/react';

const SponsorApproval =()=>{

    const[reqs,setReqs]=useState([])

    const contract = UseContract();

    const getReqList=async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        setReqs([]);
        for(let i =1;i<=parselist;i++){
            var req = await contract.getMySponsors(i);
           {
                {setReqs((reqs)=>[...reqs,req])}
            }
        }
        console.log(reqs);
    }

    return(
        <>
        <Button colorScheme={'purple'} onClick={getReqList} >Refresh List</Button>
        <Flex alignItems={'center'} mt={"10px"} justifyContent={'space-between'} flexDirection={'row'} padding={'10px'} bgColor={'gray.50'} width={'100%'} color={'purple.700'} > 
            {
                Object.keys(reqs).map((req,index)=>(
                    <>
                    <Button color={'blueviolet'} fontSize={'xl'} >{reqs[index].name}</Button>
                        <ButtonGroup>

                        <Button variant={'solid'} colorScheme={'purple'}>{reqs[index].status}</Button>
                    </ButtonGroup>
                    </>
                ))
            }
        </Flex>
        </>
    )

}

export default SponsorApproval;