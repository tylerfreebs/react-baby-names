import React, { useState } from 'react';

export default function Search(){
    const [searchValue, setSearchValue] = useState('')
    function handleChange(event){
        setSearchValue(event.target.value)
    }

    return(
        <header>
            <input 
                type='text' 
                placeholder='Type a name...' 
                value={searchValue} 
                onChange={handleChange}
            />
        </header>
        
    )
}