import { createContext, useState } from 'react';

export const BottomNavigationContext = createContext({ 
    bottomNavigationValue: 0, 
    setBottomNavigationValue: (value: number) => {}, 
});

const BottomNavigationProvider = ({children}: {children: React.ReactNode})=>{
    const[bottomNavigationValue, setBottomNavigationValue] = useState(0)

    return(
        <BottomNavigationContext.Provider value={{
            bottomNavigationValue,
            setBottomNavigationValue,
        }}>
            {children}
        </BottomNavigationContext.Provider>
    )
}

export default BottomNavigationProvider