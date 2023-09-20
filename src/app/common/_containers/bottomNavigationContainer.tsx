import React,{useContext, useCallback} from 'react'
import {HomeBottomNavigation} from '@/app/common/_components'
import {BottomNavigationContext} from '@/app/common/_context'

const BottomNavigationContainer = ()=>{
    const {setBottomNavigationValue} = useContext(BottomNavigationContext)
    const handleChangeTab = useCallback((newValue:number)=>{
        setBottomNavigationValue(newValue);
    },[])
    return <HomeBottomNavigation handleChangeTab={handleChangeTab}/>
}

export default BottomNavigationContainer