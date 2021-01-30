import axios from 'axios'
import * as React from 'react'


export const ModalContext = React.createContext(null)

export const ModalProvider: React.FunctionComponent = ({children}) =>{
  
  const [idReceta, setIdReceta ] =React.useState<string|null>(null)
  const [mostrarModal, setMostrarModal ] =React.useState<boolean>(false)
  const [fullReceta, setFullReceta ] =React.useState<any[]>([])

  React.useEffect(()=>{
    if(idReceta){
      const url =  `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
      const getFullDetail = async()=>{
        const getFullDetail = await axios.get(url)
        console.log(getFullDetail)
        setMostrarModal(true);
      }
      getFullDetail()
    }
  },[idReceta])
  return(
    <ModalContext.Provider value={{fullReceta,setFullReceta,setIdReceta}}>
      {children}
    </ModalContext.Provider>
  )
}