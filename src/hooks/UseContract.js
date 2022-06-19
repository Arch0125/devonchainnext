import React from 'react';
import { useSigner,useContract } from 'wagmi';
import DevOnChainABI from '../contracts/ABI/DevOnChainABI.json'

const UseContract = () => {
    const { data: signer, isError, isLoading } = useSigner()

    const contract = useContract({
        addressOrName: '0x03C6d724466Ea93aC5C70392d7aCD01f69d5D6A3',
        contractInterface: DevOnChainABI,
        signerOrProvider: signer,
    })

    return contract;
    
}
 
export default UseContract;