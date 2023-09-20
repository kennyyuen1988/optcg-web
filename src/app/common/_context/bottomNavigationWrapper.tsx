import React from 'react';
import { BottomNavigationProvider } from '@/app/common/_context';
import {BottomNavigationContainer} from '@/app/common/_containers'

const BottomNavigationWrapper = () =>{
    return (
        <BottomNavigationProvider>
            <BottomNavigationContainer/>
        </BottomNavigationProvider>
    )
}

export default BottomNavigationWrapper