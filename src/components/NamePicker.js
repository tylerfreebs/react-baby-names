import React from 'react';
import NameList from './NameList';
import { useNames } from '../providers/names'

export default function NamePicker({ searchValue, shortList, setShortList }){
    const names = useNames();
    
    const filteredNames = names
        .filter((entry) => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
        .filter(entry => !shortList.includes(entry.id))

    function addToShortList(id){
        setShortList([...shortList, id])
    }

    return(
        <NameList
            nameList={filteredNames}
            onItemClick={addToShortList}
        />
    )
}
