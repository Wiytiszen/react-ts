import React, { useContext } from 'react'
import { RecetasContext } from '../context/RecetasContex'
import {Bebida} from './Bebida'

export const ListadoTragos = () => {

  const {recetas} = useContext(RecetasContext)
  return (
    <div>
      {recetas?.map(r => <Bebida key={r.strDrink} idBebida={r.idDrink} img={r.strDrinkThumb} name={r.strDrink}/>
      )}
      
    </div>
  )
}
