import axios from 'axios'
import React, { useEffect, useState } from 'react'

type BusquedaT ={
  ingrediente: string,
  categoria: string
}
interface RecetasContexI {
  buscarReceta: BusquedaT,
  setBuscarReceta: (value: any) => void
  recetas?: any[]
  setConsultar: (value :any) =>void
}

export const RecetasContext = React.createContext({} as RecetasContexI)

export const RecetasProvider: React.FC = ({children}) => {
  const [buscarReceta, setBuscarReceta] = useState<BusquedaT>({ingrediente: '',categoria: ''})
  const [recetas, setRecetas] = useState<any>([])
  const [consultar, setConsultar] = useState<boolean>(false)

  const {ingrediente,categoria} = buscarReceta
  
  useEffect(() => {
    if(consultar){

      const getRecetas = async ()=>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&?c=${categoria}`
        const listaRecetas  = await axios.get(url)
        setRecetas(listaRecetas.data.drinks)
      }
      getRecetas()

    }
 
  }, [ingrediente,categoria,consultar])

  return (
    <RecetasContext.Provider value ={{buscarReceta, setBuscarReceta,recetas, setConsultar}}>
      {children}
    </RecetasContext.Provider>
  )
}

