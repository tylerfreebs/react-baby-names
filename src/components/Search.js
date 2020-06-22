import React, { useEffect, useRef } from 'react';

export default function Search({searchValue, setSearchValue}){
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    function handleChange(event){
        setSearchValue(event.target.value)
    }

    return(
        <header>
            <input
                ref={inputRef}
                type='text' 
                placeholder='Type a name...' 
                value={searchValue} 
                onChange={handleChange}
            />
        </header>
        
    )
}