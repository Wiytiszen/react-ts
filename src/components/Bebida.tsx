import * as React from 'react'
import { ModalContext } from '../context/ModalContext'

interface Ibebida {
  img: string,
  name: string,
  idBebida: string
}

export const Bebida = ({img,idBebida, name}:Ibebida) => {

  const {setIdReceta} = React.useContext(ModalContext)
  return(
      <ul>
        <li><img src={img} alt={name}/></li>
        <li>{name}</li>
        <button onClick={()=>setIdReceta(idBebida)}>Ver Receta</button>
      </ul>
  )
}