import React from 'react';
import { useSigner,useContract } from 'wagmi';
import DevOnChainABI from '../contracts/ABI/DevOnChainABI.json'

const UseContract = () => {
    const { data: signer, isError, isLoading } = useSigner()

    const contract = useContract({
        addressOrName: '0xf8f296eD12D46B0aD0d3FeB46cCFb606426327C6',
        contractInterface: DevOnChainABI,
        signerOrProvider: signer,
    })

    return contract;
    
}
 
export default UseContract;