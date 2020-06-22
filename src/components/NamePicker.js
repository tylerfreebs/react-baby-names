import React from 'react';

export default function NamePicker({ names }){
    return(
        <ul>
            {names.map((entry) => (
            <li className={entry.sex} key={entry.id}>
                <button>{entry.name}</button>
            </li>
        ))}
        </ul>
    )
}
