import React from 'react';
import { Flex,Button, ButtonGroup } from '@chakra-ui/react';
import UseContract from '../hooks/UseContract';
import { useSendTransaction } from 'wagmi';
import { useState } from 'react';
import { useSigner } from 'wagmi';
import { ethers } from 'ethers';

 const SponsorList = () => {

    const[reqs,setReqs]=useState([])

    const contract = UseContract();

    const getReqList=async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        setReqs([]);
        for(let i =1;i<=parselist;i++){
            var req = await contract.getSponsors(i);
           {
                setReqs((reqs)=>[...reqs,req])
            }
        }
        console.log(reqs);
    }

    const signer = useSigner();


    async function approveSponsor(amt, addr, key){
        await contract.approveSponsorship(addr,key);
        const tx={
            to: addr.toString(),
            value: ethers.utils.parseEther(amt)
        }
        await signer?.data.sendTransaction(tx);
    }

    return ( 
        <>
        <Button variant={"solid"} colorScheme={'purple'} mt={'10px'} onClick={getReqList}>Refresh List</Button>
        <Flex alignItems={'center'} mt={"10px"} justifyContent={'space-between'} flexDirection={'row'} padding={'10px'} bgColor={'gray.50'} width={'100%'} color={'purple.700'} > 
            {
                Object.keys(reqs).map((req,index)=>(
                    <>
                    <Button color={'blueviolet'} fontSize={'xl'} >{reqs[index].name}</Button>
                        <ButtonGroup>

                        <Button variant={'solid'} colorScheme={'purple'}>View Proposal</Button>
                        <Button variant={'solid'} onClick={()=>approveSponsor(reqs[index].amount,'0x6549a235E999ED06d2bD8D6F6382176Ce3c3f17D',index)} colorScheme={'purple'}>Accept Proposal of {reqs[index].amount} MATIC </Button>
                    </ButtonGroup>
                    </>
                ))
            }
        </Flex>
        </>
     );
 }
  
 export default SponsorList;