import React from 'react'


type BebidaProps  = {
  src?: string,
  name: string,
  ingredients: string[]
}

export const Bebida = ({src,ingredients,name}:BebidaProps) => {
  return(
      <ul>
        <li><img src={src} alt={name}/></li>
        <li>{name}</li>
        <li>{ingredients}</li>
      </ul>
  )
}