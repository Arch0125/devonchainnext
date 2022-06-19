import React from 'react';
import { useBalance } from 'wagmi';
import GetAccount from './GetAccount';

const GetBalance =() =>{
    const{data}=useBalance({
        addressOrName: `${GetAccount()}`
    })
    var bal = ((data?.formatted).toString()).slice(0,7);
    return bal;
}

export default GetBalance;