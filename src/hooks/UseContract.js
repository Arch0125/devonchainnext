import React from 'react';
import { useSigner,useContract } from 'wagmi';
import DevOnChainABI from '../contracts/ABI/DevOnChainABI.json'

const UseContract = () => {
    const { data: signer, isError, isLoading } = useSigner()

    const contract = useContract({
        addressOrName: '0xF7B10D9e06eA54871cD07c723148d85f2C206658',
        contractInterface: DevOnChainABI,
        signerOrProvider: signer,
    })

    return contract;
    
}
 
export default UseContract;