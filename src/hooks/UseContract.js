import React from 'react';
import { useSigner,useContract } from 'wagmi';
import DevOnChainABI from '../contracts/ABI/DevOnChainABI.json'

const UseContract = () => {
    const { data: signer, isError, isLoading } = useSigner()

    const contract = useContract({
        addressOrName: '0x709ce16F1B07E1db826bD01574642Ad0DCa549ec',
        contractInterface: DevOnChainABI,
        signerOrProvider: signer,
    })

    return contract;
    
}
 
export default UseContract;