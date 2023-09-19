import {createContext,useState} from 'react'
import React from'react'

export const CounterContext = createContext();

//criando o provider

export const CounterContextProvider = ({children}) =>{
    const [counter,setCounter] = useState(10)

    return(
        <CounterContext.Provider value={{counter,setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}