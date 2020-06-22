import React from 'react';

export default function NamePicker({ names, searchValue }){
    const filteredNames = names.filter((entry) => entry.name.toLowerCase().includes(searchValue.toLowerCase()))

    return(
        <ul>
            {filteredNames.map((entry) => (
            <li className={entry.sex} key={entry.id}>
                <button>{entry.name}</button>
            </li>
        ))}
        </ul>
    )
}
