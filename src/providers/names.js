import React, { createContext, useContext } from 'react'
import { names } from '../data'

const NamesContext = createContext()

export function NamesProvider({children}) {
    return <NamesContext.Provider value={names}>{children}</NamesContext.Provider>
}

export function useNames(){
    const context = useContext(NamesContext)
    return context
}