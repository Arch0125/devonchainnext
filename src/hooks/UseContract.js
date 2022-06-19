import React from 'react';
import { useSigner,useContract } from 'wagmi';
import DevOnChainABI from '../contracts/ABI/DevOnChainABI.json'

const UseContract = () => {
    const { data: signer, isError, isLoading } = useSigner()

    const contract = useContract({
        addressOrName: '0xE8f4184d9CCFaeA3b071df34639155c1e5E74426',
        contractInterface: DevOnChainABI,
        signerOrProvider: signer,
    })

    return contract;
    
}
 
export default UseContract;