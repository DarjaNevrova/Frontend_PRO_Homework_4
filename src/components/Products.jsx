import React from 'react'

export default function Products({id, name, price}){
    return(
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

// Не знаю, надо ли было убирать id, вывела с ним :)